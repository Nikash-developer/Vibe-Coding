import React from 'react';
import { Flame, Star, Clock, ArrowRight, Sparkles, Brain, Code, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const trendingInternships = [
  { id: 1, title: "Frontend Developer", company: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", deadline: "3 days left", interested: 124, closingSoon: true },
  { id: 2, title: "Product Designer", company: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg", deadline: "1 week left", interested: 89, closingSoon: false },
  { id: 3, title: "Data Analyst", company: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", deadline: "5 days left", interested: 210, closingSoon: true },
  { id: 4, title: "Backend Engineer", company: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg", deadline: "2 weeks left", interested: 56, closingSoon: false },
];

const certificationCourses = [
  { id: 1, title: "Full Stack Development", provider: "Meta", rating: 4.9, duration: "12 Weeks", popular: true, ai: true },
  { id: 2, title: "UI/UX Design Masterclass", provider: "Google", rating: 4.8, duration: "8 Weeks", popular: false, ai: true },
  { id: 3, title: "Data Science Specialization", provider: "IBM", rating: 4.7, duration: "16 Weeks", popular: true, ai: false },
  { id: 4, title: "Cloud Architecture", provider: "AWS", rating: 4.9, duration: "10 Weeks", popular: false, ai: true },
];

const placementPrep = [
  { id: 1, title: "DSA Mastery Course", difficulty: "Advanced", duration: "6 Weeks", icon: Code },
  { id: 2, title: "System Design Bootcamp", difficulty: "Intermediate", duration: "4 Weeks", icon: Terminal },
  { id: 3, title: "Mock Interview AI Simulator", difficulty: "Adaptive", duration: "Unlimited", icon: Brain },
  { id: 4, title: "Resume Optimization", difficulty: "Beginner", duration: "1 Week", icon: Sparkles },
];

interface OpportunitiesPanelProps {
  onAction?: (title: string, type: 'success' | 'info', content: React.ReactNode) => void;
}

export default function OpportunitiesPanel({ onAction }: OpportunitiesPanelProps) {
  const handleApply = (job: any) => {
    if (onAction) {
      onAction(
        "Application Submitted", 
        "success", 
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-400">Your application for <span className="font-bold text-slate-900 dark:text-white">{job.title}</span> at <span className="font-bold text-slate-900 dark:text-white">{job.company}</span> has been successfully sent!</p>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
            <p className="text-xs text-slate-500">The hiring team will review your profile and get back to you via email within 3-5 business days.</p>
          </div>
        </div>
      );
    } else {
      alert(`Applied to ${job.title} at ${job.company}!`);
    }
  };

  const handleEnroll = (course: any) => {
    if (onAction) {
      onAction(
        "Enrollment Successful", 
        "success", 
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-400">You are now enrolled in <span className="font-bold text-slate-900 dark:text-white">{course.title}</span> by <span className="font-bold text-slate-900 dark:text-white">{course.provider}</span>.</p>
          <p className="text-sm text-slate-500">You can access your course materials from the "My Courses" section in your profile.</p>
          <button className="w-full btn-primary py-2 mt-2">Go to Course</button>
        </div>
      );
    } else {
      alert(`Enrolled in ${course.title} by ${course.provider}!`);
    }
  };

  const handlePrepStart = (prep: any) => {
    if (onAction) {
      onAction(
        "Preparation Started", 
        "info", 
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-400">Starting your <span className="font-bold text-slate-900 dark:text-white">{prep.title}</span> journey.</p>
          <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <Sparkles className="text-primary" size={20} />
            <p className="text-xs text-primary font-medium">AI is personalizing your learning path based on your resume score.</p>
          </div>
        </div>
      );
    } else {
      alert(`Starting ${prep.title} preparation...`);
    }
  };

  return (
    <div className="space-y-10">
      {/* Trending Internships */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Flame size={22} className="text-danger" />
            Trending Internships
          </h3>
          <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
            View All <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingInternships.map(job => (
            <motion.div 
              key={job.id}
              whileHover={{ y: -4 }}
              className="card p-5 group"
            >
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2 shrink-0">
                  <img src={job.logo} alt={job.company} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{job.title}</h4>
                  <p className="text-sm text-slate-500">{job.company}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={cn(
                  "badge",
                  job.closingSoon ? "badge-closing" : "badge-open"
                )}>
                  {job.deadline}
                </span>
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                  <Flame size={10} className="text-accent" />
                  {job.interested} Interested
                </span>
              </div>

              <button 
                onClick={() => handleApply(job)}
                className="w-full btn-primary py-2.5 text-sm"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Certification Courses */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Star size={22} className="text-accent" />
            Popular Certification Courses
          </h3>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar">
          {certificationCourses.map(course => (
            <motion.div 
              key={course.id}
              whileHover={{ scale: 1.02 }}
              className="card p-5 min-w-[280px] shrink-0"
            >
              <div className="flex gap-2 mb-4">
                {course.popular && <span className="badge badge-hot">🔥 Most Popular</span>}
                {course.ai && <span className="badge badge-recommended">🎯 AI Recommended</span>}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">{course.title}</h4>
              <p className="text-sm text-slate-500 mb-4">{course.provider}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-accent font-bold text-sm">
                  <Star size={14} fill="currentColor" />
                  {course.rating}
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <Clock size={14} />
                  {course.duration}
                </div>
              </div>

              <button 
                onClick={() => handleEnroll(course)}
                className="w-full btn-outline py-2 text-sm border-primary/20 text-primary hover:bg-primary hover:text-white"
              >
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Placement Preparation */}
      <section className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 border border-primary/10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles size={24} className="text-primary" />
              AI Powered Placement Preparation
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">Master the skills needed to crack top tech interviews.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {placementPrep.map(prep => (
            <div key={prep.id} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-primary/5 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                <prep.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="font-bold text-slate-900 dark:text-white">{prep.title}</h4>
                  <span className="text-[8px] bg-accent/10 text-accent px-1.5 py-0.5 rounded font-bold uppercase">AI</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{prep.difficulty}</span>
                  <span>•</span>
                  <span>{prep.duration}</span>
                </div>
              </div>
              <button 
                onClick={() => handlePrepStart(prep)}
                className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
