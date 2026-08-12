import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/src/components/SEO';
import { PageHero } from '@/src/components/ui/PageHero';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, ArrowRight, FlaskConical, Dna, GraduationCap, Presentation, Microscope } from 'lucide-react';
import { searchContent, SearchResult } from '@/src/lib/search';
import { getCtaPath } from '@/src/config/ctaConfig';

const Highlight = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight.trim()) return <>{text}</>;
  
  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedHighlight})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={i} className="bg-[#FF4D00]/20 text-[#FF4D00] font-semibold rounded-sm px-0.5">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      setSearchParams({ q: debouncedQuery.trim() }, { replace: true });
      const searchResults = searchContent(debouncedQuery);
      setResults(searchResults);
      setHasSearched(true);
    } else {
      if (searchParams.has('q')) {
        setSearchParams({}, { replace: true });
      }
      setResults([]);
      setHasSearched(false);
    }
  }, [debouncedQuery, setSearchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setDebouncedQuery(query.trim());
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Service': return <Microscope size={18} />;
      case 'Reagent': return <FlaskConical size={18} />;
      case 'Research': return <Dna size={18} />;
      case 'Internship': return <GraduationCap size={18} />;
      case 'Workshop': return <Presentation size={18} />;
      default: return <SearchIcon size={18} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Service': return 'text-blue-500 bg-blue-50';
      case 'Reagent': return 'text-green-500 bg-green-50';
      case 'Research': return 'text-purple-500 bg-purple-50';
      case 'Internship': return 'text-yellow-600 bg-yellow-50';
      case 'Workshop': return 'text-[#FF4D00] bg-[#FF4D00]/10';
      default: return 'text-neutral-500 bg-neutral-100';
    }
  };

  return (
    <>
      <SEO title="Search | INNOVAC BIOTECHNOLOGIES" />
      
      <PageHero 
        label="Explore"
        title="Search."
        description="Find services, reagents, research, and training information across the INNOVAC platform."
      />

      <section className="py-24 px-6 bg-white min-h-[50vh]">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="relative mb-12">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <SearchIcon size={24} className="text-neutral-400" />
            </div>
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for molecular biology, DNA, proteins..."
              className="w-full bg-[#F5F5F3] border border-[#D8D8D5] rounded-full pl-16 pr-32 py-5 text-lg focus:outline-none focus:border-[#FF4D00] focus:bg-white transition-all shadow-sm focus:shadow-md"
            />
            <button type="submit" className="absolute inset-y-2 right-2 bg-[#FF4D00] text-white px-8 rounded-full font-semibold text-sm hover:bg-[#E64500] transition-colors">
              SEARCH
            </button>
          </form>

          {hasSearched && results.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-medium text-neutral-800 mb-6">
                Found {results.length} result{results.length === 1 ? '' : 's'} for "{searchParams.get('q')}"
              </h2>
              <div className="flex flex-col gap-4">
                {results.map((result) => (
                  <Link 
                    key={result.id} 
                    to={result.url}
                    className="block p-6 border border-[#D8D8D5] rounded-[24px] hover:border-[#FF4D00]/50 hover:shadow-md transition-all group bg-white"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                            {result.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#050505] mb-2 group-hover:text-[#FF4D00] transition-colors">
                          <Highlight text={result.title} highlight={debouncedQuery} />
                        </h3>
                        <p className="text-neutral-600 line-clamp-2">
                          <Highlight text={result.description} highlight={debouncedQuery} />
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#F5F5F3] flex items-center justify-center shrink-0 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                        <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {hasSearched && results.length === 0 && (
            <div className="text-center py-16 bg-[#F5F5F3] rounded-[24px] border border-[#D8D8D5]">
              <SearchIcon size={48} className="mx-auto text-neutral-300 mb-6" />
              <p className="text-[#050505] text-xl font-medium mb-2">No results found for "{searchParams.get('q')}".</p>
              <p className="text-neutral-500 mb-8 max-w-md mx-auto">Try adjusting your search terms or explore our main sections using the links below.</p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to={getCtaPath('EXPLORE_SERVICES')} className="px-6 py-3 bg-white border border-[#D8D8D5] text-[#050505] rounded-full text-sm font-semibold hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors">
                  Services
                </Link>
                <Link to="/research" className="px-6 py-3 bg-white border border-[#D8D8D5] text-[#050505] rounded-full text-sm font-semibold hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors">
                  Research
                </Link>
                <Link to={getCtaPath('VIEW_ALL_REAGENTS')} className="px-6 py-3 bg-white border border-[#D8D8D5] text-[#050505] rounded-full text-sm font-semibold hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors">
                  Reagents
                </Link>
              </div>
            </div>
          )}

          {!hasSearched && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              <div className="p-8 bg-[#F5F5F3] rounded-[24px]">
                <h3 className="text-lg font-bold text-[#050505] mb-4">Popular Searches</h3>
                <ul className="space-y-3">
                  {['DNA Extraction', 'Protein Sequencing', 'Molecular Docking', 'Peptide Synthesis', 'PCR Services'].map((term, i) => (
                    <li key={i}>
                      <button 
                        onClick={() => {
                          setQuery(term);
                        }}
                        className="text-neutral-600 hover:text-[#FF4D00] transition-colors flex items-center gap-2 text-sm font-medium"
                      >
                        <SearchIcon size={14} />
                        {term}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-[#050505] rounded-[24px] text-white">
                <h3 className="text-lg font-bold mb-4">Can't find what you need?</h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  Our team is ready to assist you with custom requirements and specific scientific enquiries.
                </p>
                <Link to={getCtaPath('CONSULTATION_REQUEST')} className="inline-flex items-center gap-2 text-[#FF4D00] font-semibold text-sm hover:text-white transition-colors">
                  CONTACT US <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
