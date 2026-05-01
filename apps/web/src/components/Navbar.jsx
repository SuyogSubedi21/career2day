
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, Sun, Moon, Settings, LayoutDashboard, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useTheme } from '@/contexts/ThemeContext.jsx';
import { useCurrency } from '@/contexts/CurrencyContext.jsx';
import pb from '@/lib/pocketbaseClient.js';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { currency, setCurrency, availableCurrencies, getCurrencySymbol } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Careers', path: '/careers' },
    { name: 'Interview Questions', path: '/interview-questions' },
    { name: 'CV Builder', path: '/cv-builder' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const avatarUrl = currentUser?.avatar 
    ? pb.files.getUrl(currentUser, currentUser.avatar) 
    : null;

  const CurrencySelector = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="font-medium gap-1.5 px-2">
          <Globe className="w-4 h-4 text-muted-foreground hidden sm:block" />
          <span>{getCurrencySymbol()} {currency}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {availableCurrencies.map(c => (
          <DropdownMenuItem 
            key={c} 
            onClick={() => setCurrency(c)} 
            className={`cursor-pointer ${currency === c ? 'bg-primary/10 text-primary font-bold' : ''}`}
          >
            {c}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-background border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary">
              Career2Day
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'border-primary text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <CurrencySelector />

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="mr-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarImage src={avatarUrl} alt={currentUser.name || 'User'} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {getInitials(currentUser.name || currentUser.email)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {currentUser.name && <p className="font-medium">{currentUser.name}</p>}
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {currentUser.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer flex items-center">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="cursor-pointer flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer text-destructive focus:text-destructive flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2 pl-2">
                <Button asChild variant="ghost">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center md:hidden gap-1">
            <CurrencySelector />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-lg">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-primary/10 border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:bg-muted hover:border-border hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-6 border-t border-border px-4">
            {currentUser ? (
              <div className="space-y-3">
                <div className="flex items-center px-3 gap-3">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={avatarUrl} alt={currentUser.name || 'User'} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {getInitials(currentUser.name || currentUser.email)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-base font-medium text-foreground">{currentUser.name || currentUser.email}</div>
                </div>
                <div className="space-y-1">
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-2"
                  >
                    <LayoutDashboard className="h-4 w-4" /> Dashboard
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-2"
                  >
                    <Settings className="h-4 w-4" /> Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-destructive hover:bg-destructive/10 flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-primary bg-primary/10 hover:bg-primary/20"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
