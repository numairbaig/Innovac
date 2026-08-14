import React from 'react';
import { SEO } from '../../components/SEO';
import { Inbox, Plus, Clock, CheckCircle2, FlaskConical, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RequestItem {
  id: string;
  type: string;
  submittedDate: string;
  status: 'Submitted' | 'In Review' | 'Processing' | 'Completed';
  lastUpdate: string;
}

const userRequests: RequestItem[] = [
  {
    id: 'REQ-2026-1254',
    type: 'Biotechnology Consortia Customization',
    submittedDate: '12 Aug 2026',
    status: 'In Review',
    lastUpdate: '2 hours ago'
  },
  {
    id: 'REQ-2026-0982',
    type: 'Primer Design & Molecular Docking Service',
    submittedDate: '28 Jul 2026',
    status: 'Completed',
    lastUpdate: '3 days ago'
  }
];

export default function AccountRequests() {
  const getStatusBadge = (status: RequestItem['status']) => {
    switch (status) {
      case 'Submitted':
        return <span className="px-3 py-1 bg-neutral-100 text-neutral-700 border border-neutral-200 text-xs font-bold rounded-full">Submitted</span>;
      case 'In Review':
        return <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold rounded-full">In Review</span>;
      case 'Processing':
        return <span className="px-3 py-1 bg-orange-50 text-[#FF4D00] border border-orange-200 text-xs font-bold rounded-full">Processing</span>;
      case 'Completed':
        return <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full">Completed</span>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <SEO title="My Service Requests | INNOVAC BIOTECHNOLOGIES" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">REQUESTS</span>
          <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">Service & Research Requests</h1>
          <p className="text-neutral-500 text-sm font-light">
            Track your submitted biological research and customized service enquiries.
          </p>
        </div>

        <Link
          to="/quote"
          className="px-5 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm self-start sm:self-auto flex items-center gap-2"
        >
          <Plus size={16} />
          <span>NEW REQUEST</span>
        </Link>
      </div>

      <div className="space-y-4">
        {userRequests.map(req => (
          <div
            key={req.id}
            className="bg-white p-6 rounded-[20px] border border-black/8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                <FlaskConical size={20} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#FF4D00]">{req.id}</span>
                  <span className="text-xs text-neutral-400 font-light">• Submitted {req.submittedDate}</span>
                </div>
                <h3 className="text-base font-bold text-[#080808]">{req.type}</h3>
                <span className="text-xs text-neutral-400 font-light block">Last Update: {req.lastUpdate}</span>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-100">
              {getStatusBadge(req.status)}
              <button className="text-xs font-bold text-[#FF4D00] hover:underline flex items-center gap-1 cursor-pointer">
                <span>View Details</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
