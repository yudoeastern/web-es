import Link from "next/link";

export default function PublicSectorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
              <span className="text-[#E31E24] text-sm font-semibold">
                🏛️ Public Sector
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              AI FOR{" "}
              <span className="gradient-text">GOVERNMENT</span>
            </h1>
            <p className="text-xl text-gray-600">
              Improve citizen services, streamline operations, and enhance decision-making 
              with secure, compliant AI solutions for Indonesian government agencies.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">70%</div>
                <div className="text-gray-600 text-sm">Faster processing</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50%</div>
                <div className="text-gray-600 text-sm">Cost reduction</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Citizen services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-whiteer">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            AI USE CASES FOR PUBLIC SECTOR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">🏛️ Citizen Service Chatbots</h3>
              <p className="text-gray-600">24/7 AI assistants for public inquiries, permit applications, and service requests.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">📄 Document Digitization</h3>
              <p className="text-gray-600">OCR and AI processing for land records, permits, and civil registry documents.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">🛡️ Fraud Detection</h3>
              <p className="text-gray-600">Detect fraud in social assistance, procurement, and tax compliance.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">📊 Data Analytics</h3>
              <p className="text-gray-600">AI-powered insights for policy-making and resource allocation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">READY TO MODERNIZE PUBLIC SERVICES?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Let's discuss how AI can improve citizen services and government efficiency.</p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">Talk to Our Experts</Link>
        </div>
      </section>
    </div>
  );
}
