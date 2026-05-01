
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  LogOut, 
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminLayout() {
  const { logout, adminEmail } = useAdminAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Users', path: '/admin/users', icon: Users },
    { name: 'Subscriptions', path: '/admin/subscriptions', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar Navigation (Desktop) */}
      <aside className="w-full md:w-64 bg-card border-r border-border flex-col hidden md:flex sticky top-0 h-screen">
        <div className="p-6 border-b border-border">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-foreground block leading-none">Admin Panel</span>
              <span className="text-xs text-muted-foreground">CareerMastery</span>
            </div>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/admin' && location.pathname === '/admin/');
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border mt-auto bg-muted/30">
          <div className="px-3 py-2 mb-3 text-sm font-medium text-foreground truncate bg-background rounded-md border border-border">
            {adminEmail || 'admin@careermastery.com'}
          </div>
          <Button variant="destructive" className="w-full justify-start" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Mobile Navigation Header */}
      <header className="md:hidden bg-card border-b border-border p-4 flex items-center justify-between sticky top-0 z-30">
        <Link to="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">Admin Panel</span>
        </Link>
        <Button variant="ghost" size="icon" className="text-destructive" onClick={logout}>
          <LogOut className="w-5 h-5" />
        </Button>
      </header>

      {/* Mobile Nav Links (Horizontal Scroll) */}
      <nav className="md:hidden flex overflow-x-auto bg-card border-b border-border p-3 gap-2 sticky top-[73px] z-20 scrollbar-hide">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/admin' && location.pathname === '/admin/');
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                isActive 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden p-4 md:p-8 bg-muted/10">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
