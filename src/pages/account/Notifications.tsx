import React from 'react';
import { SEO } from '../../components/SEO';
import { Bell, CheckCheck, BookOpen, FileSignature, Inbox, Package, ShieldCheck } from 'lucide-react';

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  type: 'workshop' | 'application' | 'request' | 'order' | 'security';
}

const userNotifications: NotificationItem[] = [
  {
    id: 'NOTIF-01',
    title: 'Workshop Confirmation',
    description: 'You have successfully registered for "PCR Techniques & Gene Amplification".',
    timestamp: '2 hours ago',
    read: false,
    type: 'workshop'
  },
  {
    id: 'NOTIF-02',
    title: 'Internship Application Update',
    description: 'Your application for Molecular Biology Intern is under review by supervisors.',
    timestamp: '1 day ago',
    read: false,
    type: 'application'
  },
  {
    id: 'NOTIF-03',
    title: 'Service Request Acknowledged',
    description: 'Request #REQ-2026-1254 has been assigned to our research team.',
    timestamp: '2 days ago',
    read: true,
    type: 'request'
  },
  {
    id: 'NOTIF-04',
    title: 'Order Status Update',
    description: 'Order #ORD-2026-0897 pricing estimate is now available in your portal.',
    timestamp: '3 days ago',
    read: true,
    type: 'order'
  }
];

export default function AccountNotifications() {
  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'workshop': return <BookOpen size={18} className="text-[#FF4D00]" />;
      case 'application': return <FileSignature size={18} className="text-emerald-600" />;
      case 'request': return <Inbox size={18} className="text-purple-600" />;
      case 'order': return <Package size={18} className="text-blue-600" />;
      case 'security': return <ShieldCheck size={18} className="text-amber-600" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <SEO title="Notifications | INNOVAC BIOTECHNOLOGIES" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">COMMUNICATION</span>
          <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">Notifications</h1>
          <p className="text-neutral-500 text-sm font-light">
            Stay updated with your program applications, orders, and service requests.
          </p>
        </div>

        <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-[#080808] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 self-start sm:self-auto cursor-pointer">
          <CheckCheck size={16} />
          <span>Mark all as read</span>
        </button>
      </div>

      <div className="bg-white rounded-[24px] border border-black/8 shadow-sm p-6 sm:p-8 space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#080808]">Recent Notifications</h3>

        <div className="space-y-4">
          {userNotifications.map(notif => (
            <div
              key={notif.id}
              className={`p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                notif.read 
                  ? 'bg-white border-neutral-100' 
                  : 'bg-orange-50/40 border-orange-200/80 shadow-2xs'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-2xs">
                {getIcon(notif.type)}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#080808]">{notif.title}</h4>
                  <span className="text-[11px] text-neutral-400 font-light">{notif.timestamp}</span>
                </div>
                <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">
                  {notif.description}
                </p>
              </div>

              {!notif.read && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D00] shrink-0 mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
