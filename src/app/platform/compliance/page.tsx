import Link from "next/link";

export default function CompliancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-border-color rounded-full shadow-sm">
            <span className="text-primary-orange text-sm font-semibold">
              Compliance & Regulatory
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            REGULATORY{" "}
            <span className="gradient-text">COMPLIANCE</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Meet regulatory requirements with comprehensive compliance frameworks for AI, data, and security.
          </p>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            SUPPORTED COMPLIANCE STANDARDS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">GDPR</h3>
              <p className="text-text-secondary mb-4">
                EU General Data Protection Regulation compliance for data privacy and protection.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Data subject rights</li>
                <li>✓ Consent management</li>
                <li>✓ Data portability</li>
                <li>✓ Right to be forgotten</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">SOC 2</h3>
              <p className="text-text-secondary mb-4">
                Service Organization Control 2 for security, availability, and confidentiality.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Security controls</li>
                <li>✓ Availability monitoring</li>
                <li>✓ Confidentiality protection</li>
                <li>✓ Privacy safeguards</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">HIPAA</h3>
              <p className="text-text-secondary mb-4">
                Health Insurance Portability and Accountability Act for healthcare data.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ PHI protection</li>
                <li>✓ Access controls</li>
                <li>✓ Audit trails</li>
                <li>✓ Breach notification</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">OJK Compliance</h3>
              <p className="text-text-secondary mb-4">
                Indonesian Financial Services Authority regulations for financial institutions.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Data localization</li>
                <li>✓ Risk management</li>
                <li>✓ Reporting requirements</li>
                <li>✓ Consumer protection</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">ISO 27001</h3>
              <p className="text-text-secondary mb-4">
                International standard for information security management systems.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ ISMS framework</li>
                <li>✓ Risk assessment</li>
                <li>✓ Security controls</li>
                <li>✓ Continuous improvement</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">PCI DSS</h3>
              <p className="text-text-secondary mb-4">
                Payment Card Industry Data Security Standard for payment data.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Cardholder data protection</li>
                <li>✓ Encryption requirements</li>
                <li>✓ Access control</li>
                <li>✓ Network security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ENSURE REGULATORY COMPLIANCE
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Meet industry regulations with comprehensive compliance frameworks and audit support.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-bg-light">
            Get Compliance Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
