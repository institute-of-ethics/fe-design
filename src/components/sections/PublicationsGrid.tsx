"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useResolvedStaticPath } from "@/hooks/useResolvedStaticPath";
import type { Publication } from "@/lib/data";

type PublicationsGridProps = {
  publications: Publication[];
  title?: string;
  viewAllHref?: string;
  maxItems?: number;
};

export default function PublicationsGrid({
  publications,
  title = "Featured Publications",
  viewAllHref = "/research/publications",
  maxItems = 3,
}: PublicationsGridProps) {
  const items = publications.slice(0, maxItems);
  const resolved0 = useResolvedStaticPath(items[0]?.image);
  const resolved1 = useResolvedStaticPath(items[1]?.image);
  const resolved2 = useResolvedStaticPath(items[2]?.image);
  const resolvedImages = [resolved0, resolved1, resolved2];

  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="publications-heading">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 id="publications-heading" className="font-heading heading-display text-2xl lg:text-4xl font-semibold text-primary">
            {title}
          </h2>
          <Button href={viewAllHref} variant="outline" size="sm">
            View all publications
          </Button>
        </div>
        <div className="border-t border-neutral-200">
          {items.map((pub, index) => (
            <article
              key={pub.id}
              className={`border-b border-neutral-200 py-6 lg:py-8 first:pt-0 ${
                index === items.length - 1 ? "border-b-0" : ""
              }`}
            >
              <Link
                href={`/research/publications/${pub.slug}`}
                className={`flex flex-col lg:flex-row lg:gap-8 group block ${pub.image ? "lg:items-stretch" : "lg:items-start"}`}
              >
                {pub.image ? (
                  <div className="shrink-0 w-24 h-[120px] lg:w-28 lg:h-[140px] relative rounded overflow-hidden border border-neutral-200 mb-3 lg:mb-0">
                    <Image
                      src={resolvedImages[index] ?? pub.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                ) : null}
                <div className="mt-2 lg:mt-0 flex-1 min-w-0 flex flex-col">
                  <div>
                    <h3 className="font-heading text-lg lg:text-xl font-semibold text-primary group-hover:text-primary-light transition-colors">
                      {pub.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">{pub.authors.join(", ")}</p>
                    <p className="mt-2 text-neutral-600">{pub.abstract}</p>
                    {pub.pdfUrl && (
                      <span className="mt-3 inline-block text-sm font-semibold text-accent">
                        Download PDF →
                      </span>
                    )}
                  </div>
                  <p className="mt-auto pt-3 text-sm text-neutral-500">
                    {pub.type} | {pub.date}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
