import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, Dna, 
  FlaskConical, Microscope, Activity, Database, Check, FileText, Beaker
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { 
  SERVICE_CATEGORIES, 
  SERVICE_DETAILS, 
  ServiceCategoryData, 
  ServiceDetailData 
} from '@/src/data/servicesData';

export default function ServiceDetail() {
  const { id, category, sub } = useParams<{ id?: string; category?: string; sub?: string }>();
  const navigate = useNavigate();

  // Determine sub-service target (e.g. /services/nucleic-acid/dna or /services/dna)
  const targetSubKey = sub || id || '';
  if (targetSubKey && SERVICE_DETAILS[targetSubKey]) {
    return <SubServiceView data={SERVICE_DETAILS[targetSubKey]} />;
  }

  // Determine category target (e.g. /services/nucleic-acid or /services/protein-peptide)
  const targetCatKey = category || id || 'nucleic-acid';
  const categoryData = SERVICE_CATEGORIES[targetCatKey] || SERVICE_CATEGORIES['nucleic-acid'];

  return <CategoryView data={categoryData} />;
}

// ============================================================================
// 1. CATEGORY DETAIL VIEW (Nucleic Acid, Protein & Peptide, Computational)
// ============================================================================
function CategoryView({ data }: { data: ServiceCategoryData }) {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title={`${data.title} | INNOVAC BIOTECHNOLOGIES`}
        description={data.heroDescription}
      />

      {/* HERO SECTION */}
      <section className="relative w-full pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 bg-[#050505] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a140f] to-[#050505]" />
          <div className="absolute right-0 top-0 w-[55%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,77,0,0.12)_0%,transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 w-full">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/services' },
              { label: data.title }
            ]} 
            accentColor="text-[#FF4D00]" 
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <PageLabel accentColor="text-[#FF4D00]">
                {data.badgeNumber} / SERVICE CATEGORY
              </PageLabel>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-medium tracking-tight leading-[1.05] text-white mb-6">
                {data.title}
              </h1>
              <p className="text-lg text-neutral-300 max-w-2xl mb-8 leading-relaxed font-light">
                {data.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button 
                  href={`/quote?category=${encodeURIComponent(data.title)}`}
                  variant="primary" 
                  className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg"
                  withArrow
                >
                  REQUEST SERVICE QUOTE
                </Button>
                <Button 
                  href="#services-grid" 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white hover:text-black px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl"
                >
                  EXPLORE OFFERINGS &rarr;
                </Button>
              </div>
            </div>

            <div className="hidden lg:block w-80 h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
              CATEGORY OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight mb-8">
              About {data.title}
            </h2>
            <div className="space-y-6 text-neutral-600 text-base leading-relaxed font-light">
              {data.overviewParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SUB-CATEGORIES GRID */}
      <section id="services-grid" className="py-20 px-6 bg-[#F5F5F3] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
              AVAILABLE SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight">
              Specialized Service Areas
            </h2>
            <p className="text-neutral-500 text-sm font-light mt-2 max-w-xl">
              Click any service card below to view specific methodologies, capabilities, sample guidelines, and request service options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {data.featuredSubCategories.map((subCat) => (
              <div 
                key={subCat.id}
                onClick={() => navigate(subCat.href)}
                className="group p-8 rounded-[24px] bg-white border border-[#E5E5E5] hover:border-[#FF4D00]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
              >
                <div className="space-y-6">
                  <div className="h-48 rounded-xl overflow-hidden relative border border-[#E5E5E5]">
                    <img 
                      src={subCat.image} 
                      alt={subCat.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-[#FF4D00] bg-white/90 border border-[#E5E5E5] px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                      {subCat.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#050505] mb-2 group-hover:text-[#FF4D00] transition-colors">
                      {subCat.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">
                      {subCat.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#E5E5E5]">
                      {subCat.items.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700 font-light">
                          <CheckCircle2 size={14} className="text-[#FF4D00] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E5E5E5] mt-6 flex items-center justify-between text-xs font-bold text-[#FF4D00] uppercase tracking-wider">
                  <span>EXPLORE {subCat.title.toUpperCase()}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INNOVAC */}
      <section className="py-20 px-6 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
              OUR ADVANTAGE
            </span>
            <h2 className="text-3xl font-bold text-[#050505] tracking-tight">
              Why Work With INNOVAC BIOTECHNOLOGIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[20px] bg-[#F5F5F3] border border-[#E5E5E5] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FF4D00]/10 flex items-center justify-center text-[#FF4D00] mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#050505]">Validated Standard Protocols</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Standardized experimental protocols and analytical controls ensure reproducible, high-accuracy results for every project.
              </p>
            </div>

            <div className="p-8 rounded-[20px] bg-[#F5F5F3] border border-[#E5E5E5] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FF4D00]/10 flex items-center justify-center text-[#FF4D00] mb-4">
                <FlaskConical size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#050505]">Scientific Consultation</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Direct access to our scientific team to review project parameters, sample requirements, and data interpretation.
              </p>
            </div>

            <div className="p-8 rounded-[20px] bg-[#F5F5F3] border border-[#E5E5E5] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FF4D00]/10 flex items-center justify-center text-[#FF4D00] mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#050505]">Publication-Grade Data</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Receive comprehensive Certificates of Analysis (CoA), high-resolution graphics, and structured raw/processed datasets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-20 px-6 bg-[#050505] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-[#FF4D00] tracking-[0.2em] uppercase block">
            GET STARTED TODAY
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Need Support for {data.title}?
          </h2>
          <p className="text-neutral-400 text-base max-w-xl mx-auto font-light leading-relaxed">
            Contact our scientific team to request a formal quote or discuss custom project requirements.
          </p>
          <div className="pt-4">
            <Button 
              href={`/quote?category=${encodeURIComponent(data.title)}`}
              variant="primary" 
              className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-10 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl"
              withArrow
            >
              REQUEST A SERVICE QUOTE
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================================
// 2. SUB-SERVICE DETAIL VIEW (DNA, RNA, miRNA, Protein Sequencing, etc.)
// ============================================================================
function SubServiceView({ data }: { data: ServiceDetailData }) {
  const categoryRoute = `/services/${data.categoryKey}`;

  return (
    <>
      <SEO 
        title={`${data.title} | ${data.categoryTitle}`}
        description={data.heroDescription}
      />

      {/* HERO SECTION */}
      <section className="relative w-full pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 bg-[#050505] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0c1812] to-[#050505]" />
          <div className="absolute right-0 top-0 w-[50%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,77,0,0.15)_0%,transparent_65%)]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 w-full">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/services' },
              { label: data.categoryTitle, href: categoryRoute },
              { label: data.title }
            ]} 
            accentColor="text-[#FF4D00]" 
          />

          <div className="max-w-3xl">
            <PageLabel accentColor="text-[#FF4D00]">
              SPECIALIZED BIOTECH SERVICE
            </PageLabel>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              {data.title}
            </h1>
            <p className="text-lg text-neutral-300 font-light mb-8 leading-relaxed">
              {data.subtitle}
            </p>

            <Button 
              href={`/quote?category=${encodeURIComponent(data.categoryTitle)}&service=${encodeURIComponent(data.title)}`}
              variant="primary" 
              className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg"
              withArrow
            >
              REQUEST THIS SERVICE
            </Button>
          </div>
        </div>
      </section>

      {/* OVERVIEW & IMAGE */}
      <section className="py-20 px-6 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase block">
                SERVICE OVERVIEW
              </span>
              <h2 className="text-3xl font-bold text-[#050505] tracking-tight">
                About {data.title}
              </h2>
              <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
                {data.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] overflow-hidden border border-[#E5E5E5] shadow-xl h-80 sm:h-96">
                <img 
                  src={data.image} 
                  alt={data.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SUB-SERVICES OFFERED */}
      <section className="py-20 px-6 bg-[#F5F5F3] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
              SERVICE OFFERINGS
            </span>
            <h2 className="text-3xl font-bold text-[#050505] tracking-tight">
              Available {data.title} Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.subServices.map((subItem) => (
              <div key={subItem.id} className="p-8 bg-white rounded-[24px] border border-[#E5E5E5] flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#050505]">{subItem.name}</h3>
                    <span className="text-[10px] font-bold text-[#FF4D00] bg-[#FF4D00]/10 px-2.5 py-1 rounded-md uppercase">AVAILABLE</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">
                    {subItem.shortDesc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#E5E5E5]">
                    {subItem.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-light">
                        <CheckCircle2 size={14} className="text-[#FF4D00] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to={`/quote?category=${encodeURIComponent(data.categoryTitle)}&service=${encodeURIComponent(`${data.title} — ${subItem.name}`)}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FF4D00] uppercase tracking-wider hover:text-[#E64500]"
                >
                  <span>REQUEST {subItem.name.toUpperCase()}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW STEPS & SAMPLE REQUIREMENTS */}
      <section className="py-20 px-6 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Workflow */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
                  HOW IT WORKS
                </span>
                <h3 className="text-2xl font-bold text-[#050505]">
                  Service Execution Workflow
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.workflowSteps.map((stepItem) => (
                  <div key={stepItem.step} className="p-6 rounded-2xl bg-[#F5F5F3] border border-[#E5E5E5]">
                    <span className="text-2xl font-bold text-[#FF4D00] mb-2 block">{stepItem.step}</span>
                    <h4 className="font-bold text-base text-[#050505] mb-2">{stepItem.title}</h4>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">{stepItem.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sample Information Card */}
            <div className="lg:col-span-4">
              <div className="p-8 rounded-[24px] bg-[#050505] text-white space-y-6">
                <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase block">
                  REQUIREMENTS
                </span>
                <h3 className="text-xl font-bold">Sample & Input Guidelines</h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {data.sampleInfo}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <Link 
                    to={`/quote?category=${encodeURIComponent(data.categoryTitle)}&service=${encodeURIComponent(data.title)}`}
                    className="w-full py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E64500] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>REQUEST A QUOTE</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-20 px-6 bg-[#050505] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-[#FF4D00] tracking-[0.2em] uppercase block">
            READY TO ORDER?
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Ready to Start Your {data.title} Project?
          </h2>
          <p className="text-neutral-400 text-base max-w-xl mx-auto font-light leading-relaxed">
            Submit your sample parameters or project specifications to receive a custom quotation from our scientific team.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button 
              href={`/quote?category=${encodeURIComponent(data.categoryTitle)}&service=${encodeURIComponent(data.title)}`}
              variant="primary" 
              className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-10 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl"
              withArrow
            >
              REQUEST THIS SERVICE
            </Button>
            <Link 
              to={categoryRoute}
              className="px-8 py-4 rounded-xl border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              &larr; BACK TO {data.categoryTitle.toUpperCase()}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
