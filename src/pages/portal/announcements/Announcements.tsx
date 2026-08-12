import React from 'react';
import { SEO } from '../../../components/SEO';

export default function Announcements() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <SEO title="Announcements | Member Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Announcements</h1>
        <p className="text-neutral-500">Important company updates and research notices.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
        <p className="text-neutral-500">Announcements functionality will be implemented here.</p>
      </div>
    </div>
  );
}