import Link from "next/link";

export default function ImpactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-border-color rounded-full shadow-sm">
            <span className="text-primary-orange text-sm font-semibold">
              Measurable Impact
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            MODERNIZE YOUR CLOUD TO{" "}
            <span className="gradient-text">SCALE FASTER</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Cloud adoption driven by measurable performance and cost outcomes.
          </p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section id="cost" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            WHY CLOUD ADOPTION ON EASTERNSTACK?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="text-5xl font-bold gradient-text mb-4">60%</div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">Cost Freedom</h3>
              <p className="text-text-secondary">
                Reduce licensing costs by up to 60% through open-source alternatives.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl font-bold gradient-text mb-4">100%</div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">Vendor Independence</h3>
              <p className="text-text-secondary">
                Multi-cloud strategy ensures no single-provider dependency.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl font-bold gradient-text mb-4">24/7</div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">Innovation Power</h3>
              <p className="text-text-secondary">
                Advanced cloud-native solutions with enterprise reliability.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl font-bold gradient-text mb-4">99.9%</div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">Risk Diversification</h3>
              <p className="text-text-secondary">
                Distributed architecture minimizes operational vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 text-center">
              HERE'S HOW IT WORKS
            </h2>
            <p className="text-xl text-text-secondary text-center mb-12">
              Scale Fast. Spend Smart. Stay Secure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Cloud Migration</h3>
                <p className="text-text-secondary text-sm">
                  Move to affordable and powerful cloud services with seamless migration.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Disaster Recovery</h3>
                <p className="text-text-secondary text-sm">
                  Drive business continuity by adopting disaster recovery solution.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Backup & Restore</h3>
                <p className="text-text-secondary text-sm">
                  Enable data availability through backup and restore solution.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">04</span>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Container Services</h3>
                <p className="text-text-secondary text-sm">
                  Initiate and deploy microservice architecture containerization setup.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">05</span>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Content Delivery</h3>
                <p className="text-text-secondary text-sm">
                  Global CDN with enhanced security and performance optimization.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">06</span>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Observability</h3>
                <p className="text-text-secondary text-sm">
                  Understand service performance through end-to-end observability tools.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">07</span>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">FinOps</h3>
                <p className="text-text-secondary text-sm">
                  Optimize cloud costs with real-time monitoring and recommendations.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">08</span>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Security</h3>
                <p className="text-text-secondary text-sm">
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
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            POWERED BY EASTERN TECHNOLOGY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">☁️</div>
              <div className="text-text-dark font-semibold">Alibaba Cloud</div>
              <div className="text-text-secondary text-xs mt-1">Cloud Infrastructure</div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🌐</div>
              <div className="text-text-dark font-semibold">Huawei Cloud</div>
              <div className="text-text-secondary text-xs mt-1">Cloud Infrastructure</div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <div className="text-text-dark font-semibold">Tencent Cloud</div>
              <div className="text-text-secondary text-xs mt-1">Cloud Infrastructure</div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-text-dark font-semibold">BytePlus</div>
              <div className="text-text-secondary text-xs mt-1">AI & Analytics</div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <div className="text-text-dark font-semibold">AhnLab</div>
              <div className="text-text-secondary text-xs mt-1">Cybersecurity</div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">👁️</div>
              <div className="text-text-dark font-semibold">TrueWatch</div>
              <div className="text-text-secondary text-xs mt-1">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO TRANSFORM YOUR ENTERPRISE?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join industry leaders leveraging cloud and AI to achieve unprecedented operational efficiency and competitive advantage.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-bg-light">
            Start Your AI Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
