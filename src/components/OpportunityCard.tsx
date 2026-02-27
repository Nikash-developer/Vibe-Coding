import React from 'react';
import { Heart, Flame, Clock, Calendar, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Opportunity } from '../types';
import { cn } from '../lib/utils';

interface OpportunityCardProps {
  key?: React.Key;
  opportunity: Opportunity;
  onInterestToggle: (id: string) => void;
  isInterested: boolean;
  onAction?: (title: string, type: 'success' | 'info', content: React.ReactNode) => void;
}

export default function OpportunityCard({ opportunity, onInterestToggle, isInterested, onAction }: OpportunityCardProps) {
  const daysLeft = Math.ceil((new Date(opportunity.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
  const interestLevel = Math.min((opportunity.interestCount / 300) * 100, 100);

  const handleViewDetails = () => {
    if (onAction) {
      onAction(
        opportunity.title,
        "info",
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
            <img src={opportunity.logo} alt={opportunity.company} className="w-12 h-12 object-contain" />
            <div>
              <p className="font-bold text-slate-900 dark:text-white">{opportunity.company}</p>
              <p className="text-xs text-slate-500">Hiring for {opportunity.title}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Role Description</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">This is a high-impact role at {opportunity.company}. You will be working on cutting-edge technologies and collaborating with a world-class team.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-primary/5 rounded-xl">
              <p className="text-[10px] font-bold text-primary uppercase">Stipend</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">₹25,000 / month</p>
            </div>
            <div className="p-3 bg-accent/5 rounded-xl">
              <p className="text-[10px] font-bold text-accent uppercase">Duration</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">6 Months</p>
            </div>
          </div>
          <button 
            onClick={() => {
              onAction("Application Started", "success", <p className="text-sm text-slate-600 dark:text-slate-400">Redirecting to the application form for {opportunity.title}...</p>);
            }}
            className="w-full btn-primary py-3"
          >
            Apply Now
          </button>
        </div>
      );
    } else {
      alert(`Viewing details for ${opportunity.title} at ${opportunity.company}...`);
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      className="card p-6 group"
    >
      <div className="flex gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2 shrink-0 border border-slate-100 dark:border-slate-700">
          <img 
            src={opportunity.logo} 
            alt={opportunity.company} 
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">
              {opportunity.title}
            </h3>
            <button 
              onClick={() => onInterestToggle(opportunity.id)}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                isInterested 
                  ? "bg-danger/10 text-danger scale-110" 
                  : "bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-danger hover:bg-danger/5"
              )}
            >
              <Heart size={18} fill={isInterested ? "currentColor" : "none"} />
            </button>
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium">{opportunity.company}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {opportunity.status === 'Open' && <span className="badge badge-open">🟢 Open</span>}
          {opportunity.status === 'Closing Soon' && <span className="badge badge-closing">🔴 Closing Soon</span>}
          {opportunity.status === 'Closed' && <span className="badge badge-closed">⚫ Closed</span>}
          
          {opportunity.isRecommended && <span className="badge badge-recommended">🎯 Recommended</span>}
          {opportunity.interestCount > 100 && <span className="badge badge-hot">🔥 High Demand</span>}
          {opportunity.isNew && <span className="badge badge-new">⏳ Just Launched</span>}
        </div>

        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-slate-400" />
            <span>{daysLeft > 0 ? `${daysLeft} days left` : 'Expired'}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap size={14} className="text-slate-400" />
            <span className="truncate">{opportunity.branchEligibility.join(', ')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-slate-400" />
            <span>{opportunity.yearEligibility.join(', ')} Year</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame size={14} className="text-accent" />
            <span>{opportunity.interestCount} Interested</span>
          </div>
        </div>

        <div className="pt-2">
          <div className="flex justify-between text-xs font-medium mb-1.5">
            <span className="text-slate-500">Interest Level</span>
            <span className="text-primary">{Math.round(interestLevel)}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${interestLevel}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={cn(
                "h-full rounded-full",
                interestLevel > 80 ? "bg-accent" : "bg-primary"
              )}
            />
          </div>
        </div>

        <button 
          onClick={handleViewDetails}
          className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 group/btn"
        >
          View Details
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
