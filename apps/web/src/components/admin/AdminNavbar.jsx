
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShieldAlert, Users, BarChart3, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';

export default function AdminNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { adminEmail, logout, isAdminLoggedIn } = useAdminAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only render when admin is logged in
  if (!isAdminLoggedIn) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navLinks = [
    { name: 'User Management', path: '/admin/users', icon: Users },
    { name: 'Stats', path: '/admin/stats', icon: BarChart3 },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-md border-b border-slate-800' : 'bg-slate-950 border-b border-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center text-primary">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100 hidden sm:block">Admin Portal</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 mx-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors px-4 py-2 rounded-md flex items-center gap-2 ${
                isActive(link.path) 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              }`}
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-medium text-slate-300">{adminEmail || 'Admin'}</span>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            size="sm" 
            className="border-slate-800 bg-slate-950 text-slate-300 hover:text-destructive hover:bg-destructive/10 hover:border-destructive/30"
          >
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-slate-950 border-l border-slate-800 p-0 flex flex-col">
            <SheetTitle className="sr-only">Admin Navigation</SheetTitle>
            
            <div className="p-6 border-b border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center text-primary">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-100 tracking-tight">Admin Portal</h2>
                <p className="text-xs text-slate-500 truncate max-w-[180px]">{adminEmail || 'Admin'}</p>
              </div>
            </div>
            
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    isActive(link.path) 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-slate-800 mt-auto">
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLogout();
                }} 
                variant="destructive" 
                className="w-full font-bold shadow-sm"
              >
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}
