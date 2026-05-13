
import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';
import { logActivity } from '@/hooks/useUserActivityTracking.js';

const AuthContext = createContext();
const AUTH_REFRESH_STORAGE_KEY = 'career2day_last_auth_refresh';
const AUTH_REFRESH_INTERVAL_MS = 6 * 60 * 60 * 1000;
const AUTH_REFRESH_EXPIRY_WINDOW_SECONDS = 24 * 60 * 60;

export const useAuth = () => useContext(AuthContext);

const getTokenExpiry = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return Number(payload.exp || 0);
  } catch {
    return 0;
  }
};

const shouldRefreshAuth = () => {
  const tokenExpiry = getTokenExpiry(pb.authStore.token || '');
  const secondsUntilExpiry = tokenExpiry - Math.floor(Date.now() / 1000);
  const lastRefresh = Number(localStorage.getItem(AUTH_REFRESH_STORAGE_KEY) || 0);

  return secondsUntilExpiry < AUTH_REFRESH_EXPIRY_WINDOW_SECONDS && Date.now() - lastRefresh > AUTH_REFRESH_INTERVAL_MS;
};

const ACCOUNT_EXISTS_ERROR = 'ACCOUNT_EXISTS';

const isFreshOAuthRecord = (record) => {
  const createdAt = Date.parse(record?.created || '');
  if (!Number.isFinite(createdAt)) return false;
  return Date.now() - createdAt < 2 * 60 * 1000;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(pb.authStore.isValid ? pb.authStore.model : null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (pb.authStore.isValid) {
        try {
          if (shouldRefreshAuth()) {
            await pb.collection('users').authRefresh({ $autoCancel: false });
            localStorage.setItem(AUTH_REFRESH_STORAGE_KEY, String(Date.now()));
          }
          setCurrentUser(pb.authStore.model);
        } catch (error) {
          console.error('Session expired or invalid:', error);
          pb.authStore.clear();
          setCurrentUser(null);
        }
      }
      setIsLoading(false);
    };

    initAuth();

    const unsubscribe = pb.authStore.onChange((token, model) => {
      setCurrentUser(pb.authStore.isValid ? model : null);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
      // Removed success toast/notification per Task 1 request
      
      try {
        await logActivity('login', '/login', 'email_auth');
      } catch (trackingError) {
        console.warn('[AuthContext] Activity tracking failed (non-critical):', trackingError);
      }
      
      return authData;
    } catch (error) {
      console.error('[AuthContext] Login error details:', {
        status: error.status,
        message: error.message,
        data: error.data
      });
      throw error;
    }
  };

  const loginWithGoogle = ({ mode = 'login' } = {}) => {
    return pb.collection('users').authWithOAuth2({
      provider: 'google',
      createData: {
        plan: 'free',
        status: 'active',
        emailVisibility: true,
      },
    })
      .then(async (authData) => {
        const isExistingAccount = mode === 'signup'
          && authData?.meta?.isNew !== true
          && !isFreshOAuthRecord(authData?.record);

        if (isExistingAccount) {
          pb.authStore.clear();
          setCurrentUser(null);
          const accountExistsError = new Error('Account already exists. Please log in instead.');
          accountExistsError.code = ACCOUNT_EXISTS_ERROR;
          throw accountExistsError;
        }

        // Removed success toast per Task 1 request
        try {
          await logActivity('login', '/login', 'google_oauth');
        } catch (e) {
          console.warn('[AuthContext] Activity tracking failed (non-critical):', e);
        }
        return authData;
      })
      .catch((error) => {
        console.error('Google login error:', error);
        if (error.code === ACCOUNT_EXISTS_ERROR) {
          toast.error('Account already exists. Please log in instead.');
        } else {
          toast.error('Failed to log in with Google');
        }
        throw error;
      });
  };

  const register = async (email, password, confirmPassword, name) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return { success: false, error: 'Invalid email format.' };
    }
    
    if (password !== confirmPassword) {
      return { success: false, error: 'Passwords do not match.' };
    }
    if (!password || password.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters.' };
    }

    try {
      const user = await pb.collection('users').create({
        email,
        password,
        passwordConfirm: confirmPassword,
        name,
        plan: 'free',
        status: 'active',
        emailVisibility: true
      }, { $autoCancel: false });
      
      pb.authStore.clear();

      return { success: true, user };
    } catch (error) {
      console.error('[AuthContext] Signup error:', error);
      
      let errorMessage = 'Failed to create account. Please try again.';

      if (error.status === 400 && error.data?.data?.email) {
        errorMessage = 'An account already exists for this email. Please log in instead.';
      } else if (error.status === 400 && error.data?.data?.password) {
        errorMessage = 'Password must be at least 8 characters';
      } else if (error.status === 0 || error.isAbort || !navigator.onLine) {
        errorMessage = 'Connection failed. Please check your internet and try again';
      } else if (error.data?.message) {
        errorMessage = error.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      if (pb.authStore.isValid) {
        await logActivity('logout', window.location.pathname, 'user_logout');
      }
    } catch (e) {
      console.warn('[AuthContext] Activity tracking failed on logout:', e);
    }
    
    pb.authStore.clear();
    setCurrentUser(null);
    toast.success('Logged out successfully'); // Keeping logout toast as standard practice, request specified removing login notification
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    isLoading,
    login,
    loginWithGoogle,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
