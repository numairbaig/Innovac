import React from 'react';
import { SEO } from '../../../components/SEO';

export default function Documents() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <SEO title="Documents | Member Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Documents</h1>
        <p className="text-neutral-500">Access and share research files, reports, and SOPs.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
        <p className="text-neutral-500">Document management functionality will be implemented here.</p>
      </div>
    </div>
  );
}