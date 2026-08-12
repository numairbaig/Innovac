import React from 'react';
import { SEO } from '../../../components/SEO';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <SEO title="Projects | Member Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Projects</h1>
        <p className="text-neutral-500">Collaborate on active projects and track milestones.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
        <p className="text-neutral-500">Project collaboration functionality will be implemented here.</p>
      </div>
    </div>
  );
}