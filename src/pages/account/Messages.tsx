import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { MessageSquare, Send, Search, User, CheckCheck, Paperclip } from 'lucide-react';

interface MessageThread {
  id: string;
  sender: string;
  role: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

const sampleThreads: MessageThread[] = [
  {
    id: 'MSG-01',
    sender: 'Dr. Arshad Mahmood',
    role: 'Lead Supervisor',
    lastMessage: 'Your PCR primer design parameters look good. Please check the attachment.',
    timestamp: '10:42 AM',
    unread: true
  },
  {
    id: 'MSG-02',
    sender: 'INNOVAC Support Team',
    role: 'Helpdesk',
    lastMessage: 'Your workshop registration for June 12 has been confirmed.',
    timestamp: 'Yesterday',
    unread: false
  }
];

export default function AccountMessages() {
  const [selectedThread, setSelectedThread] = useState<MessageThread>(sampleThreads[0]);
  const [inputText, setInputText] = useState('');

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      <SEO title="Messages | INNOVAC BIOTECHNOLOGIES" />

      <div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">COMMUNICATION</span>
        <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">Messages</h1>
        <p className="text-neutral-500 text-sm font-light">
          Communicate directly with INNOVAC researchers, supervisors, and support teams.
        </p>
      </div>

      {/* Two-Column Messaging Interface */}
      <div className="bg-white rounded-[24px] border border-black/8 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[550px]">
        {/* Left Column: Conversation List */}
        <div className="lg:col-span-4 border-r border-neutral-100 flex flex-col">
          <div className="p-4 border-b border-neutral-100">
            <div className="relative">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-[#FF4D00]"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-neutral-50">
            {sampleThreads.map(thread => (
              <div
                key={thread.id}
                onClick={() => setSelectedThread(thread)}
                className={`p-4 cursor-pointer transition-colors flex items-start gap-3 ${
                  selectedThread.id === thread.id ? 'bg-orange-50/60 border-l-4 border-[#FF4D00]' : 'hover:bg-neutral-50'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/20 flex items-center justify-center text-[#FF4D00] font-bold shrink-0">
                  {thread.sender.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#080808] truncate">{thread.sender}</h4>
                    <span className="text-[10px] text-neutral-400 font-light">{thread.timestamp}</span>
                  </div>
                  <span className="text-[10px] text-[#FF4D00] font-semibold block">{thread.role}</span>
                  <p className="text-xs text-neutral-500 font-light truncate mt-1">{thread.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Chat View */}
        <div className="lg:col-span-8 flex flex-col bg-neutral-50/30">
          {/* Chat Header */}
          <div className="p-4 bg-white border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/20 flex items-center justify-center text-[#FF4D00] font-bold">
                {selectedThread.sender.charAt(0)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#080808]">{selectedThread.sender}</h3>
                <span className="text-[10px] text-[#20C77A] font-semibold uppercase tracking-wider">Online • {selectedThread.role}</span>
              </div>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <div className="flex justify-center">
              <span className="px-3 py-1 bg-neutral-100 text-neutral-500 text-[10px] rounded-full font-light">
                Today, 10:40 AM
              </span>
            </div>

            {/* Received Message */}
            <div className="flex items-start gap-3 max-w-[80%]">
              <div className="p-4 bg-white border border-neutral-200 rounded-2xl rounded-tl-xs shadow-2xs space-y-1">
                <p className="text-xs text-[#080808] leading-relaxed">
                  {selectedThread.lastMessage}
                </p>
                <span className="text-[9px] text-neutral-400 font-light block text-right">10:42 AM</span>
              </div>
            </div>

            {/* Sent Message */}
            <div className="flex items-start justify-end gap-3 max-w-[80%] ml-auto">
              <div className="p-4 bg-[#FF4D00] text-white rounded-2xl rounded-tr-xs shadow-sm space-y-1">
                <p className="text-xs leading-relaxed">
                  Thank you Dr. Arshad! I have reviewed the parameters and will proceed with sample preparation.
                </p>
                <span className="text-[9px] text-orange-200 font-light block text-right flex items-center justify-end gap-1">
                  10:45 AM <CheckCheck size={12} />
                </span>
              </div>
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 bg-white border-t border-neutral-100 flex items-center gap-3">
            <button className="p-2 text-neutral-400 hover:text-[#FF4D00] transition-colors cursor-pointer">
              <Paperclip size={18} />
            </button>
            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 py-2.5 px-4 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-[#FF4D00] focus:bg-white transition-all"
            />
            <button className="p-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl transition-colors shadow-sm cursor-pointer">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
