import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  CheckSquare, 
  FlaskConical, 
  Briefcase, 
  Clock, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X,
  ChevronLeft
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { SEO } from '../SEO';

export function PortalLayout() {
  const { profile, signOut } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    { name: 'Dashboard', href: '/portal/dashboard', icon: LayoutDashboard },
    { name: 'My Tasks', href: '/portal/tasks', icon: CheckSquare },
    { name: 'Research', href: '/portal/research', icon: FlaskConical },
    { name: 'Projects', href: '/portal/projects', icon: Briefcase },
    { name: 'Attendance', href: '/portal/attendance', icon: Clock, roles: ['EMPLOYEE'] },
    { name: 'Documents', href: '/portal/documents', icon: FileText },
    { name: 'Calendar', href: '/portal/calendar', icon: Calendar },
    { name: 'Messages', href: '/portal/messages', icon: MessageSquare },
    { name: 'Announcements', href: '/portal/announcements', icon: Bell },
  ];

  const filteredNav = navigation.filter(item => {
    if (item.roles && profile) {
      return item.roles.includes(profile.role);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      <SEO title="Member Portal | INNOVAC BIOTECHNOLOGIES" />
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white border-r border-neutral-200 flex flex-col transition-all duration-300 fixed inset-y-0 left-0 z-40",
          sidebarOpen ? "w-64 translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-neutral-200">
          <Link to="/portal/dashboard" className={cn("font-bold text-[#050505] truncate", !sidebarOpen && "lg:hidden")}>
            INNOVAC <span className="text-[#FF4D00]">PORTAL</span>
          </Link>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="p-1.5 text-neutral-500 hover:text-[#FF4D00] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            title={sidebarOpen ? "Minimize Sidebar" : "Expand Sidebar"}
            aria-label="Minimize side panel"
          >
            <ChevronLeft size={20} className={cn("transition-transform duration-300", !sidebarOpen && "rotate-180")} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {filteredNav.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    location.pathname === item.href 
                      ? "bg-[#FF4D00]/10 text-[#FF4D00]" 
                      : "text-neutral-600 hover:bg-neutral-100"
                  )}
                  title={!sidebarOpen ? item.name : undefined}
                >
                  <item.icon size={20} className={cn("shrink-0", location.pathname === item.href ? "text-[#FF4D00]" : "text-neutral-500")} />
                  <span className={cn("truncate font-medium text-sm", !sidebarOpen && "lg:hidden")}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-neutral-200 space-y-1">
          <Link
            to="/portal/profile"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
            title={!sidebarOpen ? "Profile" : undefined}
          >
            <User size={20} className="shrink-0 text-neutral-500" />
            <span className={cn("truncate font-medium text-sm", !sidebarOpen && "lg:hidden")}>Profile</span>
          </Link>
          <Link
            to="/portal/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
            title={!sidebarOpen ? "Settings" : undefined}
          >
            <Settings size={20} className="shrink-0 text-neutral-500" />
            <span className={cn("truncate font-medium text-sm", !sidebarOpen && "lg:hidden")}>Settings</span>
          </Link>
          <button
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-red-600 hover:bg-red-50 transition-colors"
            title={!sidebarOpen ? "Log Out" : undefined}
          >
            <LogOut size={20} className="shrink-0 text-red-500" />
            <span className={cn("truncate font-medium text-sm", !sidebarOpen && "lg:hidden")}>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn("flex-1 flex flex-col transition-all duration-300", sidebarOpen ? "lg:ml-64" : "lg:ml-20")}>
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-4 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-md"
            >
              <Menu size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF4D00] rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-neutral-200 pl-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-neutral-900">{profile?.full_name || 'Loading...'}</p>
                <p className="text-xs text-neutral-500">{profile?.role}</p>
              </div>
              <div className="w-9 h-9 bg-[#FF4D00]/10 rounded-full flex items-center justify-center text-[#FF4D00] font-bold">
                {profile?.full_name?.charAt(0) || 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}