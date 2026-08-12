import React from 'react';
import { SEO } from '../../components/SEO';

export default function AccountApplications() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO title="My Applications | User Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">My Applications</h1>
        <p className="text-neutral-500">Track the status of your submitted applications and forms.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <p className="text-neutral-600 text-sm">No active applications found. Use the public portal to apply for internships or courses.</p>
      </div>
    </div>
  );
}
