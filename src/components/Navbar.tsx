import React from 'react';
import { Search, ChevronDown, Menu, X, Moon, Sun, LayoutDashboard } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onLogin: () => void;
}

export default function Navbar({ onLogin }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Career<span className="text-primary">Pulse</span>
              </span>
            </div>
            
            <div className="hidden lg:flex items-center gap-6">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">Browse Opportunities</a>
              <a href="#" className="nav-link">Trending</a>
              <a href="#" className="nav-link">About</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-primary transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />
            
            <button 
              onClick={onLogin}
              className="text-slate-600 dark:text-slate-400 font-semibold px-4 py-2 hover:text-primary transition-colors"
            >
              Login
            </button>
            <button 
              onClick={onLogin}
              className="btn-primary"
            >
              Signup
            </button>
            
            <button className="p-2 text-slate-500 hover:text-primary transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-2">
              <LayoutDashboard size={20} />
              <span className="text-sm font-medium">Admin</span>
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-slate-500">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300", isOpen ? "max-h-[500px]" : "max-h-0")}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          <a href="#" className="block px-3 py-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900">Home</a>
          <a href="#" className="block px-3 py-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900">Browse Opportunities</a>
          <a href="#" className="block px-3 py-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900">Trending</a>
          <a href="#" className="block px-3 py-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900">About</a>
          <div className="pt-4 flex flex-col gap-3">
            <button 
              onClick={onLogin}
              className="w-full text-center py-3 font-semibold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-lg"
            >
              Login
            </button>
            <button 
              onClick={onLogin}
              className="w-full btn-primary py-3"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
