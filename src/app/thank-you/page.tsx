'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user reached this page without submitting form
    const submitted = sessionStorage.getItem('formSubmitted');
    if (!submitted) {
      router.push('/');
    }
  }, [router]);

  const openChat = () => {
    // Dispatch custom event to open floating chat widget
    window.dispatchEvent(new CustomEvent('open-chat-widget'));
    
    // Fallback: scroll to bottom and try to find and click chat button
    setTimeout(() => {
      const chatButton = document.querySelector('[data-chat-toggle], button[aria-label*="chat"], button[aria-label*="support"]');
      if (chatButton) {
        (chatButton as HTMLElement).click();
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#E31E24] to-[#C4181E] rounded-full flex items-center justify-center animate-bounce">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          {/* Success rings */}
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-[#E31E24] animate-ping opacity-20"></div>
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-[#E31E24] animate-ping opacity-20" style={{ animationDelay: '0.3s' }}></div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pesan Anda Berhasil Terkirim!
        </h1>

        {/* Sub-headline */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Terima kasih telah menghubungi Eastern Stack. Tim sales kami akan meninjau pesan Anda dan segera menghubungi kembali dalam waktu 1x24 jam.
        </p>

        {/* Additional Info Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-start space-x-4 text-left">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#E31E24]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Apa yang terjadi selanjutnya?</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tim sales kami akan meninjau kebutuhan Anda</li>
                <li>• Kami akan menghubungi Anda via email/telepon</li>
                <li>• Konsultasi awal gratis akan dijadwalkan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <button 
            onClick={openChat}
            className="w-full btn-primary inline-flex items-center justify-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Chat dengan Sales Kami</span>
          </button>

          <Link href="/">
            <button className="w-full py-4 px-6 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Kembali ke Beranda</span>
            </button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Butuh bantuan segera?</p>
          <a href="mailto:sales@easternstack.com" className="text-[#E31E24] hover:underline font-medium">
            sales@easternstack.com
          </a>
        </div>
      </div>
    </div>
  );
}
