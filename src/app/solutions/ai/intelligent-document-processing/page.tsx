import Link from "next/link";

export default function DocumentProcessingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-bg-lighter-card border border-border-color rounded-full">
              <span className="text-primary-orange-light text-sm font-semibold">
                Intelligent Document Processing
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Transform Documents into{" "}
              <span className="gradient-text">Structured Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Unlock the full value of your documents by turning unstructured data into accurate, actionable
              insights that accelerate decisions and reduce risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book Consultation
              </Link>
              <Link href="/solutions/ai" className="btn-secondary text-lg px-8 py-4">
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Documents sit at the center of many business processes, from contracts and invoices to compliance
              records and reports. However, most organizations still rely on manual review, which slows down
              operations and increases the risk of errors.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              EasternStack Intelligent Document Processing is designed to change that. By combining advanced AI
              with contextual understanding, this solution transforms documents into structured, reliable data
              that can be analyzed, searched, and integrated into your business workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="section-padding bg-bg-lighter-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            KEY CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Automated Data Extraction</h3>
              <p className="text-gray-600">
                Capture key information from documents such as contracts, invoices, and reports with high precision and minimal manual intervention.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Document Classification</h3>
              <p className="text-gray-600">
                Automatically categorize documents based on type, structure, and content, enabling better organization and routing.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Clause and Risk Analysis</h3>
              <p className="text-gray-600">
                Identify critical clauses, detect potential risks, and highlight inconsistencies across documents.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Summarization and Insight Generation</h3>
              <p className="text-gray-600">
                Generate concise summaries that allow teams to quickly understand key points without reviewing entire documents.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Cross Document Comparison</h3>
              <p className="text-gray-600">
                Analyze multiple documents simultaneously to identify differences, anomalies, and compliance gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            WHAT YOU GET
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Document Processing Engine</h3>
              <p className="text-gray-600 text-sm">
                Automates extraction, classification, and analysis across document types.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Structured Data Output</h3>
              <p className="text-gray-600 text-sm">
                Transforms unstructured content into clean, usable data.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Risk and Compliance Insights</h3>
              <p className="text-gray-600 text-sm">
                Provides visibility into potential risks and regulatory requirements.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Searchable Intelligence Layer</h3>
              <p className="text-gray-600 text-sm">
                Enables fast retrieval of document insights across the organization.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Integration Layer</h3>
              <p className="text-gray-600 text-sm">
                Connects with ERP, document management systems, and analytics platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-bg-lighter-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            USE CASES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 00-6.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Legal and Contract Management</h3>
              <p className="text-gray-600 text-sm">
                Accelerate contract review, identify risks, and improve consistency across agreements.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Finance and Accounting</h3>
              <p className="text-gray-600 text-sm">
                Automate invoice processing, validation, and reconciliation workflows.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Compliance and Audit</h3>
              <p className="text-gray-600 text-sm">
                Support regulatory reporting and ensure document consistency across audits.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Procurement and Vendor Management</h3>
              <p className="text-gray-600 text-sm">
                Streamline vendor documentation and contract lifecycle management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            BUSINESS VALUE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Speed</div>
              <p className="text-gray-600 text-sm">
                Eliminate manual bottlenecks and accelerate operations.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Accuracy</div>
              <p className="text-gray-600 text-sm">
                Minimize human error and ensure standardized outputs.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Compliance</div>
              <p className="text-gray-600 text-sm">
                Identify issues earlier and improve governance.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Insights</div>
              <p className="text-gray-600 text-sm">
                Transform documents into actionable insights in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-bg-lighter-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                What is Intelligent Document Processing?
              </h3>
              <p className="text-gray-600">
                Intelligent Document Processing uses AI to extract, analyze, and structure information from documents such as contracts, invoices, and reports.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                What types of documents can be processed?
              </h3>
              <p className="text-gray-600">
                The solution supports contracts, invoices, financial reports, compliance documents, and other business records.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                How accurate is AI document processing?
              </h3>
              <p className="text-gray-600">
                AI document processing achieves high accuracy by combining machine learning and contextual analysis, significantly reducing manual errors.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                Can this solution support compliance and risk management?
              </h3>
              <p className="text-gray-600">
                Yes, it helps identify risks, detect inconsistencies, and support regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            TURN YOUR DOCUMENTS INTO STRUCTURED INTELLIGENCE
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Enable faster, more accurate decision making across your organization.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section> */}

      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            TURN YOUR DOCUMENTS INTO STRUCTURED INTELLIGENCE
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Enable faster, more accurate decision making across your organization.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Book Consultation
          </Link>
        </div>
      </section>        
    </div>
  );
}
