import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
            <span className="text-[#E31E24] text-sm font-semibold">
              Case Studies
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            SUCCESS{" "}
            <span className="gradient-text">STORIES</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Real-world results from enterprises that transformed their operations with EasternStack AI solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            FEATURED CASE STUDIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏦</span>
                </div>
                <div>
                  <div className="text-xs text-[#E31E24] font-semibold uppercase">Financial Services</div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">Leading Indonesian Bank</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Implemented AI-powered loan processing and fraud detection to reduce approval time from 5 days to 15 minutes.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">90%</div>
                  <div className="text-xs text-gray-600">Faster Processing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">60%</div>
                  <div className="text-xs text-gray-600">Fraud Reduction</div>
                </div>
              </div>
              <Link href="/contact" className="text-[#E31E24] font-semibold hover:text-[#E31E24]-dark transition-colors">
                Read Case Study →
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛒</span>
                </div>
                <div>
                  <div className="text-xs text-[#E31E24] font-semibold uppercase">Retail & E-commerce</div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">Major E-commerce Platform</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Deployed AI customer service agents and personalized recommendations to boost conversion and satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">35%</div>
                  <div className="text-xs text-gray-600">Higher Conversion</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">70%</div>
                  <div className="text-xs text-gray-600">Support Automation</div>
                </div>
              </div>
              <Link href="/contact" className="text-[#E31E24] font-semibold hover:text-[#E31E24]-dark transition-colors">
                Read Case Study →
              </Link>
            </div>

            {/* Case Study 3 */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <div className="text-xs text-[#E31E24] font-semibold uppercase">Healthcare</div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">National Hospital Network</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Implemented AI document processing for medical records and appointment scheduling automation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">80%</div>
                  <div className="text-xs text-gray-600">Time Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">99%</div>
                  <div className="text-xs text-gray-600">Data Accuracy</div>
                </div>
              </div>
              <Link href="/contact" className="text-[#E31E24] font-semibold hover:text-[#E31E24]-dark transition-colors">
                Read Case Study →
              </Link>
            </div>

            {/* Case Study 4 */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <div className="text-xs text-[#E31E24] font-semibold uppercase">Manufacturing</div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">Global Manufacturing Co.</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Deployed predictive maintenance and quality control AI to minimize downtime and defects.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">50%</div>
                  <div className="text-xs text-gray-600">Less Downtime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">40%</div>
                  <div className="text-xs text-gray-600">Fewer Defects</div>
                </div>
              </div>
              <Link href="/contact" className="text-[#E31E24] font-semibold hover:text-[#E31E24]-dark transition-colors">
                Read Case Study →
              </Link>
            </div>

            {/* Case Study 5 */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📡</span>
                </div>
                <div>
                  <div className="text-xs text-[#E31E24] font-semibold uppercase">Telecommunications</div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">Major Telco Provider</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Implemented AI network optimization and customer churn prediction to improve service and retention.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">30%</div>
                  <div className="text-xs text-gray-600">Churn Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">25%</div>
                  <div className="text-xs text-gray-600">Network Efficiency</div>
                </div>
              </div>
              <Link href="/contact" className="text-[#E31E24] font-semibold hover:text-[#E31E24]-dark transition-colors">
                Read Case Study →
              </Link>
            </div>

            {/* Case Study 6 */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <div className="text-xs text-[#E31E24] font-semibold uppercase">Logistics</div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">Regional Logistics Leader</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Deployed AI route optimization and demand forecasting to reduce costs and improve delivery times.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">25%</div>
                  <div className="text-xs text-gray-600">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">40%</div>
                  <div className="text-xs text-gray-600">Faster Delivery</div>
                </div>
              </div>
              <Link href="/contact" className="text-[#E31E24] font-semibold hover:text-[#E31E24]-dark transition-colors">
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            BECOME OUR NEXT SUCCESS STORY
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join industry leaders leveraging AI to achieve unprecedented operational efficiency.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
