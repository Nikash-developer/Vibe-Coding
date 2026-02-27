import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Brain, Briefcase, GraduationCap, ShieldCheck, Lock, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface LoginPageProps {
  onLogin: () => void;
  onBack: () => void;
}

export default function LoginPage({ onLogin, onBack }: LoginPageProps) {
  const [activeTab, setActiveTab] = React.useState<'login' | 'student' | 'employer'>('login');

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white dark:bg-slate-950">
      {/* Left Side: Branding & Info */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-50 dark:bg-slate-900/50 p-12 flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <div 
            className="flex items-center gap-2 mb-20 cursor-pointer"
            onClick={onBack}
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Rocket className="text-white" size={20} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
              CareerPulse
            </span>
          </div>

          <div className="max-w-md">
            <h1 className="text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Launch Your Career with <span className="text-primary">Confidence</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
              Discover internships, jobs, AI-powered career insights, and placement courses — all in one platform.
            </p>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800 relative">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <Brain size={24} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Hub</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <Briefcase size={24} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Jobs</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <GraduationCap size={24} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Courses</p>
                </div>
              </div>
              
              {/* Decorative dots grid */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-8 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-primary" />
            10k+ Companies
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-slate-50 bg-slate-200" />
              ))}
            </div>
            4.9 User Rating
          </div>
        </div>

        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-100 dark:border-slate-800">
              {(['login', 'student', 'employer'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "flex-1 py-6 text-sm font-bold transition-all relative",
                    activeTab === tab 
                      ? "text-primary" 
                      : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  )}
                >
                  {tab === 'login' ? 'Login' : tab === 'student' ? 'Student Signup' : 'Employer'}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
                <p className="text-slate-500 text-sm">Enter your credentials to access your dashboard.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                    <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    required
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                  <label htmlFor="remember" className="text-sm text-slate-600 dark:text-slate-400">Remember me for 30 days</label>
                </div>

                <button type="submit" className="w-full btn-primary py-4 rounded-xl text-base shadow-lg shadow-primary/20">
                  Login to CareerPulse
                </button>
              </form>

              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-slate-900 px-4 text-slate-400 font-bold tracking-widest">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-sm text-slate-700 dark:text-slate-300">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-sm text-slate-700 dark:text-slate-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-5 h-5" />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-success" />
                Verified Hub
              </div>
              <div className="w-[1px] h-3 bg-slate-200 dark:bg-slate-700" />
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <Lock size={14} className="text-slate-400" />
                Secure TLS
              </div>
            </div>

            <div className="flex gap-6 text-xs font-medium text-slate-400">
              <a href="#" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors">Privacy Policy</a>
              <span className="text-slate-200 dark:text-slate-800">•</span>
              <a href="#" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors">Terms of Service</a>
              <span className="text-slate-200 dark:text-slate-800">•</span>
              <a href="#" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle2({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
