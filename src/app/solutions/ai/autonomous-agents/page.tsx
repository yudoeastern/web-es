import Link from "next/link";

export default function AutonomousAgentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-bg-lighter-card border border-border-color rounded-full">
              <span className="text-[#E31E24] text-sm font-semibold">
                Autonomous AI Agents
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Self-Governing AI Agents for{" "}
              <span className="gradient-text">Autonomous Business Operations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Deploy intelligent AI agents that operate independently across your business workflows, 
              making decisions, executing tasks, and adapting to changing conditions without human intervention.
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
              Modern business operations require speed, precision, and the ability to respond to changing 
              conditions in real time. Traditional automation systems are rigid and require constant human 
              oversight, limiting their effectiveness in dynamic environments.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              EasternStack Autonomous AI Agents represent the next evolution of business automation. These 
              self-governing AI systems can perceive their environment, reason about complex situations, make 
              decisions, and execute actions across multiple systems—all while learning and adapting to optimize 
              performance over time.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Autonomous Decision Making</h3>
              <p className="text-gray-600">
                AI agents analyze situations and make informed decisions without human intervention.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Self Learning Systems</h3>
              <p className="text-gray-600">
                Continuously improve performance through machine learning and feedback loops.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Multi-System Operations</h3>
              <p className="text-gray-600">
                Seamlessly operate across CRM, ERP, databases, and external APIs.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Governed Autonomy</h3>
              <p className="text-gray-600">
                Operate within defined guardrails with audit trails and compliance controls.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Real-Time Adaptation</h3>
              <p className="text-gray-600">
                Respond instantly to changing conditions and unexpected scenarios.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Collaborative Agents</h3>
              <p className="text-gray-600">
                Multiple agents work together to accomplish complex objectives.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Autonomous Agent Framework</h3>
              <p className="text-gray-600 text-sm">
                Pre-built agent architectures for common business scenarios.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Decision Engine</h3>
              <p className="text-gray-600 text-sm">
                Configurable reasoning and decision-making capabilities.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Integration Connectors</h3>
              <p className="text-gray-600 text-sm">
                Ready-to-use connectors for enterprise systems and APIs.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Monitoring Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Real-time visibility into agent activities and performance.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Governance Controls</h3>
              <p className="text-gray-600 text-sm">
                Define boundaries, approval workflows, and audit trails.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Learning Pipeline</h3>
              <p className="text-gray-600 text-sm">
                Continuous improvement through feedback and data analysis.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Scalable Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Deploy agents across teams, departments, and regions.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Security Framework</h3>
              <p className="text-gray-600 text-sm">
                Enterprise-grade security and compliance built-in.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Autonomous Procurement</h3>
              <p className="text-gray-600 text-sm">
                AI agents that manage purchasing, vendor selection, and order processing.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Financial Operations</h3>
              <p className="text-gray-600 text-sm">
                Automated invoice processing, reconciliation, and financial reporting.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">HR Process Automation</h3>
              <p className="text-gray-600 text-sm">
                End-to-end recruitment, onboarding, and employee lifecycle management.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Customer Support</h3>
              <p className="text-gray-600 text-sm">
                Intelligent ticket routing, resolution, and escalation handling.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Supply Chain Management</h3>
              <p className="text-gray-600 text-sm">
                Inventory optimization, demand forecasting, and logistics coordination.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Performance Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Continuous system health monitoring and proactive issue resolution.
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
              <div className="text-4xl font-bold gradient-text mb-2">99% Uptime</div>
              <p className="text-gray-600 text-sm">
                Autonomous operations with minimal human intervention.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10x Faster</div>
              <p className="text-gray-600 text-sm">
                Decision-making and task execution speed.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">80% Cost Reduction</div>
              <p className="text-gray-600 text-sm">
                Operational costs through intelligent automation.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7 Operations</div>
              <p className="text-gray-600 text-sm">
                Continuous autonomous workflow execution.
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
                What makes an AI agent autonomous?
              </h3>
              <p className="text-gray-600">
                Autonomous AI agents can perceive their environment, make decisions, and take actions 
                without human intervention. They use advanced reasoning, learning capabilities, and 
                predefined goals to operate independently while staying within governance boundaries.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                How do you ensure safety and control?
              </h3>
              <p className="text-gray-600">
                We implement multiple layers of governance including rule-based guardrails, approval 
                workflows for critical actions, comprehensive audit trails, and human-in-the-loop 
                escalation paths. Agents operate within clearly defined boundaries.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                Can autonomous agents work with existing systems?
              </h3>
              <p className="text-gray-600">
                Yes, our agents integrate seamlessly with your existing enterprise systems including 
                CRM, ERP, databases, and third-party APIs. They can read data, execute transactions, 
                and coordinate workflows across multiple platforms.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                How do agents learn and improve?
              </h3>
              <p className="text-gray-600">
                Agents continuously learn from outcomes, feedback, and new data patterns. They use 
                machine learning models to optimize decision-making, adapt to changing conditions, 
                and improve performance over time while maintaining compliance and safety standards.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                What industries benefit from autonomous agents?
              </h3>
              <p className="text-gray-600">
                Autonomous agents are particularly valuable in finance, healthcare, retail, 
                manufacturing, logistics, and professional services—any industry with complex, 
                repetitive processes that require speed, accuracy, and 24/7 operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            DEPLOY AUTONOMOUS AI AGENTS
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Transform your business operations with self-governing AI that works 24/7 to drive efficiency and growth.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section> */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            DEPLOY AUTONOMOUS AI AGENTS
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Transform your business operations with self-governing AI that works 24/7 to drive efficiency and growth.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Book Consultation
          </Link>
        </div>
      </section>         
    </div>
  );
}
