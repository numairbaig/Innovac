import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { SEO } from '../../components/SEO';
import { 
  FileSignature, 
  Award, 
  BookOpen, 
  Package, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Inbox, 
  User, 
  Calendar, 
  HelpCircle, 
  Briefcase, 
  FlaskConical, 
  ShoppingBag, 
  TrendingUp, 
  ShieldCheck, 
  Edit3, 
  ExternalLink 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AccountOverview() {
  const { profile, user } = useAuth();
  const navigate = useNavigate();

  const userName = profile?.full_name || user?.email?.split('@')[0] || 'User';
  const userInitials = userName.charAt(0).toUpperCase();

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto pb-12">
      <SEO title="Account Overview | INNOVAC BIOTECHNOLOGIES" />

      {/* Greeting Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080808] flex items-center gap-3">
            <span>Good morning, {userName}</span>
            <span className="inline-block animate-bounce text-2xl">👋</span>
          </h1>
          <p className="text-neutral-500 text-sm font-light mt-1">
            Welcome back to your INNOVAC account.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/quote"
            className="px-5 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center gap-2"
          >
            <FlaskConical size={16} />
            <span>NEW REQUEST</span>
          </Link>
        </div>
      </div>

      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat 1 - Applications */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-[20px] border border-black/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">APPLICATIONS</span>
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF4D00] group-hover:scale-110 transition-transform">
              <FileSignature size={20} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold text-[#080808]">04</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF4D00] bg-orange-50 px-2.5 py-1 rounded-full">
              <TrendingUp size={12} /> +2 this month
            </span>
          </div>
          {/* Subtle trend curve SVG illustration */}
          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
            <span>2 Pending • 2 Approved</span>
            <svg className="w-16 h-6 text-[#FF4D00]/60 stroke-current fill-none stroke-[2]" viewBox="0 0 50 20">
              <path d="M 0 16 Q 12 18, 25 10 T 50 4" />
            </svg>
          </div>
        </motion.div>

        {/* Stat 2 - Internships */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="bg-white p-6 rounded-[20px] border border-black/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">INTERNSHIPS</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <Award size={20} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold text-[#080808]">02</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              Active
            </span>
          </div>
          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
            <span>Bioinformatics & Biotech</span>
            <svg className="w-16 h-6 text-emerald-500/60 stroke-current fill-none stroke-[2]" viewBox="0 0 50 20">
              <path d="M 0 14 Q 15 6, 30 12 T 50 2" />
            </svg>
          </div>
        </motion.div>

        {/* Stat 3 - Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white p-6 rounded-[20px] border border-black/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">WORKSHOPS</span>
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF4D00] group-hover:scale-110 transition-transform">
              <BookOpen size={20} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold text-[#080808]">03</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF4D00] bg-orange-50 px-2.5 py-1 rounded-full">
              Registered
            </span>
          </div>
          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
            <span>Next: PCR Techniques</span>
            <svg className="w-16 h-6 text-[#FF4D00]/60 stroke-current fill-none stroke-[2]" viewBox="0 0 50 20">
              <path d="M 0 10 Q 15 18, 30 8 T 50 4" />
            </svg>
          </div>
        </motion.div>

        {/* Stat 4 - Orders */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="bg-white p-6 rounded-[20px] border border-black/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">ORDERS</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <Package size={20} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold text-[#080808]">05</span>
            <Link to="/account/orders" className="text-xs font-bold text-[#FF4D00] hover:underline flex items-center gap-1">
              View orders →
            </Link>
          </div>
          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
            <span>Reagent Procurement</span>
            <svg className="w-16 h-6 text-emerald-500/60 stroke-current fill-none stroke-[2]" viewBox="0 0 50 20">
              <path d="M 0 18 Q 20 4, 35 14 T 50 6" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#080808] tracking-tight">Quick Actions</h2>
          <span className="text-xs font-semibold text-[#FF4D00]">View All</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 - Apply for Internship */}
          <Link
            to="/account/internships"
            className="p-5 rounded-[20px] bg-orange-50/50 border border-orange-200/60 hover:bg-orange-50 hover:border-[#FF4D00]/50 transition-all duration-300 group flex flex-col justify-between h-36 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-white border border-orange-200 flex items-center justify-center text-[#FF4D00] shadow-sm">
                <Briefcase size={20} />
              </div>
              <ArrowRight size={16} className="text-[#FF4D00] group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <h3 className="font-bold text-[#080808] text-sm group-hover:text-[#FF4D00] transition-colors">
                Apply for Internship
              </h3>
              <p className="text-xs text-neutral-500 font-light mt-0.5">Explore available internships</p>
            </div>
          </Link>

          {/* Card 2 - Browse Workshops */}
          <Link
            to="/account/workshops"
            className="p-5 rounded-[20px] bg-emerald-50/50 border border-emerald-200/60 hover:bg-emerald-50 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col justify-between h-36 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                <BookOpen size={20} />
              </div>
              <ArrowRight size={16} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <h3 className="font-bold text-[#080808] text-sm group-hover:text-emerald-600 transition-colors">
                Browse Workshops
              </h3>
              <p className="text-xs text-neutral-500 font-light mt-0.5">Find upcoming workshops</p>
            </div>
          </Link>

          {/* Card 3 - Request a Service */}
          <Link
            to="/quote"
            className="p-5 rounded-[20px] bg-purple-50/50 border border-purple-200/60 hover:bg-purple-50 hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-between h-36 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-white border border-purple-200 flex items-center justify-center text-purple-600 shadow-sm">
                <FlaskConical size={20} />
              </div>
              <ArrowRight size={16} className="text-purple-600 group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <h3 className="font-bold text-[#080808] text-sm group-hover:text-purple-600 transition-colors">
                Request a Service
              </h3>
              <p className="text-xs text-neutral-500 font-light mt-0.5">Submit a research or service request</p>
            </div>
          </Link>

          {/* Card 4 - View Orders */}
          <Link
            to="/account/orders"
            className="p-5 rounded-[20px] bg-blue-50/50 border border-blue-200/60 hover:bg-blue-50 hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between h-36 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                <ShoppingBag size={20} />
              </div>
              <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <h3 className="font-bold text-[#080808] text-sm group-hover:text-blue-600 transition-colors">
                View Orders
              </h3>
              <p className="text-xs text-neutral-500 font-light mt-0.5">Track your orders and history</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Grid: Left 2/3 (Recent Activity) & Right 1/3 (Profile Summary + Events + Help) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Recent Activity */}
        <div className="lg:col-span-7 xl:col-span-8 bg-white p-6 sm:p-8 rounded-[24px] border border-black/8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
            <div>
              <h2 className="text-lg font-bold text-[#080808] tracking-tight">Recent Activity</h2>
              <p className="text-xs text-neutral-500 font-light">Your recent actions and system status updates</p>
            </div>
            <span className="text-xs font-semibold text-[#FF4D00] hover:underline cursor-pointer">
              View All Activity
            </span>
          </div>

          <div className="space-y-6">
            {/* Activity 1 */}
            <div className="flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#080808]">Workshop Registration Completed</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    You have successfully registered for "PCR Techniques Workshop".
                  </p>
                  <span className="text-[11px] text-neutral-400 font-light mt-1 block">2 hours ago</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold rounded-full shrink-0">
                Completed
              </span>
            </div>

            {/* Activity 2 */}
            <div className="flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF4D00] shrink-0 mt-0.5">
                  <FileSignature size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#080808]">Internship Application Submitted</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    Your application for "Molecular Biology Intern" has been submitted.
                  </p>
                  <span className="text-[11px] text-neutral-400 font-light mt-1 block">1 day ago</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-orange-50 text-[#FF4D00] border border-orange-200 text-[11px] font-semibold rounded-full shrink-0">
                Pending
              </span>
            </div>

            {/* Activity 3 */}
            <div className="flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                  <Inbox size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#080808]">Request Received</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    Your request #REQ-2026-1254 has been received.
                  </p>
                  <span className="text-[11px] text-neutral-400 font-light mt-1 block">2 days ago</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-semibold rounded-full shrink-0">
                In Review
              </span>
            </div>

            {/* Activity 4 */}
            <div className="flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <Package size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#080808]">Order Confirmed</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    Order #ORD-2026-0897 has been confirmed.
                  </p>
                  <span className="text-[11px] text-neutral-400 font-light mt-1 block">3 days ago</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold rounded-full shrink-0">
                Completed
              </span>
            </div>

            {/* Activity 5 */}
            <div className="flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 shrink-0 mt-0.5">
                  <User size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#080808]">Profile Updated</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    Your profile information has been updated successfully.
                  </p>
                  <span className="text-[11px] text-neutral-400 font-light mt-1 block">5 days ago</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 border border-neutral-200 text-[11px] font-semibold rounded-full shrink-0">
                Updated
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Profile Summary + Upcoming Events + Need Help */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6">
          {/* Card 1: Profile Summary */}
          <div className="bg-white p-6 rounded-[24px] border border-black/8 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
              <h3 className="text-sm font-bold text-[#080808] tracking-tight uppercase">Profile Summary</h3>
              <button 
                onClick={() => navigate('/account/profile')}
                className="text-neutral-400 hover:text-[#FF4D00] transition-colors p-1"
                title="Edit Profile"
              >
                <Edit3 size={16} />
              </button>
            </div>

            {/* Avatar & Main Info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-100 via-amber-50 to-orange-200 border-2 border-[#FF4D00]/30 flex items-center justify-center text-[#FF4D00] text-2xl font-bold shadow-md">
                  {userInitials}
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#080808] leading-snug">{userName}</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-neutral-500 font-light">Public User</span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded text-[10px] font-bold">
                    VERIFIED
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 font-light block mt-1">
                  Member since May 2026
                </span>
              </div>
            </div>

            {/* Details Fields */}
            <div className="space-y-3 pt-2 text-xs border-t border-neutral-100">
              <div className="flex items-center justify-between py-1.5 border-b border-neutral-50">
                <span className="text-neutral-500 font-light">Account Status</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-neutral-50">
                <span className="text-neutral-500 font-light">Email Address</span>
                <span className="font-semibold text-[#080808] truncate max-w-[180px]" title={user?.email || 'N/A'}>
                  {user?.email || 'N/A'}
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-neutral-50">
                <span className="text-neutral-500 font-light">Phone Number</span>
                <span className="font-semibold text-[#080808]">+92 300 1234567</span>
              </div>

              <div className="flex items-center justify-between py-1.5">
                <span className="text-neutral-500 font-light">Country</span>
                <span className="font-semibold text-[#080808]">Pakistan</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100">
              <button
                onClick={() => navigate('/account/profile')}
                className="w-full py-2.5 rounded-xl border border-orange-200 bg-orange-50/50 hover:bg-orange-50 text-[#FF4D00] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Edit3 size={14} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Card 2: Upcoming Events */}
          <div className="bg-white p-6 rounded-[24px] border border-black/8 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
              <h3 className="text-sm font-bold text-[#080808] tracking-tight uppercase">Upcoming Events</h3>
              <Link to="/account/workshops" className="text-xs font-semibold text-[#FF4D00] hover:underline">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {/* Event 1 */}
              <div className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase leading-none">12</span>
                  <span className="text-[9px] font-bold text-emerald-800 uppercase mt-0.5">JUN</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-[#080808] truncate">PCR Techniques Workshop</h5>
                  <p className="text-[11px] text-neutral-400 font-light">12 June 2026 • 10:00 AM</p>
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-bold rounded">
                  Confirmed
                </span>
              </div>

              {/* Event 2 */}
              <div className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-[#FF4D00] uppercase leading-none">25</span>
                  <span className="text-[9px] font-bold text-orange-800 uppercase mt-0.5">JUN</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-[#080808] truncate">Advanced Bioinformatics</h5>
                  <p className="text-[11px] text-neutral-400 font-light">25 June 2026 • 02:00 PM</p>
                </div>
                <span className="px-2 py-0.5 bg-orange-50 text-[#FF4D00] border border-orange-200 text-[10px] font-bold rounded">
                  Registered
                </span>
              </div>

              {/* Event 3 */}
              <div className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-purple-600 uppercase leading-none">05</span>
                  <span className="text-[9px] font-bold text-purple-800 uppercase mt-0.5">JUL</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-[#080808] truncate">Protein Purification Techniques</h5>
                  <p className="text-[11px] text-neutral-400 font-light">05 July 2026 • 11:00 AM</p>
                </div>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-200 text-[10px] font-bold rounded">
                  Registered
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Need Help */}
          <div className="bg-white p-6 rounded-[24px] border border-black/8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <HelpCircle size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080808]">Need Help?</h4>
                <p className="text-xs text-neutral-500 font-light mt-1 leading-relaxed">
                  Our support team is here to help you with your queries.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-orange-50/60 border border-orange-200 hover:bg-orange-50 text-[#FF4D00] text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  <span>Contact Support</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
