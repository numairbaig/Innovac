import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, ChevronRight, FlaskConical, Dna, Laptop, 
  ShieldCheck, Target, Activity, FileText, Layers, Beaker, CheckCircle2
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { Research3DCard } from '@/src/components/ui/Research3DCard';
import { 
  RESEARCH_CATEGORIES, 
  RESEARCH_SUBTOPICS, 
  ResearchCategoryData, 
  SubtopicData 
} from '@/src/data/researchDetailData';

export default function ResearchDetail() {
  const { topic, subtopic } = useParams<{ topic?: string; subtopic?: string }>();

  // Determine if viewing a specific subtopic (e.g. /research/molecular-biology/vaccine-design)
  if (subtopic && RESEARCH_SUBTOPICS[subtopic]) {
    return <SubtopicView data={RESEARCH_SUBTOPICS[subtopic]} />;
  }

  // Determine category data (default to 'biotech' if unknown topic)
  const categoryKey = (topic && RESEARCH_CATEGORIES[topic]) ? topic : 'biotech';
  const categoryData = RESEARCH_CATEGORIES[categoryKey];

  return <CategoryView data={categoryData} />;
}

// ============================================================================
// 1. CATEGORY DETAIL VIEW (Biotechnology, Molecular Biology, In-Silico)
// ============================================================================
function CategoryView({ data }: { data: ResearchCategoryData }) {
  const isBiotech = data.id === 'biotech';
  const isMolecular = data.id === 'molecular-biology';
  const isInSilico = data.id === 'in-silico';

  // Compute "Explore Other Research" options excluding current category
  const otherCategories = Object.values(RESEARCH_CATEGORIES).filter(cat => cat.id !== data.id);

  return (
    <>
      <SEO 
        title={`${data.title} | INNOVAC BIOTECHNOLOGIES`}
        description={data.heroDescription}
      />

      {/* HERO SECTION */}
      <section className="relative w-full pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 bg-[#050505] text-white overflow-hidden">
        {/* Ambient Radial Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#081610] to-[#050505]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,77,0,0.12)_0%,transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 w-full">
          <Breadcrumb 
            items={[
              { label: 'Research', href: '/research' },
              { label: data.title }
            ]} 
            accentColor="text-[#FF4D00]" 
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <PageLabel accentColor="text-[#FF4D00]">
                {data.badgeNumber} / RESEARCH AREA
              </PageLabel>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-medium tracking-tight leading-[1.05] text-white mb-6">
                {data.title}
              </h1>
              <p className="text-lg text-neutral-300 max-w-2xl mb-8 leading-relaxed font-light">
                {data.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button 
                  href="/quote" 
                  variant="primary" 
                  className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg"
                  withArrow
                >
                  DISCUSS YOUR RESEARCH
                </Button>
                <Button 
                  href="#overview" 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white hover:text-black px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl"
                >
                  EXPLORE OVERVIEW &rarr;
                </Button>
              </div>
            </div>

            {/* Visual Icon Badge */}
            <div className="hidden lg:flex items-center justify-center w-64 h-64 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              {isBiotech && <FlaskConical size={100} className="text-[#FF4D00] relative z-10 transition-transform duration-500 group-hover:scale-110" />}
              {isMolecular && <Dna size={100} className="text-[#FF4D00] relative z-10 transition-transform duration-500 group-hover:scale-110" />}
              {isInSilico && <Laptop size={100} className="text-[#FF4D00] relative z-10 transition-transform duration-500 group-hover:scale-110" />}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="py-20 px-6 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
              RESEARCH OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight leading-tight mb-8">
              {data.overviewHeading}
            </h2>
            <div className="space-y-6 text-neutral-600 text-base leading-relaxed font-light">
              {data.overviewParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SPECIALIZED CARDS (If available for Molecular Biology or In-Silico) */}
      {data.featuredSubtopicCards && data.featuredSubtopicCards.length > 0 && (
        <section className="py-20 px-6 bg-[#F5F5F3] border-b border-[#E5E5E5]">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
                SPECIALIZED RESEARCH & SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight">
                Featured {data.title} Services
              </h2>
              <p className="text-neutral-500 text-sm font-light mt-2 max-w-xl">
                Click any service card to view detailed methodology, scientific workflow, and project deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {data.featuredSubtopicCards.map((card) => (
                <Research3DCard 
                  key={card.id}
                  number={card.number}
                  badge={{ tag: card.tag, label: card.number }}
                  title={card.title}
                  description={card.description}
                  services={card.services}
                  image={card.image}
                  href={card.href}
                  variant="light"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* KEY RESEARCH CATEGORIES GRID */}
      <section className="py-20 px-6 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
              RESEARCH CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight">
              {data.keyAreasTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.keyAreas.map((area, index) => (
              <div 
                key={index} 
                className="p-8 rounded-[20px] bg-[#F5F5F3] border border-[#E5E5E5] hover:border-[#FF4D00]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#FF4D00] bg-[#FF4D00]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      0{index + 1} AREA
                    </span>
                    <Activity size={18} className="text-neutral-400 group-hover:text-[#FF4D00] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#050505] mb-3 tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH CAPABILITIES GRID */}
      <section className="py-20 px-6 bg-[#F5F5F3] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
              CAPABILITIES & SUPPORT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight">
              Research Support Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.capabilities.map((cap, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-[#E5E5E5] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF4D00]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={20} className="text-[#FF4D00]" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#050505] mb-1 tracking-tight">{cap.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS & WHY INNOVAC GRID */}
      <section className="py-20 px-6 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Applications */}
            <div className="p-8 sm:p-10 rounded-[24px] bg-[#050505] text-white">
              <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-4 block">
                PRACTICAL APPLICATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
                Where {data.title} Applies
              </h3>
              <ul className="space-y-4 font-light text-sm text-neutral-300">
                {data.applications.map((app, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FF4D00] shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Why INNOVAC */}
            <div className="p-8 sm:p-10 rounded-[24px] bg-[#F5F5F3] border border-[#E5E5E5] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-4 block">
                  WHY WORK WITH INNOVAC
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#050505] mb-6 tracking-tight">
                  Trusted Scientific Partner
                </h3>
                <div className="space-y-6">
                  {data.whyInnovac.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="font-bold text-base text-[#050505] tracking-tight">{item.title}</h4>
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE OTHER RESEARCH ECOSYSTEM */}
      <section className="py-20 px-6 bg-[#F5F5F3] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
              RESEARCH ECOSYSTEM
            </span>
            <h2 className="text-3xl font-bold text-[#050505] tracking-tight">
              Explore Other Research Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherCategories.map((other) => (
              <div key={other.id} className="p-8 bg-white rounded-[24px] border border-[#E5E5E5] flex flex-col justify-between group hover:border-[#FF4D00]/50 transition-all duration-300">
                <div>
                  <span className="text-xs font-bold text-[#FF4D00] tracking-wider uppercase mb-2 block">
                    {other.badgeNumber} / {other.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-[#050505] mb-3">{other.title}</h3>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                    {other.heroDescription}
                  </p>
                </div>
                <Link 
                  to={`/research/${other.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#050505] text-white text-xs font-bold uppercase tracking-wider group-hover:bg-[#FF4D00] transition-colors w-fit"
                >
                  <span>VIEW {other.title.toUpperCase()}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
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
            Have a {data.title} Project?
          </h2>
          <p className="text-neutral-400 text-base max-w-xl mx-auto font-light leading-relaxed">
            Discuss your research requirements, custom experimental setup, or computational analysis with our scientific team.
          </p>
          <div className="pt-4">
            <Button 
              href="/quote" 
              variant="primary" 
              className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-10 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl"
              withArrow
            >
              DISCUSS YOUR RESEARCH
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================================
// 2. SUBTOPIC DETAIL VIEW (Vaccine Design, Aptamer Detection, Docking, etc.)
// ============================================================================
function SubtopicView({ data }: { data: SubtopicData }) {
  return (
    <>
      <SEO 
        title={`${data.title} | ${data.categoryLabel}`}
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
              { label: 'Research', href: '/research' },
              { label: data.categoryLabel, href: `/research/${data.category}` },
              { label: data.title }
            ]} 
            accentColor="text-[#FF4D00]" 
          />

          <div className="max-w-3xl">
            <PageLabel accentColor="text-[#FF4D00]">
              SPECIALIZED SERVICE & RESEARCH
            </PageLabel>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              {data.title}
            </h1>
            <p className="text-lg text-neutral-300 font-light mb-8 leading-relaxed">
              {data.tagline}
            </p>

            <Button 
              href="/quote" 
              variant="primary" 
              className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg"
              withArrow
            >
              DISCUSS YOUR RESEARCH
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
                SCIENTIFIC OVERVIEW
              </span>
              <h2 className="text-3xl font-bold text-[#050505] tracking-tight">
                About {data.title}
              </h2>
              <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
                {data.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
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

      {/* WORKFLOW PIPELINE STEPS */}
      <section className="py-20 px-6 bg-[#F5F5F3] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-3 block">
              RESEARCH WORKFLOW
            </span>
            <h2 className="text-3xl font-bold text-[#050505] tracking-tight">
              Standard Methodology & Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.workflowSteps.map((stepItem) => (
              <div key={stepItem.step} className="p-6 bg-white rounded-2xl border border-[#E5E5E5] flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#FF4D00] mb-3 block">
                    {stepItem.step}
                  </span>
                  <h4 className="font-bold text-base text-[#050505] mb-2">{stepItem.title}</h4>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">{stepItem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES & APPLICATIONS GRID */}
      <section className="py-20 px-6 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Deliverables */}
            <div className="p-8 rounded-[24px] bg-[#F5F5F3] border border-[#E5E5E5]">
              <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-4 block">
                PROJECT OUTPUTS
              </span>
              <h3 className="text-2xl font-bold text-[#050505] mb-6">
                Key Deliverables
              </h3>
              <ul className="space-y-4">
                {data.deliverables.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-light text-neutral-700">
                    <CheckCircle2 size={18} className="text-[#FF4D00] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="p-8 rounded-[24px] bg-[#050505] text-white">
              <span className="text-xs font-bold text-[#FF4D00] tracking-widest uppercase mb-4 block">
                APPLICATIONS
              </span>
              <h3 className="text-2xl font-bold mb-6">
                Research Applications
              </h3>
              <ul className="space-y-4">
                {data.applications.map((app, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-light text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#FF4D00] shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-20 px-6 bg-[#050505] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-[#FF4D00] tracking-[0.2em] uppercase block">
            NEED CUSTOM SUPPORT?
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Need Support for {data.title}?
          </h2>
          <p className="text-neutral-400 text-base max-w-xl mx-auto font-light leading-relaxed">
            Contact our scientific research team to discuss custom parameters, project scope, and timelines.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button 
              href="/quote" 
              variant="primary" 
              className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-10 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl"
              withArrow
            >
              DISCUSS YOUR RESEARCH
            </Button>
            <Link 
              to={`/research/${data.category}`}
              className="px-8 py-4 rounded-xl border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              &larr; BACK TO {data.categoryLabel.toUpperCase()}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}