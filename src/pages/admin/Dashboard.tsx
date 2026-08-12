import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { SEO } from '../../components/SEO';
import { 
  Users, 
  Globe, 
  Briefcase, 
  MessageSquare,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const { profile } = useAuth();

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <SEO title="Admin Dashboard | INNOVAC BIOTECHNOLOGIES" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">INNOVAC OPERATIONS</span>
          <h1 className="text-3xl font-medium tracking-tight text-white mt-1">Welcome back, {profile?.full_name?.split(' ')[0] || 'Admin'}</h1>
          <p className="text-neutral-400 text-sm mt-1">Here's an overview of the platform operations today.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Users', value: '42', icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
          { label: 'Active Projects', value: '8', icon: Briefcase, color: 'text-purple-400', bg: 'bg-purple-400/10' },
          { label: 'New Enquiries', value: '15', icon: MessageSquare, color: 'text-accent', bg: 'bg-accent/10' },
          { label: 'Website Visits', value: '1,204', icon: Globe, color: 'text-green-400', bg: 'bg-green-400/10' }
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            key={i} 
            className="bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 p-6 rounded-[24px] flex items-start justify-between group hover:border-[#FF4D00]/40 hover:shadow-[0_0_30px_rgba(255,77,0,0.05)] transition-all duration-300"
          >
            <div>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-4xl font-semibold tracking-tight text-white">{stat.value}</p>
            </div>
            <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center ${stat.color} transition-transform duration-300 group-hover:scale-110 border border-white/5`}>
              <stat.icon size={22} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 rounded-[28px] overflow-hidden lg:col-span-2 shadow-sm">
          <div className="px-6 py-5 border-b border-white/10 flex justify-between items-center bg-white/[0.01]">
            <h2 className="font-medium text-white flex items-center gap-2 tracking-wide uppercase text-xs font-bold">
              <Activity size={18} className="text-[#FF4D00]" /> Recent Activity Log
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { text: 'Sarah Jenkins submitted a progress report for Project Alpha', time: '10 mins ago' },
              { text: 'New service request from TechBio Inc.', time: '1 hour ago' },
              { text: 'Dr. Smith updated the Research section content', time: '3 hours ago' },
              { text: 'System backup completed successfully', time: '5 hours ago' },
            ].map((activity, i) => (
              <div key={i} className="p-5 hover:bg-white/[0.02] transition-colors duration-200">
                <p className="text-sm text-neutral-300">{activity.text}</p>
                <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider mt-1.5">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 rounded-[28px] overflow-hidden p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-white uppercase text-xs tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
              Quick Command Console
            </h2>
            <div className="space-y-3">
              {[
                { title: 'Edit Website', desc: 'Manage pages and content', action: 'Customize layouts' },
                { title: 'Manage Users', desc: 'Add or edit accounts', action: 'Access user lists' },
                { title: 'View Applications', desc: 'Review internships & workshops', action: 'Process forms' },
                { title: 'System Settings', desc: 'Platform configuration', action: 'Advanced panel' }
              ].map((link, idx) => (
                <button 
                  key={idx}
                  className="w-full bg-[#050505] hover:bg-neutral-900 border border-white/5 hover:border-white/10 transition-all duration-300 p-4 rounded-2xl text-left flex items-center justify-between group"
                >
                  <div>
                    <p className="font-semibold text-white text-xs uppercase tracking-wide group-hover:text-accent transition-colors">{link.title}</p>
                    <p className="text-[11px] text-neutral-500 mt-0.5">{link.desc}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}