import { getCtaPath } from '@/src/config/ctaConfig';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/src/components/SEO';
import { PageHero } from '@/src/components/ui/PageHero';
import { Button } from '@/src/components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';

export default function ReagentDetail() {
  const { category } = useParams<{ category: string }>();

  let title = "Reagents";
  let description = "High-quality laboratory reagents for your scientific needs.";
  
  if (category === 'synthesis') {
    title = "Reagent Synthesis";
    description = "Custom reagent synthesis for specialized laboratory and research requirements.";
  } else if (category === 'supply') {
    title = "Reagent Supply";
    description = "Reliable supply of standard laboratory reagents and consumables.";
  }

  return (
    <>
      <SEO title={`${title} | INNOVAC BIOTECHNOLOGIES`} />
      <PageHero 
        label="Reagents"
        title={title}
        description={description}
      />
      
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-medium mb-6">Overview</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our {title.toLowerCase()} services are built on strict quality control and reliable production processes, ensuring that you receive the materials necessary for accurate and reproducible scientific results.
              </p>
              
              <h3 className="text-2xl font-medium mb-4 mt-12">Features</h3>
              <ul className="space-y-4 mb-8">
                {['Stringent quality control', 'Consistent reproducibility', 'Technical documentation provided', 'Reliable fulfillment'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-600">
                    <div className="w-5 h-5 rounded-full bg-[#FF4D00]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#FF4D00]" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-8 bg-[#F5F5F3] rounded-[24px] border border-[#D8D8D5]">
                <h3 className="text-xl font-medium mb-4">Request Information</h3>
                <p className="text-neutral-600 mb-6">Contact our team for specifications, availability, and pricing.</p>
                <div className="flex flex-wrap gap-4">
                  <Button href={`/contact?type=reagents`} variant="primary" withArrow>DISCUSS REAGENTS</Button>
                  <Button href={getCtaPath('REQUEST_QUOTE')} variant="outline" withArrow>REQUEST A QUOTE</Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8 border border-[#D8D8D5] rounded-[24px] bg-white">
                <h3 className="text-sm font-semibold tracking-widest text-[#FF4D00] uppercase mb-6">Related</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/reagents" className="group flex items-center justify-between text-neutral-600 hover:text-[#FF4D00] transition-colors">
                      <span className="font-medium">All Reagents</span>
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
