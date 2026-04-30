import Link from "next/link";

export default function AISolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-[#0F0F0F]-card border border-gray-700 rounded-full">
              <span className="text-[#E31E24] text-sm font-semibold">
                AI Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Enterprise AI with Greater{" "}
              <span className="gradient-text">Model Choice and Operational Control</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            EasternStack helps organizations build AI applications with better control over cost, performance, and deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book Consultation
              </Link>
              <Link href="/solutions/ai" className="btn-secondary text-lg px-8 py-4">
                Explore Solutions
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
              Artificial Intelligence is evolving into a core operational layer that enables organizations to
              operate more efficiently, make faster decisions, and scale without increasing complexity.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              EasternStack delivers AI solutions that can understand context, execute tasks, and
              orchestrate workflows across systems and teams. Our approach ensures every AI implementation is
              aligned with business goals, built on secure architecture, and designed for long term scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            OUR AI SOLUTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/solutions/ai-assistant" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E31E24] transition-colors">
                AI Assistant
              </h3>
              <p className="text-gray-600 mb-4">
                AI assistants that can interact, reason, and execute workflows across business operations.
              </p>
              <span className="text-[#E31E24] font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/solutions/ai/intelligent-document-processing" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E31E24] transition-colors">
                Intelligent Document Processing
              </h3>
              <p className="text-gray-600 mb-4">
                AI powered document intelligence that extracts insights and automates processing.
              </p>
              <span className="text-[#E31E24] font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/solutions/ai/ai-agent-builder" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E31E24] transition-colors">
                AI Agent Builder
              </h3>
              <p className="text-gray-600 mb-4">
                A platform to design and orchestrate AI agents across systems and workflows.
              </p>
              <span className="text-[#E31E24] font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/solutions/ai/copilot-suite" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#E31E24] transition-colors">
                Enterprise Copilot Suite
              </h3>
              <p className="text-gray-600 mb-4">
                Role based AI copilots that enhance productivity and decision making.
              </p>
              <span className="text-[#E31E24] font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            CORE CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Context Aware Intelligence</h3>
              <p className="text-gray-600">
                Understand user intent, business context, and data relationships to deliver accurate and relevant outcomes.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Task Execution Across Systems</h3>
              <p className="text-gray-600">
                Enable AI to perform real actions within enterprise platforms such as CRM, ERP, and internal tools.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Workflow Orchestration</h3>
              <p className="text-gray-600">
                Coordinate multi step processes across systems, teams, and data sources.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Multi Model Flexibility</h3>
              <p className="text-gray-600">
                Leverage multiple AI models to optimize performance and adaptability.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Secure and Controlled Deployment</h3>
              <p className="text-gray-600">
                Ensure compliance, data privacy, and governance across all environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            HOW EASTERNSTACK DELIVERS AI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Discovery & Assessment</h3>
              <p className="text-gray-600">
                Identify business use cases, operational challenges, and AI opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Solution Design</h3>
              <p className="text-gray-600">
                Define architecture, workflows, and integration strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Implementation</h3>
              <p className="text-gray-600">
                Deploy AI solutions and integrate with enterprise systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Optimization & Scaling</h3>
              <p className="text-gray-600">
                Continuously improve performance and expand use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-bg-lighter">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                What is AI and how is it different from traditional AI?
              </h3>
              <p className="text-gray-600">
                AI refers to intelligent systems that can understand context, make decisions, and execute tasks across workflows, while traditional AI typically responds to prompts without taking action.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                How can AI solutions improve business operations?
              </h3>
              <p className="text-gray-600">
                AI solutions help automate repetitive tasks, improve efficiency, and enable faster decision making across departments such as operations, customer service, and human resources.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Is AI secure for enterprise environments?
              </h3>
              <p className="text-gray-600">
                Yes, enterprise AI solutions can be deployed with secure architecture, data governance, and compliance controls to ensure privacy and protection of sensitive information.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                How do I choose the right AI solution for my organization?
              </h3>
              <p className="text-gray-600">
                The right solution depends on your business needs, such as whether you require automation, document processing, or role based assistance, as well as your infrastructure and security requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            START BUILDING INTELLIGENT AI SYSTEMS
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Deliver measurable business impact with EasternStack enterprise AI solutions.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Book Consultation
          </Link>
        </div>
      </section> 
      {/* <section className="section-padding bg-gradient-to-br from-[#1A1A1A] via-[#2D1B1B] to-[#E31E24]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            START BUILDING INTELLIGENT AI SYSTEMS
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Deliver measurable business impact with EasternStack enterprise AI solutions.
          </p>
          <Link href="/contact" className="bg-white text-[#E31E24] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Book Consultation
          </Link>
        </div>
      </section> */}
    </div>
  );
}
