import Link from "next/link";

export default function AhnLabPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-border-color rounded-full shadow-sm">
            <span className="text-primary-orange text-sm font-semibold">
              Cybersecurity powered by AhnLab
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            ENTERPRISE{" "}
            <span className="gradient-text">CYBERSECURITY</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Advanced threat protection and endpoint security powered by AhnLab's award-winning cybersecurity solutions.
          </p>
        </div>
      </section>

      {/* About AhnLab */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 text-center">
              ABOUT AHNLAB
            </h2>
            <p className="text-lg text-text-secondary mb-8 text-center">
              AhnLab is South Korea's leading cybersecurity company, providing comprehensive security solutions to enterprises and governments worldwide since 1995.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-5xl font-bold gradient-text mb-2">25+</div>
                <div className="text-text-dark font-semibold mb-2">Years Experience</div>
                <p className="text-text-secondary text-sm">Pioneering cybersecurity since 1995</p>
              </div>

              <div className="card text-center">
                <div className="text-5xl font-bold gradient-text mb-2">10M+</div>
                <div className="text-text-dark font-semibold mb-2">Protected Endpoints</div>
                <p className="text-text-secondary text-sm">Trusted by enterprises globally</p>
              </div>

              <div className="card text-center">
                <div className="text-5xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-text-dark font-semibold mb-2">Threat Detection</div>
                <p className="text-text-secondary text-sm">Industry-leading detection rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            AHNLAB SECURITY SOLUTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">V3 Endpoint Security</h3>
              <p className="text-text-secondary mb-4">
                Comprehensive endpoint protection with antivirus, anti-malware, and advanced threat prevention.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Real-time malware protection
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Ransomware prevention
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Zero-day threat detection
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">EDR (Endpoint Detection & Response)</h3>
              <p className="text-text-secondary mb-4">
                Advanced threat hunting and incident response with behavioral analysis and forensics.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Behavioral analysis
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Threat hunting
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Incident response
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Workstation Security</h3>
              <p className="text-text-secondary mb-4">
                Centralized security management for enterprise workstations with policy enforcement.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Centralized management
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Policy enforcement
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Compliance reporting
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">24/7 Threat Monitoring</h3>
              <p className="text-text-secondary mb-4">
                Continuous security monitoring with rapid incident response and threat intelligence.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  24/7 SOC support
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Threat intelligence
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Rapid response
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            PROTECT YOUR ENTERPRISE
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Deploy enterprise-grade cybersecurity with AhnLab's award-winning solutions.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-bg-light">
            Get Security Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
