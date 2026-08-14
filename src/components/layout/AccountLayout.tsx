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
  ChevronDown,
  Search,
  ChevronRight,
  FlaskConical,
  ExternalLink,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { SEO } from '../SEO';
import { AnimatePresence, motion } from 'framer-motion';

export function AccountLayout() {
  const { profile, user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const userName = profile?.full_name || user?.email?.split('@')[0] || 'User Account';
  const userInitials = userName.charAt(0).toUpperCase();

  const navGroups = [
    {
      group: 'MAIN',
      items: [
        { name: 'Overview', href: '/account/overview', icon: LayoutDashboard },
        { name: 'Profile', href: '/account/profile', icon: User },
        { name: 'Applications', href: '/account/applications', icon: FileSignature },
        { name: 'My Orders', href: '/account/orders', icon: Package },
        { name: 'Requests', href: '/account/requests', icon: Inbox },
      ]
    },
    {
      group: 'LEARNING & PROGRAMS',
      items: [
        { name: 'Internships', href: '/account/internships', icon: Award },
        { name: 'Workshops', href: '/account/workshops', icon: BookOpen },
        { name: 'Documents / Certificates', href: '/account/documents', icon: FileText },
      ]
    },
    {
      group: 'COMMUNICATION',
      items: [
        { name: 'Messages', href: '/account/messages', icon: MessageSquare, badge: 3 },
        { name: 'Notifications', href: '/account/notifications', icon: Bell, badge: 7 },
      ]
    },
    {
      group: 'ACCOUNT',
      items: [
        { name: 'Settings', href: '/account/settings', icon: Settings },
        { name: 'Security', href: '/account/security', icon: ShieldAlert },
      ]
    }
  ];

  // Helper to determine active route
  const isItemActive = (href: string) => {
    if (href === '/account/overview' && (location.pathname === '/account' || location.pathname === '/account/overview')) {
      return true;
    }
    return location.pathname === href;
  };

  // Get current page title for topbar
  const getPageTitle = () => {
    const allItems = navGroups.flatMap(g => g.items);
    const matched = allItems.find(item => isItemActive(item.href));
    return matched ? matched.name : 'Dashboard';
  };

  const handleLogoutConfirm = async () => {
    setLogoutModalOpen(false);
    await signOut();
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex text-[#080808] font-sans antialiased">
      <SEO title="User Portal | INNOVAC BIOTECHNOLOGIES" />

      {/* ========================================================================= */}
      {/* 1. DESKTOP PERSISTENT SIDEBAR & MOBILE SLIDE-OUT DRAWER                   */}
      {/* ========================================================================= */}

      {/* Mobile Drawer Overlay Backdrop */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileDrawerOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <aside
        className={cn(
          "bg-[#06140F] text-white flex flex-col fixed inset-y-0 left-0 z-50 transition-all duration-300 w-[270px] shadow-2xl border-r border-[#1A3B2B]",
          mobileDrawerOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Subtle Decorative DNA Background Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

        {/* Sidebar Header */}
        <div className="h-[72px] flex items-center justify-between px-6 border-b border-[#1A3B2B] relative z-10 shrink-0">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-[#FF4D00] flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(255,77,0,0.4)]">
              <FlaskConical size={18} />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white text-base leading-none block">
                INNOVAC <span className="text-[#FF4D00]">ACCOUNT</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#20C77A] uppercase mt-0.5 block">
                USER PORTAL
              </span>
            </div>
          </Link>

          {/* Close button on mobile drawer */}
          <button
            onClick={() => setMobileDrawerOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg lg:hidden"
            aria-label="Close Navigation"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6 relative z-10 custom-scrollbar">
          {navGroups.map((group) => (
            <div key={group.group} className="space-y-1.5">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#20C77A]/80 uppercase px-3 block mb-2">
                {group.group}
              </span>

              <ul className="space-y-1">
                {group.items.map((item) => {
                  const active = isItemActive(item.href);
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileDrawerOpen(false)}
                        className={cn(
                          "relative flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 group text-xs font-semibold tracking-wide",
                          active
                            ? "bg-[#FF4D00]/15 text-[#FF4D00] border border-[#FF4D00]/40 shadow-[0_0_15px_rgba(255,77,0,0.15)]"
                            : "text-neutral-300 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {/* Active Left Indicator Bar */}
                        {active && (
                          <motion.span
                            layoutId="activeSideIndicator"
                            className="absolute left-0 top-2.5 bottom-2.5 w-1 rounded-r-full bg-[#FF4D00]"
                          />
                        )}

                        <div className="flex items-center gap-3">
                          <item.icon
                            size={18}
                            className={cn(
                              "shrink-0 transition-transform duration-200 group-hover:scale-110",
                              active ? "text-[#FF4D00]" : "text-neutral-400 group-hover:text-white"
                            )}
                          />
                          <span>{item.name}</span>
                        </div>

                        {/* Optional Notification/Message Badges */}
                        {item.badge && (
                          <span
                            className={cn(
                              "px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0",
                              active ? "bg-[#FF4D00] text-white" : "bg-[#FF4D00]/80 text-white"
                            )}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Sidebar Footer Log Out Button */}
        <div className="p-4 border-t border-[#1A3B2B] relative z-10 shrink-0">
          <button
            onClick={() => setLogoutModalOpen(true)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 text-neutral-300 hover:text-red-400 transition-all duration-200 text-xs font-semibold tracking-wider uppercase group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <LogOut size={18} className="text-red-400 group-hover:rotate-12 transition-transform" />
              <span>Log Out</span>
            </div>
            <ChevronRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MAIN APPLICATION CONTENT AREA                                         */}
      {/* ========================================================================= */}

      <div className="flex-1 flex flex-col min-h-screen lg:ml-[270px] transition-all duration-300">
        
        {/* Top Header Bar */}
        <header className="h-[72px] bg-white border-b border-black/8 sticky top-0 z-30 px-6 sm:px-8 flex items-center justify-between shadow-xs">
          
          {/* Left: Mobile Drawer Button & Breadcrumbs */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="p-2 rounded-xl border border-neutral-200 text-neutral-600 hover:bg-neutral-100 lg:hidden cursor-pointer"
              aria-label="Open Navigation Drawer"
            >
              <Menu size={20} />
            </button>

            <div>
              <h2 className="text-lg font-bold text-[#080808] leading-tight">
                {getPageTitle()}
              </h2>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-light hidden sm:flex">
                <Link to="/" className="hover:text-[#FF4D00] transition-colors">Home</Link>
                <span>›</span>
                <span className="text-[#FF4D00] font-medium">{getPageTitle()}</span>
              </div>
            </div>
          </div>

          {/* Right: Search, Notifications & User Dropdown */}
          <div className="flex items-center gap-4">
            
            {/* Search Input Box */}
            <div className="relative hidden md:block w-64 lg:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search anything... ⌘K"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-neutral-100/80 border border-neutral-200 rounded-xl text-xs text-[#080808] placeholder:text-neutral-400 focus:outline-none focus:border-[#FF4D00] focus:bg-white transition-all"
              />
            </div>

            {/* Notification Bell */}
            <Link
              to="/account/notifications"
              className="relative p-2.5 rounded-xl border border-neutral-200/80 text-neutral-600 hover:bg-neutral-100 hover:text-[#FF4D00] transition-colors"
              title="Notifications"
            >
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF4D00] text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                7
              </span>
            </Link>

            {/* User Profile Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-3 p-1.5 rounded-xl border border-neutral-200/80 hover:border-neutral-300 bg-neutral-50/50 hover:bg-white transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF4D00]/10 border border-[#FF4D00]/30 text-[#FF4D00] font-bold flex items-center justify-center text-sm shadow-xs">
                  {userInitials}
                </div>
                <div className="text-left hidden sm:block">
                  <span className="text-xs font-bold text-[#080808] block leading-none truncate max-w-[120px]">
                    {userName}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-light block leading-none mt-1">
                    Public User
                  </span>
                </div>
                <ChevronDown size={14} className="text-neutral-400" />
              </button>

              {/* Dropdown Card */}
              <AnimatePresence>
                {userDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setUserDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-56 bg-white border border-black/10 rounded-2xl shadow-xl z-50 p-2 space-y-1"
                    >
                      <div className="p-3 border-b border-neutral-100 mb-1">
                        <p className="text-xs font-bold text-[#080808]">{userName}</p>
                        <p className="text-[11px] text-neutral-400 truncate">{user?.email}</p>
                      </div>

                      <Link
                        to="/account/profile"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-neutral-700 hover:bg-neutral-100 hover:text-[#080808] transition-colors"
                      >
                        <User size={16} className="text-neutral-500" />
                        <span>View Profile</span>
                      </Link>

                      <Link
                        to="/account/settings"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-neutral-700 hover:bg-neutral-100 hover:text-[#080808] transition-colors"
                      >
                        <Settings size={16} className="text-neutral-500" />
                        <span>Account Settings</span>
                      </Link>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          setLogoutModalOpen(true);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer"
                      >
                        <LogOut size={16} className="text-red-500" />
                        <span>Log Out</span>
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

          </div>
        </header>

        {/* Main Content Render Area */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* ========================================================================= */}
      {/* 3. LOG OUT CONFIRMATION MODAL                                             */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {logoutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLogoutModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[24px] border border-black/10 p-6 sm:p-8 max-w-md w-full relative z-10 shadow-2xl space-y-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center mx-auto shadow-sm">
                <LogOut size={26} />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-[#080808]">Sign out of your account?</h3>
                <p className="text-neutral-500 text-xs font-light leading-relaxed">
                  Are you sure you want to log out? You can sign back in at any time to access your portal.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setLogoutModalOpen(false)}
                  className="py-3 px-4 rounded-xl border border-neutral-300 hover:border-neutral-400 text-neutral-700 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleLogoutConfirm}
                  className="py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
