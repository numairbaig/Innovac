import React from 'react';
import { SEO } from '../../../components/SEO';

export default function DocumentManager() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <SEO title="Document Management | Admin Control Center" />
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Documents</h1>
        <p className="text-neutral-400">Secure document storage, research files, and SOPs.</p>
      </div>
      <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 text-center">
        <p className="text-neutral-400">Document management functionality will be implemented here.</p>
      </div>
    </div>
  );
}