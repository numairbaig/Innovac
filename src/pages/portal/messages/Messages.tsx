import React from 'react';
import { SEO } from '../../../components/SEO';

export default function Messages() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <SEO title="Messages | Member Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Messages</h1>
        <p className="text-neutral-500">Communicate securely with your team and supervisors.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
        <p className="text-neutral-500">Internal messaging functionality will be implemented here.</p>
      </div>
    </div>
  );
}