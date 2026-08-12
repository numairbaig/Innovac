import React from 'react';
import { SEO } from '@/src/components/SEO';
import { PageHero } from '@/src/components/ui/PageHero';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy | INNOVAC BIOTECHNOLOGIES" />
      <PageHero 
        label="Legal"
        title="Privacy Policy."
        description="Our commitment to protecting your data."
      />
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose">
          <h2>Data Protection</h2>
          <p>At INNOVAC BIOTECHNOLOGIES, we take the privacy of our website visitors and clients seriously. Any personal information you provide via forms (such as enquiries or service requests) is used solely for the purpose of communicating with you regarding our scientific services and products.</p>
        </div>
      </section>
    </>
  );
}
