import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { RotateCw, Home, AlertTriangle } from 'lucide-react';

export function RouteErrorElement() {
  const error: any = useRouteError();
  const isChunkError =
    error?.message?.includes('Failed to fetch dynamically imported module') ||
    error?.message?.includes('Importing a module script failed') ||
    error?.name === 'TypeError';

  const handleReload = () => {
    window.sessionStorage.setItem('page_has_been_refreshed', 'true');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle Background Ambient Glow */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4D00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full bg-[#0A0A0A]/95 border border-white/15 rounded-3xl p-8 backdrop-blur-xl text-center relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        <div className="w-16 h-16 rounded-2xl bg-[#FF4D00]/15 border border-[#FF4D00]/40 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={32} className="text-[#FF4D00]" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          {isChunkError ? 'New Update Available' : 'Application Error'}
        </h2>

        <p className="text-neutral-300 text-sm font-light leading-relaxed mb-8">
          {isChunkError
            ? 'A newer version of INNOVAC BIOTECHNOLOGIES has been deployed. Please reload the page to access the latest features and research modules.'
            : error?.message || 'An unexpected application error occurred.'}
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleReload}
            className="w-full py-3.5 px-6 bg-[#FF4D00] hover:bg-[#E64500] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(255,77,0,0.3)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCw size={16} />
            <span>RELOAD PAGE</span>
          </button>

          <Link
            to="/"
            className="w-full py-3.5 px-6 bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Home size={16} />
            <span>RETURN TO HOMEPAGE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RouteErrorElement;
