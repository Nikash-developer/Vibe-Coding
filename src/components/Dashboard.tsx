import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import ResumePanel from './ResumePanel';
import OpportunitiesPanel from './OpportunitiesPanel';
import Modal from './Modal';
import { motion } from 'motion/react';

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
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

  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-slate-950">
      <DashboardNavbar onLogout={onLogout} />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Left Panel: Resume & Career Intelligence */}
          <aside className="w-full lg:w-[380px] shrink-0">
            <ResumePanel />
          </aside>

          {/* Right Panel: Opportunities & Learning */}
          <div className="flex-1 min-w-0">
            <OpportunitiesPanel onAction={handleAction} />
          </div>
        </motion.div>
      </main>

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
