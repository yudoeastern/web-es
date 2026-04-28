import Link from "next/link";

export default function RetailEcommercePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
              <span className="text-[#E31E24] text-sm font-semibold">
                🛒 Retail & E-Commerce
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              AI FOR{" "}
              <span className="gradient-text">RETAIL & E-COMMERCE</span>
            </h1>
            <p className="text-xl text-gray-600">
              Transform retail operations with AI-powered personalization, inventory optimization, 
              and customer service automation built for Indonesia's booming e-commerce market.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
              Why Retail & E-Commerce Need AI
            </h2>
            <p className="text-gray-600 mb-6">
              Indonesia's e-commerce market is projected to reach $95 billion by 2025. 
              Retailers face intense competition, rising customer expectations, and complex 
              logistics challenges across the archipelago.
            </p>
            <p className="text-gray-600 mb-8">
              EasternStack delivers AI solutions that help retailers personalize customer 
              experiences, optimize inventory across multiple warehouses, and automate 
              customer service at scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">35%</div>
                <div className="text-gray-600 text-sm">Revenue increase</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50%</div>
                <div className="text-gray-600 text-sm">Lower inventory costs</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Customer support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-whiteer">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            AI USE CASES FOR RETAIL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Personalized Recommendations</h3>
              <p className="text-gray-600 mb-4">
                AI-powered product recommendations that increase conversion rates and average order value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Behavior-based product suggestions
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Cross-sell and upsell automation
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Personalized email campaigns
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Inventory Optimization</h3>
              <p className="text-gray-600 mb-4">
                AI forecasting that prevents stockouts and reduces overstock across multiple locations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Demand forecasting per SKU
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Automatic reorder points
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Seasonal demand prediction
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Customer Service Automation</h3>
              <p className="text-gray-600 mb-4">
                24/7 AI chatbots that handle inquiries, returns, and order tracking in Bahasa Indonesia.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Order status inquiries
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Return and exchange handling
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Product Q&A automation
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Visual Search</h3>
              <p className="text-gray-600 mb-4">
                Allow customers to search products using images instead of text queries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Image-based product search
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Similar product recommendations
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Style matching
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO TRANSFORM YOUR RETAIL BUSINESS?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can enhance your customer experience and operations.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Talk to Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
