import React from 'react';
import { SEO } from '../../components/SEO';
import { BookOpen, Calendar, Clock, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WorkshopItem {
  id: string;
  title: string;
  category: string;
  date: string;
  duration: string;
  status: 'Registered' | 'Confirmed' | 'Completed';
  dayBadge: { day: string; month: string };
}

const userWorkshops: WorkshopItem[] = [
  {
    id: 'WS-101',
    title: 'PCR Techniques & Gene Amplification Masterclass',
    category: 'MOLECULAR BIOLOGY',
    date: '12 June 2026 • 10:00 AM',
    duration: '2 Days Intensive',
    status: 'Confirmed',
    dayBadge: { day: '12', month: 'JUN' }
  },
  {
    id: 'WS-102',
    title: 'Advanced Bioinformatics & Molecular Docking',
    category: 'IN-SILICO RESEARCH',
    date: '25 June 2026 • 02:00 PM',
    duration: '3 Days Hands-on',
    status: 'Registered',
    dayBadge: { day: '25', month: 'JUN' }
  },
  {
    id: 'WS-103',
    title: 'Protein Purification & Chromatography Techniques',
    category: 'BIOTECHNOLOGY',
    date: '05 July 2026 • 11:00 AM',
    duration: '2 Days Workshop',
    status: 'Registered',
    dayBadge: { day: '05', month: 'JUL' }
  }
];

export default function AccountWorkshops() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <SEO title="My Workshops | INNOVAC BIOTECHNOLOGIES" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">WORKSHOPS</span>
          <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">My Registered Workshops</h1>
          <p className="text-neutral-500 text-sm font-light">
            View upcoming sessions, workshop schedules, and training resources.
          </p>
        </div>

        <Link
          to="/workshops"
          className="px-5 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm self-start sm:self-auto flex items-center gap-2"
        >
          <span>Browse Workshops</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {userWorkshops.map(item => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-[24px] border border-black/8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#FF4D00] leading-none">{item.dayBadge.day}</span>
                  <span className="text-[9px] font-bold text-orange-800 uppercase mt-0.5">{item.dayBadge.month}</span>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">
                  {item.status}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF4D00] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-[#080808] leading-snug">{item.title}</h3>
                <div className="space-y-1 mt-3 text-xs text-neutral-500 font-light">
                  <p className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-neutral-400" /> {item.date}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Clock size={13} className="text-neutral-400" /> {item.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-light">Online & On-site</span>
              <button className="px-4 py-2 bg-[#080808] hover:bg-[#FF4D00] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer">
                JOIN SESSION
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
