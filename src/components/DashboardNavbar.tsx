import React from 'react';
import { Bell, Moon, Sun, Sparkles, User, LogOut, Settings, BookOpen, Briefcase, Heart, X, Send, Bot } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function DashboardNavbar({ onLogout }: { onLogout: () => void }) {
  const [isDark, setIsDark] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showAIChat, setShowAIChat] = React.useState(false);
  const [chatMessage, setChatMessage] = React.useState('');
  const [chatHistory, setChatHistory] = React.useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello! I'm your CareerPulse AI Assistant. How can I help you with your career journey today?" }
  ]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const newHistory = [...chatHistory, { role: 'user' as const, text: chatMessage }];
    setChatHistory(newHistory);
    setChatMessage('');

    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'ai', 
        text: "That's a great question! Based on your profile, I'd recommend focusing on building your React portfolio. Would you like me to suggest some projects?" 
      }]);
    }, 1000);
  };

  const notifications = [
    { id: 1, text: "New Internship Posted at Google", time: "2h ago", type: "internship" },
    { id: 2, text: "Course Discount 40% on React Mastery", time: "5h ago", type: "course" },
    { id: 3, text: "Deadline Tomorrow: Airbnb Design Role", time: "1d ago", type: "deadline" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Career<span className="text-primary">Pulse</span>
            </span>
          </div>

          {/* Center: Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link nav-link-active">Internships</a>
            <a href="#" className="nav-link">Courses</a>
            <a href="#" className="nav-link">Jobs</a>
            
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-slate-500 hover:text-primary transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 relative"
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="flex h-2 w-2 rounded-full bg-danger absolute top-2 right-2 border-2 border-white dark:border-slate-950" />
              </button>
              
              <AnimatePresence>
                {showNotifications && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-4 overflow-hidden"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-sm">Notifications</h4>
                      <button className="text-[10px] text-primary font-bold hover:underline">Mark all as read</button>
                    </div>
                    <div className="space-y-3">
                      {notifications.map(n => (
                        <div key={n.id} className="flex gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                            n.type === 'internship' ? "bg-primary/10 text-primary" : 
                            n.type === 'course' ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                          )}>
                            <Bell size={14} />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-slate-800 dark:text-slate-200">{n.text}</p>
                            <span className="text-[10px] text-slate-400">{n.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowAIChat(true)}
              className="btn-ai hidden sm:flex"
            >
              <Sparkles size={18} />
              AI Assistant
            </button>

            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-primary transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="relative">
              <button 
                onClick={() => setShowProfile(!showProfile)}
                className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
              >
                <img src="https://picsum.photos/seed/user/100/100" alt="Profile" className="w-full h-full object-cover" />
              </button>

              <AnimatePresence>
                {showProfile && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 overflow-hidden"
                  >
                    <div className="p-3 border-b border-slate-100 dark:border-slate-800 mb-1">
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Alex Johnson</p>
                      <p className="text-xs text-slate-500">alex.j@example.com</p>
                    </div>
                    <div className="space-y-1">
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                        <Briefcase size={16} /> My Applications
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                        <Heart size={16} /> Saved Opportunities
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                        <BookOpen size={16} /> My Courses
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                        <Settings size={16} /> Settings
                      </button>
                      <button 
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-danger hover:bg-danger/5 rounded-xl transition-colors"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Modal */}
      <AnimatePresence>
        {showAIChat && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-[600px]"
            >
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white">CareerPulse AI</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Always Online</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowAIChat(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4 hide-scrollbar">
                {chatHistory.map((msg, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={cn(
                      "flex",
                      msg.role === 'user' ? "justify-end" : "justify-start"
                    )}
                  >
                    <div className={cn(
                      "max-w-[80%] p-4 rounded-2xl text-sm",
                      msg.role === 'user' 
                        ? "bg-primary text-white rounded-tr-none" 
                        : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none"
                    )}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="relative">
                  <input 
                    type="text" 
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Ask me anything about your career..."
                    className="w-full pl-4 pr-12 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
