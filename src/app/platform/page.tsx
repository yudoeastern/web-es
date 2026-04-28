import Link from "next/link";

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-border-color rounded-full shadow-sm">
            <span className="text-primary-orange text-sm font-semibold">
              Enterprise Infrastructure
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            PLATFORM FOR{" "}
            <span className="gradient-text">AI AT SCALE</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Cloud-native infrastructure powering reliable, scalable, and secure AI applications 
            from data foundation to production deployment.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-12 text-center">
            OUR TECHNOLOGY PARTNERS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {/* Alibaba Cloud */}
            <div className="flex items-center justify-center p-4">
              <img src="/partner/Alibaba_Cloud_Logo.png" alt="Alibaba Cloud" className="h-24 w-auto object-contain" />
            </div>

            {/* Huawei Cloud */}
            <div className="flex items-center justify-center p-4">
              <img src="/partner/huawei.jpg" alt="Huawei Cloud" className="h-16 w-auto object-contain" />
            </div>

            {/* Tencent Cloud */}
            <div className="flex items-center justify-center p-4">
              <img src="/partner/tencent.png" alt="Tencent Cloud" className="h-16 w-auto object-contain" />
            </div>

            {/* OnePro */}
            <div className="flex items-center justify-center p-4">
              <img src="/partner/onepro.png" alt="OnePro" className="h-16 w-auto object-contain" />
            </div>

            {/* AhnLab */}
            <div className="flex items-center justify-center p-4">
              <img src="/partner/ahnlab.jpg" alt="AhnLab" className="h-16 w-auto object-contain" />
            </div>

            {/* TrueWatch */}
            <div className="flex items-center justify-center p-4">
              <img src="/partner/true_watch_logo.svg" alt="TrueWatch" className="h-16 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Unified Data Platform */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Unified Data Platform</h2>
                <p className="text-text-secondary">Build AI on a foundation designed for enterprise-scale data processing and analytics.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">Modern Data Lakehouse</h3>
                <p className="text-text-secondary">
                  Unified analytics combining lake flexibility with warehouse performance supporting petabyte-scale AI workloads.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">Real-Time Streaming</h3>
                <p className="text-text-secondary">
                  Event-driven architecture processing millions of events per second powering instant insights and responsive AI.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">Enterprise Data Warehouse</h3>
                <p className="text-text-secondary">
                  High-performance warehousing optimized for complex analytics, reporting, and ML model training at scale.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">Data Governance</h3>
                <p className="text-text-secondary">
                  Comprehensive frameworks ensuring quality, lineage, access control, and regulatory compliance across your data estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Modernisation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Cloud Modernisation</h2>
                <p className="text-text-secondary">Transform infrastructure with cloud-native architecture that scales with your AI ambitions.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark">Container Orchestration</h3>
                </div>
                <p className="text-text-secondary">
                  Kubernetes-native with auto-scaling, service mesh, and zero downtime deployments.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark">Infrastructure Automation</h3>
                </div>
                <p className="text-text-secondary">
                  GitOps workflows with infrastructure as Code for consistent, auditable deployments.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark">FinOps Optimisation</h3>
                </div>
                <p className="text-text-secondary">
                  Cloud cost optimization reducing spend up to 40% with no performance impact.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark">High Availability</h3>
                </div>
                <p className="text-text-secondary">
                  Multi-region resilience with disaster recovery and 99.9% uptime SLA guarantees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Trust AI Architecture */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Zero-Trust AI Architecture</h2>
                <p className="text-text-secondary">Enterprise-grade security controls ensuring responsible, compliant, and auditable AI deployment.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Model Access Control</h3>
                <p className="text-text-secondary text-sm">
                  Role-based permissions with zero-trust architecture.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Data Leakage Prevention</h3>
                <p className="text-text-secondary text-sm">
                  Advanced filtering to prevent sensitive data exposure.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Prompt Injection Defense</h3>
                <p className="text-text-secondary text-sm">
                  Multi-layered protection against adversarial inputs.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Secure RAG Pipeline</h3>
                <p className="text-text-secondary text-sm">
                  End-to-end encryption for retrieval-augmented generation workflows.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Audit & Compliance</h3>
                <p className="text-text-secondary text-sm">
                  Comprehensive logging of all AI interactions for compliance.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Policy Guardrails</h3>
                <p className="text-text-secondary text-sm">
                  Configurable rules ensuring regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO SCALE YOUR AI INFRASTRUCTURE?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Build on a platform designed for enterprise AI at scale.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-bg-light">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
