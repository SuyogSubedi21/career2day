
import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';
import { logActivity } from '@/hooks/useUserActivityTracking.js';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(pb.authStore.isValid ? pb.authStore.model : null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (pb.authStore.isValid) {
        try {
          await pb.collection('users').authRefresh({ $autoCancel: false });
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
    console.log(`[AuthContext] Attempting login for user: ${email}`);
    try {
      const authData = await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
      console.log('[AuthContext] Login successful for ID:', authData.record.id);
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

  const loginWithGoogle = () => {
    return pb.collection('users').authWithOAuth2({ provider: 'google' })
      .then(async (authData) => {
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
        toast.error('Failed to log in with Google');
        throw error;
      });
  };

  const register = async (email, password, confirmPassword, name) => {
    console.log(`[AuthContext] Registering new user: ${email}`);
    
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
      
      console.log(`[AuthContext] User created successfully. Welcome email triggered via backend hook.`);
      pb.authStore.clear();

      return { success: true, user };
    } catch (error) {
      console.error('[AuthContext] Signup error:', error);
      
      let errorMessage = 'Failed to create account. Please try again.';

      if (error.status === 400 && error.data?.data?.email) {
        errorMessage = 'This email is already registered';
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
    console.log(`[AuthContext] Logging out user`);
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
