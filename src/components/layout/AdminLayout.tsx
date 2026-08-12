import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  Globe, 
  Users, 
  Briefcase, 
  ClipboardList, 
  Settings, 
  LogOut,
  Menu,
  X,
  FileText,
  MessageSquare
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { SEO } from '../SEO';

export function AdminLayout() {
  const { profile, signOut } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Website', href: '/admin/website', icon: Globe },
    { name: 'People', href: '/admin/users', icon: Users },
    { name: 'Projects', href: '/admin/projects', icon: Briefcase },
    { name: 'Operations', href: '/admin/operations', icon: ClipboardList },
    { name: 'Documents', href: '/admin/documents', icon: FileText },
    { name: 'Enquiries', href: '/admin/enquiries', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex text-white font-sans antialiased">
      <SEO title="Admin Control Center | INNOVAC BIOTECHNOLOGIES" />
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-[#0a0a0a] border-r border-white/10 flex flex-col transition-all duration-300 fixed inset-y-0 left-0 z-40 shadow-xl",
          sidebarOpen ? "w-64 translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        )}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10 bg-[#080808]">
          <Link to="/admin/dashboard" className={cn("font-bold text-white tracking-tight text-lg truncate flex items-center gap-2", !sidebarOpen && "lg:hidden")}>
            INNOVAC <span className="text-[#FF4D00] font-semibold">ADMIN</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-neutral-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-[10px] transition-all duration-300 group",
                      isActive 
                        ? "bg-[#FF4D00] text-white font-medium shadow-[0_0_20px_rgba(255,77,0,0.25)]" 
                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                    )}
                    title={!sidebarOpen ? item.name : undefined}
                  >
                    <item.icon 
                      size={18} 
                      className={cn(
                        "shrink-0 transition-transform duration-300 group-hover:scale-110", 
                        isActive ? "text-white" : "text-neutral-500 group-hover:text-white"
                      )} 
                    />
                    <span className={cn("truncate text-xs font-semibold uppercase tracking-wider", !sidebarOpen && "lg:hidden")}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-white/10 space-y-2 bg-[#080808]">
          <Link
            to="/admin/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-[10px] text-neutral-400 hover:bg-white/5 hover:text-white transition-all duration-300 group"
            title={!sidebarOpen ? "Settings" : undefined}
          >
            <Settings size={18} className="shrink-0 text-neutral-500 group-hover:text-white" />
            <span className={cn("truncate text-xs font-semibold uppercase tracking-wider", !sidebarOpen && "lg:hidden")}>Settings</span>
          </Link>
          <button
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-red-400 hover:bg-red-950/20 hover:text-red-300 transition-all duration-300 group text-left"
            title={!sidebarOpen ? "Log Out" : undefined}
          >
            <LogOut size={18} className="shrink-0 text-red-500 group-hover:text-red-400" />
            <span className={cn("truncate text-xs font-semibold uppercase tracking-wider", !sidebarOpen && "lg:hidden")}>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn("flex-1 flex flex-col transition-all duration-300 min-h-screen", sidebarOpen ? "lg:ml-64" : "lg:ml-20")}>
        {/* Topbar */}
        <header className="h-20 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-neutral-400 hover:bg-white/5 hover:text-white rounded-[10px] transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 border-l border-white/10 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-white tracking-wide">{profile?.full_name || 'Loading...'}</p>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-0.5">{profile?.role || 'Admin'}</p>
              </div>
              <div className="w-10 h-10 bg-[#FF4D00]/10 border border-[#FF4D00]/20 rounded-full flex items-center justify-center text-[#FF4D00] font-bold shadow-[0_0_15px_rgba(255,77,0,0.15)]">
                {profile?.full_name?.charAt(0) || 'A'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8 overflow-auto bg-[#050505]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}