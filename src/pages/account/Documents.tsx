import React from 'react';
import { SEO } from '../../components/SEO';

export default function AccountDocuments() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO title="My Documents | User Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">My Documents</h1>
        <p className="text-neutral-500">Access files, research sheets, and document outputs shared with you.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <p className="text-neutral-600 text-sm">No documents are currently shared with your account.</p>
      </div>
    </div>
  );
}
