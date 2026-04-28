import Link from "next/link";

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-bg-light-card border border-gray-700 rounded-full">
              <span className="text-primary-orange text-sm font-semibold">
                AI Assistant
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              AI ASSISTANT{" "}
              <span className="gradient-text">SOLUTIONS</span>
            </h1>
            <p className="text-xl text-gray-600">
              Intelligent conversational AI that understands context, makes decisions, and executes 
              workflows across your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          
          {/* Customer Support */}
          <div id="customer-support" className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  Customer Support Automation (24/7)
                </h2>
                <p className="text-gray-600 mb-6">
                  AI-powered frontline support that handles customer inquiries around the clock, 
                  reducing human agent workload while delivering instant responses.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Use Cases</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Order tracking and status updates
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Refund and complaint handling
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Product FAQs and recommendations
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Why It's Powerful</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Reduces human customer service workload by up to 70%
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Instant responses with zero waiting time
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Handles thousands of concurrent users simultaneously
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="text-center py-8">
                  <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-gray-600 mb-6">Support Coverage</div>
                  <div className="text-5xl font-bold gradient-text mb-2">70%</div>
                  <div className="text-gray-600 mb-6">Workload Reduction</div>
                  <div className="text-5xl font-bold gradient-text">1000+</div>
                  <div className="text-gray-600">Concurrent Users</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-12" />

          {/* Sales Assistant */}
          <div id="sales-assistant" className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="card">
                  <div className="p-6">
                    <div className="text-sm text-gray-600 mb-4">EXAMPLE CONVERSATION</div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-bg-light-card rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-600 text-sm">U</span>
                        </div>
                        <div className="bg-bg-light-card rounded-lg p-3 text-gray-600 text-sm">
                          "What laptop do you recommend for graphic design?"
                        </div>
                      </div>
                      <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">AI</span>
                        </div>
                        <div className="bg-primary-orange/10 border border-primary-orange/20 rounded-lg p-3 text-gray-600 text-sm">
                          "I'd be happy to help! What's your budget range, and which design software do you primarily use?"
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-bg-light-card rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-600 text-sm">U</span>
                        </div>
                        <div className="bg-bg-light-card rounded-lg p-3 text-gray-600 text-sm">
                          "Around $2000, mainly for Adobe Creative Suite"
                        </div>
                      </div>
                      <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">AI</span>
                        </div>
                        <div className="bg-primary-orange/10 border border-primary-orange/20 rounded-lg p-3 text-gray-600 text-sm">
                          "Based on your needs, I recommend the MacBook Pro 14" with M3 Pro chip. It offers excellent performance for Adobe Creative Suite with 18GB unified memory. Would you like me to check availability?"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  Sales Assistant
                </h2>
                <p className="text-gray-600 mb-6">
                  AI that guides users through the entire purchase journey, from product discovery 
                  to checkout completion.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Capabilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Product recommendations based on user needs
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Intelligent upselling and cross-selling
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Pre-checkout question resolution
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-12" />

          {/* AI Tutor */}
          <div id="ai-tutor" className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  AI Tutor / Personal Education
                </h2>
                <p className="text-gray-600 mb-6">
                  Your private digital teacher that adapts to each student's learning pace and style, 
                  making education accessible and interactive.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Applications</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    School and university subject explanations
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Practice exercises with detailed solutions
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Language learning and conversation practice
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Value Proposition</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Personalized learning adapted to user level
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Interactive learning, not static content
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="text-center py-8">
                  <div className="text-5xl font-bold gradient-text mb-2">1-on-1</div>
                  <div className="text-gray-600 mb-6">Personalized Attention</div>
                  <div className="text-5xl font-bold gradient-text mb-2">Adaptive</div>
                  <div className="text-gray-600 mb-6">Learning Pace</div>
                  <div className="text-5xl font-bold gradient-text">24/7</div>
                  <div className="text-gray-600">Always Available</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-12" />

          {/* Work Assistant */}
          <div id="work-assistant" className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="card">
                  <div className="p-6">
                    <div className="text-sm text-gray-600 mb-4">WORKFLOW EXAMPLE</div>
                    <div className="space-y-4">
                      <div className="bg-bg-light-card rounded-lg p-4 border-l-4 border-primary-orange">
                        <div className="text-[#1A1A1A] font-semibold mb-2">📄 Document Upload</div>
                        <div className="text-gray-600 text-sm">User uploads 50-page PDF report</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="bg-primary-orange/10 border border-primary-orange/20 rounded-lg p-4">
                        <div className="text-[#1A1A1A] font-semibold mb-2">🤖 AI Processing</div>
                        <div className="text-gray-600 text-sm">AI analyzes and extracts key information</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="bg-bg-light-card rounded-lg p-4 border-l-4 border-primary-orange">
                        <div className="text-[#1A1A1A] font-semibold mb-2">📋 Summary Output</div>
                        <div className="text-gray-600 text-sm">5-page executive summary with key points</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  Work Assistant (Productivity)
                </h2>
                <p className="text-gray-600 mb-6">
                  Your AI productivity partner for professionals and teams. Automate routine tasks 
                  and focus on high-value work.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Functions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Document and email summarization
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Idea generation and brainstorming support
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Draft creation (proposals, reports, etc.)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-12" />

          {/* Internal Automation */}
          <div id="internal-automation">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  Internal Business Automation
                </h2>
                <p className="text-gray-600 mb-6">
                  Enterprise AI bots that streamline internal operations, making company knowledge 
                  accessible and reducing administrative overhead.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Use Cases</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    HR bot for leave requests, payroll info, policies
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Internal IT helpdesk for tech support
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Company knowledge base (SOP, policies, FAQs)
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Why It's Powerful</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Saves employee time on routine inquiries
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    All company knowledge searchable via chat
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="text-center py-8">
                  <div className="text-5xl font-bold gradient-text mb-2">HR</div>
                  <div className="text-gray-600 mb-6">Leave, Payroll, Policies</div>
                  <div className="text-5xl font-bold gradient-text mb-2">IT</div>
                  <div className="text-gray-600 mb-6">Tech Support Bot</div>
                  <div className="text-5xl font-bold gradient-text">KB</div>
                  <div className="text-gray-600">Searchable Knowledge</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            READY TO DEPLOY AI ASSISTANTS?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Transform your business operations with intelligent AI assistants.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section> */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO DEPLOY AI ASSISTANTS?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Transform your business operations with intelligent AI assistants.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Book Consultation
          </Link>
        </div>
      </section>         
    </div>
  );
}
