import Link from "next/link";

export default function DataLakehousePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
            <span className="text-[#E31E24] text-sm font-semibold">
              Data Lakehouse
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            UNIFIED{" "}
            <span className="gradient-text">ANALYTICS PLATFORM</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Combine the flexibility of data lakes with the performance of data warehouses for petabyte-scale AI workloads.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            WHY DATA LAKEHOUSE?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Lake Flexibility</h3>
              <p className="text-gray-600">
                Store structured, semi-structured, and unstructured data in any format with schema-on-read flexibility.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Warehouse Performance</h3>
              <p className="text-gray-600">
                ACID transactions, optimized queries, and indexing for enterprise-grade analytics performance.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">AI-Ready Architecture</h3>
              <p className="text-gray-600">
                Unified data foundation for ML model training, feature engineering, and AI application development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-whiteer">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            KEY FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Multi-Format Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Parquet, ORC, JSON, CSV, Avro
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Images, videos, and documents
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Time-series and geospatial data
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">ACID Transactions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Serializable isolation level
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Concurrent read/write operations
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Data consistency guarantees
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Query Optimization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Automatic index creation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Query plan optimization
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Caching and materialized views
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Scalability</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Petabyte-scale storage
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Elastic compute scaling
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E31E24] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Separation of storage & compute
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            POWERED BY EASTERN TECHNOLOGY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="h-20 mb-4 flex items-center justify-center">
                <img src="/partner/Alibaba_Cloud_Logo.png" alt="Alibaba Cloud" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Alibaba Cloud MaxCompute</h3>
              <p className="text-gray-600 text-sm">Enterprise data warehousing with petabyte-scale analytics capabilities.</p>
            </div>

            <div className="card text-center">
              <div className="h-20 mb-4 flex items-center justify-center">
                <img src="/partner/huawei.jpg" alt="Huawei Cloud" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Huawei Cloud DWS</h3>
              <p className="text-gray-600 text-sm">Cloud data warehouse with high performance and elasticity.</p>
            </div>

            <div className="card text-center">
              <div className="h-20 mb-4 flex items-center justify-center">
                <img src="/partner/tencent.png" alt="Tencent Cloud" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Tencent Cloud EMR</h3>
              <p className="text-gray-600 text-sm">Managed Hadoop/Spark for big data processing and analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            BUILD YOUR DATA FOUNDATION
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Start your data lakehouse journey with unified analytics for AI at scale.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Get Data Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
