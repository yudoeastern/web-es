import Link from "next/link";

export default function TelecommunicationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
              <span className="text-[#E31E24] text-sm font-semibold">
                📡 Telecommunications
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              AI FOR{" "}
              <span className="gradient-text">TELECOM</span>
            </h1>
            <p className="text-xl text-gray-600">
              Enhance network operations, reduce churn, and improve customer experience with 
              telecom AI solutions for Indonesia's growing digital economy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">30%</div>
                <div className="text-gray-600 text-sm">Churn reduction</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50%</div>
                <div className="text-gray-600 text-sm">Faster issue resolution</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-gray-600 text-sm">Network uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-whiteer">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            AI USE CASES FOR TELECOM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">📡 Network Optimization</h3>
              <p className="text-gray-600">Predictive maintenance and traffic optimization for better network performance.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">🔄 Churn Prediction</h3>
              <p className="text-gray-600">Identify at-risk customers and proactively retain them.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">💬 Customer Support</h3>
              <p className="text-gray-600">24/7 AI chatbots for billing, technical support, and plan recommendations.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">🛡️ Fraud Detection</h3>
              <p className="text-gray-600">Detect SIM box fraud, subscription fraud, and usage anomalies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">READY TO TRANSFORM YOUR TELECOM OPERATIONS?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Let's discuss how AI can enhance your network and customer experience.</p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">Talk to Our Experts</Link>
        </div>
      </section>
    </div>
  );
}
