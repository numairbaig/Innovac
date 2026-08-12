import React from 'react';
import { SEO } from '../../components/SEO';

export default function AccountRequests() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO title="My Requests & Quotes | User Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">My Requests & Quotes</h1>
        <p className="text-neutral-500">Track quotes and reagent supply requests submitted to the company.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <p className="text-neutral-600 text-sm">No active quote or service requests found.</p>
      </div>
    </div>
  );
}
