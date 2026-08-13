import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';

// Lazy load pages for better performance
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Reagents = React.lazy(() => import('./pages/Reagents'));
const Research = React.lazy(() => import('./pages/Research'));
const Internships = React.lazy(() => import('./pages/Internships'));
const Workshops = React.lazy(() => import('./pages/Workshops'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Quote = React.lazy(() => import('./pages/Quote'));
const Confirmed = React.lazy(() => import('./pages/auth/Confirmed'));
const VerificationError = React.lazy(() => import('./pages/auth/VerificationError'));
const Members = React.lazy(() => import('./pages/Members'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const ResearchDetail = React.lazy(() => import('./pages/ResearchDetail'));
const ReagentDetail = React.lazy(() => import('./pages/ReagentDetail'));
const Team = React.lazy(() => import('./pages/Team'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Courses = React.lazy(() => import('./pages/Courses'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Search = React.lazy(() => import('./pages/Search'));
const Terms = React.lazy(() => import('./pages/Terms'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Layouts
const EmployeeLayout = React.lazy(() => import('./components/layout/EmployeeLayout').then(m => ({ default: m.EmployeeLayout })));
const CollaboratorLayout = React.lazy(() => import('./components/layout/CollaboratorLayout').then(m => ({ default: m.CollaboratorLayout })));
const AccountLayout = React.lazy(() => import('./components/layout/AccountLayout').then(m => ({ default: m.AccountLayout })));
const AdminLayout = React.lazy(() => import('./components/layout/AdminLayout').then(m => ({ default: m.AdminLayout })));

// Portal Pages (Shared by employee and collaborator portals)
const PortalSignup = React.lazy(() => import('./pages/portal/Signup'));
const PortalDashboard = React.lazy(() => import('./pages/portal/Dashboard'));
const PortalTasks = React.lazy(() => import('./pages/portal/tasks/Tasks'));
const PortalResearch = React.lazy(() => import('./pages/portal/research/Research'));
const PortalProjects = React.lazy(() => import('./pages/portal/projects/Projects'));
const PortalAttendance = React.lazy(() => import('./pages/portal/attendance/Attendance'));
const PortalDocuments = React.lazy(() => import('./pages/portal/documents/Documents'));
const PortalCalendar = React.lazy(() => import('./pages/portal/calendar/Calendar'));
const PortalMessages = React.lazy(() => import('./pages/portal/messages/Messages'));
const PortalAnnouncements = React.lazy(() => import('./pages/portal/announcements/Announcements'));
const PortalProfile = React.lazy(() => import('./pages/portal/profile/Profile'));
const PortalSettings = React.lazy(() => import('./pages/portal/settings/Settings'));

// Dedicated Login Pages
const PublicLogin = React.lazy(() => import('./pages/public/Login'));
const PublicSignup = React.lazy(() => import('./pages/public/Signup'));
const ForgotPassword = React.lazy(() => import('./pages/public/ForgotPassword'));
const EmployeeLogin = React.lazy(() => import('./pages/employee/Login'));
const CollaboratorLogin = React.lazy(() => import('./pages/collaborator/Login'));

// Account Pages (Public User Portal)
const AccountProfile = React.lazy(() => import('./pages/account/Profile'));
const AccountSettings = React.lazy(() => import('./pages/account/Settings'));
const AccountSecurity = React.lazy(() => import('./pages/account/Security'));
const AccountApplications = React.lazy(() => import('./pages/account/Applications'));
const AccountInternships = React.lazy(() => import('./pages/account/Internships'));
const AccountWorkshops = React.lazy(() => import('./pages/account/Workshops'));
const AccountRequests = React.lazy(() => import('./pages/account/Requests'));
const AccountOrders = React.lazy(() => import('./pages/account/Orders'));
const AccountDocuments = React.lazy(() => import('./pages/account/Documents'));
const AccountMessages = React.lazy(() => import('./pages/account/Messages'));
const AccountNotifications = React.lazy(() => import('./pages/account/Notifications'));

const MyOrder = React.lazy(() => import('./pages/MyOrder'));

// Admin Pages
const AdminLogin = React.lazy(() => import('./pages/admin/Login'));
const AdminForgotPassword = React.lazy(() => import('./pages/admin/ForgotPassword'));
const AdminResetPassword = React.lazy(() => import('./pages/admin/ResetPassword'));
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const AdminWebsite = React.lazy(() => import('./pages/admin/cms/WebsiteManager'));
const AdminUsers = React.lazy(() => import('./pages/admin/users/UserManager'));
const AdminProjects = React.lazy(() => import('./pages/admin/projects/ProjectManager'));
const AdminOperations = React.lazy(() => import('./pages/admin/operations/OperationsManager'));
const AdminDocuments = React.lazy(() => import('./pages/admin/documents/DocumentManager'));
const AdminEnquiries = React.lazy(() => import('./pages/admin/enquiries/EnquiryManager'));
const AdminSettings = React.lazy(() => import('./pages/admin/settings/SettingsManager'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:id', element: <ServiceDetail /> },
      { path: 'research/:topic', element: <ResearchDetail /> },
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
    element: <PublicLogin />
  },
  {
    path: '/signup',
    element: <PublicSignup />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/account',
    children: [
      { index: true, element: <Navigate to="/account/profile" replace /> },
      {
        element: <ProtectedRoute allowedRoles={['PUBLIC_USER', 'SUPER_ADMIN', 'ADMIN']} />,
        children: [
          {
            element: <AccountLayout />,
            children: [
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
          <React.Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin"></div></div>}>
            <RouterProvider router={router} />
          </React.Suspense>
        </OrderCartProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
