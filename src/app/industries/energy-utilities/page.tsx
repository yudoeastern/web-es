import Link from "next/link";

export default function EnergyUtilitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-border-color rounded-full shadow-sm">
              <span className="text-primary-orange text-sm font-semibold">
                ⚡ Energy & Utilities
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
              AI FOR{" "}
              <span className="gradient-text">ENERGY</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Optimize energy distribution, predict demand, and improve operational efficiency 
              with AI-powered solutions for Indonesia's growing energy sector.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">20%</div>
                <div className="text-text-secondary text-sm">Energy savings</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">40%</div>
                <div className="text-text-secondary text-sm">Fewer outages</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">30%</div>
                <div className="text-text-secondary text-sm">Lower maintenance costs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            AI USE CASES FOR ENERGY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-text-dark mb-4">📊 Demand Forecasting</h3>
              <p className="text-text-secondary">Predict energy consumption patterns for better grid management.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-dark mb-4">🔧 Predictive Maintenance</h3>
              <p className="text-text-secondary">Prevent equipment failures and reduce unplanned outages.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-dark mb-4">⚡ Grid Optimization</h3>
              <p className="text-text-secondary">AI-powered load balancing and distribution optimization.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-dark mb-4">💬 Customer Service</h3>
              <p className="text-text-secondary">Automated billing inquiries, outage notifications, and support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">READY TO MODERNIZE YOUR ENERGY OPERATIONS?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Let's discuss how AI can optimize your energy distribution.</p>
          <Link href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-bg-light">Talk to Our Experts</Link>
        </div>
      </section>
    </div>
  );
}
