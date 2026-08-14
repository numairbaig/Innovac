export interface SubtopicData {
  id: string;
  category: 'biotech' | 'molecular-biology' | 'in-silico';
  categoryLabel: string;
  title: string;
  tagline: string;
  heroDescription: string;
  overview: string[];
  workflowSteps: { step: string; title: string; desc: string }[];
  deliverables: string[];
  applications: string[];
  image: string;
}

export interface ResearchCategoryData {
  id: 'biotech' | 'molecular-biology' | 'in-silico';
  badgeNumber: string;
  tag: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  keyAreasTitle: string;
  keyAreas: {
    title: string;
    description: string;
    iconName?: string;
  }[];
  capabilities: {
    title: string;
    description: string;
  }[];
  applications: string[];
  whyInnovac: {
    title: string;
    description: string;
  }[];
  featuredSubtopicCards?: {
    id: string;
    number: string;
    tag: string;
    title: string;
    description: string;
    services?: string[];
    image: string;
    href: string;
    buttonText: string;
  }[];
}

export const RESEARCH_CATEGORIES: Record<string, ResearchCategoryData> = {
  'biotech': {
    id: 'biotech',
    badgeNumber: '01',
    tag: 'BIO',
    title: 'Biotechnology Research',
    subtitle: 'Experimental & Applied Biotechnology Solutions',
    heroDescription: 'INNOVAC BIOTECHNOLOGIES provides comprehensive biotechnology research support, experimental development, biological process optimization, and scientific solutions for academic and industrial projects.',
    overviewHeading: 'Advancing Biological Sciences Through Experimental & Computational Synergy',
    overviewParagraphs: [
      'Biotechnology research is at the heart of modern biological discovery. It bridges fundamental biological concepts with real-world applications across microbial systems, bio-energy, environmental management, and molecular characterization.',
      'Our research methodology integrates rigorous wet-lab techniques with modern computational analysis. Whether you are developing microbial consortia for biogas production or evaluating biological process parameters, our scientific team provides end-to-end guidance and support.',
      'INNOVAC supports university researchers, postgraduate scholars, private laboratories, and R&D organizations by offering experimental design consultation, sample preparation protocols, and analytical data interpretation.'
    ],
    keyAreasTitle: 'Key Research Areas in Biotechnology',
    keyAreas: [
      {
        title: 'Microbial Biotechnology & Consortia Development',
        description: 'Design and optimization of specialized microbial consortia for biogas production, biological waste treatment, and climatic process modeling.'
      },
      {
        title: 'Molecular Biotechnology',
        description: 'Recombinant DNA techniques, nucleic acid extraction, gene cloning workflows, and enzymatic assay preparation.'
      },
      {
        title: 'Applied & Environmental Biotechnology',
        description: 'Research into biological remediation, environmental monitoring, soil microbiome profiling, and bio-fertilizer formulation.'
      },
      {
        title: 'Industrial Biotechnology Support',
        description: 'Enzyme characterization, substrate conversion efficiency studies, and small-scale fermentation parameter assessment.'
      },
      {
        title: 'Biological Sample Processing & Assay Development',
        description: 'Standardized protocols for sample extraction, biological activity measurement, and reproducible assay setup.'
      }
    ],
    capabilities: [
      {
        title: 'Experimental Research Support',
        description: 'Assisting researchers with protocol formulation, experimental controls, and laboratory execution strategies.'
      },
      {
        title: 'Molecular & Biochemical Analysis',
        description: 'Quantitative measurement of biological parameters, enzymatic activity, and cellular component separation.'
      },
      {
        title: 'Laboratory Methodology Consultation',
        description: 'Troubleshooting inconsistent laboratory results and refining procedures for maximum scientific reproducibility.'
      },
      {
        title: 'Biological Sample Handling',
        description: 'Standardized methods for biological specimen preservation, lysis, purification, and storage stability.'
      },
      {
        title: 'Research Data Interpretation',
        description: 'Transforming raw laboratory measurements into structured datasets, publication-grade graphs, and statistical summaries.'
      },
      {
        title: 'Computational Research Integration',
        description: 'Seamlessly coupling experimental biological findings with in-silico modeling for deeper mechanistic insights.'
      }
    ],
    applications: [
      'Academic postgraduate & doctoral research projects',
      'Microbial consortia & biogas yield optimization',
      'Environmental biological remediation studies',
      'Agricultural microbiome & bio-enhancer studies',
      'Enzymatic biological process modeling',
      'Bioproduct characterization & experimental validation'
    ],
    whyInnovac: [
      {
        title: 'Integrated Research Ecosystem',
        description: 'We bridge experimental biological research with advanced in-silico modeling for comprehensive answers.'
      },
      {
        title: 'Scientific Integrity & Rigor',
        description: 'Our methodologies adhere to established scientific standards ensuring data accuracy and reproducibility.'
      },
      {
        title: 'Tailored Collaborative Support',
        description: 'We customize our research assistance to align precisely with your project scope, timeline, and objectives.'
      }
    ]
  },
  'molecular-biology': {
    id: 'molecular-biology',
    badgeNumber: '02',
    tag: 'MOL',
    title: 'Molecular Biology Research',
    subtitle: 'Nucleic Acid Analysis, Target Discovery & Molecular Design',
    heroDescription: 'INNOVAC BIOTECHNOLOGIES delivers advanced molecular biology research capabilities, covering nucleic acid characterization, vaccine design methodologies, aptamer detection workflows, and sequence analysis.',
    overviewHeading: 'Exploring the Molecular Mechanisms of Life & Bio-Interaction',
    overviewParagraphs: [
      'Molecular biology is fundamental to understanding genetic mechanisms, protein interactions, and diagnostic target selection. At INNOVAC BIOTECHNOLOGIES, we offer specialized research workflows that span both structural modeling and molecular detection.',
      'Our primary specialized research focuses include immunoinformatics-based vaccine design and target-specific aptamer detection systems. By combining sequence analysis with structural docking, we accelerate target selection and validation.',
      'We support scientific investigators with reliable methodologies for gene expression studies, PCR assay validation, probe design, and molecular dataset interpretation.'
    ],
    keyAreasTitle: 'Core Molecular Biology Research Categories',
    keyAreas: [
      {
        title: 'DNA & RNA Analysis & Characterization',
        description: 'Purity assessment, sequence validation, structural motif identification, and stability profiling.'
      },
      {
        title: 'Molecular Target & Marker Discovery',
        description: 'Identifying conserved genetic target regions and biomolecular markers for diagnostic and research applications.'
      },
      {
        title: 'PCR & qPCR Assay Specification',
        description: 'Optimization of reaction conditions, primer-template binding energetics, and amplification specificity.'
      },
      {
        title: 'Sequencing Data Interpretation',
        description: 'Processing Sanger and high-throughput sequencing output for mutation profiling and variant calling.'
      },
      {
        title: 'Protein-Nucleic Acid Interaction Studies',
        description: 'Analyzing binding kinetics, hydrogen bonding patterns, and structural conformations between biomolecules.'
      }
    ],
    capabilities: [
      {
        title: 'Target Discovery & Characterization',
        description: 'Identifying and validating molecular targets across pathogenic genomes and biological systems.'
      },
      {
        title: 'Assay Protocol Formulation',
        description: 'Developing reproducible experimental workflows for molecular detection and quantification.'
      },
      {
        title: 'High-Throughput Sequence Mining',
        description: 'Extracting functional motifs and conserved domain architectures from genomic and transcriptomic databases.'
      },
      {
        title: 'Bio-Interaction Mapping',
        description: 'Delineating structural binding interface residues between target proteins and synthetic nucleic acid ligands.'
      }
    ],
    applications: [
      'Multi-epitope peptide & mRNA vaccine construct modeling',
      'Diagnostic aptamer identification & binding verification',
      'Pathogenic variant identification & sequence tracking',
      'Gene expression assay design & specificity testing',
      'Academic research thesis support in molecular genetics'
    ],
    whyInnovac: [
      {
        title: 'Specialized Expertise in Vaccine & Aptamers',
        description: 'Deep computational and structural knowledge in immunoinformatics and oligonucleotide recognition.'
      },
      {
        title: 'End-to-End Workflow Validation',
        description: 'From initial sequence retrieval to structural dockings and thermodynamic stability assessment.'
      },
      {
        title: 'Publication-Ready Documentation',
        description: 'Clear, comprehensive reports containing structural figures, binding energy tables, and methodology details.'
      }
    ],
    featuredSubtopicCards: [
      {
        id: 'vaccine-design',
        number: '01',
        tag: 'VAC',
        title: 'Vaccine Design Research',
        description: 'Multi-epitope & subunit vaccine design using immunoinformatics, epitope mapping, allergenicity filtering, and docking with immune receptors.',
        services: ['B-Cell & T-Cell Epitope Prediction', 'Antigenicity & Allergenicity Screening', 'Population Coverage Analysis', 'Immune Receptor Docking & MD'],
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop',
        href: '/research/molecular-biology/vaccine-design',
        buttonText: 'EXPLORE VACCINE DESIGN'
      },
      {
        id: 'aptamer-detection',
        number: '02',
        tag: 'APT',
        title: 'Aptamer Detection Research',
        description: 'Selection, structural modeling, and molecular docking of single-stranded RNA/DNA aptamers for target recognition and diagnostic development.',
        services: ['Aptamer Secondary/Tertiary Structure Modeling', 'Target Molecule Docking', 'Binding Affinity & Interaction Mapping', 'Diagnostic Assay Specification'],
        image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop',
        href: '/research/molecular-biology/aptamer-detection',
        buttonText: 'EXPLORE APTAMER DETECTION'
      }
    ]
  },
  'in-silico': {
    id: 'in-silico',
    badgeNumber: '03',
    tag: 'SILICO',
    title: 'In-Silico Research',
    subtitle: 'Computational Biology, Molecular Simulation & Data Analytics',
    heroDescription: 'Accelerate scientific discovery with INNOVAC BIOTECHNOLOGIES in-silico research services, including molecular docking, MD simulations, SPSS statistical analytics, primer design, and sequence alignment.',
    overviewHeading: 'Empowering Biological Science Through High-Performance Computational Modeling',
    overviewParagraphs: [
      'In-silico research leverages mathematical algorithms, structural physics, and bio-computational tools to investigate biological phenomena inside a digital environment. It significantly accelerates research timelines and reduces wet-lab trial costs.',
      'Our computational facility offers specialized research pipelines for structural bioinformatics, binding energy calculations, molecular dynamics trajectory analysis, sequence alignment, and complex bio-statistical evaluations.',
      'Whether you require molecular docking for drug candidate screening, thermodynamic trajectory analysis over hundreds of nanoseconds, or rigorous SPSS statistical processing, INNOVAC provides publication-grade computational results.'
    ],
    keyAreasTitle: 'Comprehensive In-Silico Research Offerings',
    keyAreas: [
      {
        title: 'Molecular Docking & Binding Site Analysis',
        description: 'Simulating ligand-receptor binding poses, predicting binding affinities (kcal/mol), and mapping non-covalent interactions.'
      },
      {
        title: 'Molecular Dynamics (MD) Simulations',
        description: 'Unconstrained atomistic simulations analyzing structural stability, RMSD, RMSF, radius of gyration, and hydrogen bonding over time.'
      },
      {
        title: 'Statistical Dataset Processing (SPSS)',
        description: 'Hypothesis testing, ANOVA, multivariate regression, and graphical visualization for biological datasets.'
      },
      {
        title: 'Oligonucleotide Primer & Probe Design',
        description: 'Precise primer formulation for PCR, qPCR, and sequencing, with stringent thermodynamic and specificity validation.'
      },
      {
        title: 'Comparative Sequence & Phylogenetic Analysis',
        description: 'Multiple sequence alignment (MSA), evolutionary distance calculation, and phylogenetic tree construction.'
      }
    ],
    capabilities: [
      {
        title: 'Atomistic Molecular Simulation',
        description: 'Simulating dynamic conformational changes in biomacromolecules under physiological temperature and solvent conditions.'
      },
      {
        title: 'High-Throughput Virtual Screening',
        description: 'Evaluating small molecule libraries or natural compound databases against disease-relevant target proteins.'
      },
      {
        title: 'Biostatistical Validation',
        description: 'Applying parametric and non-parametric statistical tests to experimental measurements for publication confidence.'
      },
      {
        title: 'Custom Bio-Computational Scripts',
        description: 'Automating custom biological data extraction, sequence filtering, and graphical representation.'
      }
    ],
    applications: [
      'Lead candidate screening & structural binding analysis',
      'Protein structural stability & conformational dynamics',
      'Experimental biological survey & lab dataset statistical analysis',
      'Diagnostic primer & probe design with zero cross-reactivity',
      'Phylogenetic evolutionary analysis of microbial species'
    ],
    whyInnovac: [
      {
        title: 'High-End Computational Infrastructure',
        description: 'State-of-the-art GPU and multi-core server processing for fast and accurate simulation calculations.'
      },
      {
        title: 'Comprehensive Analytical Reports',
        description: 'Detailed scientific reports with high-resolution 3D structural graphics, trajectory plots, and binding tables.'
      },
      {
        title: 'Expert Bioinformaticians',
        description: 'Our team comprises computational biologists experienced in molecular modeling and statistical physics.'
      }
    ],
    featuredSubtopicCards: [
      {
        id: 'primer-design',
        number: '01',
        tag: 'PCR',
        title: 'Primer Design',
        description: 'Custom oligonucleotide primer design for PCR, qPCR, and sequencing with stringent melting temperature and specificity checks.',
        services: ['Melting Temperature (Tm) Balancing', 'Hairpin & Dimer Formation Prevention', 'Specific Blast Validation', 'Degenerate Primer Options'],
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop',
        href: '/research/in-silico/primer-design',
        buttonText: 'EXPLORE PRIMER DESIGN'
      },
      {
        id: 'spss-analysis',
        number: '02',
        tag: 'STAT',
        title: 'SPSS Analysis',
        description: 'Professional statistical analysis, hypothesis testing, ANOVA, and data visualization for experimental biological datasets.',
        services: ['Parametric & Non-Parametric Tests', 'ANOVA & Multivariate Regression', 'Correlation & Cluster Analysis', 'Publication-Ready Visual Charts'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
        href: '/research/in-silico/spss-analysis',
        buttonText: 'EXPLORE SPSS ANALYSIS'
      },
      {
        id: 'molecular-docking',
        number: '03',
        tag: 'DOCK',
        title: 'Molecular Docking',
        description: 'Simulating protein-ligand and protein-protein binding interactions, binding affinity (kcal/mol), and hydrogen bond mapping.',
        services: ['Active Site Grid Generation', 'Conformational Pose Search', 'Binding Affinity Scoring', '2D/3D Interaction Mapping'],
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop',
        href: '/research/in-silico/molecular-docking',
        buttonText: 'EXPLORE MOLECULAR DOCKING'
      },
      {
        id: 'md-simulations',
        number: '04',
        tag: 'SIM',
        title: 'MD Simulations',
        description: 'Unconstrained molecular dynamics simulations assessing atomistic stability, RMSD, RMSF, and solvent accessible surface area.',
        services: ['System Solvation & Neutralization', 'Equilibration (NVT/NPT)', 'Production Dynamics Run', 'RMSD, RMSF, Rg & SASA Plots'],
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop',
        href: '/research/in-silico/md-simulations',
        buttonText: 'EXPLORE MD SIMULATIONS'
      },
      {
        id: 'sequence-alignment',
        number: '05',
        tag: 'ALIGN',
        title: 'Sequence Alignment',
        description: 'Pairwise and multiple sequence alignment (MSA), homology search, conservation profiling, and phylogenetic tree creation.',
        services: ['Blast Homology Screening', 'Multiple Sequence Alignment (MSA)', 'Conserved Region Identification', 'Phylogenetic Tree Reconstruction'],
        image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop',
        href: '/research/in-silico/sequence-alignment',
        buttonText: 'EXPLORE SEQUENCE ALIGNMENT'
      },
      {
        id: 'other-computational',
        number: '06',
        tag: 'COMP',
        title: 'Other Computational Research',
        description: 'Tailored computational biology workflows, custom data parsing scripts, database mining, and specialized bio-research support.',
        services: ['Custom Python/R Scripts', 'Genomic Database Mining', 'Custom Target Filtering', 'Specialized Research Pipeline Support'],
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
        href: '/research/in-silico/other-computational',
        buttonText: 'EXPLORE COMPUTATIONAL RESEARCH'
      }
    ]
  }
};

export const RESEARCH_SUBTOPICS: Record<string, SubtopicData> = {
  'vaccine-design': {
    id: 'vaccine-design',
    category: 'molecular-biology',
    categoryLabel: 'Molecular Biology Research',
    title: 'Vaccine Design Research',
    tagline: 'Immunoinformatics, Epitope Mapping & Multi-Epitope Vaccine Construct Modeling',
    heroDescription: 'INNOVAC BIOTECHNOLOGIES delivers end-to-end computational vaccine design research support, leveraging immunoinformatics, structural docking, and population coverage modeling for candidate identification.',
    overview: [
      'In silico vaccine design uses computational immunoinformatics to identify highly antigenic, non-allergenic, and conserved B-cell and T-cell epitopes from pathogenic target proteins.',
      'Our research workflow predicts cytotoxic T-lymphocyte (CTL), helper T-lymphocyte (HTL), and linear B-cell epitopes. These epitopes are linked with suitable molecular adjuvants and flexible linkers to design stable multi-epitope construct candidates.',
      'We validate construct stability using tertiary structure prediction, refinement, molecular docking against immune cell receptors (such as TLRs), and molecular dynamics simulation.'
    ],
    workflowSteps: [
      { step: '01', title: 'Target Protein Selection', desc: 'Retrieval of pathogenic proteomes, conservation analysis, and subcellular localization screening.' },
      { step: '02', title: 'Epitope Prediction & Filtering', desc: 'MHC Class I, MHC Class II, and B-cell epitope prediction filtered by antigenicity, toxicity, and non-allergenicity.' },
      { step: '03', title: 'Construct Assembly', desc: 'Combining screened epitopes with linkers (EAAAK, AAY, GPGPG) and molecular adjuvants.' },
      { step: '04', title: 'Receptor Docking & MD Validation', desc: 'Docking the construct model with Toll-Like Receptors (TLR-4/TLR-2) followed by MD trajectory verification.' }
    ],
    deliverables: [
      'Comprehensive Epitope Screen Data Tables',
      'Multi-Epitope Construct Sequence Architecture',
      'Refined 3D Structural PDB Models',
      'Receptor-Construct Docking Interaction Map',
      'Population Coverage Statistical Report'
    ],
    applications: [
      'Viral & bacterial pathogen vaccine candidate discovery',
      'Academic research thesis & scientific manuscript data',
      'Pre-clinical target prioritization'
    ],
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop'
  },
  'aptamer-detection': {
    id: 'aptamer-detection',
    category: 'molecular-biology',
    categoryLabel: 'Molecular Biology Research',
    title: 'Aptamer Detection Research',
    tagline: 'Oligonucleotide Target Recognition, Structural Modeling & Binding Kinetics',
    heroDescription: 'Specialized aptamer selection research and structural binding modeling to identify single-stranded DNA/RNA ligands with high target affinity and diagnostic specificity.',
    overview: [
      'Aptamers are synthetic single-stranded oligonucleotides (DNA or RNA) that fold into unique 3D secondary and tertiary structures capable of binding specific targets with high affinity.',
      'Our computational aptamer research pipeline predicts secondary structures (mfold/RNAfold), models 3D tertiary conformations, and screens target-aptamer binding interfaces.',
      'By evaluating hydrogen bonding, electrostatic interactions, and binding energy (kcal/mol), we assist researchers in designing high-performance molecular detection probes.'
    ],
    workflowSteps: [
      { step: '01', title: 'Aptamer Sequence Generation', desc: 'Formulating candidate single-stranded nucleic acid sequence pools.' },
      { step: '02', title: 'Secondary & Tertiary Modeling', desc: 'Simulating folding energy, stem-loop stability, and 3D coordinate generation.' },
      { step: '03', title: 'Target Docking', desc: 'Simulating molecular docking between candidate aptamers and protein/small molecule targets.' },
      { step: '04', title: 'Binding Profile Evaluation', desc: 'Quantitative scoring of interaction surfaces, hydrophobic patches, and hydrogen bonding.' }
    ],
    deliverables: [
      'Secondary Structure Dot-Bracket & Minimum Free Energy (MFE) Plots',
      '3D Aptamer Coordinate Files (PDB)',
      'Target-Aptamer Docked Pose & Interaction Maps',
      'Thermodynamic Binding Summary Report'
    ],
    applications: [
      'Diagnostic biosensor probe design',
      'Target specific molecular detection assays',
      'Academic & translational biophysics research'
    ],
    image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop'
  },
  'primer-design': {
    id: 'primer-design',
    category: 'in-silico',
    categoryLabel: 'In-Silico Research',
    title: 'Primer Design',
    tagline: 'Thermodynamically Balanced & Highly Specific Oligonucleotide Primers',
    heroDescription: 'Precision in-silico primer and probe design for conventional PCR, quantitative real-time PCR (qPCR), and targeted DNA sequencing.',
    overview: [
      'Successful PCR amplification depends heavily on primer specificity, balanced melting temperatures (Tm), and avoidance of secondary structures.',
      'We design forward and reverse primer pairs tailored to your target gene sequences while screening against cross-reactivity and off-target genomic binding.',
      'Each primer set undergoes thermodynamic evaluation for hairpin loops, self-dimers, and cross-dimer formation to ensure high amplification efficiency.'
    ],
    workflowSteps: [
      { step: '01', title: 'Sequence Retrieval', desc: 'Fetching target sequence variants and identifying conserved binding regions.' },
      { step: '02', title: 'Parameter Optimization', desc: 'Setting GC content (40-60%), Tm (58-62°C), and product size constraints.' },
      { step: '03', title: 'Thermodynamic Filtering', desc: 'Screening out self-dimers, cross-dimers, and internal hairpin structures.' },
      { step: '04', title: 'Specificity Verification', desc: 'NCBI BLAST validation against non-target genomes.' }
    ],
    deliverables: [
      'Optimized Primer Pair Sequences (5\' to 3\')',
      'Tm, GC%, and Amplicon Length Specifications',
      'Secondary Structure Thermodynamic Scores (ΔG)',
      'BLAST Off-Target Specificity Audit'
    ],
    applications: [
      'qPCR gene expression analysis',
      'Pathogen detection assays',
      'Genotyping & Sanger sequencing'
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop'
  },
  'spss-analysis': {
    id: 'spss-analysis',
    category: 'in-silico',
    categoryLabel: 'In-Silico Research',
    title: 'SPSS Statistical Analysis',
    tagline: 'Bio-Statistical Data Processing, Hypothesis Testing & Visualization',
    heroDescription: 'Rigorous statistical analysis of biological, experimental, and clinical research datasets using IBM SPSS Statistics.',
    overview: [
      'Scientific conclusions require sound statistical validation. We assist biological and medical researchers with complete dataset processing in SPSS.',
      'Our biostatistical services cover normativity testing, parametric (t-test, ANOVA) and non-parametric tests (Mann-Whitney, Kruskal-Wallis), correlation, and multivariate regression.',
      'We supply publication-ready data tables, statistical significance (p-values), confidence intervals, and high-resolution chart graphics.'
    ],
    workflowSteps: [
      { step: '01', title: 'Data Cleaning & Formatting', desc: 'Structuring raw experimental readings into SPSS data variables.' },
      { step: '02', title: 'Assumption Testing', desc: 'Checking for normality, homogeneity of variance, and outliers.' },
      { step: '03', title: 'Statistical Testing', desc: 'Executing appropriate parametric or non-parametric test protocols.' },
      { step: '04', title: 'Report & Chart Generation', desc: 'Compiling statistical tables, p-value matrices, and charts.' }
    ],
    deliverables: [
      'Formatted SPSS (.sav) & Excel Data Files',
      'Full Statistical Summary Report (APA style)',
      'High-Resolution Bar, Line & Box Plots',
      'p-value & Significance Interpretation Guide'
    ],
    applications: [
      'Academic research manuscript preparation',
      'Biological treatment comparison studies',
      'Clinical & survey dataset evaluation'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop'
  },
  'molecular-docking': {
    id: 'molecular-docking',
    category: 'in-silico',
    categoryLabel: 'In-Silico Research',
    title: 'Molecular Docking',
    tagline: 'Target-Ligand Binding Pose Simulation & Interaction Energy Scoring',
    heroDescription: 'Computational molecular docking simulations predicting 3D binding orientation, binding affinity (kcal/mol), and active site residue interactions.',
    overview: [
      'Molecular docking simulates how small molecule candidates or biological ligands interact with macromolecular target receptors.',
      'We prepare target protein structures (solvation, charge assignment, energy minimization), define binding grid boxes, and run docking algorithms (AutoDock Vina / Glide).',
      'Detailed 2D and 3D interaction diagrams map hydrogen bonds, hydrophobic contacts, pi-stacking, and salt bridges.'
    ],
    workflowSteps: [
      { step: '01', title: 'Receptor & Ligand Prep', desc: 'Adding polar hydrogens, Gasteiger charges, and energy minimization.' },
      { step: '02', title: 'Grid Box Generation', desc: 'Defining active site binding pocket coordinates.' },
      { step: '03', title: 'Conformational Docking', desc: 'Simulating binding poses and calculating binding affinity scores.' },
      { step: '04', title: 'Interaction Profiling', desc: 'Generating 2D and 3D interaction diagrams of top binding poses.' }
    ],
    deliverables: [
      'Docked Complex PDB/PDBQT Files',
      'Binding Affinity Ranking Table (kcal/mol)',
      'High-Resolution 3D Pose Renderings',
      '2D Residue Interaction Maps'
    ],
    applications: [
      'Lead candidate screening',
      'Enzyme-substrate mechanism studies',
      'Natural product binding evaluation'
    ],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop'
  },
  'md-simulations': {
    id: 'md-simulations',
    category: 'in-silico',
    categoryLabel: 'In-Silico Research',
    title: 'Molecular Dynamics (MD) Simulations',
    tagline: 'Atomistic Trajectory Analysis, Structural Stability & Dynamic Conformations',
    heroDescription: 'Unconstrained atomistic MD simulations (GROMACS/AMBER) evaluating dynamic structural stability, RMSD, RMSF, Rg, and hydrogen bond longevity.',
    overview: [
      'Static docking poses only provide a snapshot. Molecular Dynamics (MD) simulations model continuous atomic motions over time under physiological temperature, pressure, and explicit water solvent.',
      'We setup system solvation, ion neutralization, energy minimization, NVT/NPT equilibration, and production runs.',
      'Trajectory analysis quantifies Root Mean Square Deviation (RMSD), Root Mean Square Fluctuation (RMSF), Radius of Gyration (Rg), Solvent Accessible Surface Area (SASA), and intermolecular hydrogen bonding.'
    ],
    workflowSteps: [
      { step: '01', title: 'Topology & Solvation', desc: 'Building force field parameters, explicit TIP3P solvent box, and neutralizing ions.' },
      { step: '02', title: 'Minimization & Equilibration', desc: 'Steepest descent minimization followed by NVT and NPT thermodynamic ensemble runs.' },
      { step: '03', title: 'Production Simulation', desc: 'Running unconstrained production dynamics trajectory.' },
      { step: '04', title: 'Trajectory Analysis', desc: 'Calculating RMSD, RMSF, Rg, SASA, and hydrogen bond matrices.' }
    ],
    deliverables: [
      'Cleaned Trajectory Video Files (.mp4 / .gif)',
      'RMSD, RMSF, Rg & SASA Publication Graphs',
      'Hydrogen Bond Trajectory Matrices',
      'Thermodynamic Energy Stability Summary Report'
    ],
    applications: [
      'Protein-ligand complex stability validation',
      'Mutation-induced structural fluctuation analysis',
      'Conformational transition studies'
    ],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop'
  },
  'sequence-alignment': {
    id: 'sequence-alignment',
    category: 'in-silico',
    categoryLabel: 'In-Silico Research',
    title: 'Sequence Alignment & Phylogenetics',
    tagline: 'Pairwise, Multiple Sequence Alignment (MSA) & Evolutionary Tree Building',
    heroDescription: 'Comparative sequence analysis, homology detection, conserved domain identification, and phylogenetic reconstruction for nucleic acids and proteins.',
    overview: [
      'Sequence alignment reveals evolutionary relationships, conserved functional residues, and genetic mutations across biological strains.',
      'We perform Pairwise Sequence Alignment and Multiple Sequence Alignment (MSA) using CLUSTALW, MUSCLE, or MAFFT algorithms.',
      'Phylogenetic trees are reconstructed using Neighbor-Joining or Maximum Likelihood methods with bootstrap statistical testing.'
    ],
    workflowSteps: [
      { step: '01', title: 'Sequence Gathering', desc: 'Retrieving homologous sequences from GenBank/Uniprot.' },
      { step: '02', title: 'Alignment Execution', desc: 'Running MSA algorithms and gap penalty optimization.' },
      { step: '03', title: 'Conservation Analysis', desc: 'Highlighting catalytic residues and conserved domain blocks.' },
      { step: '04', title: 'Phylogenetic Tree Building', desc: 'Constructing evolutionary trees with bootstrap support values.' }
    ],
    deliverables: [
      'Multiple Sequence Alignment (FASTA / ALN)',
      'Annotated Conservation Color-Coded Maps',
      'High-Resolution Phylogenetic Tree Graphics',
      'Mutational Variant Summary Table'
    ],
    applications: [
      'Strain lineage identification',
      'Conserved motif screening',
      'Comparative genomics research'
    ],
    image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop'
  },
  'other-computational': {
    id: 'other-computational',
    category: 'in-silico',
    categoryLabel: 'In-Silico Research',
    title: 'Other Computational Research',
    tagline: 'Custom Bio-Informatic Scripts, Database Mining & Specialized Workflows',
    heroDescription: 'Customized computational biology research support, Python/R automation, genomic database mining, and specialized bio-data pipelines.',
    overview: [
      'Specialized biological research often requires custom computational tools that standard software cannot address.',
      'We write custom Python, R, and BioPython scripts to parse massive biological datasets, extract specific motif patterns, or automate repetitive analyses.',
      'We work closely with research groups to formulate novel computational pipelines tailored to unique research questions.'
    ],
    workflowSteps: [
      { step: '01', title: 'Requirement Definition', desc: 'Understanding your unique bio-data processing challenge.' },
      { step: '02', title: 'Script Development', desc: 'Writing robust Python/R scripts for parsing and filtering.' },
      { step: '03', title: 'Testing & Validation', desc: 'Running test benchmarks on sample datasets.' },
      { step: '04', title: 'Pipeline Execution', desc: 'Executing final automated run and packaging results.' }
    ],
    deliverables: [
      'Custom Python/R Script Source Code',
      'Extracted Bio-Dataset Summary Files',
      'Custom Visual Plots & Graphics',
      'Workflow Methodology Documentation'
    ],
    applications: [
      'Large-scale genomic database filtering',
      'Custom bio-data parser development',
      'Specialized interdisciplinary research projects'
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop'
  }
};
