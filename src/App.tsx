import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Layout } from './components/layout/Layout';
import { RouteErrorElement } from './components/RouteErrorElement';
import { lazyWithRetry } from './utils/lazyWithRetry';
import Home from './pages/Home';

// Lazy load pages with auto-retry and chunk hash refresh support
const About = lazyWithRetry(() => import('./pages/About'));
const Services = lazyWithRetry(() => import('./pages/Services'));
const Reagents = lazyWithRetry(() => import('./pages/Reagents'));
const Research = lazyWithRetry(() => import('./pages/Research'));
const Internships = lazyWithRetry(() => import('./pages/Internships'));
const Workshops = lazyWithRetry(() => import('./pages/Workshops'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const Quote = lazyWithRetry(() => import('./pages/Quote'));
const Confirmed = lazyWithRetry(() => import('./pages/auth/Confirmed'));
const VerificationError = lazyWithRetry(() => import('./pages/auth/VerificationError'));
const Members = lazyWithRetry(() => import('./pages/Members'));
const ServiceDetail = lazyWithRetry(() => import('./pages/ServiceDetail'));
const ResearchDetail = lazyWithRetry(() => import('./pages/ResearchDetail'));
const ReagentDetail = lazyWithRetry(() => import('./pages/ReagentDetail'));
const Team = lazyWithRetry(() => import('./pages/Team'));
const Careers = lazyWithRetry(() => import('./pages/Careers'));
const Courses = lazyWithRetry(() => import('./pages/Courses'));
const Privacy = lazyWithRetry(() => import('./pages/Privacy'));
const Search = lazyWithRetry(() => import('./pages/Search'));
const Terms = lazyWithRetry(() => import('./pages/Terms'));
const NotFound = lazyWithRetry(() => import('./pages/NotFound'));

// Layouts
const EmployeeLayout = lazyWithRetry(() => import('./components/layout/EmployeeLayout').then(m => ({ default: m.EmployeeLayout })));
const CollaboratorLayout = lazyWithRetry(() => import('./components/layout/CollaboratorLayout').then(m => ({ default: m.CollaboratorLayout })));
const AccountLayout = lazyWithRetry(() => import('./components/layout/AccountLayout').then(m => ({ default: m.AccountLayout })));
const AdminLayout = lazyWithRetry(() => import('./components/layout/AdminLayout').then(m => ({ default: m.AdminLayout })));

// Portal Pages
const PortalSignup = lazyWithRetry(() => import('./pages/portal/Signup'));
const PortalDashboard = lazyWithRetry(() => import('./pages/portal/Dashboard'));
const PortalTasks = lazyWithRetry(() => import('./pages/portal/tasks/Tasks'));
const PortalResearch = lazyWithRetry(() => import('./pages/portal/research/Research'));
const PortalProjects = lazyWithRetry(() => import('./pages/portal/projects/Projects'));
const PortalAttendance = lazyWithRetry(() => import('./pages/portal/attendance/Attendance'));
const PortalDocuments = lazyWithRetry(() => import('./pages/portal/documents/Documents'));
const PortalCalendar = lazyWithRetry(() => import('./pages/portal/calendar/Calendar'));
const PortalMessages = lazyWithRetry(() => import('./pages/portal/messages/Messages'));
const PortalAnnouncements = lazyWithRetry(() => import('./pages/portal/announcements/Announcements'));
const PortalProfile = lazyWithRetry(() => import('./pages/portal/profile/Profile'));
const PortalSettings = lazyWithRetry(() => import('./pages/portal/settings/Settings'));

// Dedicated Login Pages
const PublicLogin = lazyWithRetry(() => import('./pages/public/Login'));
const PublicSignup = lazyWithRetry(() => import('./pages/public/Signup'));
const ForgotPassword = lazyWithRetry(() => import('./pages/public/ForgotPassword'));
const EmployeeLogin = lazyWithRetry(() => import('./pages/employee/Login'));
const CollaboratorLogin = lazyWithRetry(() => import('./pages/collaborator/Login'));

// Account Pages
const AccountOverview = lazyWithRetry(() => import('./pages/account/Overview'));
const AccountProfile = lazyWithRetry(() => import('./pages/account/Profile'));
const AccountSettings = lazyWithRetry(() => import('./pages/account/Settings'));
const AccountSecurity = lazyWithRetry(() => import('./pages/account/Security'));
const AccountApplications = lazyWithRetry(() => import('./pages/account/Applications'));
const AccountInternships = lazyWithRetry(() => import('./pages/account/Internships'));
const AccountWorkshops = lazyWithRetry(() => import('./pages/account/Workshops'));
const AccountRequests = lazyWithRetry(() => import('./pages/account/Requests'));
const AccountOrders = lazyWithRetry(() => import('./pages/account/Orders'));
const AccountDocuments = lazyWithRetry(() => import('./pages/account/Documents'));
const AccountMessages = lazyWithRetry(() => import('./pages/account/Messages'));
const AccountNotifications = lazyWithRetry(() => import('./pages/account/Notifications'));

const MyOrder = lazyWithRetry(() => import('./pages/MyOrder'));

// Admin Pages
const AdminLogin = lazyWithRetry(() => import('./pages/admin/Login'));
const AdminForgotPassword = lazyWithRetry(() => import('./pages/admin/ForgotPassword'));
const AdminResetPassword = lazyWithRetry(() => import('./pages/admin/ResetPassword'));
const AdminDashboard = lazyWithRetry(() => import('./pages/admin/Dashboard'));
const AdminWebsite = lazyWithRetry(() => import('./pages/admin/cms/WebsiteManager'));
const AdminUsers = lazyWithRetry(() => import('./pages/admin/users/UserManager'));
const AdminProjects = lazyWithRetry(() => import('./pages/admin/projects/ProjectManager'));
const AdminOperations = lazyWithRetry(() => import('./pages/admin/operations/OperationsManager'));
const AdminDocuments = lazyWithRetry(() => import('./pages/admin/documents/DocumentManager'));
const AdminEnquiries = lazyWithRetry(() => import('./pages/admin/enquiries/EnquiryManager'));
const AdminSettings = lazyWithRetry(() => import('./pages/admin/settings/SettingsManager'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorElement />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:id', element: <ServiceDetail /> },
      { path: 'services/:category/:sub', element: <ServiceDetail /> },
      { path: 'research/:topic', element: <ResearchDetail /> },
      { path: 'research/:topic/:subtopic', element: <ResearchDetail /> },
      { path: 'reagents/:slug', element: <ReagentDetail /> },
      { path: 'team', element: <Team /> },
      { path: 'careers', element: <Careers /> },
      { path: 'courses', element: <Courses /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'search', element: <Search /> },
      { path: 'terms', element: <Terms /> },
      { path: 'reagents', element: <Reagents /> },
      { path: 'research', element: <Research /> },
      { path: 'internships', element: <Internships /> },
      { path: 'workshops', element: <Workshops /> },
      { path: 'contact', element: <Contact /> },
      { path: 'enquire', element: <Navigate to="/quote" replace /> },
      { path: 'auth/confirmed', element: <Confirmed /> },
      { path: 'auth/verification-error', element: <VerificationError /> },
      { path: 'quote', element: <Quote /> },
      { path: 'my-order', element: <MyOrder /> },
      { path: 'members', element: <Members /> },
      { path: 'employees', element: <Navigate to="/members" replace /> },
      { path: 'collaborators', element: <Navigate to="/members" replace /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/login',
    element: <PublicLogin />,
    errorElement: <RouteErrorElement />
  },
  {
    path: '/signup',
    element: <PublicSignup />,
    errorElement: <RouteErrorElement />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    errorElement: <RouteErrorElement />
  },
  {
    path: '/account',
    errorElement: <RouteErrorElement />,
    children: [
      { index: true, element: <Navigate to="/account/overview" replace /> },
      {
        element: <ProtectedRoute allowedRoles={['PUBLIC_USER', 'SUPER_ADMIN', 'ADMIN']} />,
        children: [
          {
            element: <AccountLayout />,
            children: [
              { path: 'overview', element: <AccountOverview /> },
              { path: 'profile', element: <AccountProfile /> },
              { path: 'settings', element: <AccountSettings /> },
              { path: 'security', element: <AccountSecurity /> },
              { path: 'applications', element: <AccountApplications /> },
              { path: 'internships', element: <AccountInternships /> },
              { path: 'workshops', element: <AccountWorkshops /> },
              { path: 'requests', element: <AccountRequests /> },
              { path: 'orders', element: <AccountOrders /> },
              { path: 'documents', element: <AccountDocuments /> },
              { path: 'messages', element: <AccountMessages /> },
              { path: 'notifications', element: <AccountNotifications /> },
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/employee',
    errorElement: <RouteErrorElement />,
    children: [
      { index: true, element: <Navigate to="/employee/login" replace /> },
      { path: 'login', element: <EmployeeLogin /> },
      { path: 'signup', element: <PortalSignup /> },
      { 
        element: <ProtectedRoute allowedRoles={['EMPLOYEE', 'ADMIN', 'SUPER_ADMIN', 'SUPERVISOR']} />,
        children: [
          {
            element: <EmployeeLayout />,
            children: [
              { path: 'dashboard', element: <PortalDashboard /> },
              { path: 'profile', element: <PortalProfile /> },
              { path: 'tasks', element: <PortalTasks /> },
              { path: 'projects', element: <PortalProjects /> },
              { path: 'research', element: <PortalResearch /> },
              { path: 'attendance', element: <PortalAttendance /> },
              { path: 'documents', element: <PortalDocuments /> },
              { path: 'calendar', element: <PortalCalendar /> },
              { path: 'messages', element: <PortalMessages /> },
              { path: 'notifications', element: <PortalAnnouncements /> },
              { path: 'settings', element: <PortalSettings /> },
              { path: 'security', element: <AccountSecurity /> },
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/collaborator',
    errorElement: <RouteErrorElement />,
    children: [
      { index: true, element: <Navigate to="/collaborator/login" replace /> },
      { path: 'login', element: <CollaboratorLogin /> },
      { path: 'signup', element: <PortalSignup /> },
      { 
        element: <ProtectedRoute allowedRoles={['COLLABORATOR', 'ADMIN', 'SUPER_ADMIN']} />,
        children: [
          {
            element: <CollaboratorLayout />,
            children: [
              { path: 'dashboard', element: <PortalDashboard /> },
              { path: 'profile', element: <PortalProfile /> },
              { path: 'projects', element: <PortalProjects /> },
              { path: 'research', element: <PortalResearch /> },
              { path: 'tasks', element: <PortalTasks /> },
              { path: 'documents', element: <PortalDocuments /> },
              { path: 'calendar', element: <PortalCalendar /> },
              { path: 'messages', element: <PortalMessages /> },
              { path: 'notifications', element: <PortalAnnouncements /> },
              { path: 'settings', element: <PortalSettings /> },
              { path: 'security', element: <AccountSecurity /> },
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    errorElement: <RouteErrorElement />,
    children: [
      { index: true, element: <Navigate to="/admin/login" replace /> },
      { path: 'login', element: <AdminLogin /> },
      { path: 'forgot-password', element: <AdminForgotPassword /> },
      { path: 'reset-password', element: <AdminResetPassword /> },
      {
        element: <ProtectedRoute allowedRoles={['ADMIN', 'SUPER_ADMIN']} />,
        children: [
          {
            element: <AdminLayout />,
            children: [
              { path: 'dashboard', element: <AdminDashboard /> },
              { path: 'website', element: <AdminWebsite /> },
              { path: 'website/pages', element: <AdminWebsite /> },
              { path: 'website/sections', element: <AdminWebsite /> },
              { path: 'website/media', element: <AdminWebsite /> },
              { path: 'website/seo', element: <AdminWebsite /> },
              { path: 'services', element: <AdminWebsite /> },
              { path: 'research', element: <AdminWebsite /> },
              { path: 'reagents', element: <AdminWebsite /> },
              { path: 'internships', element: <AdminWebsite /> },
              { path: 'workshops', element: <AdminWebsite /> },
              { path: 'about', element: <AdminWebsite /> },
              { path: 'contact', element: <AdminWebsite /> },
              { path: 'users', element: <AdminUsers /> },
              { path: 'employees', element: <AdminUsers /> },
              { path: 'collaborators', element: <AdminUsers /> },
              { path: 'admins', element: <AdminUsers /> },
              { path: 'employees/:id', element: <AdminUsers /> },
              { path: 'employees/:id/attendance', element: <AdminUsers /> },
              { path: 'employees/:id/tasks', element: <AdminUsers /> },
              { path: 'employees/:id/projects', element: <AdminUsers /> },
              { path: 'employees/:id/research', element: <AdminUsers /> },
              { path: 'employees/:id/documents', element: <AdminUsers /> },
              { path: 'collaborators/:id', element: <AdminUsers /> },
              { path: 'collaborators/:id/projects', element: <AdminUsers /> },
              { path: 'collaborators/:id/tasks', element: <AdminUsers /> },
              { path: 'collaborators/:id/research', element: <AdminUsers /> },
              { path: 'collaborators/:id/documents', element: <AdminUsers /> },
              { path: 'projects', element: <AdminProjects /> },
              { path: 'tasks', element: <AdminOperations /> },
              { path: 'research', element: <AdminOperations /> },
              { path: 'attendance', element: <AdminOperations /> },
              { path: 'documents', element: <AdminOperations /> },
              { path: 'calendar', element: <AdminOperations /> },
              { path: 'internship-applications', element: <AdminEnquiries /> },
              { path: 'workshop-registrations', element: <AdminEnquiries /> },
              { path: 'service-requests', element: <AdminEnquiries /> },
              { path: 'quote-requests', element: <AdminEnquiries /> },
              { path: 'contact-enquiries', element: <AdminEnquiries /> },
              { path: 'messages', element: <AdminEnquiries /> },
              { path: 'notifications', element: <AdminEnquiries /> },
              { path: 'announcements', element: <AdminEnquiries /> },
              { path: 'roles', element: <AdminSettings /> },
              { path: 'permissions', element: <AdminSettings /> },
              { path: 'audit-logs', element: <AdminSettings /> },
              { path: 'sessions', element: <AdminSettings /> },
              { path: 'settings', element: <AdminSettings /> },
              { path: 'profile', element: <AdminSettings /> },
            ]
          }
        ]
      }
    ]
  }
]);

import { OrderCartProvider } from './contexts/OrderCartContext';

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <OrderCartProvider>
          <React.Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-[#FF4D00] border-t-transparent animate-spin"></div></div>}>
            <RouterProvider router={router} />
          </React.Suspense>
        </OrderCartProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
