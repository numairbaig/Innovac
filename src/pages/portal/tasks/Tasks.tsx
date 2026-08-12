import React from 'react';
import { SEO } from '../../../components/SEO';

export default function Tasks() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <SEO title="My Tasks | Member Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">My Tasks</h1>
        <p className="text-neutral-500">Manage your assigned tasks and update progress.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
        <p className="text-neutral-500">Task management functionality will be implemented here.</p>
      </div>
    </div>
  );
}