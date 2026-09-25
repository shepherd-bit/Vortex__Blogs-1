import { BlogPost, VaultDocument } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "q2-2026-arr-flight-hours",
    date: "Jun 12, 2026",
    dateSort: 20260612,
    category: "Investor",
    audience: "investor",
    title: "Q2 2026: $1.2M ARR, 1,240 Flight Hours",
    subtitle: "Q2 Shareholder Update & Operational Review",
    excerpt: "Revenue up 34% QoQ, 1,240 hrs logged over West Texas. Burn down to $84k/mo. Path to profitability in 11 months if we hold hiring.",
    readTime: "4 MIN READ",
    author: {
      name: "Titus O.",
      role: "CEO, Vortex",
      avatar: "https://i.pravatar.cc/100?img=11",
      locationNote: "Q2 Shareholder Memo • Austin, TX",
      coordinates: "30.2672° N, 97.7431° W"
    },
    featured: true,
    thumbnail: '/blog-thumbnail.jpg',
    highlightMetrics: [
      { label: "ANNUAL RUN RATE", value: "$1.2M", sub: "+34% QoQ growth" },
      { label: "FLIGHT HOURS", value: "1,240 hrs", sub: "Q2 logged • West Texas" },
      { label: "NET BURN", value: "$84k/mo", sub: "Down from $132k/mo" }
    ],
    intro: "Q2 was our cleanest quarter to date. We reached $1.2M in contracted ARR across our initial 6 Texas energy and agricultural accounts, while bringing monthly net burn down to $84,000. Most importantly, our airframes spent 1,240 hours airborne over West Texas with zero hull losses.",
    fieldNoteNumber: "MEMO 028",
    sections: [
      {
        id: "revenue-breakdown",
        title: "01 — Revenue & Contracted Backlog",
        paragraphs: [
          "Our revenue is split across two core operational profiles: critical spare delivery for Permian Basin energy operators ($780k ARR) and scheduled veterinary/medical supply transport across rural Hill Country ($420k ARR).",
          "Customer retention stands at 100% across all 6 production pilots. Our customer payback period is currently 4.2 months, driven by proprietary airframe manufacturing costs remaining under $18,500 per unit in our East Austin facility."
        ],
        quote: {
          text: "“Unit economics only work in drone logistics if the airframe doesn’t cost as much as a Cessna. Building our own tooling in Austin is why we are surviving while competitors stall.”",
          author: "MARCUS CHEN, VP OF FINANCE"
        },
        bulletPoints: [
          "Gross margin on flight operations improved from 41% to 64% QoQ.",
          "Hardware CapEx per route deployed dropped by 22% due to standardized ground docks.",
          "Contracted backlog stands at $850k scheduled for onboarding across Q3 and Q4."
        ]
      },
      {
        id: "burn-runway",
        title: "02 — Runway & Path to Profitability",
        paragraphs: [
          "Cash on hand is $940,000 as of June 1. At our current $84k/mo burn rate, runway extends 11.2 months. If we hold our engineering headcount steady at 11 and maintain our current contract ramp, Vortex crosses into cashflow neutrality by May 2027.",
          "We turned down a $2M SAFE earlier this spring because of terms that would have required restructuring IP ownership outside of Texas. We remain disciplined, lean, and mission-aligned."
        ]
      },
      {
        id: "fleet-operations",
        title: "03 — Fleet Airworthiness & Reliability",
        paragraphs: [
          "1,240 flight hours were logged with a 99.92% dispatch reliability score. Ground turnaround time between battery swaps now averages 3 minutes and 40 seconds on autonomous docks.",
          "Our detect-and-avoid software logged 18,400 sensor miles with zero near-midair collisions, paving the way for our expanded FAA BVLOS operational approvals."
        ],
        orderedPoints: [
          "Mean time between unscheduled maintenance (MTBUM): 412 flight hours (target was 350).",
          "Average mission payload capacity maintained: 4.8kg at 90km/h cruise.",
          "All telemetry stream records archived to encrypted decentralized logs."
        ],
        externalLink: {
          badge: "AUDIT REPORT",
          title: "Review our 2025-2026 Flight Operations Audit Summary →",
          meta: "vortexuas.com/audits • Independently verified by Airdyne Safety Group",
          href: "#"
        }
      }
    ],
    videoData: {
      title: "Austin Line 2 Production & Flight Line Operations",
      subtitle: "Full tour of airframe assembly and battery testing cell",
      duration: "4:12",
      thumbnailUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
    },
    honestNote: {
      title: "What went wrong in Q2",
      content: "A batch of 40 motor ESCs from an alternate supplier exhibited thermal drift in high ambient heat, delaying 3 airframe deliveries by 9 days. We scrapped the batch at a $14,000 loss and reinstated 100% in-house dyno testing.",
      bannerText: "Financial reconciliation complete. Audited financial statements and raw flight logs attached for investor review."
    },
    nextSteps: {
      title: "Q3 Priorities",
      content: "Commissioning Autonomous Dock Station #4 near Abilene, expanding BVLOS radius to 80km with TxDOT, and closing Series A lead term sheet.",
      pills: ["Next Update: Sept 2026", "Audited Financials Attached", "Austin HQ"]
    },
    attachedFiles: [
      { name: "Q2_Investor_Memo.pdf", size: "2.4 MB", type: "PDF", color: "bg-[#FFE9E9] text-[#D44]" },
      { name: "flight_hours_q2.csv", size: "48 KB", type: "CSV", color: "bg-[#E8FFDA] text-[#2A7A2A]" },
      { name: "q2_financial_model.xlsx", size: "1.8 MB", type: "Deck", color: "bg-[#FAF3CF] text-[#8A7400]" },
      { name: "line2_walkthrough.mp4", size: "142 MB", type: "MP4", color: "bg-[#E3E8FF] text-[#3D4FD6]" }
    ],
    verificationData: {
      faaCompliance: "Part 107 Waiver • Section 44807 Exempt",
      blackboxHash: "SHA256: 7f83b1...e42a9",
      regulatoryStandard: "GAAP Audited Financials • 2026",
      noManualOverride: true,
      fullTelemetry: true
    },
    pdfPreview: {
      title: "Q2_Investor_Memo.pdf — Page 1",
      totalPages: 12,
      metrics: [
        { label: "ARR GROWTH", value: "+34%", percent: 84 },
        { label: "RUNWAY", value: "11 mo", percent: 91, isYellow: true },
        { label: "BURN REDUCTION", value: "-36%", percent: 64 }
      ]
    },
    csvPreview: {
      filename: "flight_hours_q2.csv",
      totalRows: 1240,
      rows: [
        { time: "06:14:02", event: "Midland Route 102", alt: "120m", action: "Completed 42km", tone: "text-emerald-700 bg-emerald-50" },
        { time: "08:42:19", event: "Pecos Med Hub Run", alt: "115m", action: "Delivered 3.4kg", tone: "text-black/60" },
        { time: "11:20:55", event: "Thermal Check — Bay 2", alt: "0m", action: "Temp nominal", tone: "text-black/60" },
        { time: "14:15:30", event: "West Texas Crosswind Test", alt: "135m", action: "Holding 24kt", tone: "text-amber-700 bg-amber-50" },
        { time: "17:50:11", event: "Return to Dock #1", alt: "12m", action: "Auto land 100%", tone: "text-emerald-700 bg-emerald-50" }
      ]
    },
    landingFiles: [
      { type: "PDF", name: "Q2_Investor_Memo.pdf", size: "2.4 MB" },
      { type: "CSV", name: "flight_hours_q2.csv", size: "48 KB" }
    ]
  },
  {
    id: "2",
    slug: "vortex-x1-range-test",
    date: "Jun 02, 2026",
    dateSort: 20260602,
    category: "Investor",
    audience: "investor",
    title: "Vortex X1: 47km West Texas Range Test",
    subtitle: "Range Test Results & Telemetry Analysis",
    excerpt: "Beyond visual line of sight, 47km Austin → Llano, 18mph crosswind. Full telemetry and failure analysis inside.",
    readTime: "5 MIN READ",
    author: {
      name: "Titus O.",
      role: "CEO, Vortex",
      avatar: "https://i.pravatar.cc/100?img=11",
      locationNote: "Field notes from Marfa, TX • Verified flight logs attached",
      coordinates: "30.3107° N, 104.0218° W"
    },
    featured: false,
    highlightMetrics: [
      { label: "DISTANCE", value: "47km", sub: "point-to-point" },
      { label: "FLIGHT TIME", value: "1,240 hrs", sub: "fleet total" },
      { label: "AVOIDANCE", value: "99.2%", sub: "obstacle success" }
    ],
    intro: "We flew X1 47 kilometers straight across the Marfa plain without a chase car, without a relay, without a single manual takeover. Wind was 18 mph gusting to 26. Temperature at takeoff was 103°F. The goal wasn't to set a record. It was to prove that our new thermal stack and L4 avoidance can hold for a real West Texas delivery route.",
    fieldNoteNumber: "FIELD NOTE 042",
    sections: [
      {
        id: "context",
        title: "01 — Why Marfa is harder than it looks",
        paragraphs: [
          "On a map, the Chihuahuan desert looks empty. In the air, it’s not. Dust devils form with no radar signature. Power lines sag and sway. We counted 12 unmapped structures on this corridor alone — water tanks, abandoned windmills, barbed wire at 30ft that doesn’t appear on FAA sectional charts. Most long-range demos avoid this. We deliberately didn’t.",
          "The brief to the engineering team: fly the route a rancher would actually use. From the Pecos County logistics yard to the medical cache point near Marfa. If X1 can’t do that in August heat, it isn’t ready for Q4 pilot customers."
        ]
      },
      {
        id: "battery",
        title: "02 — Battery & thermal: the real story",
        paragraphs: [
          "We landed with 19% remaining. That’s 4 points above our internal abort threshold. The new aluminum-nitride thermal plate shaved 11°C off the peak cell temp compared to the July build. In plain language: the pack wasn’t throttling by km 38 like it was last month."
        ],
        quote: {
          text: "“We don’t get to ship until the battery graph is boring. Flat, predictable, dull. This flight was the first time it actually looked boring.”",
          author: "ELENA PARK, HEAD OF PROPULSION"
        },
        bulletPoints: [
          "Peak cell temp: 47.2°C (was 58.4°C in Build 0.9.3)",
          "Average cruise draw: 1.42kW at 22m/s ground speed",
          "Wind correction cost: +8.3% energy vs. zero-wind baseline"
        ]
      },
      {
        id: "avoidance",
        title: "03 — Avoidance at 47km isn’t a lab demo",
        paragraphs: [
          "L4 stack made 1,147 micro-decisions on this flight. Three mattered. A 38ft unmapped guy-wire at km 19.4, a turkey vulture pair at km 31, and a sudden crosswind shear near a mesa that looked like clear air to a human. We’re logging all three in the CSV below."
        ],
        orderedPoints: [
          "Detection latency avg: 43ms (requirement: <80ms)",
          "Minimum clearance: 4.2m — guy-wire event, still above 3m safety floor",
          "No false positives that triggered unnecessary climb in final 10km"
        ],
        externalLink: {
          badge: "EXTERNAL LINK",
          title: "Read the FAA BVLOS Concept of Operations we’re operating under →",
          meta: "faa.gov • Updated July 2026",
          href: "#"
        }
      }
    ],
    flightMapData: {
      corridorName: "FLIGHT CORRIDOR • MARFA PLAIN",
      logId: "VTX-X1-082826-MARFA • 14:32 CDT • Verified by onboard blackbox",
      verifiedTime: "14:32 CDT",
      figNumber: "FIG. 01",
      caption: "Flight path replay from dual RTK GPS + visual odometry. Dust event at km 21.3 triggered auto altitude bump to 145m.",
      statsPill: "ALT 120m AGL • 22m/s",
      statusPill: "47.0 KM COMPLETE"
    },
    videoData: {
      title: "X1 Full Range Test — Marfa, TX",
      subtitle: "Uncut onboard + chase drone • No music, raw audio",
      duration: "3:42",
      thumbnailUrl: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=1600&auto=format&fit=crop"
    },
    honestNote: {
      title: "What broke, honestly",
      content: "The starboard landing gear damper stuck after landing. Sand ingress — we hadn’t taped the vent for this config. That’s on us. Also, our LTE failover dropped for 11 seconds over a dead zone we knew about. The aircraft stayed on its flight plan, but I want zero link loss for the next run. We’re adding a Starlink mini for Q4 routes.",
      bannerText: "No safety events. Blackbox and visual logs are in the attached files for any investor or regulator who wants to review."
    },
    nextSteps: {
      title: "Next: 80km with payload",
      content: "September plan is the same corridor, but with 3.2kg medical payload and a 20kt headwind requirement. If we hit 19% reserve again under those conditions, we’ll open the pilot waitlist for Q4.",
      pills: ["Next test: Sept 14, 2026", "You’ll get logs again", "Texas UAS Corridor"]
    },
    attachedFiles: [
      { name: "X1-Marfa-Range-Report.pdf", size: "12.4 MB", type: "PDF", color: "bg-[#FFE9E9] text-[#D44]" },
      { name: "flight-logs-0828.csv", size: "4.2 MB", type: "CSV", color: "bg-[#E8FFDA] text-[#2A7A2A]" },
      { name: "marfa-full-flight.mp4", size: "— 3:42", type: "MP4", color: "bg-[#E3E8FF] text-[#3D4FD6]" },
      { name: "Investor Deck — Q3", size: "External • Notion", type: "Deck", color: "bg-[#FAF3CF] text-[#8A7400]" }
    ],
    verificationData: {
      faaCompliance: "Part 107 Waiver • BVLOS Active",
      blackboxHash: "SHA256: a4f2...9c1e",
      regulatoryStandard: "ASTM F3322-22 Certified",
      noManualOverride: true,
      fullTelemetry: true
    },
    pdfPreview: {
      title: "X1-Marfa-Range-Report.pdf — Page 1",
      totalPages: 14,
      metrics: [
        { label: "MAX RANGE", value: "47.0 km", percent: 85 },
        { label: "RESERVE", value: "19%", percent: 19, isYellow: true },
        { label: "TEMP PEAK", value: "47.2°C", percent: 62 }
      ]
    },
    csvPreview: {
      filename: "flight-logs-0828.csv",
      totalRows: 2847,
      rows: [
        { time: "14:32:11", event: "Takeoff — 18kt tail", alt: "5m", action: "Nominal", tone: "text-black/60" },
        { time: "14:38:44", event: "Guy-wire detection 38ft", alt: "118m", action: "Climb +9m", tone: "text-amber-700 bg-amber-50" },
        { time: "14:44:02", event: "Dust devil 12m diam", alt: "122m", action: "Alt bump to 145m", tone: "text-black/60" },
        { time: "14:51:19", event: "Turkey vulture pair", alt: "145m", action: "Hold + yaw", tone: "text-black/60" },
        { time: "14:58:03", event: "Cache pt reached", alt: "15m", action: "Auto land", tone: "text-emerald-700 bg-emerald-50" }
      ]
    },
    landingFiles: [
      { type: "Video", name: "Vortex_X1_Range_47km.mp4", size: "184 MB" },
      { type: "CSV", name: "Vortex_telemetry.csv", size: "112 KB" }
    ]
  },
  {
    id: "3",
    slug: "faa-part-107-waiver",
    date: "May 28, 2026",
    dateSort: 20260528,
    category: "Regulatory",
    audience: "regulatory",
    title: "FAA Part 107 Waiver Renewal & Flight Compliance",
    subtitle: "BVLOS Night Operations & Airworthiness Filing",
    excerpt: "Night ops renewal, BVLOS appendix, and maintenance logs for our Texas test fleet. 99.92% airworthy rate.",
    readTime: "6 MIN READ",
    author: {
      name: "Titus O.",
      role: "CEO, Vortex",
      avatar: "https://i.pravatar.cc/100?img=11",
      locationNote: "Regulatory Briefing • FAA Southwest Region",
      coordinates: "32.8998° N, 97.0403° W"
    },
    featured: false,
    highlightMetrics: [
      { label: "AIRWORTHINESS", value: "99.92%", sub: "fleet average" },
      { label: "BVLOS CORRIDOR", value: "240 mi", sub: "TxDOT approved" },
      { label: "SAFETY CHECKS", value: "100%", sub: "ASTM compliance" }
    ],
    intro: "Transparency with regulators cannot begin after an incident. Today we are publishing our complete FAA Part 107 Waiver renewal package, night flight telemetry, and maintenance logs across our entire active Texas fleet. We believe open certification data raises the bar for the entire domestic drone industry.",
    fieldNoteNumber: "DOC 019",
    sections: [
      {
        id: "waiver-overview",
        title: "01 — Scope of Part 107 Waiver Renewal",
        paragraphs: [
          "Our renewed waiver (FAA-2026-W-107-9941) covers Section 107.29 (Night Operations with Anti-Collision Lighting visible for 3 statute miles) and Section 107.31 (BVLOS operations without visual observers under automated geofence constraints).",
          "All operations are conducted inside defined TxDOT low-altitude unmanned aircraft corridors with automated ADS-B In transceiver broadcast and secondary C2 cellular failover."
        ],
        bulletPoints: [
          "Ground risk model calculation: Expected Casualty (Ec) < 1x10^-6 per flight hour.",
          "Dual redundant parachute deployment system tested under ASTM F3322-22 with 100% success rate in 40 drop tests.",
          "Automated geocaging engine prevents boundary breach with zero drift past 15 meters."
        ]
      },
      {
        id: "maintenance-inspection",
        title: "02 — Fleet Maintenance Logs & Structural Fatigue",
        paragraphs: [
          "Our Austin engineering depot conducts 50-hour mechanical teardowns and 100-hour avionics inspections. Airframe carbon spar deflection tests showed less than 0.4mm elasticity change after 300 cumulative high-g turbulence hours.",
          "Battery health across all 32 flight packs shows 96.4% original capacity retention after an average of 180 rapid charging cycles."
        ],
        quote: {
          text: "“Regulation is not the enemy of speed. Ill-prepared paperwork is. If your aircraft data is clean, the FAA moves faster than founders expect.”",
          author: "SARAH LINDEN, VP REGULATORY AFFAIRS"
        }
      },
      {
        id: "conops-safeguards",
        title: "03 — Lost Link & Emergency Procedures",
        paragraphs: [
          "Our Flight Termination System (FTS) operates independently from the primary autopilot flight computer on dedicated backup capacitors. In the event of triple-layer C2 link loss lasting more than 30 seconds, X1 automatically maneuvers to pre-surveyed rural abort coordinates."
        ],
        orderedPoints: [
          "Primary command link: 915MHz proprietary encrypted mesh (zero interference).",
          "Secondary link: Dual SIM multi-carrier LTE with automated roaming.",
          "Tertiary failover: Iridium satellite heartbeat protocol."
        ],
        externalLink: {
          badge: "REGULATORY PORTAL",
          title: "View official FAA UAS Waiver Registry Listing →",
          meta: "faa.gov/uas • Certificate 107W-2026-0489",
          href: "#"
        }
      }
    ],
    videoData: {
      title: "ASTM F3322 Parachute Drop & Emergency FTS Deployment",
      subtitle: "High-speed camera telemetry from Llano Test Range",
      duration: "2:18",
      thumbnailUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop"
    },
    honestNote: {
      title: "Self-Reported Non-Compliance Event",
      content: "On April 19, an auxiliary beacon light experienced a blown fuse during pre-flight spooling in Midland. Mission was aborted prior to takeoff and logged in the FAA discrepancy tracker within 2 hours. Root cause traced to vibration harness wear.",
      bannerText: "Fully disclosed to FAA FSDO San Antonio. Corrective engineering fix implemented across all airframes on April 21."
    },
    nextSteps: {
      title: "Next Regulatory Milestone",
      content: "Formal submission of Type Certification Stage 2 documentation with the Aircraft Certification Office (ACO) for serial production.",
      pills: ["Type Cert Stage 2", "FAA FSDO San Antonio", "Public Record"]
    },
    attachedFiles: [
      { name: "FAA_107_Waiver_2026.pdf", size: "8.1 MB", type: "PDF", color: "bg-[#FFE9E9] text-[#D44]" },
      { name: "maintenance_logs_ytd.csv", size: "1.4 MB", type: "CSV", color: "bg-[#E8FFDA] text-[#2A7A2A]" },
      { name: "TxDOT_Corridor_COA.pdf", size: "6.4 MB", type: "PDF", color: "bg-[#FFE9E9] text-[#D44]" },
      { name: "astm_parachute_drop.mp4", size: "94 MB", type: "MP4", color: "bg-[#E3E8FF] text-[#3D4FD6]" }
    ],
    verificationData: {
      faaCompliance: "FAA Part 107 Waiver Renewal Approved",
      blackboxHash: "SHA256: c3b91...881f4",
      regulatoryStandard: "ASTM F3322-22 Verified",
      noManualOverride: true,
      fullTelemetry: true
    },
    pdfPreview: {
      title: "FAA_107_Waiver_2026.pdf — Certificate of Waiver",
      totalPages: 18,
      metrics: [
        { label: "AIRWORTHINESS", value: "99.92%", percent: 99 },
        { label: "GROUND RISK", value: "<10^-6", percent: 95, isYellow: true },
        { label: "PARACHUTE TEST", value: "40/40", percent: 100 }
      ]
    },
    csvPreview: {
      filename: "maintenance_logs_ytd.csv",
      totalRows: 840,
      rows: [
        { time: "05/26 09:12", event: "Airframe #04 50hr Spar Test", alt: "Depot", action: "Pass (<0.2mm)", tone: "text-emerald-700 bg-emerald-50" },
        { time: "05/27 14:00", event: "FTS Capacitor Discharge", alt: "Depot", action: "Pass (42mJ)", tone: "text-black/60" },
        { time: "05/28 11:30", event: "Night Strobe Lux Verification", alt: "Test Rig", action: "Pass (3.4 SM)", tone: "text-black/60" },
        { time: "05/29 16:45", event: "Battery Pack #19 Impedance", alt: "Depot", action: "Pass (12mOhm)", tone: "text-black/60" },
        { time: "05/30 08:00", event: "Pre-flight Signoff — San Antonio", alt: "Ramp", action: "Airworthy", tone: "text-emerald-700 bg-emerald-50" }
      ]
    },
    landingFiles: [
      { type: "PDF", name: "FAA_107_Waiver_2026.pdf", size: "8.1 MB" }
    ]
  }
];

export const VAULT_DOCUMENTS: VaultDocument[] = [
  { type: "PDF", name: "Q2_Investor_Memo.pdf", size: "2.4 MB", date: "Jun 12" },
  { type: "PDF", name: "FAA_107_Waiver_2026.pdf", size: "8.1 MB", date: "May 28" },
  { type: "PDF", name: "TxDOT_Corridor_COA.pdf", size: "6.4 MB", date: "May 14" },
  { type: "CSV", name: "Vortex_telemetry.csv", size: "112 KB", date: "Jun 02" },
  { type: "PDF", name: "Audited_2025.pdf", size: "14 MB", date: "Feb 28" },
  { type: "Deck", name: "DAA_Open_Source.pdf", size: "12 MB", date: "Apr 05" }
];
