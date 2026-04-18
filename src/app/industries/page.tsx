import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      slug: "financial-services",
      name: "Financial Services",
      icon: "🏦",
      description: "Transform banking, insurance, and fintech with AI-powered automation, fraud detection, and personalized customer experiences.",
      useCases: [
        "Automated loan processing & credit scoring",
        "Fraud detection & AML compliance",
        "AI-powered customer service chatbots",
        "Personalized financial advisory",
      ],
    },
    {
      slug: "retail-ecommerce",
      name: "Retail & E-Commerce",
      icon: "🛒",
      description: "Enhance customer experience, optimize inventory, and drive sales with intelligent AI solutions for modern retail.",
      useCases: [
        "Personalized product recommendations",
        "Inventory forecasting & optimization",
        "Visual search & virtual try-on",
        "Customer service automation",
      ],
    },
    {
      slug: "manufacturing",
      name: "Manufacturing",
      icon: "🏭",
      description: "Optimize production, predict maintenance, and improve quality control with AI-driven manufacturing solutions.",
      useCases: [
        "Predictive maintenance",
        "Quality control & defect detection",
        "Supply chain optimization",
        "Production planning & scheduling",
      ],
    },
    {
      slug: "healthcare",
      name: "Healthcare",
      icon: "🏥",
      description: "Improve patient care, streamline operations, and accelerate research with healthcare AI solutions.",
      useCases: [
        "Medical document processing",
        "Patient appointment scheduling",
        "Medical records management",
        "Diagnostic support & analysis",
      ],
    },
    {
      slug: "logistics",
      name: "Logistics & Transportation",
      icon: "🚚",
      description: "Optimize routes, track shipments, and improve delivery efficiency with intelligent logistics AI.",
      useCases: [
        "Route optimization",
        "Fleet management",
        "Shipment tracking & ETA prediction",
        "Warehouse automation",
      ],
    },
    {
      slug: "telecommunications",
      name: "Telecommunications",
      icon: "📡",
      description: "Enhance network operations, reduce churn, and improve customer experience with telecom AI solutions.",
      useCases: [
        "Network monitoring & optimization",
        "Customer churn prediction",
        "Automated customer support",
        "Fraud detection",
      ],
    },
    {
      slug: "energy-utilities",
      name: "Energy & Utilities",
      icon: "⚡",
      description: "Optimize energy distribution, predict demand, and improve operational efficiency with AI-powered solutions.",
      useCases: [
        "Demand forecasting",
        "Predictive maintenance",
        "Grid optimization",
        "Customer service automation",
      ],
    },
    {
      slug: "public-sector",
      name: "Public Sector",
      icon: "🏛️",
      description: "Improve citizen services, streamline operations, and enhance decision-making with government AI solutions.",
      useCases: [
        "Citizen service chatbots",
        "Document processing & digitization",
        "Fraud detection & compliance",
        "Data analytics & insights",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            INDUSTRIES WE{" "}
            <span className="gradient-text">SERVE</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            EasternStack delivers enterprise AI solutions tailored to the unique challenges 
            and opportunities across diverse industries in Indonesia and beyond.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <Link 
                key={industry.slug} 
                href={`/industries/${industry.slug}`}
                className="card group"
              >
                <div className="text-5xl mb-6">{industry.icon}</div>
                <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary-orange transition-colors">
                  {industry.name}
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  {industry.description}
                </p>
                <span className="text-primary-orange font-semibold transition-colors flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why EasternStack Section */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            WHY EASTERNSTACK FOR YOUR INDUSTRY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Industry Expertise</h3>
              <p className="text-text-secondary">
                Deep understanding of industry-specific challenges, regulations, and best practices across Indonesia.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Rapid Deployment</h3>
              <p className="text-text-secondary">
                Go from concept to production in days, not months, with our proven AI implementation framework.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Local Support</h3>
              <p className="text-text-secondary">
                Jakarta-based team providing 24/7 support with understanding of local business culture and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO TRANSFORM YOUR INDUSTRY?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how EasternStack can drive AI-powered innovation in your industry.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-bg-light">
            Talk to Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
