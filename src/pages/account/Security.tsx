import React from 'react';
import { SEO } from '../../components/SEO';

export default function AccountSecurity() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO title="Account Security | User Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Account Security</h1>
        <p className="text-neutral-500">Update your password, manage active sessions, and configure MFA preferences.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <p className="text-neutral-600 text-sm">Security credentials, access keys, and log histories are managed in this view.</p>
      </div>
    </div>
  );
}
