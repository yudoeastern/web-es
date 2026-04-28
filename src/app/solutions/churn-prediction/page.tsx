import Link from "next/link";

export default function ChurnPredictionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white-card border border-gray-700 rounded-full">
              <span className="text-[#E31E24] text-sm font-semibold">
                Churn Prediction
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              PREDICT & PREVENT{" "}
              <span className="gradient-text">CUSTOMER CHURN</span>
            </h1>
            <p className="text-xl text-gray-600">
              AI-powered churn prediction that identifies at-risk customers before they leave,
              enabling proactive retention strategies that drive loyalty and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
              Why Churn Prediction Matters
            </h2>
            <p className="text-gray-600 mb-6">
              Acquiring a new customer costs <strong className="text-[#E31E24]">5-25x more</strong> than retaining an existing one. 
              Yet most businesses only react to churn after it happens—when it's already too late.
            </p>
            <p className="text-gray-600 mb-8">
              EasternStack Churn Prediction uses machine learning to analyze customer behavior patterns, 
              transaction history, and engagement signals to identify who's likely to leave—weeks or even 
              months in advance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5x</div>
                <div className="text-gray-600 text-sm">Cheaper to retain than acquire</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">85%</div>
                <div className="text-gray-600 text-sm">Prediction accuracy</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">30%</div>
                <div className="text-gray-600 text-sm">Churn reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            HOW IT WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Data Integration</h3>
              <p className="text-gray-600 text-sm">
                Connect your CRM, transaction logs, support tickets, and engagement data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Pattern Analysis</h3>
              <p className="text-gray-600 text-sm">
                ML models identify behavioral patterns that precede customer departure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Risk Scoring</h3>
              <p className="text-gray-600 text-sm">
                Each customer receives a churn risk score with explainable factors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Actionable Insights</h3>
              <p className="text-gray-600 text-sm">
                Get recommended retention actions tailored to each customer segment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            KEY FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">
                Advanced ML models that predict churn probability with high accuracy based on historical patterns.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Customer Segmentation</h3>
              <p className="text-gray-600">
                Automatically segment customers by churn risk level for targeted retention campaigns.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Early Warning Alerts</h3>
              <p className="text-gray-600">
                Real-time notifications when high-value customers show churn signals.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Explainable AI</h3>
              <p className="text-gray-600">
                Understand why each customer is flagged with interpretable risk factors.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Retention Playbooks</h3>
              <p className="text-gray-600">
                Recommended actions and campaigns for each risk segment.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">ROI Tracking</h3>
              <p className="text-gray-600">
                Measure retention campaign effectiveness and revenue saved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            USE CASES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">📱 Telecommunications</h3>
              <p className="text-gray-600 text-sm">
                Predict subscriber churn based on usage patterns, complaints, and payment history.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">💳 SaaS & Subscription</h3>
              <p className="text-gray-600 text-sm">
                Identify at-risk subscribers before cancellation with engagement and feature usage data.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">🏦 Banking & Finance</h3>
              <p className="text-gray-600 text-sm">
                Detect customers likely to close accounts or switch to competitors.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">🛒 E-commerce & Retail</h3>
              <p className="text-gray-600 text-sm">
                Re-engage dormant customers before they switch to competitors.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">📺 Streaming & Media</h3>
              <p className="text-gray-600 text-sm">
                Reduce subscription cancellations with personalized content recommendations.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">🏋️ Fitness & Wellness</h3>
              <p className="text-gray-600 text-sm">
                Prevent membership cancellations with targeted engagement campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            STOP CHURN BEFORE IT HAPPENS
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Turn at-risk customers into loyal advocates with predictive AI.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
