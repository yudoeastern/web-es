import Link from "next/link";

export default function SupplyChainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white-card border border-gray-700 rounded-full">
              <span className="text-[#E31E24] text-sm font-semibold">
                Supply Chain AI
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              INTELLIGENT{" "}
              <span className="gradient-text">SUPPLY CHAIN</span>
            </h1>
            <p className="text-xl text-gray-600">
              AI-powered supply chain optimization that predicts disruptions, automates procurement, 
              and optimizes inventory—building resilient operations that adapt in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
              Build a Resilient Supply Chain
            </h2>
            <p className="text-gray-600 mb-6">
              Modern supply chains face unprecedented challenges: demand volatility, supplier risks, 
              logistics disruptions, and rising costs. Traditional planning tools can't keep up with 
              the pace of change.
            </p>
            <p className="text-gray-600 mb-8">
              EasternStack Supply Chain AI uses predictive analytics and autonomous agents to 
              anticipate problems before they occur, optimize decisions across your network, and 
              respond to disruptions in real-time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">30%</div>
                <div className="text-gray-600 text-sm">Lower inventory costs</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50%</div>
                <div className="text-gray-600 text-sm">Fewer stockouts</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">25%</div>
                <div className="text-gray-600 text-sm">Reduced logistics cost</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                <div className="text-gray-600 text-sm">Forecast accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="section-padding bg-white-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            KEY CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Demand Forecasting</h3>
              <p className="text-gray-600">
                ML models predict demand at SKU level using historical sales, seasonality, promotions, and external factors.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Inventory Optimization</h3>
              <p className="text-gray-600">
                AI determines optimal stock levels per location, balancing service levels with carrying costs.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Disruption Prediction</h3>
              <p className="text-gray-600">
                Early warning system for supplier risks, port delays, weather events, and geopolitical issues.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Procurement Automation</h3>
              <p className="text-gray-600">
                AI agents automate purchase orders, supplier communication, and contract compliance tracking.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Logistics Optimization</h3>
              <p className="text-gray-600">
                Route optimization, carrier selection, and shipment tracking with predictive ETAs.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Supplier Risk Management</h3>
              <p className="text-gray-600">
                Monitor supplier health, performance, and risk factors with automated scoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            USE CASES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">🏭 Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Optimize raw material procurement, production scheduling, and finished goods distribution.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">🛒 Retail & E-commerce</h3>
              <p className="text-gray-600 text-sm">
                Prevent stockouts, optimize warehouse operations, and reduce last-mile delivery costs.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">💊 Healthcare & Pharma</h3>
              <p className="text-gray-600 text-sm">
                Ensure critical supply availability, manage cold chain, and comply with regulations.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">🍔 Food & Beverage</h3>
              <p className="text-gray-600 text-sm">
                Reduce spoilage, optimize freshness, and manage perishable inventory efficiently.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">🚗 Automotive</h3>
              <p className="text-gray-600 text-sm">
                Coordinate complex multi-tier supplier networks and just-in-time manufacturing.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">⚡ Energy & Utilities</h3>
              <p className="text-gray-600 text-sm">
                Manage spare parts inventory and optimize maintenance supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-to-br from-[#1A1A1A] via-[#2D1B1B] to-[#E31E24]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            BUILD A RESILIENT SUPPLY CHAIN
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Transform your supply chain with predictive AI and autonomous optimization.
          </p>
          <Link href="/contact" className="bg-white text-[#E31E24] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Book Consultation
          </Link>
        </div>
      </section> */}

      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            BUILD A RESILIENT SUPPLY CHAIN
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Transform your supply chain with predictive AI and autonomous optimization.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Book Consultation
          </Link>
        </div>
      </section>                 
    </div>
  );
}
