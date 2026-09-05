"use client";

import { useState } from "react";

export interface SolutionFeature {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  image?: string;
  images?: string[];
  alt: string;
}

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function BrowserFrame({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl cursor-pointer"
    >
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </span>
        <span className="hidden min-w-0 flex-1 truncate rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-center font-mono text-[11px] text-gray-500 sm:block">
          agentic.easternstack.ai{src.replace("/weast/screens", "")}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

export default function FeatureRow({ feature, flip }: { feature: SolutionFeature; flip: boolean }) {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const stacked = feature.images;
  const allImages = stacked ? stacked : feature.image ? [feature.image] : [];

  function openLightbox(index: number) {
    setLightbox({ images: allImages, index });
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function prevImage() {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
  }

  function nextImage() {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
  }

  return (
    <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${flip ? "lg:flex-row-reverse" : ""}`}>
      <div className={flip ? "lg:order-2" : ""}>
        <p className="text-xs font-bold uppercase tracking-widest text-[#E31E24]">{feature.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-[28px] sm:leading-tight">
          {feature.title}
        </h3>
        <p className="mt-4 leading-relaxed text-gray-600">{feature.body}</p>
        <ul className="mt-6 space-y-3">
          {feature.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E]">
                <CheckIcon />
              </span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <figure className={flip ? "lg:order-1" : ""}>
        {stacked && stacked.length > 0 ? (
          <div className="group relative cursor-pointer px-3 pb-4 sm:px-6">
            {stacked.map((img, i) => (
              <div
                key={img}
                onClick={() => openLightbox(i)}
                className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-500 ease-out
                  ${i === 0 ? "-rotate-3 -translate-y-1 group-hover:-rotate-6 group-hover:-translate-x-6 group-hover:-translate-y-2" : ""}
                  ${i === 1 ? "rotate-0 translate-y-0" : ""}
                  ${i === 2 ? "rotate-3 translate-y-1 group-hover:rotate-6 group-hover:translate-x-6 group-hover:translate-y-2" : ""}
                `}
                style={{
                  zIndex: i,
                  position: i < stacked.length - 1 ? "absolute" : "relative",
                  width: "100%",
                }}
              >
                <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-2.5">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>
                  <span className="hidden min-w-0 flex-1 truncate rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-center font-mono text-[11px] text-gray-500 sm:block">
                    agentic.easternstack.ai{img.replace("/weast/screens", "")}
                  </span>
                </div>
                <img
                  src={img}
                  alt={`${feature.alt} ${i + 1}`}
                  loading="lazy"
                  className="block w-full"
                />
              </div>
            ))}
          </div>
        ) : (
          <BrowserFrame src={allImages[0]} alt={feature.alt} onClick={() => openLightbox(0)} />
        )}
      </figure>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
          }}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          ref={(el) => el?.focus()}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Previous image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <img
            src={lightbox.images[lightbox.index]}
            alt={`${feature.alt} ${lightbox.index + 1}`}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Next image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {lightbox.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {lightbox.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: i }); }}
                  className={`h-2 w-2 rounded-full transition-all ${i === lightbox.index ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
