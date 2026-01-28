import React, { useState } from 'react';

const principlesData = [
  {
    id: 1,
    name: "Interoperability",
    color: "#E74C3C",
    description: "Seamless integration of data from heterogeneous sources across the cloud ecosystem",
    needs: [
      "Federation of services and resources",
      "Standardized APIs (OpenEO, STAC, OGC)",
      "Portable workflows across platforms",
      "Avoid vendor lock-in"
    ],
    recommendations: [
      "Data interoperability: Facilitate integration of heterogeneous datasets",
      "Model interoperability: Enable sharing of models and algorithms",
      "Service interoperability: Integrate external services, avoid vendor lock-in",
      "Semantic interoperability: Use standardized vocabulary, metadata, and APIs"
    ],
    examples: {
      pairs: [
        {
          weakness: "Changing data provider requires using a completely different API",
          strength: "OpenEO API offers standardized APIs and portability among platforms"
        },
        {
          weakness: "Collection naming not standardized (Sentinel 2, Sentinel-2, S2, S-2)",
          strength: "STAC specification provides common structure for cataloguing assets"
        },
        {
          weakness: "Need to rewrite code when changing platform",
          strength: "Binder enables notebook file transfer across platforms"
        },
        {
          weakness: "Vendor lock-in with cloud-specific workflows",
          strength: "VLAB uses containerization for cloud-agnostic workflows"
        },
        {
          weakness: "Platforms operate as silos with no cross-platform workflows",
          strength: "Options to deploy workflow parts to different platforms optimally"
        }
      ],
      userQuote: "CreoDIAS was selected because it offers a VM to do analysis, GEE because of data availability (not in CreoDIAS)"
    }
  },
  {
    id: 2,
    name: "Access",
    color: "#3498DB",
    description: "Availability of data, models, and services with clear licensing and authentication",
    needs: [
      "Single sign-on / federated trust",
      "Clear licensing and usage rights",
      "Quality assurance and metrics",
      "Different service tiers for different needs"
    ],
    recommendations: [
      "Access to data: FAIR/TRUST compliance, quality metrics, clear licensing",
      "Access to models: Pre-built models library/marketplace",
      "Access to services: GPUs, HPC, Edge Cloud, containerization",
      "Diverse users: Accessible web design (WCAG standards)"
    ],
    examples: {
      pairs: [
        {
          weakness: "Need to manage different accounts for accessing different platforms",
          strength: "EGI federation and GÉANT AAI enable single sign-on"
        },
        {
          weakness: "Downloading whole scene even if smaller region of interest needed",
          strength: "Acquire data pixel-wise using bounding box or GeoJSON (on-demand)"
        },
        {
          weakness: "Difficulty to assess data quality without accompanying metrics",
          strength: "Each dataset accompanied by quality metrics"
        },
        {
          weakness: "One solution fits all doesn't work for diverse user needs",
          strength: "Distinction in service offering for research vs operational purposes"
        },
        {
          weakness: "In-situ data across EU often not harmonised, not shared, or inaccessible",
          strength: "Network of trusted user profiles eases access to data/software"
        }
      ],
      userQuote: "Providing historic in-situ data is often an effort for data providers as well as the harmonisation and proper documentation"
    }
  },
  {
    id: 3,
    name: "Discovery",
    color: "#2ECC71",
    description: "Finding relevant data and services through comprehensive metadata and search",
    needs: [
      "Complete and accurate metadata",
      "Semantic search capabilities",
      "Service metadata and brokers",
      "Integration with discovery portals"
    ],
    recommendations: [
      "Integration with discovery platforms (ESA NoR Portal, GEOSS)",
      "Complete metadata for datasets AND services",
      "Usage analytics as feedback for platforms",
      "Search Engine Optimization for service pages"
    ],
    examples: {
      pairs: [
        {
          weakness: "In-situ data only shared within private networks requiring research proposals",
          strength: "Private datasets should have public metadata for discoverability"
        },
        {
          weakness: "Service metadata incomplete or missing; no broker for services",
          strength: "Compare offers from web page like car insurance or mobile plans"
        },
        {
          weakness: "The experience of searching for data is difficult",
          strength: "Semantic searches and recommendations based on similar searches"
        },
        {
          weakness: "Licensing not immediately clear when performing a search",
          strength: "Filtering by license in repository searches"
        },
        {
          weakness: "Data fragmentation with duplicates across platforms",
          strength: "Avoid duplicates through semantic search and unified catalogues"
        }
      ],
      userQuote: "The experience of searching for data should be easier with semantic searches and recommendations by number of downloads"
    }
  },
  {
    id: 4,
    name: "Documentation",
    color: "#9B59B6",
    description: "Quality, currency, and accessibility of guidance materials and tutorials",
    needs: [
      "Up-to-date documentation and FAQs",
      "End-to-end examples for use cases",
      "Decision support tools",
      "Multimedia formats (videos, notebooks)"
    ],
    recommendations: [
      "Completeness: Cover all relevant aspects",
      "Regular updates: Keep documentation current",
      "Use case coverage: Multiple examples",
      "Trial environments: Sandbox/demo mode to explore the platform hands-on"
    ],
    examples: {
      pairs: [
        {
          weakness: "Diverse data cube technologies are hard to navigate",
          strength: "End-to-end documentation and examples for frequent use cases"
        },
        {
          weakness: "Difficult to choose the right tool or platform for the use case",
          strength: "Decision tree tool guides users through feature selection"
        },
        {
          weakness: "Difficult to understand or navigate the documentation",
          strength: "Chat box tool for specific documentation queries"
        },
        {
          weakness: "Outdated articles and tutorials cause confusion and issues",
          strength: "All documentation regularly updated with version tracking"
        },
        {
          weakness: "Comparing solutions across platforms is challenging",
          strength: "Standard documentation format facilitates cross-platform comparison"
        }
      ],
      userQuote: "Documentation and FAQs are often the first point of reference during a problem, their relevance cannot be overstated"
    }
  },
  {
    id: 5,
    name: "Customisation",
    color: "#F39C12",
    description: "Flexibility to adapt infrastructure, workflows, and services to user needs",
    needs: [
      "Adaptable computing resources (CPU/GPU/storage)",
      "Flexible metadata schemas",
      "Customizable workflows",
      "Cross-platform support"
    ],
    recommendations: [
      "Data visualization customisation",
      "Data processing customisation",
      "Workflow customization with federated resources",
      "Service Level Agreements for different operational levels"
    ],
    examples: {
      pairs: [
        {
          weakness: "Inflexible infrastructure that can't adapt to varied user needs",
          strength: "Users can customize CPU/GPU and storage resources"
        },
        {
          weakness: "Limited metadata retrieval options not meeting all requirements",
          strength: "Retrieve metadata according to different schemas and formats"
        },
        {
          weakness: "Inability to access tailored Analysis Ready Data (ARD)",
          strength: "Request specific types of Analysis Ready Data (ARD)"
        },
        {
          weakness: "Lack of customization for global/regional/local requirements",
          strength: "Fine-tune analysis and visualizations for specific geographic levels"
        },
        {
          weakness: "Inadequate support for users working across multiple platforms",
          strength: "Bring your own containers/environments to platforms"
        }
      ],
      userQuote: "We abandoned CreoDIAS due to being unsatisfied with its quality of service and timeliness of product delivery [for mobile app]"
    }
  },
  {
    id: 6,
    name: "Customer Support",
    color: "#1ABC9C",
    description: "Quality, expertise, and responsiveness of assistance provided to users",
    needs: [
      "Expert knowledge (more important than speed)",
      "Effective triage system",
      "Communication skills",
      "Continuous process improvement"
    ],
    recommendations: [
      "Response time: Customized based on operational level",
      "Multilingual support availability",
      "Expertise matching: First-line and second-line support",
      "Process improvement based on user feedback"
    ],
    examples: {
      pairs: [
        {
          weakness: "First-line support people are not experts, causing delays",
          strength: "Talk with real experts directly for specific problems"
        },
        {
          weakness: "Wait hours for first answer, then issue passed to another team",
          strength: "Triage system ('first contact doctor') identifies issue type and complexity"
        },
        {
          weakness: "Support responses sometimes not understandable and confusing",
          strength: "Improve clarity and communication skills of support responses"
        },
        {
          weakness: "Support in different time zones can be delayed",
          strength: "Expand support availability for users on other continents"
        },
        {
          weakness: "People do not want to talk with bots for EO/cloud problems",
          strength: "Real person support preferred; bots easily confused by specific problems"
        }
      ],
      userQuote: "Even if the answer takes longer, they would rather talk with a real person. EO/cloud problems are so specific that bots get confused"
    }
  },
  {
    id: 7,
    name: "Community",
    color: "#E67E22",
    description: "Engagement, collaboration, diversity, and knowledge exchange among users",
    needs: [
      "Foster community engagement",
      "Promote diversity and inclusivity",
      "Encourage knowledge exchange",
      "Support open-source contributions"
    ],
    recommendations: [
      "Community engagement: Active participation incentives",
      "Knowledge sharing: Tools and forums",
      "Collaboration opportunities: Discussion boards, projects",
      "User support and mentoring programs"
    ],
    examples: {
      pairs: [
        {
          weakness: "Limited community engagement reduces collaboration",
          strength: "Active engagement within community enhances collaboration"
        },
        {
          weakness: "Limited diversity leads to narrow worldview and innovation hesitance",
          strength: "Service providers engage with multiple communities"
        },
        {
          weakness: "Homogeneity within companies and teams limits perspectives",
          strength: "Heterogeneous workforce brings wide array of ideas and solutions"
        },
        {
          weakness: "Provider or developer credibility issues without community presence",
          strength: "Open-source contributions boost credibility and trust"
        },
        {
          weakness: "Lack of collaborative opportunities across platforms",
          strength: "Active community participation key for marketing and PR"
        }
      ],
      userQuote: "Diversity is the most significant factor, benefiting providers by expanding skill sets and users by fostering trust"
    }
  },
  {
    id: 8,
    name: "Price Transparency",
    color: "#C0392B",
    description: "Clarity, predictability, and comparability of costs",
    needs: [
      "Predictable pricing models",
      "Usage alerts and thresholds",
      "Cost comparison tools",
      "No hidden costs"
    ],
    recommendations: [
      "Transparent prices: Clear and accessible pricing",
      "Cost breakdown: Detailed cost components",
      "Cost predictability: Thresholding and pre-paid options",
      "Cost optimization recommendations"
    ],
    examples: {
      pairs: [
        {
          weakness: "Unpredictable costs due to fluctuating resource usage",
          strength: "Pay per use with clear pricing structure"
        },
        {
          weakness: "Risk of incurring costs for forgotten shelved resources",
          strength: "Shelving Virtual Machines when not in use saves costs"
        },
        {
          weakness: "Challenging to compare offers from different cloud providers",
          strength: "Homogeneous price offers easy to understand (like mobile plans)"
        },
        {
          weakness: "Insufficient granularity in monitoring tools",
          strength: "Better monitoring of resource wallet with cost thresholds"
        },
        {
          weakness: "Estimations inaccurate, leading to budget overruns",
          strength: "Pre-estimation of costs for development projects"
        }
      ],
      userQuote: "Users seek pricing structures that are easy to understand and compare, similar to mobile phone or insurance plans"
    }
  },
  {
    id: 9,
    name: "Sustainability",
    color: "#27AE60",
    description: "Long-term viability (business model) and environmental responsibility",
    needs: [
      "Sustainable business model",
      "Platform longevity guarantees",
      "Environmental metrics (CO2, PUE)",
      "Energy-efficient operations"
    ],
    recommendations: [
      "Revenue growth: Proxy for platform longevity",
      "Longevity commitment from service provider",
      "Carbon footprint tracking",
      "Power usage effectiveness (PUE) metrics"
    ],
    examples: {
      pairs: [
        {
          weakness: "Risk of platform's short-term existence and obsolescence",
          strength: "Long-term funding secured with robust business model"
        },
        {
          weakness: "Lack of tools for users to measure environmental impact",
          strength: "Service to calculate a project's CO2 footprint"
        },
        {
          weakness: "Wasted resources due to idle services running",
          strength: "Automatic shutdown of resources when no longer required"
        },
        {
          weakness: "Higher energy consumption during peak hours",
          strength: "Energy-efficient usage (optimizing for night-time operations)"
        },
        {
          weakness: "Code that is not optimized for energy conservation",
          strength: "Opportunities for users to write more energy-efficient code"
        }
      ],
      userQuote: "A sustainable business model is crucial for the long-term viability and success of any service"
    }
  },
  {
    id: 10,
    name: "Performance",
    color: "#8E44AD",
    description: "Technical reliability, scalability, security, and efficiency",
    needs: [
      "High uptime and responsiveness",
      "Scalability for large workloads",
      "Robust security measures",
      "State-of-the-art tools and libraries"
    ],
    recommendations: [
      "Responsiveness: Uptime guarantees, fast data retrieval",
      "Scalability: Handle increasing demands",
      "Security and privacy: Data protection, clear policies",
      "Data Transfer Nodes (DTN) for large transfers"
    ],
    examples: {
      pairs: [
        {
          weakness: "Limitations in handling large-scale data transfers efficiently",
          strength: "DTN technologies tested with GÉANT and NRENs for large transfers"
        },
        {
          weakness: "Outdated technology slowing down progress and innovation",
          strength: "Continuous improvements regarding state-of-the-art technical progress"
        },
        {
          weakness: "Inadequate availability and reliability of services",
          strength: "Guaranteed service levels (24x7 or 5x8)"
        },
        {
          weakness: "Insufficient processing resources to support user base",
          strength: "Scalability to accommodate users and processing power"
        },
        {
          weakness: "Multiple authentication required from various platforms",
          strength: "Authentication and authorization via trusted network (GÉANT AAI)"
        }
      ],
      userQuote: "Large data transfer capacity could be tested using Data Transfer Nodes (DTNs) technologies with GÉANT"
    }
  }
];

export default function MindMap() {
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);
  const [activeTab, setActiveTab] = useState('needs');

  const centerX = 400;
  const centerY = 300;
  const radius = 220;

  const getPosition = (index, total) => {
    const angle = (index * 2 * Math.PI / total) - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            10 Heuristic Principles for Cloud Platforms
          </h1>
          <p className="text-slate-400 text-sm">
            Based on <a href="https://data.europa.eu/doi/10.2760/6756717" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">DOI: 10.2760/6756717</a> - JRC Report on User-Centric Practices
          </p>
          <p className="text-slate-500 text-xs mt-1">
            Click on any principle to explore details
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mind Map SVG */}
          <div className="flex-1 bg-slate-800/50 rounded-2xl p-4 backdrop-blur">
            <svg viewBox="0 0 800 600" className="w-full h-auto">
              {/* Connection lines */}
              {principlesData.map((p, i) => {
                const pos = getPosition(i, principlesData.length);
                return (
                  <line
                    key={`line-${p.id}`}
                    x1={centerX}
                    y1={centerY}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={selectedPrinciple?.id === p.id ? p.color : '#475569'}
                    strokeWidth={selectedPrinciple?.id === p.id ? 3 : 1.5}
                    strokeDasharray={selectedPrinciple?.id === p.id ? "0" : "4,4"}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Center node */}
              <circle
                cx={centerX}
                cy={centerY}
                r={70}
                fill="url(#centerGradient)"
                stroke="#60a5fa"
                strokeWidth={3}
              />
              <text
                x={centerX}
                y={centerY - 10}
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                User-Centric
              </text>
              <text
                x={centerX}
                y={centerY + 10}
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                Cloud Platforms
              </text>

              {/* Principle nodes */}
              {principlesData.map((p, i) => {
                const pos = getPosition(i, principlesData.length);
                const isSelected = selectedPrinciple?.id === p.id;
                return (
                  <g
                    key={p.id}
                    onClick={() => setSelectedPrinciple(isSelected ? null : p)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 55 : 45}
                      fill={p.color}
                      opacity={isSelected ? 1 : 0.85}
                      stroke={isSelected ? '#fff' : 'transparent'}
                      strokeWidth={3}
                      className="transition-all duration-300 hover:opacity-100"
                    />
                    <text
                      x={pos.x}
                      y={pos.y - 8}
                      textAnchor="middle"
                      fill="white"
                      fontSize={isSelected ? "11" : "10"}
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {p.id}. {p.name.split(' ')[0]}
                    </text>
                    {p.name.split(' ').length > 1 && (
                      <text
                        x={pos.x}
                        y={pos.y + 8}
                        textAnchor="middle"
                        fill="white"
                        fontSize={isSelected ? "11" : "10"}
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        {p.name.split(' ').slice(1).join(' ')}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Gradient definition */}
              <defs>
                <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e40af" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Detail Panel */}
          <div className="lg:w-96 bg-slate-800/50 rounded-2xl p-5 backdrop-blur">
            {selectedPrinciple ? (
              <div className="h-full flex flex-col">
                {/* Header */}
                <div 
                  className="rounded-xl p-4 mb-4"
                  style={{ backgroundColor: selectedPrinciple.color + '20', borderLeft: `4px solid ${selectedPrinciple.color}` }}
                >
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{ backgroundColor: selectedPrinciple.color }}
                    >
                      {selectedPrinciple.id}
                    </span>
                    {selectedPrinciple.name}
                  </h2>
                  <p className="text-slate-300 text-sm mt-2">
                    {selectedPrinciple.description}
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 mb-4 bg-slate-700/50 rounded-lg p-1">
                  {['needs', 'recommendations', 'examples'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-all ${
                        activeTab === tab 
                          ? 'bg-slate-600 text-white' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  {activeTab === 'needs' && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        User Needs & Wishes
                      </h3>
                      {selectedPrinciple.needs.map((need, i) => (
                        <div 
                          key={i}
                          className="flex items-start gap-2 p-2 rounded-lg bg-slate-700/30"
                        >
                          <span 
                            className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: selectedPrinciple.color }}
                          >
                            ✓
                          </span>
                          <span className="text-slate-200 text-sm">{need}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'recommendations' && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Actionable Recommendations
                      </h3>
                      {selectedPrinciple.recommendations.map((rec, i) => (
                        <div 
                          key={i}
                          className="p-3 rounded-lg bg-slate-700/30 border-l-2"
                          style={{ borderColor: selectedPrinciple.color }}
                        >
                          <span className="text-slate-200 text-sm">{rec}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'examples' && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Weakness → Strength Pairs
                      </h3>
                      {selectedPrinciple.examples.pairs.map((pair, i) => (
                        <div key={i} className="rounded-lg overflow-hidden border border-slate-600/50">
                          <div className="p-2.5 bg-red-500/10 border-b border-slate-600/50">
                            <div className="flex items-start gap-2">
                              <span className="text-red-400 text-xs font-bold mt-0.5">−</span>
                              <span className="text-slate-200 text-sm">{pair.weakness}</span>
                            </div>
                          </div>
                          <div className="p-2.5 bg-green-500/10">
                            <div className="flex items-start gap-2">
                              <span className="text-green-400 text-xs font-bold mt-0.5">+</span>
                              <span className="text-slate-200 text-sm">{pair.strength}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* User Quote */}
                      <div className="mt-4 pt-3 border-t border-slate-600/50">
                        <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="text-lg">"</span>
                          User Quote
                        </h3>
                        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 italic">
                          <span className="text-slate-300 text-sm">"{selectedPrinciple.examples.userQuote}"</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Select a Principle
                </h3>
                <p className="text-slate-400 text-sm">
                  Click on any of the 10 principles in the mind map to explore its details, user needs, and recommendations.
                </p>
                
                {/* Quick list */}
                <div className="mt-6 w-full">
                  <p className="text-xs text-slate-500 mb-2">All Principles:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {principlesData.map(p => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedPrinciple(p)}
                        className="text-left text-xs py-1.5 px-2 rounded bg-slate-700/30 hover:bg-slate-700 transition-colors"
                      >
                        <span 
                          className="inline-block w-4 h-4 rounded-full mr-1.5 text-center text-white"
                          style={{ backgroundColor: p.color, fontSize: '10px', lineHeight: '16px' }}
                        >
                          {p.id}
                        </span>
                        <span className="text-slate-300">{p.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-slate-500 text-xs">
          Source: Di Leo, M. et al. (2025) "Principles for user-centric practices of cloud platforms" <a href="https://data.europa.eu/doi/10.2760/6756717" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">DOI: 10.2760/6756717</a> | JRC141544
        </div>
      </div>
    </div>
  );
}
