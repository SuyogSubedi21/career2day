
import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext({
  isAdminLoggedIn: false,
  adminEmail: null,
  isLoading: false,
  login: async () => {},
  logout: () => {}
});

// Only this email + password can access the admin panel
const ADMIN_EMAIL = 'suyogsubedivlogs@gmail.com';
const ADMIN_PASSWORD = 'Admin1234!';

export const useAdminAuth = () => useContext(AdminAuthContext);

export const AdminAuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem('admin_session');
    setIsAdminLoggedIn(false);
    setAdminEmail(null);
  };

  useEffect(() => {
    try {
      const sessionStr = localStorage.getItem('admin_session');
      if (sessionStr) {
        const session = JSON.parse(sessionStr);
        if (session.expiresAt && new Date(session.expiresAt) > new Date()) {
          setIsAdminLoggedIn(true);
          setAdminEmail(session.email);
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
    if (email.toLowerCase().trim() !== ADMIN_EMAIL) {
      throw new Error('Access denied: unauthorized email address.');
    }
    if (password !== ADMIN_PASSWORD) {
      throw new Error('Invalid password. Please try again.');
    }

    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    localStorage.setItem('admin_session', JSON.stringify({ email: ADMIN_EMAIL, expiresAt }));
    setIsAdminLoggedIn(true);
    setAdminEmail(ADMIN_EMAIL);
    return true;
  };

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, adminEmail, isLoading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

