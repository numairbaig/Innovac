import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  noindex?: boolean;
}

export function SEO({ 
  title = "INNOVAC BIOTECHNOLOGIES | Biotechnology, Molecular Biology & Research",
  description = "INNOVAC BIOTECHNOLOGIES provides biotechnology, molecular biology, research, laboratory services, reagents, computational biology, internships, workshops, and scientific training solutions.",
  url = "https://innovac.example.com",
  noindex = false
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
