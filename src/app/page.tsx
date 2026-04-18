import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-light">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-light via-white to-bg-light"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-border-color rounded-full shadow-sm">
              <span className="text-primary-orange text-sm font-semibold">
                🚀 Enterprise Agentic AI Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-dark mb-6 leading-tight">
              Enterprise Agentic AI Solutions for{" "}
              <span className="gradient-text">Intelligent Business Operations</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Design, deploy, and scale AI systems that can understand, reason, and act across your
              business workflows with secure and flexible architecture
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/solutions/ai" className="btn-primary text-lg px-8 py-4">
                Explore Solutions
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
              The Future of{" "}
              <span className="gradient-text">Business AI</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Artificial Intelligence is evolving into a core operational layer that enables organizations to
              operate more efficiently, make faster decisions, and scale without increasing complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Context Aware</h3>
              <p className="text-text-secondary">
                AI that understands context, executes tasks, and orchestrates workflows across systems and teams.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Secure by Design</h3>
              <p className="text-text-secondary">
                Every implementation built on secure architecture, designed for long term scalability.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Business Aligned</h3>
              <p className="text-text-secondary">
                AI solutions aligned with business goals and designed to deliver measurable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="section-padding bg-bg-light-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4 text-center">
            OUR{" "}
            <span className="gradient-text">AI SOLUTIONS</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-16 text-center">
            Four specialized solutions to transform your business operations with intelligent automation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/solutions/ai/agentic-ai-assistant" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3 group-hover:text-primary-orange transition-colors">
                Agentic AI Assistant
              </h3>
              <p className="text-text-secondary mb-4">
                AI assistants that can interact, reason, and execute workflows across business operations.
              </p>
              <span className="text-primary-orange font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/solutions/ai/intelligent-document-processing" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3 group-hover:text-primary-orange transition-colors">
                Intelligent Document Processing
              </h3>
              <p className="text-text-secondary mb-4">
                AI powered document intelligence that extracts insights and automates processing.
              </p>
              <span className="text-primary-orange font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/solutions/ai/ai-agent-builder" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3 group-hover:text-primary-orange transition-colors">
                AI Agent Builder
              </h3>
              <p className="text-text-secondary mb-4">
                A platform to design and orchestrate AI agents across systems and workflows.
              </p>
              <span className="text-primary-orange font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/solutions/ai/copilot-suite" className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3 group-hover:text-primary-orange transition-colors">
                Enterprise Copilot Suite
              </h3>
              <p className="text-text-secondary mb-4">
                Role based AI copilots that enhance productivity and decision making.
              </p>
              <span className="text-primary-orange font-semibold transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4 text-center">
            CORE{" "}
            <span className="gradient-text">CAPABILITIES</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-16 text-center">
            Built on a unified AI architecture that enables intelligent automation across your organization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">Context Aware Intelligence</h3>
              <p className="text-text-secondary">
                Understand user intent, business context, and data relationships to deliver accurate and relevant outcomes.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">Task Execution Across Systems</h3>
              <p className="text-text-secondary">
                Enable AI to perform real actions within enterprise platforms such as CRM, ERP, and internal tools.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">Workflow Orchestration</h3>
              <p className="text-text-secondary">
                Coordinate multi step processes across systems, teams, and data sources.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">Multi Model Flexibility</h3>
              <p className="text-text-secondary">
                Leverage multiple AI models to optimize performance and adaptability.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">Secure and Controlled Deployment</h3>
              <p className="text-text-secondary">
                Ensure compliance, data privacy, and governance across all environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="section-padding bg-bg-light-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-16 text-center">
            HOW EASTERNSTACK{" "}
            <span className="gradient-text">DELIVERS AI</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Discovery & Assessment</h3>
              <p className="text-text-secondary">
                Identify business use cases, operational challenges, and AI opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Solution Design</h3>
              <p className="text-text-secondary">
                Define architecture, workflows, and integration strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Implementation</h3>
              <p className="text-text-secondary">
                Deploy AI solutions and integrate with enterprise systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">Optimization & Scaling</h3>
              <p className="text-text-secondary">
                Continuously improve performance and expand use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-16 text-center">
            USE{" "}
            <span className="gradient-text">CASES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-3">Customer Service Automation</h3>
              <p className="text-text-secondary">
                Improve response time and service quality with intelligent automation.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-3">Document and Contract Intelligence</h3>
              <p className="text-text-secondary">
                Analyze documents and extract insights for faster decision making.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-3">Human Resources Optimization</h3>
              <p className="text-text-secondary">
                Streamline recruitment, onboarding, and employee workflows.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-3">Internal Knowledge Management</h3>
              <p className="text-text-secondary">
                Enable faster access to enterprise information.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-3">Business Process Automation</h3>
              <p className="text-text-secondary">
                Automate repetitive workflows and improve operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
            START BUILDING INTELLIGENT AI SYSTEMS
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Deliver measurable business impact with EasternStack enterprise AI solutions.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
