import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Users, Briefcase } from 'lucide-react';

export default function Members() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] pt-24 pb-12 flex flex-col">
      <SEO 
        title="Member Portal | INNOVAC BIOTECHNOLOGIES" 
        description="Secure access for INNOVAC BIOTECHNOLOGIES employees and collaborators."
      />
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4 text-center">Member Access</h1>
        <p className="text-neutral-600 mb-12 text-center max-w-lg">
          Please select your portal. Access is restricted to authorized INNOVAC BIOTECHNOLOGIES personnel and partners.
        </p>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          <Link 
            to="/portal/login?type=employee"
            className="bg-white p-8 border border-neutral-200 rounded-lg hover:border-[#FF4D00] hover:shadow-lg transition-all group flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors text-neutral-600">
              <Briefcase size={32} />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Employee Portal</h2>
            <p className="text-neutral-500 mb-6">
              Access internal resources, task management, HR services, and project administration.
            </p>
            <span className="text-[#FF4D00] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              EMPLOYEE LOGIN →
            </span>
          </Link>

          <Link 
            to="/portal/login?type=collaborator"
            className="bg-white p-8 border border-neutral-200 rounded-lg hover:border-[#FF4D00] hover:shadow-lg transition-all group flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors text-neutral-600">
              <Users size={32} />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Collaborator Portal</h2>
            <p className="text-neutral-500 mb-6">
              Access assigned projects, research responsibilities, and shared documents.
            </p>
            <span className="text-[#FF4D00] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              COLLABORATOR LOGIN →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}