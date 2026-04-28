import Link from "next/link";

export default function LogisticsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
              <span className="text-[#E31E24] text-sm font-semibold">
                🚚 Logistics & Transportation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              AI FOR{" "}
              <span className="gradient-text">LOGISTICS</span>
            </h1>
            <p className="text-xl text-gray-600">
              Optimize routes, track shipments, and improve delivery efficiency with intelligent 
              logistics AI built for Indonesia's archipelago geography.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">25%</div>
                <div className="text-gray-600 text-sm">Lower fuel costs</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">40%</div>
                <div className="text-gray-600 text-sm">Faster deliveries</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">99%</div>
                <div className="text-gray-600 text-sm">On-time rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-whiteer">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            AI USE CASES FOR LOGISTICS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">🗺️ Route Optimization</h3>
              <p className="text-gray-600">AI-powered route planning that reduces fuel costs and delivery time.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">📦 Fleet Management</h3>
              <p className="text-gray-600">Real-time vehicle tracking and maintenance prediction.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">⏱️ ETA Prediction</h3>
              <p className="text-gray-600">Accurate delivery time predictions using traffic and weather data.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">🏭 Warehouse Automation</h3>
              <p className="text-gray-600">Automated sorting, picking, and inventory management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">READY TO OPTIMIZE YOUR LOGISTICS?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Let's discuss how AI can improve your supply chain.</p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">Talk to Our Experts</Link>
        </div>
      </section>
    </div>
  );
}
