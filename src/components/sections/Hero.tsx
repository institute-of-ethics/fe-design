"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useResolvedStaticPath } from "@/hooks/useResolvedStaticPath";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  className?: string;
};

export default function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/engage",
  backgroundImage,
  className = "",
}: HeroProps) {
  const resolvedImage = useResolvedStaticPath(backgroundImage);

  return (
    <section
      className={`relative min-h-[100dvh] flex flex-col justify-end text-white overflow-hidden ${className}`}
      aria-label="Hero"
    >
      {resolvedImage ? (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={resolvedImage}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div
            className="absolute inset-0 z-10 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent"
            aria-hidden
          />
        </>
      ) : (
        <div className="absolute inset-0 z-10 bg-primary" aria-hidden />
      )}
      <div className="relative z-20 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 lg:pb-28 pt-32 lg:pt-40">
        <div className="max-w-3xl">
          <h1 className="font-heading heading-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 text-lg sm:text-xl text-white/95 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {ctaLabel && (
            <div className="mt-10">
              <Button
                href={ctaHref}
                size="lg"
                className="bg-accent text-primary hover:bg-accent-light border-0 focus:ring-accent-dark px-8 py-3.5 text-base"
              >
                {ctaLabel}
              </Button>
            </div>
          )}
        </div>
      </div>
      <a
        href="#mission"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
        aria-label="Scroll to content"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
