import type { ProjectItem } from '../types/portfolio';


export const PERSONAL_INFO = {
  name: 'Tanmay Das',
  title: 'AI Developer @ Interloom | CS Engineering Student',
  institution: 'Manipal Institute of Technology, Bengaluru',
  graduation: 'Expected 2029',
  email: 'tanndas1002@gmail.com',
  phone: '+91 80954 30594',
  linkedin: 'https://www.linkedin.com/in/tanmay-das-6b9748273',
  github: 'https://github.com',
  location: 'Bengaluru, India',
  summary: `I engineer semantic search pipelines, dense vector embeddings, and autonomous AI workflows at Interloom. My focus is mathematical similarity calibration, sibling-technology guardrails against semantic drift, and reliable LLM triage.`
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'support-agent',
    title: 'Autonomous AI Support Agent',
    category: 'Agent Orchestration & Enterprise Triage',
    badge: 'Production Validated',
    tagline: 'Multi-scenario agent pipeline with confidence-based human-in-the-loop escalation.',
    whyIBuiltThis: 'Most LLM chatbots fail silently when facing edge cases. I wanted to build an agent that mathematically calculates its own uncertainty and gracefully hands off to human operators rather than hallucinating.',
    whatBroke: 'Early prompt chains hallucinated refund authorizations on ambiguous policy questions. Solved by decoupling reasoning into strict JSON schemas with an assertive confidence threshold (0.85). Any ambiguous ticket falls back to a human queue with a summarized decision trace.',
    outcomes: [
      'Validated across 3 rigorous real-world scenario test suites with zero schema failures.',
      'Deterministic routing with sub-second decision latency and structured JSON outputs.',
      'Full human-in-the-loop escalation pipeline integrated with webhook triggers.'
    ],
    techStack: ['Python', 'LLMs', 'n8n', 'REST APIs', 'JSON Schema', 'Docker'],
    links: {
      youtubeId: 'y2YVWYrxIS8',
      demo: 'https://youtu.be/y2YVWYrxIS8'
    },
    metrics: [
      { label: 'Escalation Threshold', value: '0.85 Confidence' },
      { label: 'Validated Test Cases', value: '3 Documented Suites' },
      { label: 'Output Schema Validity', value: '100%' }
    ]
  },
  {
    id: 'sagarmitra-orca',
    title: 'SagarMitra – ORCA',
    category: 'Marine Ecosystem & Multi-Agent Reasoning',
    badge: 'Internal Smart India Hackathon (MIT Bengaluru)',
    tagline: 'Maritime intelligence platform with collaborative agent reasoning and vessel route optimization.',
    whyIBuiltThis: 'Fishermen and maritime operators navigate dangerous weather and unpredictable fishing zones with fragmented alerts. We built ORCA to fuse live ocean telemetry with collaborative multi-agent reasoning.',
    whatBroke: 'Streaming live satellite bathymetry and sea-surface temperatures caused massive data serialization bottlenecks. We re-architected the pipeline into specialized asynchronous sub-agents (Weather Agent, Bathymetry Agent, Fishing-Zone Predictor) coordinating through a central mediator.',
    outcomes: [
      'Optimized vessel navigation routes considering wave height, fuel efficiency, and maritime hazards.',
      'Multilingual AI voice and text assistant enabling local fishermen to query conditions in native dialects.',
      'Live ocean and satellite data ingestion pipeline with automated potential fishing zone (PFZ) mapping.'
    ],
    techStack: ['Python', 'Multi-Agent Systems', 'FastAPI', 'Satellite Telemetry', 'Geospatial Analytics'],
    links: {},
    metrics: [
      { label: 'Agent Mesh', value: '4 Collaborative Agents' },
      { label: 'Route Efficiency Gain', value: '~18% Fuel Saved' },
      { label: 'Languages Supported', value: 'Multilingual Regional' }
    ]
  },
  {
    id: 'honeypot-system',
    title: 'Autonomous Cybersecurity Honeypot',
    category: 'Deception & Threat Telemetry',
    badge: 'HCL GUVI Hackathon',
    tagline: 'Intelligent deception system that traps attackers and automatically analyzes malicious tactics.',
    whyIBuiltThis: 'Standard honeypots are static and easily detected by modern automated scanning tools. We designed a dynamic decoy service that mimics vulnerable production environments and logs attacker behaviors.',
    whatBroke: 'Sophisticated scanners detected predictable artificial SSH banners within seconds. We implemented dynamic delay emulation and realistic Linux shell responses that deceived scanners into prolonged reconnaissance attempts.',
    outcomes: [
      'Simulated deceptive services (SSH, HTTP, Redis) logging live keystrokes and shell command payloads.',
      'Automated threat telemetry clustering to detect botnet scan patterns vs. interactive human attackers.',
      'Real-time alert dispatch to incident responders with attack signature extraction.'
    ],
    techStack: ['Python', 'Networking', 'Docker', 'Threat Telemetry', 'Anomaly Detection'],
    links: {},
    metrics: [
      { label: 'Deceptive Services', value: '3 Emulated Protocols' },
      { label: 'Mean Dwell Time', value: '3.4x Standard Decoys' },
      { label: 'Telemetry Precision', value: '99.1%' }
    ]
  },
  {
    id: 'pneumonia-detection',
    title: 'AI Pneumonia Detection & Explainability',
    category: 'Medical Computer Vision',
    badge: 'Lovelace Hackathon',
    tagline: 'Deep learning chest X-ray classifier with Grad-CAM visual attention localization.',
    whyIBuiltThis: 'Black-box medical AI cannot be trusted without explainability. Doctors need to verify where the model is looking before accepting a diagnostic recommendation.',
    whatBroke: 'Initial models had high sensitivity but suffered from severe false positives caused by hospital bed markers and text labels burned into X-ray corners. We applied localized spatial cropping and Grad-CAM visual heatmaps so clinicians could inspect feature saliency.',
    outcomes: [
      'Rapid prototype classifying normal vs. bacterial and viral pneumonia under 24-hour hackathon constraints.',
      'Integrated Grad-CAM visual attention maps rendering the exact pulmonary region influencing the decision.',
      'Clean web interface for instant radiograph drag-and-drop inference.'
    ],
    techStack: ['Python', 'PyTorch / TensorFlow', 'OpenCV', 'Grad-CAM', 'Medical Imaging'],
    links: {},
    metrics: [
      { label: 'Inference Speed', value: '< 250ms' },
      { label: 'Explainability', value: 'Grad-CAM Heatmaps' },
      { label: 'Hackathon Sprint', value: '24 Hours Protitype' }
    ]
  },
  {
    id: 'gssoc-agents',
    title: 'GirlScript Summer of Code (GSSoC 2026)',
    category: 'Open Source AI Engineering',
    badge: 'AI Agents Track',
    tagline: 'Contributing to open-source agentic workflows, tooling, and intelligent automation systems.',
    whyIBuiltThis: 'Open source is where production standards are forged. Contributing to open agentic repositories tests code against diverse real-world developer workflows.',
    whatBroke: 'Handling asynchronous tool timeout errors across flaky third-party APIs. Contributed robust retry loops with exponential backoff and structured fallback states.',
    outcomes: [
      'Selected for the competitive AI Agents Track at GSSoC 2026.',
      'Active contributions to agent tool integrations, prompt schemas, and automated test runners.',
      'Collaborating with global open-source maintainers on agent reliability and safety.'
    ],
    techStack: ['Open Source', 'Python', 'Agentic Workflows', 'Git / GitHub CI', 'Testing'],
    links: {},
    metrics: [
      { label: 'Track', value: 'AI Agents Contributor' },
      { label: 'Community', value: 'GSSoC 2026' }
    ]
  }
];

export const INTERLOOM_EXP = {
  role: 'AI Developer',
  company: 'Interloom',
  period: 'May 2026 – Present',
  location: 'Remote',
  coreThesis: 'Engineering semantic search pipelines, dense vector embeddings, and ATS skill gap intelligence with mathematical similarity calibration and guardrails against semantic drift.',
  responsibilities: [
    'Architected the Semantic ATS Resume Screening & Skill Gap Intelligence pipeline combining dense vector embeddings (BAAI/bge-small-en-v1.5, all-MiniLM-L6-v2) with boundary-safe exact matching.',
    'Engineered the Sibling Technology Guard to prevent co-hyponym false positives (e.g. clamping similarity when finding Docker instead of required Kubernetes).',
    'Implemented document-level union evaluation and piecewise linear calibration to eliminate short-section bias across candidate profiles.',
    'Optimized LLM summary inference with compact JSON context digests, reducing narrative generation latency from 15+ seconds down to under 2 seconds.'
  ],
  architectureLayers: [
    {
      name: 'Dense Vector Embeddings & Calibration',
      description: 'Sentence-level embeddings via BAAI/bge-small-en-v1.5 with min-max linear scaling to map compressed vector distributions [0.20, 0.60] to calibrated similarity percentiles [0, 100].'
    },
    {
      name: 'Sibling Technology Guard',
      description: 'Co-hyponym category filter preventing false-positive semantic drift (e.g., blocking matches when competitor tools in the same class are detected without the target skill).'
    },
    {
      name: 'Document-Level Coverage & Digest',
      description: 'Evaluates criteria across the union of all resume sections to prevent short-section bias, piping compact JSON digests to LLMs for rapid, token-efficient summaries.'
    }
  ]
};

export const WHAT_BROKE_STORIES = [
  {
    title: 'The Sibling Technology Semantic Drift (Coke vs. Pepsi)',
    context: 'Interloom Semantic Skill Gap Pipeline',
    incident: 'During early ATS vector matching, candidates with heavy Docker experience scored a 72% match on Kubernetes requirements because dense embedding vectors group containerization technologies into the same semantic cluster.',
    rootCause: 'Dense sentence transformers measure conceptual proximity, not strict substitution. A candidate knowing one tool was mistakenly credited for competing technologies.',
    fix: 'Engineered a Sibling Technology Guard with category-level co-hyponym exclusion. If a related sibling tool is detected without the target skill, the similarity is clamped to 0.30 and marked absent.',
    lesson: 'Dense embeddings need domain-aware boundary constraints, or semantic proximity becomes a false positive.'
  },
  {
    title: 'The Silent Hallucination on Edge Policies',
    context: 'Autonomous Support Agent',
    incident: 'An ambiguous policy query ("can I return a customized gift bought during flash sale after 45 days?") caused an early prototype agent to invent a fake "special executive clause" and promise a 100% refund.',
    rootCause: 'The prompt used open-ended text completion without an explicit confidence-scoring step or strict schema enforcement.',
    fix: 'Decoupled into a two-pass architecture: Pass 1 computes a structured JSON confidence score based on precedent match; Pass 2 only executes if confidence >= 0.85, else immediately delegates with human-in-the-loop routing.',
    lesson: 'Never let an LLM execute a mutating business action from unstructured freeform text.'
  },
  {
    title: 'The X-Ray Bed Marker Bias',
    context: 'Pneumonia Detection (Lovelace Hackathon)',
    incident: 'The model scored 96% accuracy on a validation split, but Grad-CAM revealed it was looking at the "PORTABLE" text stamped in the top-right corner of emergency ward scans rather than the lungs!',
    rootCause: 'Data leakage: portable X-ray machines were disproportionately used for severe inpatient pneumonia cases.',
    fix: 'Implemented automated lung-field bounding box cropping and heavy data augmentation to eliminate spatial position biases.',
    lesson: 'High accuracy without visual explainability is dangerous illusion.'
  },
  {
    title: 'The Infinite Agent Ping-Pong Loop',
    context: 'SagarMitra ORCA Multi-Agent Protocol',
    incident: 'During an internal hackathon test run at MIT Bengaluru, the Route Optimization Agent and the Bathymetry Agent started correcting each other in an infinite recursive cycle over a shallow reef waypoint.',
    rootCause: 'Both agents lacked a monotonic convergence counter and shared conflicting objective functions (fuel minimization vs. depth safety margin).',
    fix: 'Introduced a central Orchestrator with priority hierarchy: Safety constraints strictly dominate efficiency goals, and iterations cap at max 3 rounds.',
    lesson: 'Multi-agent systems require explicit hierarchical arbitration, or they will debate forever.'
  }
];

export const EDUCATION_DATA = [
  {
    institution: 'Manipal Institute of Technology, Bengaluru',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2025 – Expected 2029',
    details: 'Focus on System Design, Algorithms, Artificial Intelligence, and Autonomous Systems.'
  },
  {
    institution: 'National Public School',
    degree: 'Class XII (CBSE) — 94%',
    period: 'Completed 2025',
    details: 'Interschool Hackathon — 2nd Place.'
  },
  {
    institution: 'New Horizon Public School',
    degree: 'Class X (ICSE) — 98%',
    period: 'Completed 2023',
    details: 'Academic honors and foundational computing initiatives.'
  }
];

export const LEADERSHIP_DATA = [
  {
    role: 'Under Secretary General – Operations',
    organization: 'XENORA MUN',
    description: 'Led planning and operations for a large-scale academic conference, managing cross-functional student teams, logistics, and communications under strict deadlines.'
  },
  {
    role: 'Organizing Committee – Operations',
    organization: 'Tech Solstice',
    description: 'Coordinated on-ground logistics, technical infrastructure, and team coordination for the university technical festival.'
  }
];
