export interface SubServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  capabilities: string[];
  sampleRequirements?: string;
}

export interface ServiceDetailData {
  id: string;
  categoryKey: string;
  categoryTitle: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  overview: string[];
  image: string;
  capabilities: string[];
  subServices: SubServiceItem[];
  workflowSteps: { step: string; title: string; desc: string }[];
  sampleInfo: string;
}

export interface ServiceCategoryData {
  id: string;
  badgeNumber: string;
  title: string;
  tagline: string;
  heroDescription: string;
  image: string;
  overviewParagraphs: string[];
  featuredSubCategories: {
    id: string;
    title: string;
    tag: string;
    description: string;
    items: string[];
    image: string;
    href: string;
  }[];
}

export const SERVICE_CATEGORIES: Record<string, ServiceCategoryData> = {
  'nucleic-acid': {
    id: 'nucleic-acid',
    badgeNumber: '01',
    title: 'Nucleic Acid Services',
    tagline: 'High-Precision DNA, RNA, and miRNA Laboratory & Analytical Solutions',
    heroDescription: 'From sample isolation to high-throughput sequencing and targeted molecular assays, INNOVAC BIOTECHNOLOGIES delivers reliable, publication-grade nucleic acid research services.',
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop',
    overviewParagraphs: [
      'Nucleic acid research forms the foundational pillar of modern biological discovery, genomic analysis, and molecular diagnostics. At INNOVAC BIOTECHNOLOGIES, our laboratory and computational infrastructure supports end-to-end workflows across DNA, RNA, and microRNA systems.',
      'Our nucleic acid protocols combine validated wet-lab assays with advanced quality control checks to ensure complete integrity, reproducible yields, and precise quantitative measurements for academic, clinical, and industrial research projects.'
    ],
    featuredSubCategories: [
      {
        id: 'dna',
        title: 'DNA Services',
        tag: 'DNA',
        description: 'Comprehensive DNA detection, custom PCR, primer design, fragment purification, and molecular docking.',
        items: ['DNA Detection', 'Primer Design', 'DNA Sequencing', 'Molecular Docking', 'Gel Electrophoresis', 'PCR Assays', 'Fragment Purification'],
        image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop',
        href: '/services/nucleic-acid/dna'
      },
      {
        id: 'rna',
        title: 'RNA Services',
        tag: 'RNA',
        description: 'High-yield RNA extraction, stability profiling, expression analysis, and RNA-target computational docking.',
        items: ['RNA Extraction', 'RNA Sample Processing', 'RNA Sequencing', 'Molecular Docking', 'Integrity Analysis'],
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
        href: '/services/nucleic-acid/rna'
      },
      {
        id: 'mirna',
        title: 'miRNA Services',
        tag: 'MIRNA',
        description: 'Targeted microRNA detection, custom miRNA synthesis, profiling, and quantitative expression assays.',
        items: ['miRNA Detection', 'miRNA Synthesis', 'miRNA Quantification', 'Target Prediction'],
        image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2959&auto=format&fit=crop',
        href: '/services/nucleic-acid/mirna'
      }
    ]
  },
  'protein-peptide': {
    id: 'protein-peptide',
    badgeNumber: '02',
    title: 'Protein & Peptide Services',
    tagline: 'Custom Peptide Synthesis, Protein Sequencing, and Structural Modification',
    heroDescription: 'Accelerate your proteomic studies with our peptide synthesis, Edman/mass-spec protein sequencing, and specialized chemical modification workflows.',
    image: 'https://images.unsplash.com/photo-1559757175-9b93db5f8cb4?q=80&w=2831&auto=format&fit=crop',
    overviewParagraphs: [
      'Proteins and peptides govern cellular mechanics, enzymatic catalysis, and therapeutic interactions. INNOVAC BIOTECHNOLOGIES provides state-of-the-art peptide synthesis, sequence verification, and structural modification services designed for biochemical research.',
      'Whether you require high-purity custom peptides for functional assays or amino acid sequence validation for recombinant proteins, our team adheres to strict analytical standards.'
    ],
    featuredSubCategories: [
      {
        id: 'sequencing',
        title: 'Protein Sequencing',
        tag: 'SEQ',
        description: 'Analytical protein sequencing, N-terminal verification, mass spectrometry profiling, and amino acid analysis.',
        items: ['N-Terminal Sequencing', 'Mass Spectrometry', 'Amino Acid Analysis', 'Purity Verification'],
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop',
        href: '/services/protein-peptide/sequencing'
      },
      {
        id: 'synthesis',
        title: 'Peptide Synthesis',
        tag: 'SYNTH',
        description: 'Custom solid-phase peptide synthesis (SPPS) from short chains to complex sequences with custom purity options.',
        items: ['Solid-Phase Synthesis', 'Custom Length Peptides', 'High Purity Options', 'HPLC & MS Quality Certs'],
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop',
        href: '/services/protein-peptide/synthesis'
      },
      {
        id: 'modification',
        title: 'Peptide Modification',
        tag: 'MOD',
        description: 'Specialized chemical modifications including phosphorylation, biotinylation, fluorescent tagging, and disulfide bonding.',
        items: ['Phosphorylation', 'Biotinylation', 'Fluorescent Tagging', 'Cyclization & Disulfide Bonds'],
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop',
        href: '/services/protein-peptide/modification'
      }
    ]
  },
  'computational': {
    id: 'computational',
    badgeNumber: '03',
    title: 'Research & Computational Biology',
    tagline: 'In-Silico Modeling, Bioinformatics Pipelines, and Biostatistical Data Analytics',
    heroDescription: 'Bridge laboratory experimental data with computational intelligence. We provide structural docking, molecular dynamics, primer design, and bioinformatics analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    overviewParagraphs: [
      'Modern scientific discovery requires rapid, accurate computational prediction alongside experimental validation. Our computational biology services leverage state-of-the-art software, biostatistical tools, and molecular simulation clusters.',
      'We support researchers with custom primer modeling, high-throughput sequence alignment, macromolecular docking, dynamic trajectory analysis, and SPSS data interpretation.'
    ],
    featuredSubCategories: [
      {
        id: 'in-silico',
        title: 'In-Silico Research',
        tag: 'SILICO',
        description: 'Molecular docking, MD simulations, primer design, SPSS statistics, and computational structure validation.',
        items: ['Molecular Docking', 'MD Simulations', 'Primer Design', 'SPSS Data Analysis', 'Sequence Alignment'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
        href: '/services/computational/in-silico'
      },
      {
        id: 'bioinformatics',
        title: 'Bioinformatics',
        tag: 'BIOINF',
        description: 'Genomic sequence analysis, biological data pipelines, phylogenetic tree building, and functional annotation.',
        items: ['Sequence Analysis', 'Biological Data Interpretation', 'Phylogenetic Tree Reconstruction', 'Custom Bioinformatics Pipelines'],
        image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop',
        href: '/services/computational/bioinformatics'
      }
    ]
  }
};

export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  'dna': {
    id: 'dna',
    categoryKey: 'nucleic-acid',
    categoryTitle: 'Nucleic Acid Services',
    title: 'DNA Services',
    subtitle: 'Detection, Primer Specification, Sequencing, PCR, and Electrophoresis',
    heroDescription: 'Complete DNA-level analytical and laboratory services including PCR amplification, fragment purification, custom primer design, and targeted molecular assays.',
    image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop',
    overview: [
      'Our DNA services support a broad spectrum of genomic research tasks. From targeted PCR amplification to gel electrophoresis and fragment purification, we provide end-to-end experimental and computational execution.',
      'Every project includes stringent sample quality assessment, standardized thermal cycling, agarose/acrylamide resolution, and publication-ready digital documentation.'
    ],
    capabilities: [
      'High-Sensitivity DNA Detection & Quantification',
      'Custom PCR & qPCR Assay Optimization',
      'Targeted Gel Electrophoresis & Band Analysis',
      'DNA Fragment Purification & Clean-up',
      'Thermodynamic Primer Design & Specificity Verification',
      'In-Silico DNA-Ligand Docking Analysis'
    ],
    subServices: [
      { id: 'detection', name: 'DNA Detection & Quantification', shortDesc: 'Fluorometric and spectrophotometric DNA concentration and purity screening.', capabilities: ['Nanodrop/Qubit analysis', 'A260/A280 ratio check', 'Contaminant detection'] },
      { id: 'pcr', name: 'PCR & Amplification Assays', shortDesc: 'Standard, hot-start, and quantitative real-time PCR protocol execution.', capabilities: ['Optimal Tm optimization', 'Buffer selection', 'Amplicon validation'] },
      { id: 'primer', name: 'Primer Design & Validation', shortDesc: 'In-silico design of specific primers avoiding hairpins and primer-dimers.', capabilities: ['Thermodynamic modeling', 'BLAST specificity check', 'Tm & GC% tuning'] },
      { id: 'gel', name: 'Gel Electrophoresis & Purification', shortDesc: 'High-resolution gel separation and band extraction for downstream cloning or sequencing.', capabilities: ['Agarose gel analysis', 'Column purification', 'High yield recovery'] }
    ],
    workflowSteps: [
      { step: '01', title: 'Sample Submission / Scope', desc: 'Submit DNA samples or define target parameters for PCR/primer design.' },
      { step: '02', title: 'Quality Control', desc: 'Assess DNA purity, concentration, and structural integrity.' },
      { step: '03', title: 'Assay / Processing', desc: 'Perform thermal cycling, gel electrophoresis, or computational design.' },
      { step: '04', title: 'Results & Report', desc: 'Receive purified amplicons, gel images, or primer data sheets.' }
    ],
    sampleInfo: 'Extracted genomic or plasmid DNA samples (minimum 10 ng/µL, volume ≥ 20 µL). Standard TE or nuclease-free water buffer.'
  },
  'rna': {
    id: 'rna',
    categoryKey: 'nucleic-acid',
    categoryTitle: 'Nucleic Acid Services',
    title: 'RNA Services',
    subtitle: 'Extraction, Sample Processing, Stability Screening, and RNA Docking',
    heroDescription: 'Specialized RNA research support including total RNA isolation, integrity verification (RIN screening), transcript processing, and RNA molecular interactions.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
    overview: [
      'RNA molecules exhibit high sensitivity to degradation, requiring RNase-free environment standards and strict temperature control. INNOVAC BIOTECHNOLOGIES delivers reliable RNA sample extraction, purification, and analytical processing.',
      'Our workflows protect transcript integrity for cDNA synthesis, RT-qPCR, and structural RNA computational modeling.'
    ],
    capabilities: [
      'Total RNA & mRNA Extraction from Tissue/Cells',
      'RNase-Free Sample Handling & Preservation',
      'Spectrophotometric RIN & Quality Assessment',
      'cDNA Synthesis & RT-qPCR Setup Support',
      'Computational RNA Structure & Docking Analysis'
    ],
    subServices: [
      { id: 'extraction', name: 'RNA Extraction & Isolation', shortDesc: 'High-purity total RNA extraction from biological specimens.', capabilities: ['TRIzol/Column protocols', 'DNase-I treatment', 'Integrity testing'] },
      { id: 'processing', name: 'RNA Sample Processing', shortDesc: 'Preservation, dilution, and aliquoting under controlled RNase-free conditions.', capabilities: ['Cold-chain storage', 'Quality reporting', 'A260/A230 verification'] },
      { id: 'docking', name: 'RNA Docking & Interaction Modeling', shortDesc: 'In-silico modeling of RNA 3D secondary/tertiary interactions.', capabilities: ['RNA folding simulation', 'Ligand binding site analysis', 'Free energy calculation'] }
    ],
    workflowSteps: [
      { step: '01', title: 'Sample Receipt', desc: 'Receive preserved tissue/cells in RNAprotect or liquid nitrogen.' },
      { step: '02', title: 'RNase-Free Extraction', desc: 'Perform specialized lysis, phase separation, and column purification.' },
      { step: '03', title: 'Quality Assurance', desc: 'Check A260/280 ratios and electrophoretic integrity.' },
      { step: '04', title: 'Final Output', desc: 'Deliver purified RNA or cDNA ready for gene expression analysis.' }
    ],
    sampleInfo: 'Fresh or flash-frozen tissue/cell pellets shipped on dry ice or in RNA preservation buffers.'
  },
  'mirna': {
    id: 'mirna',
    categoryKey: 'nucleic-acid',
    categoryTitle: 'Nucleic Acid Services',
    title: 'miRNA Services',
    subtitle: 'MicroRNA Detection, Custom Synthesis, and Quantitative Expression Assays',
    heroDescription: 'End-to-end microRNA services for non-coding RNA research, including small RNA detection, stem-loop RT-qPCR, synthesis, and target prediction.',
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2959&auto=format&fit=crop',
    overview: [
      'MicroRNAs (miRNAs) regulate post-transcriptional gene expression and serve as key biomarkers. Due to their small size (~22 nucleotides), specialized detection and synthesis techniques are essential.',
      'We provide small RNA detection, custom miRNA oligonucleotide synthesis, and quantitative stem-loop RT-qPCR assays.'
    ],
    capabilities: [
      'Small RNA & miRNA Selective Isolation',
      'Stem-Loop RT-qPCR Detection Assays',
      'Custom miRNA Oligonucleotide Synthesis',
      'miRNA Target Prediction & Gene Network Analysis',
      'Quantitative Expression Profiling'
    ],
    subServices: [
      { id: 'detection', name: 'miRNA Detection & Profiling', shortDesc: 'Targeted detection of specific microRNAs in biofluids or cell lines.', capabilities: ['Stem-loop primers', 'High specificity qPCR', 'Expression normalization'] },
      { id: 'synthesis', name: 'miRNA Custom Synthesis', shortDesc: 'Synthetic miRNA mimics and inhibitors for functional studies.', capabilities: ['High purity HPLC', 'Duplex assembly', 'Chemical modifications'] },
      { id: 'quantification', name: 'miRNA Quantification Assays', shortDesc: 'Relative and absolute copy number determination.', capabilities: ['Standard curve calibration', 'Housekeeping gene normalization', 'Data visualization'] }
    ],
    workflowSteps: [
      { step: '01', title: 'Target Identification', desc: 'Specify target miRNA accession or submit biological samples.' },
      { step: '02', title: 'Oligo Synthesis / Isolation', desc: 'Synthesize custom mimics or isolate small RNA fraction.' },
      { step: '03', title: 'RT-qPCR Assay', desc: 'Execute stem-loop amplification and fluorescent quantification.' },
      { step: '04', title: 'Data Report', desc: 'Deliver expression fold-change plots and statistical analysis.' }
    ],
    sampleInfo: 'Serum, plasma, biofluids, or cell lysates preserved under small RNA protocols.'
  },
  'sequencing': {
    id: 'sequencing',
    categoryKey: 'protein-peptide',
    categoryTitle: 'Protein & Peptide Services',
    title: 'Protein Sequencing',
    subtitle: 'N-Terminal Edman Degradation, Mass Spectrometry, and Amino Acid Profiling',
    heroDescription: 'Analytical protein sequence verification, N-terminal identification, and mass spectrometry profiling to confirm primary protein structures.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop',
    overview: [
      'Sequence integrity is crucial for recombinant antibody production, enzyme engineering, and therapeutic proteins. INNOVAC BIOTECHNOLOGIES offers precise protein sequence validation.',
      'Using a combination of automated Edman degradation and high-resolution LC-MS/MS, we verify sequence fidelity, identify truncations, and validate amino acid compositions.'
    ],
    capabilities: [
      'N-Terminal Edman Sequencing (Up to 15-20 Residues)',
      'Intact Mass Spectrometry Analysis',
      'LC-MS/MS Peptide Mapping & Coverage Analysis',
      'Amino Acid Composition Profiling',
      'Recombinant Protein Identity Verification'
    ],
    subServices: [
      { id: 'edman', name: 'Edman N-Terminal Sequencing', shortDesc: 'Stepwise Edman degradation to identify initial amino acid sequence.', capabilities: ['PVDF membrane compatible', 'Sub-picomole sensitivity', 'Clean chromatograms'] },
      { id: 'mass-spec', name: 'LC-MS/MS Proteomic Profiling', shortDesc: 'Enzymatic digestion followed by liquid chromatography mass spectrometry.', capabilities: ['Full sequence coverage', 'PTM identification', 'Database searching'] }
    ],
    workflowSteps: [
      { step: '01', title: 'Sample Submission', desc: 'Submit purified protein solution or PVDF membrane blot.' },
      { step: '02', title: 'Purity Check', desc: 'Assess sample purity by SDS-PAGE or HPLC.' },
      { step: '03', title: 'Sequencing Run', desc: 'Perform Edman cycles or trypsin digestion + LC-MS/MS.' },
      { step: '04', title: 'Sequence Alignment', desc: 'Compare raw spectrum/chromatograms with target database.' }
    ],
    sampleInfo: 'Purified protein (≥ 10 µg, purity > 90%) in salt-free or volatile buffer, or immobilized on PVDF membrane.'
  },
  'synthesis': {
    id: 'synthesis',
    categoryKey: 'protein-peptide',
    categoryTitle: 'Protein & Peptide Services',
    title: 'Peptide Synthesis',
    subtitle: 'Custom Solid-Phase Peptide Synthesis (SPPS) from Milligrams to Grams',
    heroDescription: 'Custom peptide synthesis with tailored length, purity levels (desalted to > 98%), and quality certification by analytical HPLC and Mass Spectrometry.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop',
    overview: [
      'Synthetic peptides are essential tools for epitope mapping, antibody generation, receptor-ligand assays, and drug discovery. Our automated Solid-Phase Peptide Synthesis (SPPS) platform handles sequences from 2 to 70+ amino acids.',
      'Every peptide undergoes stringent HPLC purification and MS identity verification to ensure your research receives exactly what you specified.'
    ],
    capabilities: [
      'Automated Fmoc/tBu Solid-Phase Synthesis',
      'Flexible Purity Tiers: Crude, > 85%, > 90%, > 95%, > 98%',
      'Custom Quantities: 1 mg to Multi-Gram Batches',
      'HPLC & MALDI-TOF / ESI-MS Certificates of Analysis',
      'Solubility Testing & Aliquoting Services'
    ],
    subServices: [
      { id: 'spps-custom', name: 'Custom Peptide Synthesis', shortDesc: 'Linear peptide chains synthesized to custom sequence and purity.', capabilities: ['Any length 2-70 AA', 'HPLC purified', 'MS report included'] },
      { id: 'library', name: 'Peptide Library Generation', shortDesc: 'Overlapping or alanine-scanning peptide libraries for screening.', capabilities: ['High-throughput format', '96-well plate delivery', 'Rapid turnaround'] }
    ],
    workflowSteps: [
      { step: '01', title: 'Sequence Review', desc: 'Submit amino acid sequence for synthesis feasibility analysis.' },
      { step: '02', title: 'SPSS Assembly', desc: 'Coupling amino acids step-by-step on resin support.' },
      { step: '03', title: 'HPLC & MS QC', desc: 'Purify via prep-HPLC and verify molecular weight by MS.' },
      { step: '04', title: 'Lyophilization', desc: 'Lyophilize product into freeze-dried powder with CoA report.' }
    ],
    sampleInfo: 'Provide 1-letter or 3-letter sequence code with specified N-terminal (e.g. Ac) and C-terminal (e.g. NH2) caps.'
  },
  'modification': {
    id: 'modification',
    categoryKey: 'protein-peptide',
    categoryTitle: 'Protein & Peptide Services',
    title: 'Peptide Modification',
    subtitle: 'Phosphorylation, Biotinylation, Fluorescent Tagging, and Disulfide Bonds',
    heroDescription: 'Tailored chemical modifications to enhance peptide stability, introduce bio-orthogonal handles, enable fluorescence tracking, or form structural disulfide bridges.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop',
    overview: [
      'Chemical modifications transform linear peptides into functional probe molecules, stable therapeutics, and localized probes. We offer a comprehensive menu of post-synthetic chemical modifications.',
      'From site-specific phosphorylation (Ser/Thr/Tyr) to fluorophore conjugations (FITC, FAM, Cy3/Cy5) and intramolecular disulfide bridge formation, we deliver precision modifications.'
    ],
    capabilities: [
      'Site-Specific Phosphorylation (pSer, pThr, pTyr)',
      'N-Terminal / Lysine Biotinylation & PEGylation',
      'Fluorescent Labeling (FITC, 5-FAM, TAMRA, Cy3, Cy5)',
      'Intramolecular & Intermolecular Disulfide Bridges',
      'Stable Isotope Labeling (13C, 15N)'
    ],
    subServices: [
      { id: 'phosphorylation', name: 'Phosphorylation Modification', shortDesc: 'Addition of phosphate groups to simulate kinase activity.', capabilities: ['Single/multi-site', 'pSer/pThr/pTyr', 'Purity verification'] },
      { id: 'labeling', name: 'Fluorescent & Biotin Labeling', shortDesc: 'Conjugation of fluorophores or biotin for imaging and binding assays.', capabilities: ['N-term or Lys link', 'High brightness', 'HPLC clean-up'] }
    ],
    workflowSteps: [
      { step: '01', title: 'Modification Design', desc: 'Select modification type, attachment site, and spacer/linker.' },
      { step: '02', title: 'Chemical Coupling', desc: 'Perform targeted chemical reaction during or after SPPS.' },
      { step: '03', title: 'Mass Spectrometry QC', desc: 'Confirm mass shift corresponding to modification.' },
      { step: '04', title: 'Delivery', desc: 'Deliver lyophilized modified peptide with full analytics.' }
    ],
    sampleInfo: 'Specify target modification, position in sequence, and desired linker (e.g. Ahx, PEG2).'
  },
  'in-silico': {
    id: 'in-silico',
    categoryKey: 'computational',
    categoryTitle: 'Research & Computational Biology',
    title: 'In-Silico Research Services',
    subtitle: 'Molecular Docking, MD Simulations, Primer Design, and SPSS Analytics',
    heroDescription: 'Advanced computational modeling, thermodynamic simulations, biostatistical analysis, and targeted in-silico screening for molecular discovery.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    overview: [
      'In-silico methodologies significantly reduce trial-and-error costs in laboratory research by predicting binding affinities, structural dynamics, and optimal assay parameters beforehand.',
      'Our computational team uses industry-standard software suites to deliver molecular docking, nanosecond molecular dynamics simulations, primer validation, and SPSS biostatistics.'
    ],
    capabilities: [
      'Protein-Ligand & Protein-Protein Molecular Docking',
      'Molecular Dynamics (MD) Trajectory & RMSD/RMSF Simulations',
      'Thermodynamic PCR/qPCR Primer Design',
      'SPSS Biostatistical Data Analysis & Regression',
      'Sequence Alignment & Homology Modeling'
    ],
    subServices: [
      { id: 'docking', name: 'Molecular Docking', shortDesc: 'Rigid/flexible ligand docking to identify binding poses and affinity scores.', capabilities: ['Binding energy (kcal/mol)', 'Hydrogen bond mapping', '3D interaction diagrams'] },
      { id: 'md', name: 'MD Simulations', shortDesc: 'Dynamic behavior profiling in solvated membrane/water systems.', capabilities: ['GROMACS/AMBER workflows', 'RMSD/RMSF calculation', 'Radius of gyration'] },
      { id: 'primer', name: 'Primer Design', shortDesc: 'Precision primer design for PCR/qPCR experiments.', capabilities: ['Thermodynamic filtering', 'Blast specificity check', 'Hairpin avoidance'] },
      { id: 'spss', name: 'SPSS Analysis', shortDesc: 'Biostatistical evaluation of experimental biological data.', capabilities: ['ANOVA/t-tests', 'Correlation analysis', 'Publication tables'] }
    ],
    workflowSteps: [
      { step: '01', title: 'Project Consultation', desc: 'Provide PDB IDs, target sequences, or raw biological dataset.' },
      { step: '02', title: 'System Preparation', desc: 'Clean 3D coordinates, assign force fields, or format statistical variables.' },
      { step: '03', title: 'Computation Run', desc: 'Execute docking grids, MD production runs, or statistical tests.' },
      { step: '04', title: 'Publication Report', desc: 'Receive high-res 3D visuals, trajectory plots, and statistical summary.' }
    ],
    sampleInfo: 'PDB codes, FASTA sequences, SMILES strings for ligands, or Excel/CSV datasets for statistical analysis.'
  },
  'bioinformatics': {
    id: 'bioinformatics',
    categoryKey: 'computational',
    categoryTitle: 'Research & Computational Biology',
    title: 'Bioinformatics Services',
    subtitle: 'Genomic Sequence Analysis, Biological Data Pipelines, and Phylogenetics',
    heroDescription: 'End-to-end bioinformatics analytical support including high-throughput sequence alignment, gene annotation, phylogenetic reconstruction, and biological network mapping.',
    image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop',
    overview: [
      'Extracting meaningful biological insight from raw genomic and transcriptomic datasets requires specialized bioinformatic pipelines and domain expertise.',
      'INNOVAC BIOTECHNOLOGIES provides customized bioinformatics solutions for researchers seeking robust sequence alignment, evolutionary analysis, and functional gene annotation.'
    ],
    capabilities: [
      'Multiple Sequence Alignment (Clustal Omega, MAFFT, MUSCLE)',
      'Phylogenetic Tree Construction & Bootstrap Analysis',
      'Gene Annotation & Domain Architecture Mapping',
      'Custom Python/R Data Processing Pipelines',
      'Biological Pathway & Interaction Network Analysis'
    ],
    subServices: [
      { id: 'alignment', name: 'Sequence Alignment & Phylogenetics', shortDesc: 'Global and local alignments for nucleotide or protein sequences.', capabilities: ['Conservation scoring', 'Phylogenetic trees', 'Substitutions analysis'] },
      { id: 'pipelines', name: 'Custom Bioinformatics Pipelines', shortDesc: 'Tailored computational scripts for processing complex biological datasets.', capabilities: ['Python/R automation', 'Data cleanup', 'Visualization plots'] }
    ],
    workflowSteps: [
      { step: '01', title: 'Data Upload', desc: 'Submit FASTA, FASTQ, or biological sequence files.' },
      { step: '02', title: 'Pipeline Execution', desc: 'Run alignment algorithms or customized analytical scripts.' },
      { step: '03', title: 'Quality Assessment', desc: 'Validate alignment scores, tree bootstrapping, and annotation.' },
      { step: '04', title: 'Analytical Output', desc: 'Receive alignment files, tree diagrams (Newick/NEXUS), and data charts.' }
    ],
    sampleInfo: 'FASTA nucleotide/amino acid sequences, GenBank accessions, or tabular biological data files.'
  }
};
