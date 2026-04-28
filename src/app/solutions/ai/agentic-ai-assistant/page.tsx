import Link from "next/link";

export default function AgenticAIAssistantPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-[#0F0F0F]-card border border-gray-700 rounded-full">
              <span className="text-[#E31E24] text-sm font-semibold">
                Agentic AI Assistant
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Agentic AI That Executes{" "}
              <span className="gradient-text">Business Workflows</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Deploy intelligent AI agents that understand context, make decisions, and execute 
              multi-step workflows across your enterprise systems autonomously.
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
              EasternStack Agentic AI Assistants go beyond traditional chatbots. They are autonomous 
              agents that can perceive business context, reason across multiple data sources, make 
              informed decisions, and execute actions across enterprise platforms without human intervention.
            </p>
            <p className="text-lg text-gray-600">
              Unlike rule-based automation, Agentic AI adapts to changing conditions, learns from 
              outcomes, and continuously improves operational efficiency while maintaining governance and control.
            </p>
          </div>
        </div>
      </section>

      {/* AI Assistant Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            AGENTIC AI CAPABILITIES
          </h2>

          {/* Customer Support Section */}
          <div id="customer-support" className="mb-16 scroll-mt-20">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Customer Operations Agent</h3>
              <p className="text-gray-600 mb-6">
                Autonomous AI that manages end-to-end customer service workflows, from inquiry resolution 
                to order processing and escalation handling.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Capabilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Order tracking and status updates
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Refund and complaint handling
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Product FAQs and recommendations
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Business Value</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      70% reduction in support workload
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Instant responses with zero wait time
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Handle thousands of concurrent users
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Assistant Section */}
          <div id="sales-assistant" className="mb-16 scroll-mt-20">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Revenue Operations Agent</h3>
              <p className="text-gray-600 mb-6">
                Autonomous AI that orchestrates the entire sales lifecycle, from lead qualification to deal closure and revenue optimization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Capabilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Lead scoring and qualification workflows
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Automated proposal and quote generation
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Deal progression and follow-up automation
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Business Value</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      50% faster sales cycle
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      40% improvement in lead conversion
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Eliminate manual CRM updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Employee Copilot Section */}
          <div id="work-assistant" className="mb-16 scroll-mt-20">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Workforce Productivity Agent</h3>
              <p className="text-gray-600 mb-6">
                Autonomous AI that orchestrates enterprise workflows, automates knowledge work, and empowers teams to focus on strategic initiatives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Capabilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Cross-system workflow automation
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Intelligent document processing
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Meeting preparation and follow-ups
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Business Value</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      60% reduction in manual work
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Accelerated decision cycles
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Consistent process execution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Agentic AI Assistant */}
      <section className="section-padding bg-[#F9FAFB]">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            WHY CHOOSE AGENTIC AI ASSISTANT
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="card mb-6">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Manual Process vs Agentic AI</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E31E24]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong className="text-[#1A1A1A]">Manual:</strong> Customer inquiries take hours or days to respond to, requiring staff to manually review each request and search for relevant information.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong className="text-[#1A1A1A]">Agentic AI:</strong> Instant responses 24/7 with accurate, context-aware answers that improve over time.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-6">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Manual Process vs Agentic AI</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E31E24]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong className="text-[#1A1A1A]">Manual:</strong> Sales team spends 60% of time on repetitive tasks like data entry, follow-ups, and documentation instead of closing deals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong className="text-[#1A1A1A]">Agentic AI:</strong> Automates routine tasks, qualifies leads automatically, and provides real-time sales insights.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Manual Process vs Agentic AI</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E31E24]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong className="text-[#1A1A1A]">Manual:</strong> HR team manually processes hundreds of resumes, schedules interviews, and answers repetitive employee questions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong className="text-[#1A1A1A]">Agentic AI:</strong> Screens candidates, schedules interviews automatically, and provides instant HR support to employees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            KEY CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Context Aware Conversations</h3>
              <p className="text-gray-600">
                Understand user intent and business context to deliver relevant responses.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Task Execution Across Systems</h3>
              <p className="text-gray-600">
                Perform actions such as retrieving data, updating records, and triggering workflows.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Knowledge Integration</h3>
              <p className="text-gray-600">
                Access enterprise data, documents, and knowledge bases.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Multi Step Reasoning</h3>
              <p className="text-gray-600">
                Handle complex workflows involving multiple steps and decisions.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Improve performance based on usage and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            USE CASES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Customer Support Automation</h3>
              <p className="text-gray-600">
                Handle customer inquiries, retrieve relevant data, and resolve issues in real time.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Internal Helpdesk</h3>
              <p className="text-gray-600">
                Support employees across IT, HR, and operations by providing instant assistance.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Sales Assistant</h3>
              <p className="text-gray-600">
                Assist with lead qualification, follow ups, and customer engagement.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Knowledge Assistant</h3>
              <p className="text-gray-600">
                Provide fast access to enterprise knowledge and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="section-padding bg-[#0F0F0F]-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            BUSINESS VALUE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Efficiency</div>
              <p className="text-gray-600 text-sm">
                Reduce manual workload and repetitive tasks across teams.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Speed</div>
              <p className="text-gray-600 text-sm">
                Deliver faster and more consistent interactions.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Scale</div>
              <p className="text-gray-600 text-sm">
                Support growing demand without increasing headcount.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Experience</div>
              <p className="text-gray-600 text-sm">
                Provide seamless and intelligent interactions across systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            DEPLOY AI ASSISTANTS THAT ACT AS AN EXTENSION OF YOUR TEAM
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Transform your business operations with intelligent AI assistants.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
