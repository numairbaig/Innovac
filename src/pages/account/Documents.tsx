import React from 'react';
import { SEO } from '../../components/SEO';
import { FileText, Download, Eye, Award, CheckCircle2 } from 'lucide-react';

interface DocumentItem {
  id: string;
  title: string;
  category: 'Certificate' | 'Research Paper' | 'Report';
  issuedDate: string;
  fileSize: string;
  hasFile: boolean;
}

const userDocuments: DocumentItem[] = [
  {
    id: 'DOC-01',
    title: 'PCR Techniques Workshop Completion Certificate',
    category: 'Certificate',
    issuedDate: '14 June 2026',
    fileSize: '1.4 MB (PDF)',
    hasFile: true
  },
  {
    id: 'DOC-02',
    title: 'Molecular Docking & In-Silico Analysis Report',
    category: 'Report',
    issuedDate: '02 August 2026',
    fileSize: '3.2 MB (PDF)',
    hasFile: true
  }
];

export default function AccountDocuments() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <SEO title="Documents & Certificates | INNOVAC BIOTECHNOLOGIES" />

      <div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">DOCUMENTS</span>
        <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">Certificates & Documents</h1>
        <p className="text-neutral-500 text-sm font-light">
          Access and download your verified training certificates and research reports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userDocuments.map(doc => (
          <div
            key={doc.id}
            className="bg-white p-6 rounded-[24px] border border-black/8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#FF4D00] flex items-center justify-center">
                  <Award size={20} />
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> Verified
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                  {doc.category}
                </span>
                <h3 className="text-base font-bold text-[#080808] leading-snug">{doc.title}</h3>
                <p className="text-xs text-neutral-500 font-light mt-2">
                  Issued: {doc.issuedDate} • {doc.fileSize}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
              <button className="flex-1 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-[#080808] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Eye size={14} />
                <span>View</span>
              </button>

              <button className="flex-1 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer">
                <Download size={14} />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
