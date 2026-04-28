import Link from "next/link";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
              <span className="text-[#E31E24] text-sm font-semibold">
                🏥 Healthcare
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              AI FOR{" "}
              <span className="gradient-text">HEALTHCARE</span>
            </h1>
            <p className="text-xl text-gray-600">
              Improve patient care, streamline operations, and accelerate medical research with 
              healthcare AI solutions built for Indonesian hospitals and clinics.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">60%</div>
                <div className="text-gray-600 text-sm">Faster documentation</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">40%</div>
                <div className="text-gray-600 text-sm">Reduced admin costs</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Patient support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-whiteer">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            AI USE CASES FOR HEALTHCARE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">📋 Medical Document Processing</h3>
              <p className="text-gray-600">
                OCR and NLP for medical records, prescriptions, and insurance claims processing.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">📅 Appointment Scheduling</h3>
              <p className="text-gray-600">
                AI-powered scheduling that reduces no-shows and optimizes doctor availability.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">💬 Patient Chatbots</h3>
              <p className="text-gray-600">
                24/7 patient support for appointment booking, medication reminders, and FAQ.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">🔬 Diagnostic Support</h3>
              <p className="text-gray-600">
                AI-assisted analysis of medical images and lab results for faster diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO TRANSFORM HEALTHCARE DELIVERY?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can improve patient care and operational efficiency.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Talk to Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
