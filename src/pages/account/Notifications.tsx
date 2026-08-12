import React from 'react';
import { SEO } from '../../components/SEO';

export default function AccountNotifications() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO title="My Notifications | User Portal" />
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Notifications</h1>
        <p className="text-neutral-500">View updates, feedback, and reminders on your submissions.</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <p className="text-neutral-600 text-sm">No new notifications. You are all caught up.</p>
      </div>
    </div>
  );
}
