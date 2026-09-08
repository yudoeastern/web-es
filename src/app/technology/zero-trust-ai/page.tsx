import type { Metadata } from "next";
import WeastCta from "@/components/WeastCta";

export const metadata: Metadata = {
  title: "Zero-Trust AI Security Architecture | EasternStack",
  description:
    "Zero-trust security for enterprise AI — model access control, data leakage prevention, prompt injection defense, secure RAG pipelines, and full audit trails.",
  alternates: { canonical: "/technology/zero-trust-ai" },
  openGraph: {
    title: "Zero-Trust AI Security Architecture | EasternStack",
    description:
      "Enterprise AI security built on never trust, always verify, designed for GDPR, HIPAA, and SOC 2 compliance with complete audit trails.",
    url: "https://easternstack.ai/technology/zero-trust-ai",
    siteName: "EasternStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easternstack.ai/logo_head.png",
        width: 1200,
        height: 1200,
        alt: "EasternStack — Zero-Trust AI Security Architecture",
      },
    ],
  },
};

export default function ZeroTrustAIPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <img src="/logo.png" alt="EasternStack.AI" className="mx-auto h-12 w-auto md:h-14" />
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              Technology · Zero-Trust AI
            </p>
            <h1 className="mt-5 text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Enterprise AI security built on{" "}
              <span className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] bg-clip-text text-transparent">never trust, always verify</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Enterprise-grade security controls ensuring responsible, compliant, and auditable AI deployment with zero-trust architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Why Zero-Trust AI */}
      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">The foundation</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">Why zero-trust AI?</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Never trust, always verify</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Every AI interaction is authenticated, authorized, and encrypted regardless of source or location.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Data protection</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                End-to-end encryption and data leakage prevention for sensitive information in AI workflows.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Compliance ready</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Built-in compliance for GDPR, HIPAA, SOC 2, and industry-specific regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Controls */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Defense in depth</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">Security controls</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Control 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Model access control</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Role-based permissions with zero-trust architecture for AI model access.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Fine-grained permissions
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Multi-factor authentication
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Just-in-time access
                </li>
              </ul>
            </div>

            {/* Control 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Data leakage prevention</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Advanced filtering to prevent sensitive data exposure in AI interactions.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  PII detection &amp; redaction
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Content filtering
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Output validation
                </li>
              </ul>
            </div>

            {/* Control 3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Prompt injection defense</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Multi-layered protection against adversarial inputs and jailbreak attempts.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Input sanitization
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Jailbreak detection
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Adversarial training
                </li>
              </ul>
            </div>

            {/* Control 4 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Secure RAG pipeline</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                End-to-end encryption for retrieval-augmented generation workflows.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Encrypted embeddings
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Secure vector search
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Access-controlled knowledge bases
                </li>
              </ul>
            </div>

            {/* Control 5 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Audit &amp; compliance</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Comprehensive logging of all AI interactions for compliance and forensics.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Complete audit trails
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Tamper-proof logging
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  Compliance reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Guardrails - separate section */}
      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">Governance</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A]">Policy guardrails</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              Configurable rules ensuring regulatory compliance and ethical AI usage across your organization.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Custom policy engine</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Define and enforce organization-specific AI usage policies with granular control.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Real-time enforcement</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Policies are applied instantly across every AI interaction in your environment.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#E31E24] to-[#C4181E] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Policy versioning</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Track policy changes over time with full version history and rollback capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WeastCta tourHref="/#demo-ide" brand="our platform" />
    </div>
  );
}
