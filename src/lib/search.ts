import { services } from '@/src/data/services';
import { reagentsData } from '@/src/data/reagents';
import { researchAreas } from '@/src/data/research';
import { internshipAreas } from '@/src/data/internships';
import { workshopCategories } from '@/src/data/workshops';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'Service' | 'Reagent' | 'Research' | 'Internship' | 'Workshop';
  url: string;
}

export function searchContent(query: string): SearchResult[] {
  if (!query || query.trim() === '') return [];
  
  const lowerQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Services
  services.forEach(item => {
    if (item.title.toLowerCase().includes(lowerQuery) || item.description.toLowerCase().includes(lowerQuery) || (item.features && item.features.some(f => f.toLowerCase().includes(lowerQuery)))) {
      results.push({
        id: `service-${item.id}`,
        title: item.title,
        description: item.description,
        category: 'Service',
        url: `/services/${item.id}`
      });
    }
  });

  // Reagents
  reagentsData.forEach(item => {
    if (item.name.toLowerCase().includes(lowerQuery) || item.description.toLowerCase().includes(lowerQuery) || item.category.toLowerCase().includes(lowerQuery)) {
      results.push({
        id: `reagent-${item.id}`,
        title: item.name,
        description: item.description,
        category: 'Reagent',
        url: `/reagents/${item.category.toLowerCase()}`
      });
    }
  });

  // Research
  researchAreas.forEach(item => {
    if (item.title.toLowerCase().includes(lowerQuery) || item.description.toLowerCase().includes(lowerQuery) || (item.services && item.services.some(t => t.toLowerCase().includes(lowerQuery)))) {
      results.push({
        id: `research-${item.slug}`,
        title: item.title,
        description: item.description,
        category: 'Research',
        url: `/research/${item.slug}`
      });
    }
  });

  // Internships
  internshipAreas.forEach(item => {
    if (item.title.toLowerCase().includes(lowerQuery) || item.description.toLowerCase().includes(lowerQuery) || (item.topics && item.topics.some(t => t.toLowerCase().includes(lowerQuery)))) {
      results.push({
        id: `internship-${item.slug}`,
        title: item.title,
        description: item.description,
        category: 'Internship',
        url: `/internships#internship-programs`
      });
    }
  });

  // Workshops
  workshopCategories.forEach(item => {
    if (item.title.toLowerCase().includes(lowerQuery) || item.description.toLowerCase().includes(lowerQuery) || (item.topics && item.topics.some(t => t.toLowerCase().includes(lowerQuery)))) {
      results.push({
        id: `workshop-${item.slug}`,
        title: item.title,
        description: item.description,
        category: 'Workshop',
        url: `/workshops#workshop-programs`
      });
    }
  });

  return results;
}
