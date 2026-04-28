import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-color pt-16 pb-12">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <img src="/logo.jpg" alt="EasternStack" className="h-10 w-auto" />
            </Link>
            <p className="text-text-muted mb-6 max-w-sm">
              Enterprise-grade AI solutions designed to transform your business operations,
              automate workflows, and drive measurable growth.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="https://www.linkedin.com/company/easternstack" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[#E31E24] transition-colors" title="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
