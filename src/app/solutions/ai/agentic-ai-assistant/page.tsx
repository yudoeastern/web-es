import Link from "next/link";

export default function AgenticAIAssistantPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-dark-bg-card border border-border-color rounded-full">
              <span className="text-primary-orange-light text-sm font-semibold">
                AI Assistant
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-white mb-6">
              AI Assistants That Understand, Decide, and{" "}
              <span className="gradient-text">Execute Work</span>
            </h1>
            <p className="text-xl text-text-gray mb-8">
              Transform AI into intelligent systems that automate workflows, integrate with enterprise
              platforms, and support real business operations.
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
            <p className="text-lg text-text-secondary mb-8">
              AI assistants are evolving into intelligent systems that actively participate in business operations.
              EasternStack AI Assistants are designed to understand context, reason across data, and
              execute actions across systems.
            </p>
            <p className="text-lg text-text-secondary">
              They enable organizations to automate workflows while maintaining full control, security, and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* AI Assistant Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            AI ASSISTANT USE CASES
          </h2>

          {/* Customer Support Section */}
          <div id="customer-support" className="mb-16 scroll-mt-20">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Customer Service Agent</h3>
              <p className="text-text-secondary mb-6">
                AI-powered frontline support that handles customer inquiries 24/7, reducing human agent workload while delivering instant responses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Use Cases</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Order tracking and status updates
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Refund and complaint handling
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Product FAQs and recommendations
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Business Value</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      70% reduction in support workload
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Instant responses with zero wait time
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Sales & Revenue Agent</h3>
              <p className="text-text-secondary mb-6">
                AI that guides users through the entire purchase journey, from product discovery to checkout completion.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Capabilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Product recommendations based on needs
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Intelligent upselling and cross-selling
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Pre-checkout question resolution
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Business Value</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      35% increase in conversion rates
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      25% higher average order value
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Reduced cart abandonment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Employee Copilot Section */}
          <div id="work-assistant" className="mb-16 scroll-mt-20">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Employee Copilot</h3>
              <p className="text-text-secondary mb-6">
                Your AI productivity partner for professionals and teams. Automate routine tasks and focus on high-value work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Functions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Document and email summarization
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Idea generation and brainstorming
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Draft creation (proposals, reports)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Business Value</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      50% time savings on routine tasks
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Improved employee productivity
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Faster onboarding for new hires
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Learning & Development Section */}
          <div id="ai-tutor">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Learning & Development</h3>
              <p className="text-text-secondary mb-6">
                Your private digital teacher that adapts to each learner's pace and style, making education accessible and interactive.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Applications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      School and university explanations
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Practice exercises with solutions
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Language learning and practice
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Business Value</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Personalized learning paths
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      24/7 learning availability
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Reduced training costs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Solution Options */}
      <section className="section-padding bg-dark-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            DEPLOYMENT OPTIONS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bedrock */}
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-text-white mb-4">Bedrock AI Assistant</h3>
              <p className="text-text-gray mb-6">
                Built on scalable cloud infrastructure, this solution enables organizations to rapidly deploy AI
                assistants using multiple advanced AI models. Designed for flexibility, performance, and faster time to value.
              </p>
              <h4 className="text-lg font-semibold text-text-white mb-4">Key Capabilities</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-text-gray">
                  <svg className="w-5 h-5 text-primary-orange-light mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Multi Model Intelligence - Access multiple foundation models
                </li>
                <li className="flex items-start text-text-gray">
                  <svg className="w-5 h-5 text-primary-orange-light mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Scalable Infrastructure - Cloud native architecture
                </li>
                <li className="flex items-start text-text-gray">
                  <svg className="w-5 h-5 text-primary-orange-light mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Faster Deployment - Accelerated implementation
                </li>
                <li className="flex items-start text-text-gray">
                  <svg className="w-5 h-5 text-primary-orange-light mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Cloud Native Integration - Seamless API connectivity
                </li>
              </ul>
            </div>

            {/* Private */}
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-text-white mb-4">Private AI Assistant</h3>
              <p className="text-text-gray mb-6">
                Designed for organizations that require full control over data and infrastructure. This solution
                ensures maximum security, compliance, and governance.
              </p>
              <h4 className="text-lg font-semibold text-text-white mb-4">Key Capabilities</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-text-gray">
                  <svg className="w-5 h-5 text-primary-orange-light mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Data Privacy and Ownership - Full control over sensitive data
                </li>
                <li className="flex items-start text-text-gray">
                  <svg className="w-5 h-5 text-primary-orange-light mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Compliance Ready Architecture - Meet strict regulatory requirements
                </li>
                <li className="flex items-start text-text-gray">
                  <svg className="w-5 h-5 text-primary-orange-light mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Custom Infrastructure Control - Align with internal IT policies
                </li>
                <li className="flex items-start text-text-gray">
                  <svg className="w-5 h-5 text-primary-orange-light mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Secure System Integration - Safe internal system connectivity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            BEDROCK VS PRIVATE AI ASSISTANT
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border-color">
                  <th className="text-left py-4 px-6 text-text-gray">Capability</th>
                  <th className="text-left py-4 px-6 text-primary-orange-light">Bedrock AI Assistant</th>
                  <th className="text-left py-4 px-6 text-primary-orange-light">Private AI Assistant</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-color">
                  <td className="py-4 px-6 text-text-white">Deployment Model</td>
                  <td className="py-4 px-6 text-text-gray">Cloud based infrastructure</td>
                  <td className="py-4 px-6 text-text-gray">Private cloud or on premises</td>
                </tr>
                <tr className="border-b border-border-color">
                  <td className="py-4 px-6 text-text-white">Scalability</td>
                  <td className="py-4 px-6 text-text-gray">Highly scalable and elastic</td>
                  <td className="py-4 px-6 text-text-gray">Controlled scalability</td>
                </tr>
                <tr className="border-b border-border-color">
                  <td className="py-4 px-6 text-text-white">Data Control</td>
                  <td className="py-4 px-6 text-text-gray">Managed with cloud security standards</td>
                  <td className="py-4 px-6 text-text-gray">Full data ownership and control</td>
                </tr>
                <tr className="border-b border-border-color">
                  <td className="py-4 px-6 text-text-white">Compliance</td>
                  <td className="py-4 px-6 text-text-gray">Suitable for general enterprise use</td>
                  <td className="py-4 px-6 text-text-gray">Designed for strict regulatory environments</td>
                </tr>
                <tr className="border-b border-border-color">
                  <td className="py-4 px-6 text-text-white">Implementation Speed</td>
                  <td className="py-4 px-6 text-text-gray">Faster deployment</td>
                  <td className="py-4 px-6 text-text-gray">Moderate deployment time</td>
                </tr>
                <tr className="border-b border-border-color">
                  <td className="py-4 px-6 text-text-white">Model Flexibility</td>
                  <td className="py-4 px-6 text-text-gray">Access to multiple AI models</td>
                  <td className="py-4 px-6 text-text-gray">Custom model configuration</td>
                </tr>
                <tr className="border-b border-border-color">
                  <td className="py-4 px-6 text-text-white">Infrastructure Management</td>
                  <td className="py-4 px-6 text-text-gray">Managed services</td>
                  <td className="py-4 px-6 text-text-gray">Fully controlled by organization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="section-padding bg-dark-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            KEY CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Context Aware Conversations</h3>
              <p className="text-text-gray">
                Understand user intent and business context to deliver relevant responses.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Task Execution Across Systems</h3>
              <p className="text-text-gray">
                Perform actions such as retrieving data, updating records, and triggering workflows.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Knowledge Integration</h3>
              <p className="text-text-gray">
                Access enterprise data, documents, and knowledge bases.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Multi Step Reasoning</h3>
              <p className="text-text-gray">
                Handle complex workflows involving multiple steps and decisions.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Continuous Improvement</h3>
              <p className="text-text-gray">
                Improve performance based on usage and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            USE CASES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Customer Support Automation</h3>
              <p className="text-text-gray">
                Handle customer inquiries, retrieve relevant data, and resolve issues in real time.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Internal Helpdesk</h3>
              <p className="text-text-gray">
                Support employees across IT, HR, and operations by providing instant assistance.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Sales Assistant</h3>
              <p className="text-text-gray">
                Assist with lead qualification, follow ups, and customer engagement.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Knowledge Assistant</h3>
              <p className="text-text-gray">
                Provide fast access to enterprise knowledge and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="section-padding bg-dark-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            BUSINESS VALUE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Efficiency</div>
              <p className="text-text-gray text-sm">
                Reduce manual workload and repetitive tasks across teams.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Speed</div>
              <p className="text-text-gray text-sm">
                Deliver faster and more consistent interactions.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Scale</div>
              <p className="text-text-gray text-sm">
                Support growing demand without increasing headcount.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Experience</div>
              <p className="text-text-gray text-sm">
                Provide seamless and intelligent interactions across systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-white mb-6">
            DEPLOY AI ASSISTANTS THAT ACT AS AN EXTENSION OF YOUR TEAM
          </h2>
          <p className="text-text-gray text-lg mb-8 max-w-2xl mx-auto">
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
