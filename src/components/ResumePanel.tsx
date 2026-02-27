import React from 'react';
import { Upload, FileText, CheckCircle2, AlertCircle, Sparkles, Target, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function ResumePanel() {
  const [isDragging, setIsDragging] = React.useState(false);
  const [uploadedFile, setUploadedFile] = React.useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0].name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0].name);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      {/* Resume Section */}
      <div className="card p-6">
        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <FileText size={20} className="text-primary" />
          Your Career Dashboard
        </h3>

        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={cn(
            "border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300",
            isDragging ? "border-primary bg-primary/5 scale-[0.98]" : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50",
            uploadedFile ? "border-success/30 bg-success/5" : ""
          )}
        >
          {uploadedFile ? (
            <div className="space-y-3">
              <div className="w-12 h-12 bg-success/10 text-success rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{uploadedFile}</p>
              <button 
                onClick={() => setUploadedFile(null)}
                className="text-xs text-slate-500 hover:text-danger underline"
              >
                Remove and re-upload
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto">
                <Upload size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Drag & Drop your resume</p>
                <p className="text-xs text-slate-500 mt-1">Accepted formats: PDF, PNG, JPG (Max 5MB)</p>
              </div>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                className="hidden"
              />
              <button 
                onClick={triggerFileSelect}
                className="btn-primary py-2 text-sm"
              >
                Upload Resume
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center gap-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
          <div className="relative w-16 h-16 shrink-0">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-slate-200 dark:text-slate-700"
                strokeDasharray="100, 100"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: "78, 100" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-primary"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">
              78%
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">Resume Score</p>
            <p className="text-xs text-slate-500">Your resume is 78% optimized for top tech roles.</p>
          </div>
        </div>
        
        <p className="mt-4 text-[10px] text-slate-400 text-center">
          Upload your resume to get personalized internship and course recommendations.
        </p>
      </div>

      {/* AI Career Insights */}
      <div className="card p-6">
        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <Sparkles size={20} className="text-accent" />
          AI Career Insights
        </h3>

        <div className="space-y-4">
          <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Recommended Internships</span>
            </div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Based on your Python & React skills, we found 12 matching roles.</p>
          </div>

          <div className="p-4 bg-accent/5 border border-accent/10 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} className="text-accent" />
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Skill Gap Analysis</span>
            </div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">You need <span className="text-accent font-bold">SQL & Cloud Architecture</span> for top-tier Backend roles.</p>
          </div>

          <div className="p-4 bg-success/5 border border-success/10 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={16} className="text-success" />
              <span className="text-xs font-bold text-success uppercase tracking-wider">AI Suggested Courses</span>
            </div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Complete "Advanced System Design" to increase placement odds by 40%.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
