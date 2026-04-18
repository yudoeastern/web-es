import Link from "next/link";

export default function OCRSolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-bg-light-card border border-border-color rounded-full">
              <span className="text-primary-orange text-sm font-semibold">
                OCR Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
              INTELLIGENT{" "}
              <span className="gradient-text">DOCUMENT RECOGNITION</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Advanced OCR solutions for finance, identity verification, and expense management 
              with enterprise-grade accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* OCR Solutions */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          
          {/* Invoice OCR */}
          <div id="invoice" className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-text-dark mb-2">
                  InvoiceMind OCR
                </h2>
                <p className="text-primary-orange text-sm mb-6">Finance + Automation + Professional</p>
                <p className="text-text-secondary mb-6">
                  Automated invoice processing with high-accuracy data extraction, validation, 
                  and seamless integration with accounting systems.
                </p>
                
                <h3 className="text-lg font-semibold text-text-dark mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Extract vendor, amount, date, line items automatically
                  </li>
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Multi-format support (PDF, image, scanned docs)
                  </li>
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Validation against purchase orders
                  </li>
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Direct integration with ERP systems
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="text-center py-8">
                  <div className="text-5xl font-bold gradient-text mb-2">99%</div>
                  <div className="text-text-secondary mb-6">Extraction Accuracy</div>
                  <div className="text-5xl font-bold gradient-text mb-2">10x</div>
                  <div className="text-text-secondary mb-6">Faster Processing</div>
                  <div className="text-5xl font-bold gradient-text">0</div>
                  <div className="text-text-secondary">Manual Entry</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border-color my-12" />

          {/* Identity OCR */}
          <div id="identity" className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="card">
                  <div className="p-6">
                    <div className="text-sm text-text-secondary mb-4">SUPPORTED DOCUMENTS</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-bg-light-card rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">🇮🇩</div>
                        <div className="text-text-dark text-sm">KTP Indonesia</div>
                      </div>
                      <div className="bg-bg-light-card rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">🪪</div>
                        <div className="text-text-dark text-sm">SIM / Driver License</div>
                      </div>
                      <div className="bg-bg-light-card rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">🛂</div>
                        <div className="text-text-dark text-sm">Passport</div>
                      </div>
                      <div className="bg-bg-light-card rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">📄</div>
                        <div className="text-text-dark text-sm">NPWP / Tax ID</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-text-dark mb-2">
                  IDentify AI
                </h2>
                <p className="text-primary-orange text-sm mb-6">Trust + Security + Onboarding</p>
                <p className="text-text-secondary mb-6">
                  Secure identity verification with KTP and document recognition for trusted, 
                  compliant customer onboarding.
                </p>
                
                <h3 className="text-lg font-semibold text-text-dark mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Extract NIK, name, address, birth date automatically
                  </li>
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Liveness detection and anti-spoofing
                  </li>
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    KYC compliance ready
                  </li>
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Real-time verification API
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border-color my-12" />

          {/* Receipt OCR */}
          <div id="receipt">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-text-dark mb-2">
                  Receiptly
                </h2>
                <p className="text-primary-orange text-sm mb-6">Simple + Daily Use + Fintech</p>
                <p className="text-text-secondary mb-6">
                  Effortless receipt scanning and expense tracking for personal finance 
                  and business expense management.
                </p>
                
                <h3 className="text-lg font-semibold text-text-dark mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Snap receipt → auto extract merchant, amount, date
                  </li>
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Auto categorization (food, transport, office, etc.)
                  </li>
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Expense reports and analytics
                  </li>
                  <li className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Export to accounting software
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="text-center py-8">
                  <div className="text-5xl font-bold gradient-text mb-2">3sec</div>
                  <div className="text-text-secondary mb-6">Scan Time</div>
                  <div className="text-5xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-text-secondary mb-6">Accuracy</div>
                  <div className="text-5xl font-bold gradient-text">∞</div>
                  <div className="text-text-secondary">Receipts Storage</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
            AUTOMATE YOUR DOCUMENT PROCESSING
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Transform unstructured documents into actionable data with AI-powered OCR.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
