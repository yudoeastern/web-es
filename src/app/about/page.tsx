import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            ABOUT{" "}
            <span className="gradient-text">EASTERNSTACK</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Enterprise Agentic AI Solutions partner. We design, deploy, and scale AI systems 
            that understand, reason, and act across your business workflows.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              OUR MISSION
            </h2>
            <p className="text-2xl text-text-secondary">
              Empowering enterprises with intelligent AI systems that drive measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-bg-light-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
            OUR VALUES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-4">Security First</h3>
              <p className="text-text-secondary">
                Every solution is built with enterprise-grade security, compliance, and data privacy at its core.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-4">Rapid Delivery</h3>
              <p className="text-text-secondary">
                We focus on quick wins and iterative deployment to demonstrate value early and build momentum.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-4">Measurable Impact</h3>
              <p className="text-text-secondary">
                We ensure every AI implementation delivers tangible business value and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange-dark to-dark-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
            READY TO TRANSFORM YOUR BUSINESS?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how EasternStack can help you achieve your AI goals.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
