import Link from "next/link";

export default function ZeroTrustAIPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
            <span className="text-[#E31E24] text-sm font-semibold">
              Zero-Trust AI Architecture
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            ENTERPRISE{" "}
            <span className="gradient-text">AI SECURITY</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Enterprise-grade security controls ensuring responsible, compliant, and auditable AI deployment with zero-trust architecture.
          </p>
        </div>
      </section>

      {/* Security Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            WHY ZERO-TRUST AI?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Never Trust, Always Verify</h3>
              <p className="text-gray-600">
                Every AI interaction is authenticated, authorized, and encrypted regardless of source or location.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Data Protection</h3>
              <p className="text-gray-600">
                End-to-end encryption and data leakage prevention for sensitive information in AI workflows.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Compliance Ready</h3>
              <p className="text-gray-600">
                Built-in compliance for GDPR, HIPAA, SOC 2, and industry-specific regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Controls */}
      <section className="section-padding bg-whiteer">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            SECURITY CONTROLS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Model Access Control</h3>
              <p className="text-gray-600 text-sm mb-4">
                Role-based permissions with zero-trust architecture for AI model access.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Fine-grained permissions
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Multi-factor authentication
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Just-in-time access
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Data Leakage Prevention</h3>
              <p className="text-gray-600 text-sm mb-4">
                Advanced filtering to prevent sensitive data exposure in AI interactions.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  PII detection & redaction
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Content filtering
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Output validation
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Prompt Injection Defense</h3>
              <p className="text-gray-600 text-sm mb-4">
                Multi-layered protection against adversarial inputs and jailbreak attempts.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Input sanitization
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Jailbreak detection
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Adversarial training
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Secure RAG Pipeline</h3>
              <p className="text-gray-600 text-sm mb-4">
                End-to-end encryption for retrieval-augmented generation workflows.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Encrypted embeddings
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Secure vector search
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Access-controlled knowledge bases
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Audit & Compliance</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive logging of all AI interactions for compliance and forensics.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Complete audit trails
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Tamper-proof logging
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Compliance reporting
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Policy Guardrails</h3>
              <p className="text-gray-600 text-sm mb-4">
                Configurable rules ensuring regulatory compliance and ethical AI usage.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Custom policy engine
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Real-time enforcement
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#E31E24] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Policy versioning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            SECURE YOUR AI DEPLOYMENT
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Implement enterprise-grade security with zero-trust AI architecture.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Get Security Assessment
          </Link>
        </div>
      </section> */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            SECURE YOUR AI DEPLOYMENT
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Implement enterprise-grade security with zero-trust AI architecture.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Get Security Assessment
          </Link>
        </div>
      </section>       
    </div>
  );
}
