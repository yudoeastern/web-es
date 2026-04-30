import Link from "next/link";

export default function ForecastingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white-card border border-gray-700 rounded-full">
              <span className="text-[#E31E24] text-sm font-semibold">
                Forecasting AI
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              PREDICTIVE{" "}
              <span className="gradient-text">FORECASTING</span>
            </h1>
            <p className="text-xl text-gray-600">
              AI-powered forecasting for sales, inventory, and finance making accurate predictions 
              that drive smarter business decisions and proactive operations.
            </p>
          </div>
        </div>
      </section>

      {/* Forecasting Solutions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          
          {/* Sales Forecasting */}
          <div id="sales-forecasting" className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  Sales Forecasting AI
                </h2>
                <p className="text-gray-600 mb-6">
                  Predict sales with high accuracy to make faster, data-driven decisions. 
                  Our AI analyzes historical patterns, market trends, and external factors 
                  to deliver reliable forecasts.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Daily & monthly sales predictions
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Best-selling product identification
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Trend analysis & campaign performance insights
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Data-driven action recommendations
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="text-center py-8">
                  <div className="text-5xl font-bold gradient-text mb-2">95%</div>
                  <div className="text-gray-600 mb-6">Forecast Accuracy</div>
                  <div className="text-5xl font-bold gradient-text mb-2">30%</div>
                  <div className="text-gray-600 mb-6">Revenue Increase</div>
                  <div className="text-5xl font-bold gradient-text">Daily</div>
                  <div className="text-gray-600">Predictions</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-12" />

          {/* Inventory AI */}
          <div id="inventory-ai" className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="card">
                  <div className="p-6">
                    <div className="text-sm text-gray-600 mb-4">HOW IT WORKS</div>
                    <div className="space-y-4">
                      <div className="bg-white-card rounded-lg p-4 border-l-4 border-primary-orange">
                        <div className="text-[#1A1A1A] font-semibold mb-2">📊 Monitor Stock Levels</div>
                        <div className="text-gray-600 text-sm">AI continuously tracks inventory across all locations</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="bg-[#E31E24]/10 border border-primary-orange/20 rounded-lg p-4">
                        <div className="text-[#1A1A1A] font-semibold mb-2">🔮 Predict Demand</div>
                        <div className="text-gray-600 text-sm">ML models forecast future demand per SKU</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="bg-white-card rounded-lg p-4 border-l-4 border-primary-orange">
                        <div className="text-[#1A1A1A] font-semibold mb-2">⚠️ Alert Before Stockout</div>
                        <div className="text-gray-600 text-sm">Proactive notifications when reorder is needed</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="bg-[#E31E24]/10 border border-primary-orange/20 rounded-lg p-4">
                        <div className="text-[#1A1A1A] font-semibold mb-2">🔄 Auto Reorder (Optional)</div>
                        <div className="text-gray-600 text-sm">Automated purchase orders to suppliers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  Inventory AI Agent
                </h2>
                <p className="text-gray-600 mb-6">
                  AI that monitors stock and acts before problems occur. Prevent stockouts, 
                  reduce overstock, and optimize inventory levels automatically.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Stock requirement prediction
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Stockout risk detection
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Proactive notifications
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Auto reorder automation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-12" />

          {/* Financial Forecasting */}
          <div id="financial-forecasting">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  Financial Forecasting AI
                </h2>
                <p className="text-gray-600 mb-6">
                  Monitor financial health with intelligent predictions and insights. 
                  Make informed decisions with accurate cashflow, revenue, and expense forecasts.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Cashflow & profit/loss predictions
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Financial risk detection
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Cost efficiency recommendations
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Decision-making insights
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="text-center py-8">
                  <div className="text-5xl font-bold gradient-text mb-2">90%</div>
                  <div className="text-gray-600 mb-6">Cashflow Accuracy</div>
                  <div className="text-5xl font-bold gradient-text mb-2">60</div>
                  <div className="text-gray-600 mb-6">Days Ahead</div>
                  <div className="text-5xl font-bold gradient-text">24/7</div>
                  <div className="text-gray-600">Financial Monitoring</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-to-br from-[#1A1A1A] via-[#2D1B1B] to-[#E31E24]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            MAKE DECISIONS WITH CONFIDENCE
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Transform uncertainty into actionable insights with AI-powered forecasting.
          </p>
          <Link href="/contact" className="bg-white text-[#E31E24] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Book Consultation
          </Link>
        </div>
      </section> */}

      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            MAKE DECISIONS WITH CONFIDENCE
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Transform uncertainty into actionable insights with AI-powered forecasting.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Book Consultation
          </Link>
        </div>
      </section>          
    </div>
  );
}
