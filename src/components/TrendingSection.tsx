import React from 'react';
import { Flame } from 'lucide-react';
import OpportunityCard from './OpportunityCard';
import { Opportunity } from '../types';

interface TrendingSectionProps {
  opportunities: Opportunity[];
  onInterestToggle: (id: string) => void;
  interestedIds: Set<string>;
  onAction?: (title: string, type: 'success' | 'info', content: React.ReactNode) => void;
}

export default function TrendingSection({ opportunities, onInterestToggle, interestedIds, onAction }: TrendingSectionProps) {
  const trending = opportunities.filter(o => o.isTrending).slice(0, 4);

  return (
    <section className="py-12 bg-primary-light dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
            <Flame className="text-accent" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Trending Opportunities Near You</h2>
            <p className="text-slate-600 dark:text-slate-400">Most popular roles among students right now</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map(opportunity => (
            <OpportunityCard 
              key={opportunity.id} 
              opportunity={opportunity}
              onInterestToggle={onInterestToggle}
              isInterested={interestedIds.has(opportunity.id)}
              onAction={onAction}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
