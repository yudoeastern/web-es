'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              EASTERNSTACK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium">
              Home
            </Link>

            {/* AI Solutions Mega Menu */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1">
                AI Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 w-[900px]">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">AI Assistant</h3>
                      <ul className="space-y-2">
                        <li><Link href="/solutions/ai-assistant" className="text-gray-700 hover:text-orange-600 text-sm">AI Assistant Overview</Link></li>
                        <li><Link href="/solutions/ai-assistant#customer-support" className="text-gray-700 hover:text-orange-600 text-sm">Customer Support</Link></li>
                        <li><Link href="/solutions/ai-assistant#sales-assistant" className="text-gray-700 hover:text-orange-600 text-sm">Sales Assistant</Link></li>
                        <li><Link href="/solutions/ai-assistant#ai-tutor" className="text-gray-700 hover:text-orange-600 text-sm">AI Tutor</Link></li>
                        <li><Link href="/solutions/ai-assistant#work-assistant" className="text-gray-700 hover:text-orange-600 text-sm">Work Assistant</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">OCR Solutions</h3>
                      <ul className="space-y-2">
                        <li><Link href="/solutions/ocr-solutions" className="text-gray-700 hover:text-orange-600 text-sm">OCR Overview</Link></li>
                        <li><Link href="/solutions/ocr-solutions#invoice" className="text-gray-700 hover:text-orange-600 text-sm">InvoiceMind OCR</Link></li>
                        <li><Link href="/solutions/ocr-solutions#identity" className="text-gray-700 hover:text-orange-600 text-sm">IDentify AI</Link></li>
                        <li><Link href="/solutions/ocr-solutions#receipt" className="text-gray-700 hover:text-orange-600 text-sm">Receiptly</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Business AI</h3>
                      <ul className="space-y-2">
                        <li><Link href="/solutions/churn-prediction" className="text-gray-700 hover:text-orange-600 text-sm">Churn Prediction</Link></li>
                        <li><Link href="/solutions/fraud-detection" className="text-gray-700 hover:text-orange-600 text-sm">Fraud Detection</Link></li>
                        <li><Link href="/solutions/loan-processing" className="text-gray-700 hover:text-orange-600 text-sm">Loan Processing</Link></li>
                        <li><Link href="/solutions/supply-chain" className="text-gray-700 hover:text-orange-600 text-sm">Supply Chain AI</Link></li>
                        <li><Link href="/solutions/forecasting" className="text-gray-700 hover:text-orange-600 text-sm">Forecasting AI</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Mega Menu */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 w-[900px]">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Business Services</h3>
                      <ul className="space-y-2">
                        <li><Link href="/industries/financial-services" className="text-gray-700 hover:text-orange-600 text-sm">Finance & Banking</Link></li>
                        <li><Link href="/industries/legal" className="text-gray-700 hover:text-orange-600 text-sm">Legal Services</Link></li>
                        <li><Link href="/industries/consulting" className="text-gray-700 hover:text-orange-600 text-sm">Consulting</Link></li>
                        <li><Link href="/industries/real-estate" className="text-gray-700 hover:text-orange-600 text-sm">Real Estate</Link></li>
                        <li><Link href="/industries/insurance" className="text-gray-700 hover:text-orange-600 text-sm">Insurance</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Consumer</h3>
                      <ul className="space-y-2">
                        <li><Link href="/industries/retail-ecommerce" className="text-gray-700 hover:text-orange-600 text-sm">Retail & E-commerce</Link></li>
                        <li><Link href="/industries/hospitality" className="text-gray-700 hover:text-orange-600 text-sm">Hospitality</Link></li>
                        <li><Link href="/industries/healthcare" className="text-gray-700 hover:text-orange-600 text-sm">Healthcare</Link></li>
                        <li><Link href="/industries/education" className="text-gray-700 hover:text-orange-600 text-sm">Education</Link></li>
                        <li><Link href="/industries/food-beverage" className="text-gray-700 hover:text-orange-600 text-sm">Food & Beverage</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Technology</h3>
                      <ul className="space-y-2">
                        <li><Link href="/industries/saas-software" className="text-gray-700 hover:text-orange-600 text-sm">SaaS & Software</Link></li>
                        <li><Link href="/industries/media-entertainment" className="text-gray-700 hover:text-orange-600 text-sm">Media & Entertainment</Link></li>
                        <li><Link href="/industries/gaming" className="text-gray-700 hover:text-orange-600 text-sm">Gaming</Link></li>
                        <li><Link href="/industries/cybersecurity" className="text-gray-700 hover:text-orange-600 text-sm">Cybersecurity</Link></li>
                        <li><Link href="/industries/telecommunications" className="text-gray-700 hover:text-orange-600 text-sm">Telecommunications</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Industrial</h3>
                      <ul className="space-y-2">
                        <li><Link href="/industries/manufacturing" className="text-gray-700 hover:text-orange-600 text-sm">Manufacturing</Link></li>
                        <li><Link href="/industries/logistics" className="text-gray-700 hover:text-orange-600 text-sm">Logistics</Link></li>
                        <li><Link href="/industries/energy-utilities" className="text-gray-700 hover:text-orange-600 text-sm">Energy & Utilities</Link></li>
                        <li><Link href="/industries/automotive" className="text-gray-700 hover:text-orange-600 text-sm">Automotive</Link></li>
                        <li><Link href="/industries/chemical" className="text-gray-700 hover:text-orange-600 text-sm">Chemical</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/webinar" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium">
              Events
            </Link>

            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium">
              About
            </Link>

            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium">
              Contact
            </Link>

            <Link href="/contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2"
            style={{background: 'none', border: 'none', cursor: 'pointer'}}
          >
            <svg width="24" height="24" fill="none" stroke="#374151" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-[9998]" style={{overflowY: 'auto'}}>
          <div className="p-4">
            {/* Close Button */}
            <div className="flex justify-end mb-4 pb-4 border-b border-gray-200">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
                style={{background: 'none', border: 'none', cursor: 'pointer'}}
              >
                <svg width="24" height="24" fill="none" stroke="#374151" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-2">
              <Link href="/" className="block py-3 text-gray-700 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>

              {/* AI Solutions Accordion */}
              <div className="border-b border-gray-100">
                <button
                  type="button"
                  className="w-full py-3 flex items-center justify-between text-gray-700 font-medium"
                  onClick={() => toggleSubmenu('solutions')}
                >
                  <span>AI Solutions</span>
                  <svg className={`w-5 h-5 transition-transform ${openSubmenu === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSubmenu === 'solutions' && (
                  <div className="pb-4 pl-4 space-y-2 border-l-2 border-gray-200">
                    <Link href="/solutions" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>All Solutions</Link>
                    <Link href="/solutions/ai-assistant" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>AI Assistant</Link>
                    <Link href="/solutions/ocr-solutions" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>OCR Solutions</Link>
                    <Link href="/solutions/churn-prediction" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Churn Prediction</Link>
                    <Link href="/solutions/fraud-detection" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Fraud Detection</Link>
                    <Link href="/solutions/loan-processing" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Loan Processing</Link>
                  </div>
                )}
              </div>

              {/* Industries Accordion */}
              <div className="border-b border-gray-100">
                <button
                  type="button"
                  className="w-full py-3 flex items-center justify-between text-gray-700 font-medium"
                  onClick={() => toggleSubmenu('industries')}
                >
                  <span>Industries</span>
                  <svg className={`w-5 h-5 transition-transform ${openSubmenu === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSubmenu === 'industries' && (
                  <div className="pb-4 pl-4 space-y-2 border-l-2 border-gray-200">
                    <Link href="/industries/financial-services" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Finance & Banking</Link>
                    <Link href="/industries/retail-ecommerce" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Retail & E-commerce</Link>
                    <Link href="/industries/healthcare" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Healthcare</Link>
                    <Link href="/industries/manufacturing" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Manufacturing</Link>
                    <Link href="/industries/logistics" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Logistics</Link>
                  </div>
                )}
              </div>

              <Link href="/webinar" className="block py-3 text-gray-700 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Events
              </Link>

              <Link href="/about" className="block py-3 text-gray-700 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>

              <Link href="/contact" className="block py-3 text-gray-700 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>

              <Link href="/contact" className="block w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
