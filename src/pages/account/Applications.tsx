import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  FileSignature, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  FileText 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ApplicationItem {
  id: string;
  program: string;
  category: string;
  appliedDate: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Completed';
  type: 'Internship' | 'Workshop' | 'Research';
}

const sampleApplications: ApplicationItem[] = [
  {
    id: 'APP-2026-081',
    program: 'Molecular Biology Intern',
    category: 'Internship',
    appliedDate: '12 Aug 2026',
    status: 'Pending',
    type: 'Internship'
  },
  {
    id: 'APP-2026-074',
    program: 'PCR Techniques & Gene Amplification Workshop',
    category: 'Workshop',
    appliedDate: '01 Aug 2026',
    status: 'Approved',
    type: 'Workshop'
  },
  {
    id: 'APP-2026-052',
    program: 'Bioinformatics & Molecular Docking Training',
    category: 'Workshop',
    appliedDate: '15 Jul 2026',
    status: 'Completed',
    type: 'Workshop'
  },
  {
    id: 'APP-2026-039',
    program: 'Industrial Microbial Biotechnology Fellowship',
    category: 'Internship',
    appliedDate: '28 Jun 2026',
    status: 'Rejected',
    type: 'Internship'
  }
];

export default function AccountApplications() {
  const [activeTab, setActiveTab] = useState<'All' | 'Pending' | 'Approved' | 'Rejected' | 'Completed'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApplications = sampleApplications.filter(item => {
    const matchesTab = activeTab === 'All' || item.status === activeTab;
    const matchesSearch = item.program.toLowerCase().includes(searchQuery.toLowerCase()) || item.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getStatusBadge = (status: ApplicationItem['status']) => {
    switch (status) {
      case 'Pending':
        return <span className="px-3 py-1 bg-orange-50 text-[#FF4D00] border border-orange-200 text-xs font-bold rounded-full inline-flex items-center gap-1.5"><Clock size={12} /> Pending Review</span>;
      case 'Approved':
        return <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full inline-flex items-center gap-1.5"><CheckCircle2 size={12} /> Approved</span>;
      case 'Completed':
        return <span className="px-3 py-1 bg-neutral-100 text-neutral-700 border border-neutral-200 text-xs font-bold rounded-full inline-flex items-center gap-1.5"><CheckCircle2 size={12} /> Completed</span>;
      case 'Rejected':
        return <span className="px-3 py-1 bg-red-50 text-red-700 border border-red-200 text-xs font-bold rounded-full inline-flex items-center gap-1.5"><XCircle size={12} /> Rejected</span>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <SEO title="My Applications | INNOVAC BIOTECHNOLOGIES" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">APPLICATIONS</span>
          <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">My Applications</h1>
          <p className="text-neutral-500 text-sm font-light">
            Track and manage your internship and program applications.
          </p>
        </div>

        <Link
          to="/internships"
          className="px-5 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm self-start sm:self-auto flex items-center gap-2"
        >
          <span>Explore Programs</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Filters & Search Header */}
      <div className="bg-white p-4 rounded-[20px] border border-black/8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Status Tabs */}
        <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl w-full md:w-auto overflow-x-auto">
          {(['All', 'Pending', 'Approved', 'Rejected', 'Completed'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-white text-[#080808] shadow-xs' 
                  : 'text-neutral-500 hover:text-[#080808]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-64">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-[#080808] placeholder:text-neutral-400 focus:outline-none focus:border-[#FF4D00] transition-all"
          />
        </div>
      </div>

      {/* Applications List */}
      {filteredApplications.length === 0 ? (
        <div className="bg-white rounded-[24px] border border-black/8 p-16 text-center shadow-sm space-y-4">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-400">
            <FileSignature size={28} />
          </div>
          <h3 className="text-lg font-bold text-[#080808]">No applications found</h3>
          <p className="text-xs text-neutral-500 font-light max-w-sm mx-auto">
            You haven't submitted any applications under this filter. Explore available opportunities to get started.
          </p>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF4D00] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#E64500] transition-colors"
          >
            <span>Browse Internships</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredApplications.map(app => (
            <div
              key={app.id}
              className="bg-white p-6 rounded-[20px] border border-black/8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#FF4D00] bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
                    {app.id}
                  </span>
                  <span className="text-xs text-neutral-400 font-light flex items-center gap-1">
                    <Calendar size={12} /> {app.appliedDate}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#080808]">{app.program}</h3>
                <span className="text-xs text-neutral-500 font-light block">
                  Category: {app.category}
                </span>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-100">
                {getStatusBadge(app.status)}
                <button className="text-xs font-bold text-[#FF4D00] hover:underline flex items-center gap-1 cursor-pointer">
                  <span>Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
