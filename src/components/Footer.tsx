import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-lighter border-t border-border-color">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
              EASTERNSTACK
            </Link>
            <p className="text-text-muted mb-6 max-w-sm">
              Enterprise-grade AI solutions designed to transform your business operations,
              automate workflows, and drive measurable growth.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-text-muted hover:text-primary-orange transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-primary-orange transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-primary-orange transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.31 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* AI Solutions Column */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">AI Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions" className="text-text-secondary hover:text-primary-orange transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-assistant" className="text-text-secondary hover:text-primary-orange transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href="/solutions/ocr-solutions" className="text-text-secondary hover:text-primary-orange transition-colors">
                  OCR Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/churn-prediction" className="text-text-secondary hover:text-primary-orange transition-colors">
                  Churn Prediction
                </Link>
              </li>
              <li>
                <Link href="/solutions/fraud-detection" className="text-text-secondary hover:text-primary-orange transition-colors">
                  Fraud Detection
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/industries" className="text-text-secondary hover:text-primary-orange transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/industries/financial-services" className="text-text-secondary hover:text-primary-orange transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/retail-ecommerce" className="text-text-secondary hover:text-primary-orange transition-colors">
                  Retail & E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="text-text-secondary hover:text-primary-orange transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-text-secondary hover:text-primary-orange transition-colors">
                  Healthcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Contact</h4>
            <p className="text-text-secondary text-sm mb-4">
              Menara Caraka 3rd Floor<br />
              Jl. Dr. Ide Anak Agung Gde Agung<br />
              Lot E4-7 No. 1, Kuningan Timur<br />
              Jakarta 12950, Indonesia
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-color pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm mb-4 md:mb-0">
              © 2026 EasternStack. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-text-muted text-sm">
                Enterprise Agentic AI Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
