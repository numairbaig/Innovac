import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { SEO } from '../../components/SEO';
import { User, ShieldCheck, Mail, Tag, Settings, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AccountProfile() {
  const { profile } = useAuth();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <SEO title="My Profile | User Portal" />
      
      <div>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">USER CONSOLE</span>
        <h1 className="text-3xl font-medium tracking-tight text-[#080808] mt-1">My Profile</h1>
        <p className="text-[#6A6A6A] text-sm mt-1">Manage your contact details and account preferences.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-[#D8D8D5] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="p-8 border-b border-[#D8D8D5] bg-[#ECECE9]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center text-accent text-2xl font-bold shadow-sm">
              {profile?.full_name?.charAt(0) || 'U'}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#080808]">{profile?.full_name || 'Loading Name...'}</h2>
              <p className="text-[#6A6A6A] text-xs font-semibold uppercase tracking-wider mt-0.5">{profile?.role === 'PUBLIC_USER' ? 'Public User' : profile?.role || 'Guest'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider border border-green-200">
              <ShieldCheck size={14} /> Verified Account
            </span>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#080808] mb-4">Registration Profile Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                <User size={12} className="text-neutral-400" /> Full Name
              </span>
              <p className="text-sm font-medium text-[#080808]">{profile?.full_name || 'Not Provided'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                <Mail size={12} className="text-neutral-400" /> Email Address
              </span>
              <p className="text-sm font-medium text-[#080808]">{profile?.email || 'Not Provided'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                <Tag size={12} className="text-neutral-400" /> Member Type
              </span>
              <p className="text-sm font-medium text-[#080808]">Public User / Workshop Participant</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                <Settings size={12} className="text-neutral-400" /> Account Status
              </span>
              <p className="text-sm font-medium text-accent uppercase tracking-wider font-semibold">{profile?.status || 'Active'}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
