export type ReagentCategory = 'Synthesis' | 'Supply';

export interface Reagent {
  id: string;
  name: string;
  category: ReagentCategory;
  description: string;
  image: string;
  slug: string;
}

export const reagentsData: Reagent[] = [
  // SYNTHESIS
  {
    id: 's1',
    name: 'Deionized Water',
    category: 'Synthesis',
    description: 'Laboratory reagent used in nucleic acid research workflows.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2825&auto=format&fit=crop',
    slug: 'deionized-water'
  },
  {
    id: 's2',
    name: 'TRIzol',
    category: 'Synthesis',
    description: 'Laboratory reagent used in nucleic acid research workflows.',
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2959&auto=format&fit=crop',
    slug: 'trizol'
  },
  {
    id: 's3',
    name: 'TAE Buffer',
    category: 'Synthesis',
    description: 'Laboratory reagent used in nucleic acid research workflows.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
    slug: 'tae-buffer'
  },
  {
    id: 's4',
    name: 'TBE Buffer',
    category: 'Synthesis',
    description: 'Laboratory reagent used in nucleic acid research workflows.',
    image: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=2940&auto=format&fit=crop',
    slug: 'tbe-buffer'
  },
  {
    id: 's5',
    name: 'Ethidium Bromide',
    category: 'Synthesis',
    description: 'Laboratory reagent used in nucleic acid research workflows.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop',
    slug: 'ethidium-bromide'
  },
  {
    id: 's6',
    name: 'Media Formation',
    category: 'Synthesis',
    description: 'Laboratory reagent used in nucleic acid research workflows.',
    image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop',
    slug: 'media-formation'
  },
  // SUPPLY
  {
    id: 'p1',
    name: 'Restriction Enzymes',
    category: 'Supply',
    description: 'Laboratory supply supporting molecular biology and biotechnology research workflows.',
    image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2940&auto=format&fit=crop',
    slug: 'restriction-enzymes'
  },
  {
    id: 'p2',
    name: 'Oligos',
    category: 'Supply',
    description: 'Laboratory supply supporting molecular biology and biotechnology research workflows.',
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop',
    slug: 'oligos'
  },
  {
    id: 'p3',
    name: 'Polymerases',
    category: 'Supply',
    description: 'Laboratory supply supporting molecular biology and biotechnology research workflows.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop',
    slug: 'polymerases'
  },
  {
    id: 'p4',
    name: 'Master Mixes',
    category: 'Supply',
    description: 'Laboratory supply supporting molecular biology and biotechnology research workflows.',
    image: 'https://images.unsplash.com/photo-1559757175-9b93db5f8cb4?q=80&w=2831&auto=format&fit=crop',
    slug: 'master-mixes'
  },
  {
    id: 'p5',
    name: 'Media Supply',
    category: 'Supply',
    description: 'Laboratory supply supporting molecular biology and biotechnology research workflows.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop',
    slug: 'media-supply'
  }
];
