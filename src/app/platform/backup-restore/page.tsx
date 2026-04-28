import Link from "next/link";

export default function BackupRestorePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bg-light via-white to-bg-light">
        <div className="container-custom text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-700 rounded-full shadow-sm">
            <span className="text-[#E31E24] text-sm font-semibold">
              Backup & Restore
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            DATA AVAILABILITY{" "}
            <span className="gradient-text">GUARANTEED</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Automated backup and restore solutions ensuring your critical data is always protected and recoverable.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            BACKUP SOLUTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Database Backup</h3>
              <p className="text-gray-600 mb-4">
                Automated backups for MySQL, PostgreSQL, MongoDB, and enterprise databases with point-in-time recovery.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Automated daily backups</li>
                <li>✓ Transaction log backup</li>
                <li>✓ Cross-region replication</li>
                <li>✓ Point-in-time restore</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">File & Object Storage</h3>
              <p className="text-gray-600 mb-4">
                Scalable object storage with versioning and lifecycle policies for unstructured data backup.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Unlimited storage capacity</li>
                <li>✓ Object versioning</li>
                <li>✓ Lifecycle management</li>
                <li>✓ Geo-redundant storage</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Server & VM Backup</h3>
              <p className="text-gray-600 mb-4">
                Complete server image backup with bare-metal restore capabilities for quick disaster recovery.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Full server imaging</li>
                <li>✓ Incremental backups</li>
                <li>✓ Bare-metal restore</li>
                <li>✓ Cross-platform support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#E31E24] to-[#1A1A1A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            PROTECT YOUR CRITICAL DATA
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Implement automated backup with geo-redundant storage and instant restore capabilities.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#E31E24] hover:bg-white">
            Get Backup Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
