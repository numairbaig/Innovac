import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Role } from '../../lib/supabase';

interface ProtectedRouteProps {
  allowedRoles?: Role[];
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="w-8 h-8 border-4 border-[#FF4D00] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    // Redirect to the appropriate login page based on the current path
    let loginPath = '/login';
    if (location.pathname.startsWith('/admin')) {
      loginPath = '/admin/login';
    } else if (location.pathname.startsWith('/employee')) {
      loginPath = '/employee/login';
    } else if (location.pathname.startsWith('/collaborator')) {
      loginPath = '/collaborator/login';
    }
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  if (allowedRoles && profile) {
    if (!allowedRoles.includes(profile.role)) {
      // User doesn't have required role
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 text-center px-4">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Access Denied</h1>
          <p className="text-neutral-600 mb-6">You do not have permission to view this page.</p>
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-[#FF4D00] text-white rounded font-medium hover:bg-[#E64500] transition-colors"
          >
            Go Back
          </button>
        </div>
      );
    }
  }

  return <Outlet />;
}
