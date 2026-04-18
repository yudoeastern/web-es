import Link from "next/link";

export default function FraudDetectionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-bg-light-card border border-border-color rounded-full">
              <span className="text-primary-orange text-sm font-semibold">
                Agentic Fraud Detection
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
              AGENTIC{" "}
              <span className="gradient-text">FRAUD DETECTION</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Autonomous AI agents that detect, investigate, and prevent fraud in real-time—
              protecting your business 24/7 with human-like reasoning at machine speed.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Why Traditional Fraud Detection Falls Short
            </h2>
            <p className="text-text-secondary mb-6">
              Rule-based systems catch known fraud patterns but miss sophisticated attacks. 
              Manual review teams are overwhelmed by false positives. By the time fraud is 
              detected, the damage is already done.
            </p>
            <p className="text-text-secondary mb-8">
              EasternStack Agentic Fraud Detection deploys autonomous AI agents that don't just 
              flag suspicious activity—they investigate, correlate evidence across multiple 
              data sources, and take action in real-time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">99%</div>
                <div className="text-text-secondary text-sm">Fraud detection rate</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">&lt;100ms</div>
                <div className="text-text-secondary text-sm">Real-time response</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">60%</div>
                <div className="text-text-secondary text-sm">Fewer false positives</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Agents Work */}
      <section className="section-padding bg-bg-light-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            HOW AGENTIC FRAUD DETECTION WORKS
          </h2>

          <div className="space-y-8">
            <div className="card">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark">Detection Agent</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-text-secondary mb-4">
                    Continuously monitors transactions, logins, and user behavior for anomalies. 
                    Uses ML models trained on millions of fraud patterns.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-text-secondary text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Real-time transaction scoring
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Behavioral biometrics analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Device fingerprinting
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Network analysis
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark">Investigation Agent</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-text-secondary mb-4">
                    When suspicious activity is detected, this agent autonomously investigates by 
                    correlating data across systems, checking historical patterns, and gathering evidence.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-text-secondary text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Cross-reference user history
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Check IP geolocation consistency
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Analyze transaction velocity
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Verify identity signals
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark">Action Agent</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-text-secondary mb-4">
                    Based on investigation findings, takes appropriate action automatically—
                    from blocking transactions to escalating to human investigators.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-text-secondary text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Block suspicious transactions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Trigger step-up authentication
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Freeze compromised accounts
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-orange-light rounded-full mr-3"></span>
                      Alert fraud investigation team
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            KEY FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">🧠 Multi-Agent System</h3>
              <p className="text-text-secondary text-sm">
                Specialized AI agents for detection, investigation, and response work together autonomously.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">⚡ Real-Time Processing</h3>
              <p className="text-text-secondary text-sm">
                Sub-second fraud detection and response—stopping fraud before completion.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">🎯 Adaptive Learning</h3>
              <p className="text-text-secondary text-sm">
                Models continuously learn from new fraud patterns and investigator feedback.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">🔗 Cross-Channel Analysis</h3>
              <p className="text-text-secondary text-sm">
                Correlate signals across web, mobile, API, and offline channels.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">📊 Explainable Decisions</h3>
              <p className="text-text-secondary text-sm">
                Clear reasoning for every fraud flag with evidence trail for compliance.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">🛡️ Regulatory Compliance</h3>
              <p className="text-text-secondary text-sm">
                Built-in audit trails and reporting for AML, KYC, and fraud regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-bg-light-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            USE CASES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">💳 Payment Fraud</h3>
              <p className="text-text-secondary text-sm">
                Detect stolen cards, account takeovers, and friendly fraud in payment transactions.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">🏦 Loan Application Fraud</h3>
              <p className="text-text-secondary text-sm">
                Identify synthetic identities, income falsification, and application manipulation.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">📱 Account Takeover</h3>
              <p className="text-text-secondary text-sm">
                Prevent unauthorized access through behavioral analysis and device recognition.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">🛒 E-commerce Fraud</h3>
              <p className="text-text-secondary text-sm">
                Stop chargeback fraud, triangulation fraud, and reseller abuse.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">📋 Insurance Claims</h3>
              <p className="text-text-secondary text-sm">
                Detect fraudulent claims, staged accidents, and provider billing fraud.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-text-dark mb-3">💰 Money Laundering</h3>
              <p className="text-text-secondary text-sm">
                Identify suspicious transaction patterns and structuring attempts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
            PROTECT YOUR BUSINESS WITH AI AGENTS
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Deploy autonomous fraud detection that thinks like a human investigator at machine speed.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
