import React from 'react';
import { SEO } from '../../../components/SEO';
import { useAuth } from '../../../contexts/AuthContext';

export default function Profile() {
  const { profile } = useAuth();
  
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <SEO title="My Profile | Member Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">My Profile</h1>
        <p className="text-neutral-500">View and update your personal information.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
        <p className="text-neutral-500">Profile management functionality will be implemented here.</p>
        {profile && (
            <div className="mt-4 text-left p-4 bg-neutral-50 rounded">
                <p><strong>Name:</strong> {profile.full_name}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Role:</strong> {profile.role}</p>
            </div>
        )}
      </div>
    </div>
  );
}