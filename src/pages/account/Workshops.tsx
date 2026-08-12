import React from 'react';
import { SEO } from '../../components/SEO';

export default function AccountWorkshops() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO title="My Workshops | User Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">My Workshops</h1>
        <p className="text-neutral-500">Track registration details and schedules for enrolled workshops and courses.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <p className="text-neutral-600 text-sm">No registered workshops or educational courses found.</p>
      </div>
    </div>
  );
}
