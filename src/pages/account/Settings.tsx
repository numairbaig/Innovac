import React from 'react';
import { SEO } from '../../components/SEO';

export default function AccountSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO title="Account Settings | User Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Account Settings</h1>
        <p className="text-neutral-500">Configure notifications and system integration preferences.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <p className="text-neutral-600 text-sm">Account settings, configurations, and communication parameters are fully manageable here.</p>
      </div>
    </div>
  );
}
