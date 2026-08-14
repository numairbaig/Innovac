import React from 'react';
import { SEO } from '../../components/SEO';
import { Award, Calendar, MapPin, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InternshipItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  mode: string;
  status: 'Active' | 'Applied' | 'Completed';
  startDate: string;
}

const userInternships: InternshipItem[] = [
  {
    id: 'INT-01',
    title: 'Molecular Biology & Gene Cloning Research',
    category: 'Molecular Biology',
    duration: '3 Months',
    mode: 'Hybrid / On-site Lab',
    status: 'Active',
    startDate: '01 June 2026'
  },
  {
    id: 'INT-02',
    title: 'Bioinformatics & Computational Drug Design',
    category: 'In-Silico Research',
    duration: '2 Months',
    mode: 'Remote / Virtual Lab',
    status: 'Applied',
    startDate: '15 July 2026'
  }
];

export default function AccountInternships() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <SEO title="My Internships | INNOVAC BIOTECHNOLOGIES" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">INTERNSHIPS</span>
          <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">Internship Programs</h1>
          <p className="text-neutral-500 text-sm font-light">
            Manage your research internships, active modules, and certifications.
          </p>
        </div>

        <Link
          to="/internships"
          className="px-5 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm self-start sm:self-auto flex items-center gap-2"
        >
          <span>Explore Internships</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userInternships.map(item => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-[24px] border border-black/8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#20C77A] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {item.category}
                </span>
                <span className="px-3 py-1 bg-orange-50 text-[#FF4D00] border border-orange-200 rounded-full text-xs font-bold">
                  {item.status}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#080808] leading-snug">{item.title}</h3>
                <div className="space-y-1.5 mt-3 text-xs text-neutral-500 font-light">
                  <p className="flex items-center gap-2">
                    <Calendar size={14} className="text-neutral-400" /> Duration: <strong className="font-semibold text-[#080808]">{item.duration}</strong> (Starts {item.startDate})
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-neutral-400" /> Mode: <strong className="font-semibold text-[#080808]">{item.mode}</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-400">ID: {item.id}</span>
              <button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF4D00] hover:underline cursor-pointer">
                <span>View Dashboard</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
