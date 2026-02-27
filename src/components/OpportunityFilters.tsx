import React from 'react';
import { Filter, SortAsc, Check, Clock, Flame } from 'lucide-react';
import { Branch, Year, Status } from '../types';
import { cn } from '../lib/utils';

interface OpportunityFiltersProps {
  selectedBranch: Branch;
  selectedYear: Year;
  selectedStatus: Status | 'All';
  onBranchChange: (branch: Branch) => void;
  onYearChange: (year: Year) => void;
  onStatusChange: (status: Status | 'All') => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function OpportunityFilters({
  selectedBranch,
  selectedYear,
  selectedStatus,
  onBranchChange,
  onYearChange,
  onStatusChange,
  sortBy,
  onSortChange
}: OpportunityFiltersProps) {
  const branches: Branch[] = ['All', 'CS', 'IT', 'ECE', 'ME', 'CE', 'EE'];
  const years: Year[] = ['All', '1st', '2nd', '3rd', '4th'];
  const statuses: (Status | 'All')[] = ['All', 'Open', 'Closing Soon', 'Closed'];
  
  const sortOptions = [
    { id: 'relevance', label: 'Relevance' },
    { id: 'newest', label: 'Date Added' },
    { id: 'deadline', label: 'Deadline' },
    { id: 'popularity', label: 'Popularity' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white font-bold text-lg">
          <Filter size={20} className="text-primary" />
          <span>Smart Filters</span>
        </div>
        
        <div className="space-y-8">
          {/* Branch Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-widest">Branch Eligibility</label>
            <div className="flex flex-wrap gap-2">
              {branches.map(branch => (
                <button
                  key={branch}
                  onClick={() => onBranchChange(branch)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all border",
                    selectedBranch === branch 
                      ? "bg-primary border-primary text-white shadow-md shadow-primary/20" 
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800 hover:border-primary/30"
                  )}
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-widest">Year of Study</label>
            <div className="flex flex-wrap gap-2">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => onYearChange(year)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all border",
                    selectedYear === year 
                      ? "bg-primary border-primary text-white shadow-md shadow-primary/20" 
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800 hover:border-primary/30"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-widest">Opportunity Status</label>
            <div className="flex flex-wrap gap-2">
              {statuses.map(status => (
                <button
                  key={status}
                  onClick={() => onStatusChange(status)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all border flex items-center gap-2",
                    selectedStatus === status 
                      ? "bg-primary border-primary text-white shadow-md shadow-primary/20" 
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800 hover:border-primary/30"
                  )}
                >
                  {status === 'Open' && <div className="w-2 h-2 rounded-full bg-success" />}
                  {status === 'Closing Soon' && <div className="w-2 h-2 rounded-full bg-danger" />}
                  {status === 'Closed' && <div className="w-2 h-2 rounded-full bg-slate-400" />}
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white font-bold">
          <SortAsc size={18} className="text-primary" />
          <span>Sort Results</span>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {sortOptions.map(option => (
            <button
              key={option.id}
              onClick={() => onSortChange(option.id)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all border",
                sortBy === option.id 
                  ? "bg-primary/5 text-primary border-primary/20" 
                  : "bg-transparent border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
              )}
            >
              {option.label}
              {sortBy === option.id && <Check size={16} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
