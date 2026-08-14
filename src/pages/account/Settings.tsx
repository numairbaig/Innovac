import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { Settings, Bell, Globe, Lock, Eye } from 'lucide-react';

export default function AccountSettings() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [workshopNotifs, setWorkshopNotifs] = useState(true);
  const [internshipNotifs, setInternshipNotifs] = useState(true);
  const [requestUpdates, setRequestUpdates] = useState(true);
  const [publicProfile, setPublicProfile] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <SEO title="Account Settings | INNOVAC BIOTECHNOLOGIES" />

      <div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">ACCOUNT SETTINGS</span>
        <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">Account Preferences</h1>
        <p className="text-neutral-500 text-sm font-light">
          Manage your notification settings, privacy preferences, and portal options.
        </p>
      </div>

      {/* Section 1: Notifications */}
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-black/8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#FF4D00] flex items-center justify-center">
            <Bell size={20} />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#080808]">Notifications</h3>
            <p className="text-xs text-neutral-500 font-light">Choose what updates you want to receive</p>
          </div>
        </div>

        <div className="space-y-4 divide-y divide-neutral-50">
          {/* Toggle 1 */}
          <div className="flex items-center justify-between pt-3">
            <div>
              <h4 className="text-xs font-bold text-[#080808]">Email Notifications</h4>
              <p className="text-xs text-neutral-500 font-light">Receive important security and account notifications.</p>
            </div>
            <button
              onClick={() => setEmailNotifs(!emailNotifs)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                emailNotifs ? 'bg-[#FF4D00]' : 'bg-neutral-300'
              }`}
            >
              <span className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                emailNotifs ? 'left-6.5' : 'left-0.5'
              }`} />
            </button>
          </div>

          {/* Toggle 2 */}
          <div className="flex items-center justify-between pt-4">
            <div>
              <h4 className="text-xs font-bold text-[#080808]">Workshop Updates</h4>
              <p className="text-xs text-neutral-500 font-light">Get alerts regarding upcoming sessions and materials.</p>
            </div>
            <button
              onClick={() => setWorkshopNotifs(!workshopNotifs)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                workshopNotifs ? 'bg-[#FF4D00]' : 'bg-neutral-300'
              }`}
            >
              <span className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                workshopNotifs ? 'left-6.5' : 'left-0.5'
              }`} />
            </button>
          </div>

          {/* Toggle 3 */}
          <div className="flex items-center justify-between pt-4">
            <div>
              <h4 className="text-xs font-bold text-[#080808]">Internship Alerts</h4>
              <p className="text-xs text-neutral-500 font-light">Notifications about application status changes.</p>
            </div>
            <button
              onClick={() => setInternshipNotifs(!internshipNotifs)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                internshipNotifs ? 'bg-[#FF4D00]' : 'bg-neutral-300'
              }`}
            >
              <span className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                internshipNotifs ? 'left-6.5' : 'left-0.5'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Section 2: Privacy */}
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-black/8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
            <Eye size={20} />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#080808]">Privacy</h3>
            <p className="text-xs text-neutral-500 font-light">Manage your public profile visibility</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-[#080808]">Public Account Visibility</h4>
            <p className="text-xs text-neutral-500 font-light">Allow other researchers to view your public profile details.</p>
          </div>
          <button
            onClick={() => setPublicProfile(!publicProfile)}
            className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
              publicProfile ? 'bg-[#20C77A]' : 'bg-neutral-300'
            }`}
          >
            <span className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
              publicProfile ? 'left-6.5' : 'left-0.5'
            }`} />
          </button>
        </div>
      </div>
    </div>
  );
}
