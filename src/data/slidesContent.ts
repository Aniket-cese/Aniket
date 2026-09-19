export interface SlideData {
  id: number;
  sectionNumber?: string;
  sectionTitle?: string;
  headline: string;
  subheadline?: string;
}

export const SLIDES_CONTENT = [
  {
    id: 1,
    team: "Neural Nexus",
    event: "Ideathon 2026",
    title: "Smritimitra",
    meaning: "Smriti = memory | Mitra = friend",
    subtitle: "An AI-powered cognitive game companion for people living with dementia, and the families who care for them.",
    tags: ["AI-POWERED", "GAME-BASED", "CAREGIVER-AWARE"],
    motto: "PLAY • ENGAGE • REMEMBER",
  },
  {
    id: 2,
    sectionNumber: "01",
    sectionTitle: "PROBLEM STATEMENT",
    headline: "When memory fades, independence follows.",
    whatIsDementia: {
      title: "WHAT IS DEMENTIA?",
      description: "An umbrella term for conditions that affect memory, thinking, behaviour and daily functioning.",
      note: "Not a normal part of ageing (WHO)"
    },
    pillars: [
      {
        title: "Memory",
        description: "Names, recent events and daily routines slip away.",
        icon: "brain"
      },
      {
        title: "Independence",
        description: "Planning, cooking, handling money and finding the way home get hard.",
        icon: "home"
      },
      {
        title: "Caregivers",
        description: "Families give daily support, often without a clear view of how things are changing.",
        icon: "heart-handshake"
      }
    ],
    problemStatementSummary: "People with dementia and their families lack an engaging, accessible, everyday way to keep the mind active and to track changes at home."
  },
  {
    id: 3,
    sectionNumber: "02",
    sectionTitle: "THE SCALE",
    headline: "A growing crisis, and not only for the elderly.",
    globalStats: [
      {
        value: "57M",
        label: "people living with dementia worldwide (2021)"
      },
      {
        value: "~10M",
        label: "new cases every year"
      },
      {
        value: "8.8M",
        label: "Indians aged 60+ live with dementia (7.4%)"
      }
    ],
    youngOnset: {
      title: "YOUNG-ONSET DEMENTIA",
      stat1: { value: "Up to 9%", label: "of cases begin before age 65 (WHO)" },
      stat2: { value: "119", label: "per 100,000 people aged 30 to 64 (JAMA Neurology, 2021)" },
      example: {
        title: "ILLUSTRATIVE EXAMPLE",
        text: "A 45-year-old teacher keeps forgetting her students' names and taking wrong turns on the way home. It is put down to stress, and help is delayed."
      }
    },
    sources: "WHO dementia fact sheet; Lee et al., Alzheimer's & Dementia (2023, LASI); Hendriks et al., JAMA Neurology (2021)."
  },
  {
    id: 4,
    sectionNumber: "03",
    sectionTitle: "PROPOSED SOLUTION",
    headline: "Games that adapt to every mind.",
    steps: [
      {
        num: "01",
        name: "PLAY",
        desc: "The person picks a short, simple game.",
        icon: "gamepad-2"
      },
      {
        num: "02",
        name: "LEARN",
        desc: "AI studies how they interact, such as speed and accuracy.",
        icon: "line-chart"
      },
      {
        num: "03",
        name: "ADAPT",
        desc: "Difficulty and activity mix change to suit them.",
        icon: "sliders"
      },
      {
        num: "04",
        name: "SHARE",
        desc: "Caregivers get simple, clear insights.",
        icon: "users"
      }
    ],
    adaptiveLoop: "Performance → personalization → new activity → new performance",
    sampleGames: ["Memory Match", "Pattern Path", "Word Connect"],
    disclaimer: "A support tool, not a diagnostic device or a replacement for clinical care."
  },
  {
    id: 5,
    sectionNumber: "04",
    sectionTitle: "USP AND COMPETITORS",
    headline: "Our edge is the combination.",
    pillars: [
      {
        title: "Adaptive",
        desc: "Responds to how each person plays."
      },
      {
        title: "Engaging",
        desc: "Games, not tests: less pressure, more play."
      },
      {
        title: "Connected",
        desc: "Caregivers stay in the loop with simple insights."
      }
    ],
    matrix: [
      {
        solutionType: "General brain training",
        examples: "e.g. Lumosity, Elevate",
        adaptive: "Yes",
        gameLike: "Yes",
        caregiverAware: "No"
      },
      {
        solutionType: "Assessment tools",
        examples: "e.g. CogniFit, Cogstate",
        adaptive: "Partly",
        gameLike: "Partly",
        caregiverAware: "No"
      },
      {
        solutionType: "Dementia / rehab apps",
        examples: "e.g. MindMate, Constant Therapy",
        adaptive: "Partly",
        gameLike: "Partly",
        caregiverAware: "Yes"
      },
      {
        solutionType: "SMRITIMITRA",
        examples: "Our design goal",
        adaptive: "Yes",
        gameLike: "Yes",
        caregiverAware: "Yes",
        isOurs: true
      }
    ],
    footnote: "Category-level view; example names are illustrative and features vary by product and version."
  },
  {
    id: 6,
    sectionNumber: "05",
    sectionTitle: "MARKET SIZE",
    headline: "A big market, with an India-first entry.",
    tiers: [
      {
        badge: "TAM",
        value: "$6-9B",
        title: "Total Addressable Market",
        detail: "Global cognitive assessment and training: about US$6-9B (estimates vary by research firm)."
      },
      {
        badge: "SAM",
        value: "~$333M",
        title: "Serviceable Available Market",
        detail: "The part we can reach, India-first: about US$333M in 2024 (Grand View Research)."
      },
      {
        badge: "SOM",
        value: "~$3.3M",
        title: "Serviceable Obtainable Market",
        detail: "Early goal of 1% of SAM, about US$3.3M. Our assumption, to be validated in pilots."
      }
    ],
    revenueModel: [
      "Family subscriptions",
      "Clinic and care-home licences",
      "Partnerships"
    ],
    sources: "IMARC (2024) and Mordor Intelligence for global range; Grand View Research for India. SOM is a team assumption, not a sourced figure."
  },
  {
    id: 7,
    sectionNumber: "06",
    sectionTitle: "SWOT ANALYSIS",
    headline: "Honest about risks, ready to prove it.",
    swot: {
      strengths: [
        "AI personalization",
        "Game-based engagement",
        "Caregiver-aware design"
      ],
      weaknesses: [
        "Early-stage product",
        "Needs usability testing",
        "Digital literacy barriers"
      ],
      opportunities: [
        "Large unmet need",
        "Growing digital-health adoption",
        "India-first, then global"
      ],
      threats: [
        "Established competitors",
        "Privacy and regulation",
        "Need for clinical evidence"
      ]
    },
    nextProofPoints: [
      "Prototype",
      "User testing",
      "Caregiver feedback",
      "Clinical collaboration"
    ],
    closingQuote: "Technology should not replace care. It should make care more human.",
    thankYou: "Thank you. PLAY • ENGAGE • REMEMBER"
  }
];
