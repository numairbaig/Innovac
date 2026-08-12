import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { SEO } from '../../components/SEO';
import { cn } from '../../lib/utils';
import { 
  CheckSquare, 
  FlaskConical, 
  Clock, 
  Bell,
  FileText,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function PortalDashboard() {
  const { profile } = useAuth();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <SEO title="Member Dashboard | INNOVAC BIOTECHNOLOGIES" />
      
      <div>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">MEMBER PORTAL</span>
        <h1 className="text-3xl font-medium tracking-tight text-[#080808] mt-1">
          Good morning, {profile?.full_name?.split(' ')[0] || 'User'}
        </h1>
        <p className="text-[#6A6A6A] text-sm mt-1">Here's what's happening with your projects today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Pending Tasks', value: '12', icon: CheckSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Active Projects', value: '3', icon: FlaskConical, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Hours Logged (Week)', value: '32.5', icon: Clock, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'New Notifications', value: '5', icon: Bell, color: 'text-accent', bg: 'bg-[#FF4D00]/10' },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            key={i}
            className="bg-white p-6 rounded-[24px] border border-[#D8D8D5] shadow-sm flex items-start justify-between group hover:shadow-md hover:border-[#FF4D00]/30 transition-all duration-300"
          >
            <div>
              <p className="text-xs font-bold text-[#6A6A6A] uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-3xl font-semibold text-[#080808]">{stat.value}</p>
            </div>
            <div className={`w-11 h-11 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color} transition-transform duration-300 group-hover:scale-110 border border-neutral-100`}>
              <stat.icon size={20} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Tasks */}
          <div className="bg-white rounded-[24px] border border-[#D8D8D5] shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-[#D8D8D5] flex justify-between items-center bg-[#ECECE9]/20">
              <h2 className="font-semibold text-xs tracking-wider uppercase text-[#080808]">My Active Tasks</h2>
              <button className="text-xs text-accent font-semibold hover:underline flex items-center gap-1">
                View All <ChevronRight size={14} />
              </button>
            </div>
            <div className="divide-y divide-neutral-100">
              {[
                { id: 1, title: 'Analyze sequencing data for Project Alpha', priority: 'High', status: 'In Progress', date: 'Today' },
                { id: 2, title: 'Prepare weekly progress report', priority: 'Medium', status: 'To Do', date: 'Tomorrow' },
                { id: 3, title: 'Review protocol document', priority: 'Low', status: 'To Do', date: 'Oct 15' },
              ].map(task => (
                <div key={task.id} className="p-5 hover:bg-neutral-50/50 transition-colors flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <input type="checkbox" className="mt-1 w-4.5 h-4.5 rounded-[6px] border-[#D8D8D5] text-accent focus:ring-accent" />
                    <div>
                      <p className="text-sm font-medium text-[#080808]">{task.title}</p>
                      <div className="flex items-center gap-3 mt-1.5 text-xs">
                        <span className={cn(
                          "px-2 py-0.5 rounded-[6px] font-semibold text-[10px] uppercase tracking-wider",
                          task.priority === 'High' ? 'bg-red-50 text-red-700' :
                          task.priority === 'Medium' ? 'bg-orange-50 text-orange-700' :
                          'bg-green-50 text-green-700'
                        )}>
                          {task.priority}
                        </span>
                        <span className="text-neutral-300">|</span>
                        <span className="text-[#6A6A6A] font-medium">{task.status}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#6A6A6A] font-bold uppercase tracking-wider bg-[#ECECE9]/60 px-2 py-1 rounded-[6px]">{task.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div className="bg-white rounded-[24px] border border-[#D8D8D5] shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-[#D8D8D5] flex justify-between items-center bg-[#ECECE9]/20">
              <h2 className="font-semibold text-xs tracking-wider uppercase text-[#080808] flex items-center gap-2">
                <Sparkles size={16} className="text-accent" /> Assigned Research
              </h2>
              <button className="text-xs text-accent font-semibold hover:underline flex items-center gap-1">
                View Projects <ChevronRight size={14} />
              </button>
            </div>
            <div className="p-6 space-y-5">
              {[
                { name: 'Molecular Docking Study: Target X', progress: 65, status: 'Active Research Phase' },
                { name: 'Peptide Synthesis Optimization', progress: 30, status: 'Pre-Synthesis Verification' }
              ].map((project, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <p className="text-sm font-semibold text-[#080808] group-hover:text-accent transition-colors">{project.name}</p>
                      <p className="text-xs text-[#6A6A6A] mt-0.5 font-medium">{project.status}</p>
                    </div>
                    <span className="text-xs font-bold text-[#080808]">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-1000" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-[24px] border border-[#D8D8D5] shadow-sm p-6">
            <h2 className="font-bold text-xs uppercase tracking-wider text-[#080808] mb-4">Quick Actions</h2>
            <div className="space-y-2">
              {profile?.role === 'EMPLOYEE' && (
                <button className="w-full flex items-center justify-between p-3.5 bg-neutral-50 hover:bg-[#ECECE9]/30 border border-[#D8D8D5] rounded-[12px] transition-all text-left text-xs font-semibold uppercase tracking-wider text-[#6A6A6A] hover:text-[#080808] group">
                  <span>Clock In</span>
                  <Clock size={16} className="text-[#6A6A6A] group-hover:text-[#080808] transition-colors" />
                </button>
              )}
              <button className="w-full flex items-center justify-between p-3.5 bg-neutral-50 hover:bg-[#ECECE9]/30 border border-[#D8D8D5] rounded-[12px] transition-all text-left text-xs font-semibold uppercase tracking-wider text-[#6A6A6A] hover:text-[#080808] group">
                <span>Submit Progress Report</span>
                <FileText size={16} className="text-[#6A6A6A] group-hover:text-[#080808] transition-colors" />
              </button>
              <button className="w-full flex items-center justify-between p-3.5 bg-neutral-50 hover:bg-[#ECECE9]/30 border border-[#D8D8D5] rounded-[12px] transition-all text-left text-xs font-semibold uppercase tracking-wider text-[#6A6A6A] hover:text-[#080808] group">
                <span>Upload Document</span>
                <FileText size={16} className="text-[#6A6A6A] group-hover:text-[#080808] transition-colors" />
              </button>
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-[24px] border border-[#D8D8D5] shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-[#D8D8D5] bg-[#ECECE9]/20">
              <h2 className="font-semibold text-xs tracking-wider uppercase text-[#080808]">Announcements</h2>
            </div>
            <div className="divide-y divide-neutral-100 bg-white">
              {[
                { title: 'New Lab Safety Protocols', date: 'Oct 12', unread: true },
                { title: 'Quarterly Review Meeting Scheduled', date: 'Oct 10', unread: false },
              ].map((item, i) => (
                <div key={i} className="p-5 hover:bg-neutral-50 transition-colors cursor-pointer flex justify-between items-start">
                  <div className="space-y-1">
                    <p className={cn("text-xs uppercase tracking-wide", item.unread ? "font-bold text-[#080808]" : "font-medium text-[#6A6A6A]")}>
                      {item.title}
                    </p>
                    <p className="text-[10px] text-neutral-400 font-medium">{item.date}</p>
                  </div>
                  {item.unread && <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0 shadow-[0_0_10px_rgba(255,77,0,0.4)]"></span>}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-[#D8D8D5] bg-neutral-50 text-center">
              <button className="text-xs font-bold text-[#6A6A6A] hover:text-accent transition-colors uppercase tracking-wider">View All Announcements</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}