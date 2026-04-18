import Link from "next/link";

export default function CopilotSuitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-dark-bg-card border border-border-color rounded-full">
              <span className="text-primary-orange-light text-sm font-semibold">
                Enterprise Copilot Suite
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-white mb-6">
              AI Copilots That Empower Your Teams to{" "}
              <span className="gradient-text">Work Smarter</span>
            </h1>
            <p className="text-xl text-text-gray mb-8">
              Enhance productivity, improve decision making, and streamline daily workflows with AI copilots
              designed for real business roles.
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
              Modern teams are expected to move faster, make better decisions, and handle increasing workloads
              across multiple systems. However, much of their time is still spent on repetitive tasks, manual
              processes, and searching for information.
            </p>
            <p className="text-lg text-text-gray mb-8">
              EasternStack Enterprise Copilot Suite brings AI directly into daily workflows, providing intelligent
              assistance tailored to specific roles such as human resources, legal, and operations. Instead of
              replacing people, these copilots are designed to enhance how teams work by reducing manual effort,
              improving access to information, and supporting better decisions in real time.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Context Aware Assistance</h3>
              <p className="text-text-gray">
                Understand user intent and deliver relevant responses based on role and workflow.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Task Automation</h3>
              <p className="text-text-gray">
                Reduce repetitive manual work across daily operations.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Real Time Insights</h3>
              <p className="text-text-gray">
                Provide data driven recommendations to support faster decision making.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Seamless Integration</h3>
              <p className="text-text-gray">
                Connect with enterprise systems and existing tools.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-white mb-3">Continuous Improvement</h3>
              <p className="text-text-gray">
                Improve performance based on usage patterns and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role Based Copilots */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            ROLE BASED COPILOTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* HR Copilot */}
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-white mb-4">HR Copilot</h3>
              <p className="text-text-gray mb-6">
                Streamline recruitment, onboarding, and employee workflows with intelligent assistance.
              </p>
              <h4 className="text-sm font-semibold text-text-white mb-3">Capabilities</h4>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Candidate Screening
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Policy Q&A
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Onboarding Guidance
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Employee Support
                </li>
              </ul>
            </div>

            {/* Legal Copilot */}
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 00-6.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-white mb-4">Legal Copilot</h3>
              <p className="text-text-gray mb-6">
                Accelerate contract review, identify risks, and improve legal workflow efficiency.
              </p>
              <h4 className="text-sm font-semibold text-text-white mb-3">Capabilities</h4>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Contract Review
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Clause Extraction
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Risk Analysis
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Compliance Check
                </li>
              </ul>
            </div>

            {/* Operations Copilot */}
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-white mb-4">Operations Copilot</h3>
              <p className="text-text-gray mb-6">
                Optimize daily operations with intelligent insights and automated reporting.
              </p>
              <h4 className="text-sm font-semibold text-text-white mb-3">Capabilities</h4>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Report Generation
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Data Analysis
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Performance Monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-orange-light rounded-full mr-2"></span>
                  Workflow Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-dark-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-white mb-12 text-center">
            WHAT YOU GET
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Role Based AI Assistants</h3>
              <p className="text-text-gray text-sm">
                Designed for HR, Legal, Operations, and other business functions.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Workflow Automation</h3>
              <p className="text-text-gray text-sm">
                Reduce manual effort across daily operations.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Decision Support</h3>
              <p className="text-text-gray text-sm">
                Data driven recommendations for better decisions.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-white mb-3">Enterprise Integration</h3>
              <p className="text-text-gray text-sm">
                Connect with existing systems and tools.
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
              <div className="text-4xl font-bold gradient-text mb-2">Productivity</div>
              <p className="text-text-gray text-sm">
                Reduce time spent on repetitive tasks and manual processes.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Quality</div>
              <p className="text-text-gray text-sm">
                Improve accuracy and consistency across workflows.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Speed</div>
              <p className="text-text-gray text-sm">
                Accelerate decision making with instant insights.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Satisfaction</div>
              <p className="text-text-gray text-sm">
                Enable teams to focus on high value work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-white mb-6">
            EMPOWER YOUR TEAMS WITH AI COPILOTS
          </h2>
          <p className="text-text-gray text-lg mb-8 max-w-2xl mx-auto">
            Enhance productivity and decision making across your organization.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
