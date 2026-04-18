import Link from "next/link";

export default function AIAgentBuilderPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-dark-bg-card border border-border-color rounded-full">
              <span className="text-primary-orange-light text-sm font-semibold">
                AI Agent Builder
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-white mb-6">
              Build and Orchestrate AI Agents Across Your{" "}
              <span className="gradient-text">Business Systems</span>
            </h1>
            <p className="text-xl text-text-gray mb-8">
              Design, deploy, and manage intelligent AI agents that automate workflows, interact with
              systems, and collaborate to execute complex processes at scale.
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
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-gray mb-8">
              As organizations grow, business processes become increasingly complex, involving multiple systems,
              data sources, and decision points. Traditional automation often struggles to manage this level of
              complexity, especially when workflows require coordination across systems.
            </p>
            <p className="text-lg text-text-gray mb-8">
              EasternStack AI Agent Builder enables organizations to design and deploy intelligent AI agents
              that can execute tasks, interact with systems, and collaborate across workflows. Instead of building
              isolated automations, you can create a connected ecosystem of AI agents that operate dynamically
              across your business.
            </p>
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
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Visual Workflow Design</h3>
              <p className="text-text-gray">
                Design multi step workflows using a structured and intuitive approach.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Multi Agent Orchestration</h3>
              <p className="text-text-gray">
                Enable multiple AI agents to collaborate and execute tasks across workflows.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Dynamic Task Execution</h3>
              <p className="text-text-gray">
                Allow agents to adapt based on context, rules, and data.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">System Integration</h3>
              <p className="text-text-gray">
                Connect seamlessly with enterprise systems and APIs.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Scalable Deployment</h3>
              <p className="text-text-gray">
                Deploy agents across multiple functions and environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            WHAT YOU GET
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Agent Development Environment</h3>
              <p className="text-text-gray text-sm">
                Create and configure AI agents with defined roles and logic.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Workflow Orchestration Engine</h3>
              <p className="text-text-gray text-sm">
                Coordinate interactions between multiple agents.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Integration Framework</h3>
              <p className="text-text-gray text-sm">
                Connect with enterprise systems and external services.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Execution and Monitoring Layer</h3>
              <p className="text-text-gray text-sm">
                Track workflows, performance, and outcomes.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Scalable Infrastructure</h3>
              <p className="text-text-gray text-sm">
                Support deployment across teams and business units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-dark-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            USE CASES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">End to End Process Automation</h3>
              <p className="text-text-gray text-sm">
                Automate workflows that span multiple systems and departments.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Data Processing Pipelines</h3>
              <p className="text-text-gray text-sm">
                Handle data extraction, validation, and transformation workflows.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Operational Workflow Automation</h3>
              <p className="text-text-gray text-sm">
                Streamline internal operations across teams.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Customer Interaction Workflows</h3>
              <p className="text-text-gray text-sm">
                Coordinate responses and actions across systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            BUSINESS VALUE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Simplify</div>
              <p className="text-text-gray text-sm">
                Break down multi step workflows into manageable automated tasks.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Accelerate</div>
              <p className="text-text-gray text-sm">
                Build and deploy solutions faster.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Efficiency</div>
              <p className="text-text-gray text-sm">
                Reduce manual intervention and processing errors.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Scale</div>
              <p className="text-text-gray text-sm">
                Expand automation across teams and business functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">
                What is an AI Agent Builder?
              </h3>
              <p className="text-text-gray">
                AI Agent Builder is a platform that allows organizations to design, deploy, and manage AI agents that automate workflows and interact with systems.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">
                How is this different from traditional automation tools?
              </h3>
              <p className="text-text-gray">
                Unlike traditional automation, AI agents can understand context, make decisions, and collaborate across workflows.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">
                Can multiple AI agents work together?
              </h3>
              <p className="text-text-gray">
                Yes, multiple agents can coordinate tasks and execute complex workflows.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">
                What systems can AI agents integrate with?
              </h3>
              <p className="text-text-gray">
                AI agents can integrate with enterprise systems, APIs, databases, and cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-white mb-6">
            BUILD INTELLIGENT AI AGENTS
          </h2>
          <p className="text-text-gray text-lg mb-8 max-w-2xl mx-auto">
            Orchestrate your business processes and scale automation across your organization.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
