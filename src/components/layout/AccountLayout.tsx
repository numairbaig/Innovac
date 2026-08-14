import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  User, 
  Settings, 
  ShieldAlert, 
  FileSignature, 
  Award, 
  BookOpen, 
  Inbox, 
  FileText, 
  MessageSquare, 
  Bell, 
  LogOut,
  Menu,
  X,
  Package,
  ChevronLeft
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { SEO } from '../SEO';

export function AccountLayout() {
  const { profile, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    { name: 'Overview', href: '/account/profile', icon: LayoutDashboard },
    { name: 'Profile Detail', href: '/account/profile', icon: User },
    { name: 'Settings', href: '/account/settings', icon: Settings },
    { name: 'Security', href: '/account/security', icon: ShieldAlert },
    { name: 'Applications', href: '/account/applications', icon: FileSignature },
    { name: 'Internships', href: '/account/internships', icon: Award },
    { name: 'Workshops', href: '/account/workshops', icon: BookOpen },
    { name: 'Requests', href: '/account/requests', icon: Inbox },
    { name: 'My Orders', href: '/account/orders', icon: Package },
    { name: 'Documents', href: '/account/documents', icon: FileText },
    { name: 'Messages', href: '/account/messages', icon: MessageSquare },
    { name: 'Notifications', href: '/account/notifications', icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex text-[#080808] font-sans antialiased">
      <SEO title="User Account Portal | INNOVAC BIOTECHNOLOGIES" />
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white border-r border-[#D8D8D5] flex flex-col transition-all duration-300 fixed inset-y-0 left-0 z-40 shadow-sm",
          sidebarOpen ? "w-64 translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        )}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-[#D8D8D5] bg-white">
          <Link to="/account/profile" className={cn("font-bold text-[#080808] tracking-tight text-lg truncate flex items-center gap-2", !sidebarOpen && "lg:hidden")}>
            INNOVAC <span className="text-[#FF4D00] font-semibold">ACCOUNT</span>
          </Link>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="p-1.5 text-[#6A6A6A] hover:text-[#FF4D00] hover:bg-[#ECECE9]/60 rounded-lg transition-colors cursor-pointer"
            title={sidebarOpen ? "Minimize Sidebar" : "Expand Sidebar"}
            aria-label="Minimize side panel"
          >
            <ChevronLeft size={20} className={cn("transition-transform duration-300", !sidebarOpen && "rotate-180")} />
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
                        : "text-[#6A6A6A] hover:bg-[#ECECE9]/60 hover:text-[#080808]"
                    )}
                    title={!sidebarOpen ? item.name : undefined}
                  >
                    <item.icon 
                      size={18} 
                      className={cn(
                        "shrink-0 transition-transform duration-300 group-hover:scale-110", 
                        isActive ? "text-white" : "text-[#6A6A6A] group-hover:text-[#080808]"
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
        
        <div className="p-4 border-t border-[#D8D8D5] bg-white">
          <button
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-300 group text-left"
            title={!sidebarOpen ? "Log Out" : undefined}
          >
            <LogOut size={18} className="shrink-0 text-red-500 group-hover:text-red-600" />
            <span className={cn("truncate text-xs font-semibold uppercase tracking-wider", !sidebarOpen && "lg:hidden")}>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn("flex-1 flex flex-col transition-all duration-300 min-h-screen", sidebarOpen ? "lg:ml-64" : "lg:ml-20")}>
        {/* Topbar */}
        <header className="h-20 bg-white/85 backdrop-blur-md border-b border-[#D8D8D5] flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-[#6A6A6A] hover:bg-[#ECECE9]/60 hover:text-[#080808] rounded-[10px] transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 border-l border-[#D8D8D5] pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-[#080808] tracking-wide">{profile?.full_name || 'User Account'}</p>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-0.5">Public Account</p>
              </div>
              <div className="w-10 h-10 bg-[#FF4D00]/10 border border-[#FF4D00]/20 rounded-full flex items-center justify-center text-[#FF4D00] font-bold shadow-sm">
                {profile?.full_name?.charAt(0) || 'U'}
              </div>
            </div>
            <button onClick={() => navigate('/', { replace: true })} className="p-2 text-[#6A6A6A] hover:bg-[#ECECE9]/60 hover:text-[#080808] rounded-full" aria-label="Close Account">
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8 overflow-auto bg-[#F5F5F3]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
