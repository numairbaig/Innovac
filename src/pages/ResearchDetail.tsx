import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/src/components/SEO';
import { PageHero } from '@/src/components/ui/PageHero';
import { Button } from '@/src/components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';

export default function ResearchDetail() {
  const { topic } = useParams<{ topic: string }>();

  let title = "Scientific Research";
  let description = "Advanced research solutions and methodologies.";
  
  if (topic === 'biotech') {
    title = "Biotechnology Research";
    description = "Innovative biotechnology research focusing on consortium development and vaccine design.";
  } else if (topic === 'molecular-biology') {
    title = "Molecular Biology Research";
    description = "Advanced molecular biology research including aptamer detection and sequence analysis.";
  } else if (topic === 'in-silico') {
    title = "In-Silico Research";
    description = "Computational research, molecular docking, and MD simulations.";
  }

  return (
    <>
      <SEO title={`${title} | INNOVAC BIOTECHNOLOGIES`} />
      <PageHero 
        label="Research Area"
        title={title}
        description={description}
      />
      
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-medium mb-6">Research Overview</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our {title.toLowerCase()} efforts are dedicated to advancing scientific understanding and providing robust methodologies for complex biological problems. We leverage our expertise to support innovative discoveries.
              </p>
              
              <h3 className="text-2xl font-medium mb-4 mt-12">Core Capabilities</h3>
              <ul className="space-y-4 mb-8">
                {['Advanced scientific methodologies', 'Data-driven analysis', 'Collaborative research approaches', 'Cutting-edge technology integration'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-600">
                    <div className="w-5 h-5 rounded-full bg-[#FF4D00]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#FF4D00]" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-8 bg-[#050505] text-white rounded-[24px]">
                <h3 className="text-xl font-medium mb-4">Collaborate on Research</h3>
                <p className="text-neutral-400 mb-6 font-light">Discuss your specific research requirements with our scientific team.</p>
                <div className="flex flex-wrap gap-4">
                  <Button href={`/contact?type=research`} variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none" withArrow>DISCUSS RESEARCH</Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8 border border-[#D8D8D5] rounded-[24px] bg-[#F5F5F3]">
                <h3 className="text-sm font-semibold tracking-widest text-[#FF4D00] uppercase mb-6">Related</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/research" className="group flex items-center justify-between text-neutral-600 hover:text-[#FF4D00] transition-colors">
                      <span className="font-medium">All Research</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                  <li className="pt-4 border-t border-[#D8D8D5]">
                    <Link to="/services" className="group flex items-center justify-between text-neutral-600 hover:text-[#FF4D00] transition-colors">
                      <span className="font-medium">Services</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                  <li className="pt-4 border-t border-[#D8D8D5]">
                    <Link to="/internships" className="group flex items-center justify-between text-neutral-600 hover:text-[#FF4D00] transition-colors">
                      <span className="font-medium">Internships</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                  <li className="pt-4 border-t border-[#D8D8D5]">
                    <Link to="/contact" className="group flex items-center justify-between text-neutral-600 hover:text-[#FF4D00] transition-colors">
                      <span className="font-medium">Contact Us</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}