import React from 'react';
import { SEO } from '../../components/SEO';

export default function AccountInternships() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO title="My Internships | User Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">My Internships</h1>
        <p className="text-neutral-500">View and track your internship applications and assignments.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <p className="text-neutral-600 text-sm">No active internship applications or records are registered on your account.</p>
      </div>
    </div>
  );
}
