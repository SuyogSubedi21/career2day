
import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Loader2 } from 'lucide-react';

// Contexts
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import { AdminAuthProvider, useAdminAuth } from '@/contexts/AdminAuthContext.jsx';
import { ThemeProvider } from '@/contexts/ThemeContext.jsx';
import { CurrencyProvider } from '@/contexts/CurrencyContext.jsx';

// Layouts & Guards
import ProtectedRoute from '@/components/ProtectedRoute.jsx';
import ProtectedFeatureRoute from '@/components/ProtectedFeatureRoute.jsx';
import AdminProtectedRoute from '@/components/admin/AdminProtectedRoute.jsx';
import AdminLayout from '@/components/admin/AdminLayout.jsx';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import GlobalTracker from '@/components/GlobalTracker.jsx';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';

// Pages
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import BlogPage from '@/pages/BlogPage.jsx';
import BlogArticlePage from '@/pages/BlogArticlePage.jsx';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from '@/pages/TermsOfServicePage.jsx';
import RefundPolicyPage from '@/pages/RefundPolicyPage.jsx';
import PricingPageRedesign from '@/pages/PricingPageRedesign.jsx';

// Career Pages
import CareersListingPage from '@/pages/CareersListingPage.jsx';
import CareerDetailPage from '@/pages/CareerDetailPage.jsx';

// Interview Questions
import InterviewQuestionsListPage from '@/pages/InterviewQuestionsListPage.jsx';
import InterviewQuestionsPage from '@/pages/InterviewQuestionsPage.jsx';

// Quiz Pages
import QuizSelectionPage from '@/pages/QuizSelectionPage.jsx';
import QuizDifficultyPage from '@/pages/QuizDifficultyPage.jsx';
import QuizPage from '@/pages/QuizPage.jsx';
import QuizResultsPage from '@/pages/QuizResultsPage.jsx';

import LoginPage from '@/pages/auth/LoginPage.jsx';
import SignupPage from '@/pages/auth/SignupPage.jsx';
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage.jsx';
import ResetPasswordPage from '@/pages/auth/ResetPasswordPage.jsx';

// Admin Pages
import AdminLoginPage from '@/pages/admin/AdminLoginPage.jsx';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage.jsx';
import AdminUserManagementPage from '@/pages/admin/AdminUserManagementPage.jsx';

// Features & Account
import DashboardPage from '@/pages/DashboardPage.jsx';
import PracticePage from '@/pages/PracticePage.jsx';
import SettingsPage from '@/pages/SettingsPage.jsx';
import CheckoutPage from '@/pages/CheckoutPage.jsx';
import DownloadSuccessPage from '@/pages/DownloadSuccessPage.jsx';
import MyCVsPage from '@/pages/MyCVsPage.jsx';

// Lazy Load CV Builder pages to optimize initial bundle
const CVTemplateSelectionPage = React.lazy(() => import('@/pages/CVTemplateSelectionPage.jsx'));
const CVBuilderPage = React.lazy(() => import('@/pages/CVBuilderPage.jsx'));

import { seedBlogArticles } from '@/lib/BlogArticlesSeeding.js';
import { seedCareerDataFromGitHub } from '@/lib/seedCareerDataFromGitHub.js';

const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-[100dvh] bg-background text-foreground transition-colors duration-300">
    <Navbar />
    <main className="flex-grow flex flex-col">
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </main>
    <Footer />
  </div>
);

const FallbackLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

const AppInitializer = () => {
  const { isAdminLoggedIn } = useAdminAuth();
  
  useEffect(() => {
    if (isAdminLoggedIn) seedBlogArticles();
  }, [isAdminLoggedIn]);

  // Career data is seeded via PocketBase migrations — do not auto-seed from frontend
  // useEffect(() => {
  //   seedCareerDataFromGitHub().catch(e => console.error("Career seeding error:", e));
  // }, []);

  return null;
};

export default function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <BrowserRouter>
          <GlobalTracker />
          <AuthProvider>
            <AdminAuthProvider>
              <AppInitializer />
              <Toaster position="top-center" richColors closeButton duration={3000} theme="system" />
              
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin-login" element={<Navigate to="/admin/login" replace />} />
                <Route path="/admin-dashboard" element={<Navigate to="/admin" replace />} />
                
                <Route element={<AdminProtectedRoute />}>
                  <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<AdminDashboardPage />} />
                    <Route path="/admin/users" element={<AdminUserManagementPage />} />
                    <Route path="/admin/subscriptions" element={<div className="p-8 text-center text-muted-foreground bg-card rounded-2xl border border-border m-4">Subscriptions Management Placeholder</div>} />
                    <Route path="/admin/data" element={<div className="p-8 text-center text-muted-foreground bg-card rounded-2xl border border-border m-4">Data Management Placeholder</div>} />
                  </Route>
                </Route>

                {/* Public Auth Routes */}
                <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
                <Route path="/signup" element={<MainLayout><SignupPage /></MainLayout>} />
                <Route path="/forgot-password" element={<MainLayout><ForgotPasswordPage /></MainLayout>} />
                <Route path="/reset-password" element={<MainLayout><ResetPasswordPage /></MainLayout>} />

                {/* Public Routes */}
                <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
                <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
                <Route path="/pricing" element={<MainLayout><PricingPageRedesign /></MainLayout>} />
                <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
                <Route path="/blog/:slug" element={<MainLayout><BlogArticlePage /></MainLayout>} />
                <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicyPage /></MainLayout>} />
                <Route path="/terms-of-service" element={<MainLayout><TermsOfServicePage /></MainLayout>} />
                <Route path="/refund-policy" element={<MainLayout><RefundPolicyPage /></MainLayout>} />
                
                {/* Careers Routes */}
                <Route path="/careers" element={<MainLayout><CareersListingPage /></MainLayout>} />
                <Route path="/careers/:careerSlug" element={<MainLayout><CareerDetailPage /></MainLayout>} />
                
                {/* Interview Questions Routes (Public) */}
                <Route path="/interview-questions" element={<MainLayout><InterviewQuestionsListPage /></MainLayout>} />
                <Route path="/interview-questions/:careerSlug" element={<MainLayout><InterviewQuestionsPage /></MainLayout>} />
                
                {/* Quiz Routes (Public) */}
                <Route path="/quiz" element={<MainLayout><QuizSelectionPage /></MainLayout>} />
                <Route path="/quiz/:careerSlug/difficulty" element={<MainLayout><QuizDifficultyPage /></MainLayout>} />
                <Route path="/quiz/:careerSlug/:difficulty" element={<MainLayout><QuizPage /></MainLayout>} />
                <Route path="/quiz/:careerSlug/:difficulty/results" element={<MainLayout><QuizResultsPage /></MainLayout>} />

                {/* CV Template Gallery is public */}
                <Route path="/cv-templates" element={
                  <MainLayout>
                    <ErrorBoundary>
                      <Suspense fallback={<FallbackLoader />}>
                        <CVTemplateSelectionPage />
                      </Suspense>
                    </ErrorBoundary>
                  </MainLayout>
                } />
                
                {/* Feature routes requiring authentication */}
                <Route element={<ProtectedFeatureRoute />}>
                  <Route path="/dashboard" element={<MainLayout><DashboardPage /></MainLayout>} />
                  <Route path="/my-cvs" element={<MainLayout><MyCVsPage /></MainLayout>} />
                  <Route path="/practice" element={<MainLayout><PracticePage /></MainLayout>} />
                  
                  {/* CV Builder uses full screen layout */}
                  <Route path="/cv-builder" element={
                    <ErrorBoundary>
                      <Suspense fallback={<FallbackLoader />}>
                        <CVBuilderPage />
                      </Suspense>
                    </ErrorBoundary>
                  } />

                  {/* Checkout */}
                  <Route path="/checkout" element={<MainLayout><CheckoutPage /></MainLayout>} />
                </Route>

                {/* Strictly Protected Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/settings" element={<MainLayout><SettingsPage /></MainLayout>} />
                  <Route path="/download-success" element={<MainLayout><DownloadSuccessPage /></MainLayout>} />
                </Route>

                {/* Catch-all */}
                <Route path="*" element={
                  <MainLayout>
                    <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-24">
                      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground">404 - Page Not Found</h1>
                      <p className="text-muted-foreground text-lg mb-8 max-w-md">The link you followed might be broken, or the page may have been removed.</p>
                      <a href="/" className="text-primary hover:underline font-bold transition-all">Return Home</a>
                    </div>
                  </MainLayout>
                } />
              </Routes>
            </AdminAuthProvider>
          </AuthProvider>
        </BrowserRouter>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
