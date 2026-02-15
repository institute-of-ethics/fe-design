"use client";

import Image from "next/image";
import Link from "next/link";
import { useResolvedStaticPath } from "@/hooks/useResolvedStaticPath";

type MissionStatementProps = {
  missionText: string;
  imageSrc: string;
  imageAlt?: string;
  learnMoreHref?: string;
  className?: string;
};

export default function MissionStatement({
  missionText,
  imageSrc,
  imageAlt = "Mission",
  learnMoreHref = "/about/vision",
  className = "",
}: MissionStatementProps) {
  const resolvedSrc = useResolvedStaticPath(imageSrc);

  return (
    <section
      id="mission"
      className={`py-16 lg:py-24 bg-warm-ivory ${className}`}
      aria-labelledby="mission-heading"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={resolvedSrc ?? imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
          <div>
            <h2 id="mission-heading" className="sr-only">
              Our Mission
            </h2>
            <blockquote className="border-l-4 border-accent pl-6 lg:pl-8 py-2">
              <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-primary leading-relaxed">
                {missionText}
              </p>
            </blockquote>
            <Link
              href={learnMoreHref}
              className="mt-8 inline-block font-medium text-primary hover:text-primary-dark transition-colors underline underline-offset-4 decoration-2"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
