import Link from "next/link";

export default function CloudMigrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
            <span className="text-[#E31E24] text-sm font-semibold">
              Cloud Migration
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            MOVE TO{" "}
            <span className="gradient-text">AFFORDABLE CLOUD</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Seamless migration to powerful Eastern cloud infrastructure with zero downtime and maximum cost savings.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            WHY MIGRATE TO EASTERN CLOUD?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">60% Cost Reduction</h3>
              <p className="text-gray-600">
                Reduce cloud infrastructure costs by up to 60% compared to Western providers with no compromise on performance.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Zero Downtime</h3>
              <p className="text-gray-600">
                Phased migration approach ensures your business operations continue uninterrupted throughout the transition.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Enhanced Performance</h3>
              <p className="text-gray-600">
                Eastern cloud providers offer superior performance in Asia-Pacific region with lower latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="section-padding bg-whiteer">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            OUR MIGRATION PROCESS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Analyze current infrastructure and identify migration candidates.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Create detailed migration plan with timeline and risk mitigation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Testing</h3>
              <p className="text-gray-600 text-sm">Validate migration in staging environment before production move.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Migration</h3>
              <p className="text-gray-600 text-sm">Execute phased migration with real-time monitoring and rollback capability.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Fine-tune performance and costs post-migration for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            POWERED BY EASTERN CLOUD
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="h-20 mb-4 flex items-center justify-center">
                <img src="/partner/Alibaba_Cloud_Logo.png" alt="Alibaba Cloud" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Alibaba Cloud</h3>
              <p className="text-gray-600 text-sm mb-4">Leading cloud provider in Asia with comprehensive AI and data services.</p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>✓ Elastic Compute Service</li>
                <li>✓ ApsaraDB</li>
                <li>✓ Object Storage Service</li>
                <li>✓ CDN & Networking</li>
              </ul>
            </div>

            <div className="card text-center">
              <div className="h-20 mb-4 flex items-center justify-center">
                <img src="/partner/huawei.jpg" alt="Huawei Cloud" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Huawei Cloud</h3>
              <p className="text-gray-600 text-sm mb-4">Enterprise-grade cloud with strong focus on security and compliance.</p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>✓ Elastic Cloud Server</li>
                <li>✓ GaussDB</li>
                <li>✓ Cloud Container Engine</li>
                <li>✓ AI Development Platform</li>
              </ul>
            </div>

            <div className="card text-center">
              <div className="h-20 mb-4 flex items-center justify-center">
                <img src="/partner/tencent.png" alt="Tencent Cloud" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Tencent Cloud</h3>
              <p className="text-gray-600 text-sm mb-4">Gaming and media optimized cloud with global CDN coverage.</p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>✓ Cloud Virtual Machine</li>
                <li>✓ TencentDB</li>
                <li>✓ Media Processing</li>
                <li>✓ Gaming Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO MIGRATE TO EASTERN CLOUD?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Start your cloud modernization journey with 60% cost savings and zero downtime.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Get Free Migration Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
