import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Info } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type?: 'success' | 'info';
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, type = 'info', children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  type === 'success' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
                }`}>
                  {type === 'success' ? <CheckCircle2 size={24} /> : <Info size={24} />}
                </div>
                <h3 className="font-display font-bold text-slate-900 dark:text-white">{title}</h3>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              {children}
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex justify-end">
              <button 
                onClick={onClose}
                className="btn-primary py-2 px-8"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
