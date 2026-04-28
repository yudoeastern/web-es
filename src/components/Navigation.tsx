'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.jpg" alt="EasternStack" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-gray-800 hover:text-[#E31E24] font-medium transition-colors">
              Home
            </Link>

            {/* AI Solutions Mega Menu */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-800 hover:text-[#E31E24] font-medium flex items-center gap-1 transition-colors">
                AI Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-[#C5A059]/30 p-8 w-[1100px]">
                  {/* Header */}
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">EASTERNSTACK AI PLATFORM</h2>
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
                          <Link href="/solutions/ai/agentic-ai-assistant" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm font-medium">Agentic AI Assistant</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ai/agentic-ai-assistant#customer-support" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm">Customer Operations Agent</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ai/agentic-ai-assistant#sales-assistant" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm">Revenue Operations Agent</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ai/agentic-ai-assistant#work-assistant" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm">Workforce Productivity Agent</span>
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
                          <Link href="/solutions/ocr-solutions" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm font-medium">Invoice Processing</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ocr-solutions#identity" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm">Identity Verification</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ocr-solutions#receipt" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm">Receipt & Expense AI</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ocr-solutions#contract" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
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
                          <Link href="/solutions/churn-prediction" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm font-medium">Customer Retention AI</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/fraud-detection" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm">Fraud Prevention System</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/loan-processing" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm">Credit & Loan Automation</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/supply-chain" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
                            <span className="text-sm">Supply Chain Optimization</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/forecasting" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            
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
                        <Link href="/contact" className="px-5 py-2.5 bg-gradient-to-r from-[#E31E24] to-[#C4181E] text-white font-semibold rounded-lg text-sm hover:shadow-lg transition-all">
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
              <button className="px-4 py-2 text-[#1A1A1A] hover:text-[#E31E24] font-medium flex items-center gap-1">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-[#C5A059]/30 p-8 w-[1100px]">
                  {/* Header */}
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-[#1A1A1A]">INDUSTRIES WE SERVE</h2>
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
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Financial & Professional</h3>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/industries/financial-services" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm font-medium">Financial Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/insurance" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Insurance</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/legal" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Legal Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/consulting" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Consulting</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/real-estate" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Real Estate</span>
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
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Consumer & Retail</h3>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/industries/retail-ecommerce" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Retail & E-commerce</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/healthcare" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Healthcare</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/education" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Education</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/hospitality" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Hospitality</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/food-beverage" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Food & Beverage</span>
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
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Technology & Industrial</h3>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/industries/saas-software" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">SaaS & Software</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/manufacturing" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Manufacturing</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/logistics" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Logistics & Supply Chain</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/energy-utilities" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Energy & Utilities</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/telecommunications" className="group flex items-center gap-2 text-[#1A1A1A] hover:text-[#E31E24] transition-colors">
                            <span className="text-sm">Telecommunications</span>
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
                        <Link href="/contact" className="px-5 py-2.5 bg-gradient-to-r from-[#E31E24] to-[#C4181E] text-white font-semibold rounded-lg text-sm hover:shadow-lg transition-all">
                          Schedule Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform - WITH ICONS LIKE AI SOLUTIONS */}
            <div className="relative group">
              <button className="px-4 py-2 text-[#1A1A1A] hover:text-[#E31E24] font-medium flex items-center gap-1">
                Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 w-[1100px]">
                  {/* Header */}
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">ENTERPRISE INFRASTRUCTURE</h2>
                    <p className="text-gray-600 text-sm">Platform for AI at Scale - Cloud-native infrastructure powering reliable, scalable, and secure AI applications</p>
                  </div>

                  <div className="grid grid-cols-4 gap-6">
                    {/* Column 1: Cloud Solutions */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                          </svg>
                        </div>
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Cloud Solutions</h3>
                      </div>
                      <ul className="space-y-2">
                        <li><Link href="/platform" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Platform Overview</Link></li>
                        <li><Link href="/platform/cloud-migration" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Cloud Migration</Link></li>
                        <li><Link href="/platform/disaster-recovery" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Disaster Recovery</Link></li>
                        <li><Link href="/platform/backup-restore" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Backup & Restore</Link></li>
                        <li><Link href="/platform/container-services" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Container Services</Link></li>
                      </ul>
                    </div>

                    {/* Column 2: Data Platform */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                          </svg>
                        </div>
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Data Platform</h3>
                      </div>
                      <ul className="space-y-2">
                        <li><Link href="/platform/data-lakehouse" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Data Lakehouse</Link></li>
                        <li><Link href="/platform/streaming" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Real-Time Streaming</Link></li>
                        <li><Link href="/platform/data-warehouse" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Data Warehouse</Link></li>
                        <li><Link href="/platform/data-governance" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Data Governance</Link></li>
                      </ul>
                    </div>

                    {/* Column 3: Security & Compliance */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Security & Compliance</h3>
                      </div>
                      <ul className="space-y-2">
                        <li><Link href="/platform/zero-trust-ai" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Zero-Trust AI</Link></li>
                        <li><Link href="/platform/security/ahnlab" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Cybersecurity (AhnLab)</Link></li>
                        <li><Link href="/platform/security/truewatch" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Security Monitoring</Link></li>
                        <li><Link href="/platform/compliance" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Compliance</Link></li>
                      </ul>
                    </div>

                    {/* Column 4: Impact & ROI */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Impact & ROI</h3>
                      </div>
                      <ul className="space-y-2">
                        <li><Link href="/platform/impact" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Business Impact</Link></li>
                        <li><Link href="/platform/cost-optimization" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Cost Optimization</Link></li>
                        <li><Link href="/platform/roi-metrics" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">ROI Metrics</Link></li>
                        <li><Link href="/case-studies" className="text-[#1A1A1A] hover:text-[#E31E24] text-sm block">Case Studies</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          Eastern Partners
                        </span>
                        <span className="text-gray-400">·</span>
                        <span>Alibaba Cloud · Huawei Cloud · Tencent Cloud</span>
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

            <Link href="/webinar" className="px-4 py-2 text-[#1A1A1A] hover:text-[#E31E24] font-medium">
              Events
            </Link>

            <Link href="/about" className="px-4 py-2 text-[#1A1A1A] hover:text-[#E31E24] font-medium">
              About
            </Link>

            <Link href="/contact" className="px-4 py-2 text-[#1A1A1A] hover:text-[#E31E24] font-medium">
              Contact
            </Link>

            <Link href="/contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#E31E24] to-[#C4181E] text-white font-semibold rounded-lg hover:shadow-lg transition-all">
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
              <Link href="/" className="block py-3 text-gray-700 border-b border-gray-100" onClick={handleLinkClick}>
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
                      <Link href="/solutions/ai/agentic-ai-assistant" className="block py-2 text-gray-600" onClick={handleLinkClick}>Agentic AI Assistant</Link>
                      <Link href="/solutions/ai/agentic-ai-assistant#customer-support" className="block py-2 text-gray-600" onClick={handleLinkClick}>Customer Operations Agent</Link>
                      <Link href="/solutions/ai/agentic-ai-assistant#sales-assistant" className="block py-2 text-gray-600" onClick={handleLinkClick}>Revenue Operations Agent</Link>
                      <Link href="/solutions/ai/agentic-ai-assistant#work-assistant" className="block py-2 text-gray-600" onClick={handleLinkClick}>Workforce Productivity Agent</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Document AI</div>
                      <Link href="/solutions/ocr-solutions" className="block py-2 text-gray-600" onClick={handleLinkClick}>Invoice Processing</Link>
                      <Link href="/solutions/ocr-solutions#identity" className="block py-2 text-gray-600" onClick={handleLinkClick}>Identity Verification</Link>
                      <Link href="/solutions/ocr-solutions#receipt" className="block py-2 text-gray-600" onClick={handleLinkClick}>Receipt & Expense AI</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Business AI</div>
                      <Link href="/solutions/churn-prediction" className="block py-2 text-gray-600" onClick={handleLinkClick}>Customer Retention AI</Link>
                      <Link href="/solutions/fraud-detection" className="block py-2 text-gray-600" onClick={handleLinkClick}>Fraud Prevention System</Link>
                      <Link href="/solutions/loan-processing" className="block py-2 text-gray-600" onClick={handleLinkClick}>Credit & Loan Automation</Link>
                      <Link href="/solutions/supply-chain" className="block py-2 text-gray-600" onClick={handleLinkClick}>Supply Chain Optimization</Link>
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
                      <Link href="/industries/financial-services" className="block py-2 text-gray-600" onClick={handleLinkClick}>Financial Services</Link>
                      <Link href="/industries/insurance" className="block py-2 text-gray-600" onClick={handleLinkClick}>Insurance</Link>
                      <Link href="/industries/legal" className="block py-2 text-gray-600" onClick={handleLinkClick}>Legal Services</Link>
                      <Link href="/industries/consulting" className="block py-2 text-gray-600" onClick={handleLinkClick}>Consulting</Link>
                      <Link href="/industries/real-estate" className="block py-2 text-gray-600" onClick={handleLinkClick}>Real Estate</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Consumer & Retail</div>
                      <Link href="/industries/retail-ecommerce" className="block py-2 text-gray-600" onClick={handleLinkClick}>Retail & E-commerce</Link>
                      <Link href="/industries/healthcare" className="block py-2 text-gray-600" onClick={handleLinkClick}>Healthcare</Link>
                      <Link href="/industries/education" className="block py-2 text-gray-600" onClick={handleLinkClick}>Education</Link>
                      <Link href="/industries/hospitality" className="block py-2 text-gray-600" onClick={handleLinkClick}>Hospitality</Link>
                      <Link href="/industries/food-beverage" className="block py-2 text-gray-600" onClick={handleLinkClick}>Food & Beverage</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Technology & Industrial</div>
                      <Link href="/industries/saas-software" className="block py-2 text-gray-600" onClick={handleLinkClick}>SaaS & Software</Link>
                      <Link href="/industries/manufacturing" className="block py-2 text-gray-600" onClick={handleLinkClick}>Manufacturing</Link>
                      <Link href="/industries/logistics" className="block py-2 text-gray-600" onClick={handleLinkClick}>Logistics & Supply Chain</Link>
                      <Link href="/industries/energy-utilities" className="block py-2 text-gray-600" onClick={handleLinkClick}>Energy & Utilities</Link>
                      <Link href="/industries/telecommunications" className="block py-2 text-gray-600" onClick={handleLinkClick}>Telecommunications</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Platform Accordion */}
              <div className="border-b border-gray-100">
                <button
                  type="button"
                  className="w-full py-3 flex items-center justify-between text-gray-700 font-medium"
                  onClick={() => toggleSubmenu('platform')}
                >
                  <span>Platform</span>
                  <svg className={`w-5 h-5 transition-transform ${openSubmenu === 'platform' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSubmenu === 'platform' && (
                  <div className="pb-4 pl-4 space-y-4 border-l-2 border-gray-200">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">☁️ Cloud Solutions</div>
                      <Link href="/platform" className="block py-2 text-gray-600" onClick={handleLinkClick}>Platform Overview</Link>
                      <Link href="/platform/cloud-migration" className="block py-2 text-gray-600" onClick={handleLinkClick}>Cloud Migration</Link>
                      <Link href="/platform/disaster-recovery" className="block py-2 text-gray-600" onClick={handleLinkClick}>Disaster Recovery</Link>
                      <Link href="/platform/backup-restore" className="block py-2 text-gray-600" onClick={handleLinkClick}>Backup & Restore</Link>
                      <Link href="/platform/container-services" className="block py-2 text-gray-600" onClick={handleLinkClick}>Container Services</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">📊 Data Platform</div>
                      <Link href="/platform/data-lakehouse" className="block py-2 text-gray-600" onClick={handleLinkClick}>Data Lakehouse</Link>
                      <Link href="/platform/streaming" className="block py-2 text-gray-600" onClick={handleLinkClick}>Real-Time Streaming</Link>
                      <Link href="/platform/data-warehouse" className="block py-2 text-gray-600" onClick={handleLinkClick}>Data Warehouse</Link>
                      <Link href="/platform/data-governance" className="block py-2 text-gray-600" onClick={handleLinkClick}>Data Governance</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">🔒 Security & Compliance</div>
                      <Link href="/platform/zero-trust-ai" className="block py-2 text-gray-600" onClick={handleLinkClick}>Zero-Trust AI</Link>
                      <Link href="/platform/security/ahnlab" className="block py-2 text-gray-600" onClick={handleLinkClick}>Cybersecurity (AhnLab)</Link>
                      <Link href="/platform/security/truewatch" className="block py-2 text-gray-600" onClick={handleLinkClick}>Security Monitoring</Link>
                      <Link href="/platform/compliance" className="block py-2 text-gray-600" onClick={handleLinkClick}>Compliance</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">📈 Impact & ROI</div>
                      <Link href="/platform/impact" className="block py-2 text-gray-600" onClick={handleLinkClick}>Business Impact</Link>
                      <Link href="/platform/cost-optimization" className="block py-2 text-gray-600" onClick={handleLinkClick}>Cost Optimization</Link>
                      <Link href="/platform/roi-metrics" className="block py-2 text-gray-600" onClick={handleLinkClick}>ROI Metrics</Link>
                      <Link href="/case-studies" className="block py-2 text-gray-600" onClick={handleLinkClick}>Case Studies</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/webinar" className="block py-3 text-gray-700 border-b border-gray-100" onClick={handleLinkClick}>
                Events
              </Link>

              <Link href="/about" className="block py-3 text-gray-700 border-b border-gray-100" onClick={handleLinkClick}>
                About
              </Link>

              <Link href="/contact" className="block py-3 text-gray-700 border-b border-gray-100" onClick={handleLinkClick}>
                Contact
              </Link>

              <Link href="/contact" className="block w-full py-3 mt-4 bg-gradient-to-r from-[#E31E24] to-[#C4181E] text-white font-semibold rounded-lg text-center">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
