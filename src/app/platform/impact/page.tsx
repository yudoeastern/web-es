import Link from "next/link";

export default function ImpactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
            <span className="text-[#E31E24] text-sm font-semibold">
              Measurable Impact
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            MODERNIZE YOUR CLOUD TO{" "}
            <span className="gradient-text">SCALE FASTER</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Cloud adoption driven by measurable performance and cost outcomes.
          </p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section id="cost" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            WHY CLOUD ADOPTION ON EASTERNSTACK?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="text-5xl font-bold gradient-text mb-4">60%</div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Cost Freedom</h3>
              <p className="text-gray-600">
                Reduce licensing costs by up to 60% through open-source alternatives.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl font-bold gradient-text mb-4">100%</div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Vendor Independence</h3>
              <p className="text-gray-600">
                Multi-cloud strategy ensures no single-provider dependency.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl font-bold gradient-text mb-4">24/7</div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Innovation Power</h3>
              <p className="text-gray-600">
                Advanced cloud-native solutions with enterprise reliability.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl font-bold gradient-text mb-4">99.9%</div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Risk Diversification</h3>
              <p className="text-gray-600">
                Distributed architecture minimizes operational vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-whiteer">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 text-center">
              HERE'S HOW IT WORKS
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Scale Fast. Spend Smart. Stay Secure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Cloud Migration</h3>
                <p className="text-gray-600 text-sm">
                  Move to affordable and powerful cloud services with seamless migration.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Disaster Recovery</h3>
                <p className="text-gray-600 text-sm">
                  Drive business continuity by adopting disaster recovery solution.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Backup & Restore</h3>
                <p className="text-gray-600 text-sm">
                  Enable data availability through backup and restore solution.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">04</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Container Services</h3>
                <p className="text-gray-600 text-sm">
                  Initiate and deploy microservice architecture containerization setup.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">05</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Content Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Global CDN with enhanced security and performance optimization.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">06</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Observability</h3>
                <p className="text-gray-600 text-sm">
                  Understand service performance through end-to-end observability tools.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">07</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">FinOps</h3>
                <p className="text-gray-600 text-sm">
                  Optimize cloud costs with real-time monitoring and recommendations.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">08</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Security</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise-grade security with Zero-Trust architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eastern Partners Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            POWERED BY EASTERN TECHNOLOGY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-center p-4">
              <img src="/partner/Alibaba_Cloud_Logo.png" alt="Alibaba Cloud" className="h-24 w-auto object-contain" />
            </div>

            <div className="flex items-center justify-center p-4">
              <img src="/partner/huawei.jpg" alt="Huawei Cloud" className="h-16 w-auto object-contain" />
            </div>

            <div className="flex items-center justify-center p-4">
              <img src="/partner/tencent.png" alt="Tencent Cloud" className="h-16 w-auto object-contain" />
            </div>

            <div className="flex items-center justify-center p-4">
              <img src="/partner/onepro.png" alt="OnePro" className="h-16 w-auto object-contain" />
            </div>

            <div className="flex items-center justify-center p-4">
              <img src="/partner/ahnlab.jpg" alt="AhnLab" className="h-16 w-auto object-contain" />
            </div>

            <div className="flex items-center justify-center p-4">
              <img src="/partner/true_watch_logo.svg" alt="TrueWatch" className="h-16 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO TRANSFORM YOUR ENTERPRISE?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join industry leaders leveraging cloud and AI to achieve unprecedented operational efficiency and competitive advantage.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Start Your AI Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
