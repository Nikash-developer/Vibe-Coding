import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Career<span className="text-primary">Pulse</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Empowering the next generation of talent through smart, personalized career opportunities and real-time industry insights.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6">About CareerPulse</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6">Opportunities</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Browse All</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trending Roles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Remote Internships</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Placement Prep</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Skill Courses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>hello@careerpulse.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+91 1800 123 456</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Innovation Hub, Tech Park,<br />Bangalore, 560103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-danger fill-danger" /> for the student community
          </div>
          <p>© 2026 CareerPulse. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
