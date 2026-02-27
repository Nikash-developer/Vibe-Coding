/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingSection from './components/TrendingSection';
import OpportunityCard from './components/OpportunityCard';
import OpportunityFilters from './components/OpportunityFilters';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import Modal from './components/Modal';
import { MOCK_OPPORTUNITIES } from './constants';
import { Branch, Year, Opportunity, Status } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Upload } from 'lucide-react';

type View = 'landing' | 'login' | 'dashboard';

export default function App() {
  const [view, setView] = React.useState<View>('landing');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [branch, setBranch] = React.useState<Branch>('All');
  const [year, setYear] = React.useState<Year>('All');
  const [status, setStatus] = React.useState<Status | 'All'>('All');
  const [sortBy, setSortBy] = React.useState('relevance');
  const [interestedIds, setInterestedIds] = React.useState<Set<string>>(new Set());
  const [modalConfig, setModalConfig] = React.useState<{
    isOpen: boolean;
    title: string;
    type: 'success' | 'info';
    content: React.ReactNode;
  }>({
    isOpen: false,
    title: '',
    type: 'info',
    content: null
  });

  const handleAction = (title: string, type: 'success' | 'info', content: React.ReactNode) => {
    setModalConfig({ isOpen: true, title, type, content });
  };

  const toggleInterest = (id: string) => {
    setInterestedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredOpportunities = React.useMemo(() => {
    let filtered = MOCK_OPPORTUNITIES.map(o => ({
      ...o,
      isRecommended: (branch !== 'All' && o.branchEligibility.includes(branch)) || 
                     (year !== 'All' && o.yearEligibility.includes(year))
    }));

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(o => 
        o.title.toLowerCase().includes(q) || 
        o.company.toLowerCase().includes(q)
      );
    }

    if (branch !== 'All') {
      filtered = filtered.filter(o => o.branchEligibility.includes(branch) || o.branchEligibility.includes('All'));
    }

    if (year !== 'All') {
      filtered = filtered.filter(o => o.yearEligibility.includes(year) || o.yearEligibility.includes('All'));
    }

    if (status !== 'All') {
      filtered = filtered.filter(o => o.status === status);
    }

    // Sorting
    filtered.sort((a, b) => {
      if (sortBy === 'deadline') {
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      }
      if (sortBy === 'popularity') {
        return b.interestCount - a.interestCount;
      }
      if (sortBy === 'newest') {
        return a.isNew ? -1 : 1;
      }
      // Relevance (Recommended first)
      if (a.isRecommended && !b.isRecommended) return -1;
      if (!a.isRecommended && b.isRecommended) return 1;
      return 0;
    });

    return filtered;
  }, [searchQuery, branch, year, status, sortBy]);

  if (view === 'dashboard') {
    return <Dashboard onLogout={() => setView('landing')} />;
  }

  if (view === 'login') {
    return <LoginPage onLogin={() => setView('dashboard')} onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar onLogin={() => setView('login')} />
      
      <main className="flex-grow">
        <Hero 
          onSearch={setSearchQuery} 
          onFilterChange={(f) => { setBranch(f.branch); setYear(f.year); }} 
        />

        {/* Quick Resume Upload Section */}
        <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
                  Get AI-Powered Career Insights
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Upload your resume to get a personalized career score and matching internship recommendations instantly.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <button 
                  onClick={() => setView('login')}
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20 active:scale-95"
                >
                  <Upload size={20} />
                  Upload Resume Now
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-3 uppercase tracking-widest font-bold">
                  Supports PDF, PNG, JPG (Max 5MB)
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <div id="trending">
          <TrendingSection 
            opportunities={MOCK_OPPORTUNITIES} 
            onInterestToggle={toggleInterest}
            interestedIds={interestedIds}
            onAction={handleAction}
          />
        </div>

        <div id="browse" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-24">
                <OpportunityFilters 
                  selectedBranch={branch}
                  selectedYear={year}
                  selectedStatus={status}
                  onBranchChange={setBranch}
                  onYearChange={setYear}
                  onStatusChange={setStatus}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>
            </aside>

            {/* Main Content Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                <div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-1">
                    {filteredOpportunities.length} Opportunities
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400">
                    Showing results for <span className="text-primary font-bold">{branch}</span> branch, <span className="text-primary font-bold">{year}</span> year
                  </p>
                </div>
                
                <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-3">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent border-none text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-0 cursor-pointer pr-8"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest First</option>
                    <option value="deadline">Deadline</option>
                    <option value="popularity">Popularity</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredOpportunities.map(opportunity => (
                    <OpportunityCard 
                      key={opportunity.id} 
                      opportunity={opportunity}
                      onInterestToggle={toggleInterest}
                      isInterested={interestedIds.has(opportunity.id)}
                      onAction={handleAction}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {filteredOpportunities.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-32 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800"
                >
                  <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-slate-300">No results</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No matches found</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto">Try adjusting your filters or search query to find more opportunities.</p>
                  <button 
                    onClick={() => { setBranch('All'); setYear('All'); setStatus('All'); setSearchQuery(''); }}
                    className="btn-primary"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Join CareerPulse today and get personalized recommendations delivered straight to your dashboard.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setView('login')}
                className="bg-white text-primary px-12 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                Get Started Now
              </button>
              <button 
                onClick={() => handleAction("Employer Portal", "info", <p className="text-slate-600 dark:text-slate-400">Redirecting to the Employer Portal. You will be able to post new opportunities and manage applications there.</p>)}
                className="bg-primary-dark text-white border border-white/20 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark/80 transition-all active:scale-95"
              >
                Post an Opportunity
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
        </section>
      </main>

      <Footer />

      <Modal 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))}
        title={modalConfig.title}
        type={modalConfig.type}
      >
        {modalConfig.content}
      </Modal>
    </div>
  );
}
