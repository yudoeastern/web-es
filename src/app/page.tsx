import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-16">
        {/* Background with gradient + optional video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#1A1A1A]">
          {/* Primary gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D1B1B] to-[#E31E24]"></div>
          
          {/* Video overlay (if supported) */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            style={{ minHeight: '100%', minWidth: '100%' }}
          >
            <source src="/0_Computer_Code_Programming_3840x2160.mov" type="video/quicktime" />
          </video>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(#E31E24 1px, transparent 1px), linear-gradient(90deg, #E31E24 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large gradient orbs */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#E31E24]/10 to-transparent rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#E31E24]/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#E31E24]/10 to-[#1A1A1A]/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0UzMUUyNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Z3c=')] opacity-30"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full shadow-lg">
              <span className="text-[#E31E24] text-sm font-semibold">
                🚀 Enterprise Agentic AI Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Enterprise Agentic AI Solutions for{" "}
              <span className="gradient-text">Intelligent Business Operations</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Design, deploy, and scale AI systems that can understand, reason, and act across your
              business workflows with secure and flexible architecture
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/solutions/ai" className="btn-primary text-lg px-8 py-4">
                Explore Solutions
              </Link>
              <Link href="/contact" className="bg-white text-[#E31E24] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
