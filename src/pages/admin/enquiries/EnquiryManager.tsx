import React from 'react';
import { SEO } from '../../../components/SEO';

export default function EnquiryManager() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <SEO title="Requests & Leads | Admin Control Center" />
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Quotes & Contact Requests</h1>
        <p className="text-neutral-400">Manage contact requests, quote requests, and scientific requests.</p>
      </div>
      <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 text-center">
        <p className="text-neutral-400">Request management functionality will be implemented here.</p>
      </div>
    </div>
  );
}