import Link from "next/link";

export default function PublicSectorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-border-color rounded-full shadow-sm">
              <span className="text-primary-orange text-sm font-semibold">
                🏛️ Public Sector
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
              AI FOR{" "}
              <span className="gradient-text">GOVERNMENT</span>
            </h1>
            <p className="text-xl text-text-secondary">
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
                <div className="text-text-secondary text-sm">Faster processing</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50%</div>
                <div className="text-text-secondary text-sm">Cost reduction</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-text-secondary text-sm">Citizen services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            AI USE CASES FOR PUBLIC SECTOR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-text-dark mb-4">🏛️ Citizen Service Chatbots</h3>
              <p className="text-text-secondary">24/7 AI assistants for public inquiries, permit applications, and service requests.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-dark mb-4">📄 Document Digitization</h3>
              <p className="text-text-secondary">OCR and AI processing for land records, permits, and civil registry documents.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-dark mb-4">🛡️ Fraud Detection</h3>
              <p className="text-text-secondary">Detect fraud in social assistance, procurement, and tax compliance.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-dark mb-4">📊 Data Analytics</h3>
              <p className="text-text-secondary">AI-powered insights for policy-making and resource allocation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">READY TO MODERNIZE PUBLIC SERVICES?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Let's discuss how AI can improve citizen services and government efficiency.</p>
          <Link href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-bg-light">Talk to Our Experts</Link>
        </div>
      </section>
    </div>
  );
}
