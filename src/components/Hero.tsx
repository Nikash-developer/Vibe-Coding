import React from 'react';
import { Search, MapPin, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Branch, Year } from '../types';

interface HeroProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: { branch: Branch; year: Year }) => void;
}

export default function Hero({ onSearch, onFilterChange }: HeroProps) {
  const [query, setQuery] = React.useState('');
  const [branch, setBranch] = React.useState<Branch>('All');
  const [year, setYear] = React.useState<Year>('All');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleFilterChange = (newBranch: Branch, newYear: Year) => {
    setBranch(newBranch);
    setYear(newYear);
    onFilterChange({ branch: newBranch, year: newYear });
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-6"
          >
            Discover Internships & Placements <br />
            <span className="text-primary">— All in One Place</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 mb-12"
          >
            Smart recommendations, real-time interest tracking, and intuitive design to help you land your dream role.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 max-w-5xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="flex-1 w-full relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by role or company..." 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 text-slate-800 dark:text-slate-100"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative w-full sm:w-48">
                  <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <select 
                    value={branch}
                    onChange={(e) => handleFilterChange(e.target.value as Branch, year)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 text-slate-800 dark:text-slate-100 appearance-none cursor-pointer"
                  >
                    <option value="All">Select Branch</option>
                    <option value="CS">CS</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="ME">ME</option>
                    <option value="CE">CE</option>
                  </select>
                </div>

                <div className="relative w-full sm:w-48">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <select 
                    value={year}
                    onChange={(e) => handleFilterChange(branch, e.target.value as Year)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 text-slate-800 dark:text-slate-100 appearance-none cursor-pointer"
                  >
                    <option value="All">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                </div>

                <button 
                  onClick={handleSearch}
                  className="w-full sm:w-auto btn-primary py-4 px-10 rounded-2xl text-lg flex items-center justify-center gap-2"
                >
                  <Search size={20} />
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
    </section>
  );
}
