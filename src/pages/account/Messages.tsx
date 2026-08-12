import React from 'react';
import { SEO } from '../../components/SEO';

export default function AccountMessages() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO title="My Messages | User Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Messages</h1>
        <p className="text-neutral-500">Communicate directly with the support and administration teams.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <p className="text-neutral-600 text-sm">No active conversation history. Create a new request to start a discussion thread.</p>
      </div>
    </div>
  );
}
