import React from 'react';
import { SEO } from '@/src/components/SEO';
import { PageHero } from '@/src/components/ui/PageHero';

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions | INNOVAC BIOTECHNOLOGIES" />
      <PageHero 
        label="Legal"
        title="Terms & Conditions."
        description="Guidelines for using our services."
      />
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose">
          <h2>Service Usage</h2>
          <p>By engaging with INNOVAC BIOTECHNOLOGIES, you agree to our standard terms of service regarding research, reagent supply, and training programs. All scientific data and IP are handled according to agreed project contracts.</p>
        </div>
      </section>
    </>
  );
}