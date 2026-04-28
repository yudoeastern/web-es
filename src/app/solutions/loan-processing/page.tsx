import Link from "next/link";

export default function LoanProcessingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white-card border border-gray-700 rounded-full">
              <span className="text-[#E31E24] text-sm font-semibold">
                Loan Application Processing
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              INTELLIGENT{" "}
              <span className="gradient-text">LOAN PROCESSING</span>
            </h1>
            <p className="text-xl text-gray-600">
              AI-powered loan origination that automates document verification, risk assessment, 
              and approval decisions—reducing processing time from weeks to minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
              Transform Loan Origination
            </h2>
            <p className="text-gray-600 mb-6">
              Traditional loan processing is slow, manual, and prone to errors. Applicants wait 
              weeks for decisions while your team drowns in paperwork. Every day of delay means 
              frustrated customers and lost revenue.
            </p>
            <p className="text-gray-600 mb-8">
              EasternStack Loan Application Processing automates the entire workflow—from document 
              collection and verification to credit analysis and final approval. AI agents handle 
              routine cases instantly while flagging complex applications for human review.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">90%</div>
                <div className="text-gray-600 text-sm">Faster processing</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50%</div>
                <div className="text-gray-600 text-sm">Lower operational cost</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">99%</div>
                <div className="text-gray-600 text-sm">Document accuracy</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Automated decisions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-white-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            AUTOMATED LOAN WORKFLOW
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Application", desc: "Customer submits online application" },
              { step: "2", title: "Document AI", desc: "OCR extracts & validates documents" },
              { step: "3", title: "Credit Analysis", desc: "AI assesses creditworthiness" },
              { step: "4", title: "Risk Scoring", desc: "ML model calculates risk score" },
              { step: "5", title: "Decision", desc: "Auto-approve or route to underwriter" },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {item.step !== "5" && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#E31E24] to-[#C4181E]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            KEY FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Document Verification</h3>
              <p className="text-gray-600">
                AI-powered OCR extracts data from income statements, bank records, IDs, and validates authenticity.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Identity Verification</h3>
              <p className="text-gray-600">
                Biometric checks, liveness detection, and database cross-reference for KYC compliance.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Credit Risk Assessment</h3>
              <p className="text-gray-600">
                ML models analyze credit history, income stability, debt ratios, and alternative data.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Income Verification</h3>
              <p className="text-gray-600">
                Automated analysis of payslips, tax returns, and bank statements to verify income claims.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Instant Decisioning</h3>
              <p className="text-gray-600">
                Auto-approve low-risk applications in seconds. Complex cases routed to underwriters.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Fraud Detection</h3>
              <p className="text-gray-600">
                Detect document forgery, identity theft, and application fraud in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            BUSINESS IMPACT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">For Lenders</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Process 10x more applications with same team
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Reduce default rates with better risk assessment
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Cut operational costs by 50% or more
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Ensure regulatory compliance with audit trails
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">For Borrowers</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Get loan decisions in minutes, not weeks
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Apply online with minimal documentation
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Fair, unbiased AI-driven decisions
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Transparent process with real-time status
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            APPROVE LOANS FASTER WITH AI
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Transform your loan origination with intelligent automation.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
