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
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              EASTERNSTACK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium">
              Home
            </Link>

            {/* AI Solutions Mega Menu - NEW PREMIUM STRUCTURE */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1">
                AI Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 w-[1100px]">
                  {/* Header */}
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">EASTERNSTACK AI PLATFORM</h2>
                    <p className="text-gray-600">Enterprise-grade AI solutions for intelligent operations</p>
                  </div>

                  <div className="grid grid-cols-3 gap-8">
                    {/* Column 1: Agentic AI */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Agentic AI</h3>
                          <p className="text-xs text-gray-500">Autonomous AI that acts</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/solutions/ai/agentic-ai-assistant" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm font-medium">AI Assistant Platform</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ai/agentic-ai-assistant#customer-support" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Customer Service Agent</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ai/agentic-ai-assistant#sales-assistant" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Sales & Revenue Agent</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ai/agentic-ai-assistant#work-assistant" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Employee Copilot</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ai/agentic-ai-assistant#ai-tutor" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Learning & Development</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Document AI */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Document AI</h3>
                          <p className="text-xs text-gray-500">Intelligent document processing</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/solutions/ocr-solutions" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm font-medium">Invoice Processing</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ocr-solutions#identity" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Identity Verification</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ocr-solutions#receipt" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Receipt & Expense AI</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ocr-solutions#contract" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Contract Intelligence</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: Business AI */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Business AI</h3>
                          <p className="text-xs text-gray-500">Predictive intelligence</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/solutions/churn-prediction" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm font-medium">Customer Retention AI</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/fraud-detection" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Fraud Prevention System</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/loan-processing" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Credit & Loan Automation</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/supply-chain" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Supply Chain Optimization</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/forecasting" className="group flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm">Demand Forecasting AI</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          SOC 2 Compliant
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          99.9% SLA
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          Custom Deployment
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Link href="/solutions" className="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center gap-1">
                          View All Solutions
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                        <Link href="/contact" className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg text-sm hover:shadow-lg transition-all">
                          Schedule Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries - NEW PREMIUM STRUCTURE */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 w-[1100px]">
                  {/* Header */}
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">INDUSTRIES WE SERVE</h2>
                    <p className="text-gray-600">AI solutions tailored for your industry's unique challenges</p>
                  </div>

                  <div className="grid grid-cols-3 gap-8">
                    {/* Column 1: Financial & Professional Services */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Financial & Professional</h3>
                          <p className="text-xs text-gray-500">Navigate compliance, automate workflows</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/industries/financial-services" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Financial Services</div>
                              <div className="text-xs text-gray-500">AI for banking, lending, payments, and risk management</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/insurance" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Insurance</div>
                              <div className="text-xs text-gray-500">AI for claims processing, underwriting, and fraud detection</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/legal" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Legal Services</div>
                              <div className="text-xs text-gray-500">AI for contract review, legal research, and discovery</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/consulting" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Consulting</div>
                              <div className="text-xs text-gray-500">AI for data insights, research automation, client deliverables</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/real-estate" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Real Estate</div>
                              <div className="text-xs text-gray-500">AI for property valuation, tenant management, market analysis</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Consumer & Retail */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Consumer & Retail</h3>
                          <p className="text-xs text-gray-500">Transform customer experiences</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/industries/retail-ecommerce" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Retail & E-commerce</div>
                              <div className="text-xs text-gray-500">AI for personalized shopping, inventory, customer service</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/healthcare" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Healthcare</div>
                              <div className="text-xs text-gray-500">AI for patient engagement, records, appointment automation</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/education" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Education</div>
                              <div className="text-xs text-gray-500">AI for personalized learning, admin automation, support</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/hospitality" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Hospitality</div>
                              <div className="text-xs text-gray-500">AI for guest experience, booking optimization, operations</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/food-beverage" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Food & Beverage</div>
                              <div className="text-xs text-gray-500">AI for inventory, demand forecasting, customer service</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: Technology & Industrial */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Technology & Industrial</h3>
                          <p className="text-xs text-gray-500">Optimize operations and supply chains</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/industries/saas-software" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">SaaS & Software</div>
                              <div className="text-xs text-gray-500">AI for product development, support, usage analytics</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/manufacturing" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Manufacturing</div>
                              <div className="text-xs text-gray-500">AI for predictive maintenance, quality, production optimization</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/logistics" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Logistics & Supply Chain</div>
                              <div className="text-xs text-gray-500">AI for demand forecasting, routes, warehouse automation</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/energy-utilities" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Energy & Utilities</div>
                              <div className="text-xs text-gray-500">AI for grid optimization, maintenance, consumption forecasting</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/telecommunications" className="group flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Telecommunications</div>
                              <div className="text-xs text-gray-500">AI for network optimization, support, churn prevention</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          Industry Compliance
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          Data Sovereignty
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          Custom Integration
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Link href="/industries" className="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center gap-1">
                          View All Industries
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                        <Link href="/contact" className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg text-sm hover:shadow-lg transition-all">
                          Schedule Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform - NEW WITH SUBMENU */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1">
                Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 w-[1000px]">
                  <div className="grid grid-cols-4 gap-6">
                    {/* Column 1: Cloud Solutions */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Cloud Solutions</h3>
                      <ul className="space-y-2">
                        <li><Link href="/platform" className="text-gray-700 hover:text-orange-600 text-sm">Platform Overview</Link></li>
                        <li><Link href="/platform/cloud-migration" className="text-gray-700 hover:text-orange-600 text-sm">Cloud Migration</Link></li>
                        <li><Link href="/platform/disaster-recovery" className="text-gray-700 hover:text-orange-600 text-sm">Disaster Recovery</Link></li>
                        <li><Link href="/platform/backup-restore" className="text-gray-700 hover:text-orange-600 text-sm">Backup & Restore</Link></li>
                        <li><Link href="/platform/container-services" className="text-gray-700 hover:text-orange-600 text-sm">Container Services</Link></li>
                      </ul>
                    </div>

                    {/* Column 2: Data Platform */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Data Platform</h3>
                      <ul className="space-y-2">
                        <li><Link href="/platform/data-lakehouse" className="text-gray-700 hover:text-orange-600 text-sm">Data Lakehouse</Link></li>
                        <li><Link href="/platform/streaming" className="text-gray-700 hover:text-orange-600 text-sm">Real-Time Streaming</Link></li>
                        <li><Link href="/platform/data-warehouse" className="text-gray-700 hover:text-orange-600 text-sm">Data Warehouse</Link></li>
                        <li><Link href="/platform/data-governance" className="text-gray-700 hover:text-orange-600 text-sm">Data Governance</Link></li>
                      </ul>
                    </div>

                    {/* Column 3: Security & Compliance */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Security & Compliance</h3>
                      <ul className="space-y-2">
                        <li><Link href="/platform/zero-trust-ai" className="text-gray-700 hover:text-orange-600 text-sm">Zero-Trust AI</Link></li>
                        <li><Link href="/platform/security/ahnlab" className="text-gray-700 hover:text-orange-600 text-sm">Cybersecurity (AhnLab)</Link></li>
                        <li><Link href="/platform/security/truewatch" className="text-gray-700 hover:text-orange-600 text-sm">Security Monitoring</Link></li>
                        <li><Link href="/platform/compliance" className="text-gray-700 hover:text-orange-600 text-sm">Compliance</Link></li>
                      </ul>
                    </div>

                    {/* Column 4: Impact & ROI */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Impact & ROI</h3>
                      <ul className="space-y-2">
                        <li><Link href="/platform/impact" className="text-gray-700 hover:text-orange-600 text-sm">Business Impact</Link></li>
                        <li><Link href="/platform/cost-optimization" className="text-gray-700 hover:text-orange-600 text-sm">Cost Optimization</Link></li>
                        <li><Link href="/platform/roi-metrics" className="text-gray-700 hover:text-orange-600 text-sm">ROI Metrics</Link></li>
                        <li><Link href="/case-studies" className="text-gray-700 hover:text-orange-600 text-sm">Case Studies</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Eastern Partners:</span> Alibaba Cloud · Huawei Cloud · Tencent Cloud · BytePlus · AhnLab · TrueWatch
                      </div>
                      <Link href="/contact" className="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center gap-1">
                        Talk to Our Team
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
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

            <Link href="/contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Schedule Demo
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

      {/* Mobile Menu */}
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
                  <div className="pb-4 pl-4 space-y-4 border-l-2 border-gray-200">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Agentic AI</div>
                      <Link href="/solutions/ai/agentic-ai-assistant" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>AI Assistant Platform</Link>
                      <Link href="/solutions/ai/agentic-ai-assistant#customer-support" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Customer Service Agent</Link>
                      <Link href="/solutions/ai/agentic-ai-assistant#sales-assistant" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Sales & Revenue Agent</Link>
                      <Link href="/solutions/ai/agentic-ai-assistant#work-assistant" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Employee Copilot</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Document AI</div>
                      <Link href="/solutions/ocr-solutions" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Invoice Processing</Link>
                      <Link href="/solutions/ocr-solutions#identity" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Identity Verification</Link>
                      <Link href="/solutions/ocr-solutions#receipt" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Receipt & Expense AI</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Business AI</div>
                      <Link href="/solutions/churn-prediction" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Customer Retention AI</Link>
                      <Link href="/solutions/fraud-detection" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Fraud Prevention System</Link>
                      <Link href="/solutions/loan-processing" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Credit & Loan Automation</Link>
                      <Link href="/solutions/supply-chain" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Supply Chain Optimization</Link>
                    </div>
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
                  <div className="pb-4 pl-4 space-y-4 border-l-2 border-gray-200">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Financial & Professional</div>
                      <Link href="/industries/financial-services" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Financial Services</Link>
                      <Link href="/industries/insurance" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Insurance</Link>
                      <Link href="/industries/legal" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Legal Services</Link>
                      <Link href="/industries/consulting" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Consulting</Link>
                      <Link href="/industries/real-estate" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Real Estate</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Consumer & Retail</div>
                      <Link href="/industries/retail-ecommerce" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Retail & E-commerce</Link>
                      <Link href="/industries/healthcare" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Healthcare</Link>
                      <Link href="/industries/education" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Education</Link>
                      <Link href="/industries/hospitality" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Hospitality</Link>
                      <Link href="/industries/food-beverage" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Food & Beverage</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Technology & Industrial</div>
                      <Link href="/industries/saas-software" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>SaaS & Software</Link>
                      <Link href="/industries/manufacturing" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Manufacturing</Link>
                      <Link href="/industries/logistics" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Logistics & Supply Chain</Link>
                      <Link href="/industries/energy-utilities" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Energy & Utilities</Link>
                      <Link href="/industries/telecommunications" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Telecommunications</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/platform" className="block py-3 text-gray-700 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Platform
              </Link>

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
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
