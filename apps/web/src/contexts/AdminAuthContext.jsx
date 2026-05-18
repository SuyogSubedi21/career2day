
import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

const AdminAuthContext = createContext({
  isAdminLoggedIn: false,
  adminEmail: null,
  isLoading: false,
  login: async () => {},
  logout: () => {}
});

const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL || 'admin@career2day.com').toLowerCase();
const ADMIN_AUTH_COLLECTIONS = ['admin_users', 'admins', 'users'];

const isAllowedAdmin = (record) => {
  if (!record) return false;
  const email = String(record.email || '').toLowerCase();
  return (
    email === ADMIN_EMAIL ||
    record.role === 'admin' ||
    record.isAdmin === true ||
    record.admin === true
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);

export const AdminAuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem('admin_session');
    if (pb.authStore.isValid) {
      pb.authStore.clear();
    }
    setIsAdminLoggedIn(false);
    setAdminEmail(null);
  };

  useEffect(() => {
    try {
      const sessionStr = localStorage.getItem('admin_session');
      if (sessionStr) {
        const session = JSON.parse(sessionStr);
        if (session.expiresAt && new Date(session.expiresAt) > new Date()) {
          if (pb.authStore.isValid && isAllowedAdmin(pb.authStore.model)) {
            setIsAdminLoggedIn(true);
            setAdminEmail(session.email);
          } else {
            localStorage.removeItem('admin_session');
          }
        } else {
          localStorage.removeItem('admin_session');
        }
      }
    } catch (e) {
      localStorage.removeItem('admin_session');
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    const cleanEmail = email.toLowerCase().trim();

    if (!cleanEmail || !password) {
      throw new Error('Enter the admin email and password.');
    }

    let authData = null;
    let lastError = null;

    for (const collectionName of ADMIN_AUTH_COLLECTIONS) {
      try {
        authData = await pb.collection(collectionName).authWithPassword(cleanEmail, password, { $autoCancel: false });
        break;
      } catch (error) {
        lastError = error;
      }
    }

    if (!authData) {
      throw lastError || new Error('Failed to authenticate.');
    }

    const user = authData.record;

    if (!isAllowedAdmin(user)) {
      pb.authStore.clear();
      throw new Error('Access denied. This user is not allowed to open the admin dashboard.');
    }

    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    localStorage.setItem('admin_session', JSON.stringify({ email: user.email, expiresAt }));
    setIsAdminLoggedIn(true);
    setAdminEmail(user.email);
    return true;
  };

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, adminEmail, isLoading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
