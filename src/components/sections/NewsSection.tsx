"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useResolvedStaticPath } from "@/hooks/useResolvedStaticPath";
import type { NewsArticle } from "@/lib/data";

type NewsSectionProps = {
  articles: NewsArticle[];
  title?: string;
  viewAllHref?: string;
  maxItems?: number;
  featuredImage?: string;
};

export default function NewsSection({
  articles,
  title = "News & Updates",
  viewAllHref = "/news",
  maxItems = 4,
  featuredImage,
}: NewsSectionProps) {
  const resolvedFeaturedImage = useResolvedStaticPath(featuredImage);
  const items = articles.slice(0, maxItems);
  const [featured, ...rest] = items;

  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="news-heading">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 id="news-heading" className="font-heading heading-display text-2xl lg:text-4xl font-semibold text-primary">
            {title}
          </h2>
          <Button href={viewAllHref} variant="outline" size="sm">
            View all news
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {featured && (
            <article className="lg:col-span-2 rounded-lg overflow-hidden bg-white border border-neutral-200 shadow-card hover:shadow-card-hover transition-shadow">
              <Link href={`/news#${featured.id}`} className="block group">
                <div className="relative aspect-[16/10] bg-warm-gray overflow-hidden">
                  {featuredImage ? (
                    <Image
                      src={resolvedFeaturedImage ?? featuredImage}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-200" />
                  )}
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-sm text-neutral-500">{featured.date} · {featured.category}</p>
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold text-primary mt-2 group-hover:text-primary-light transition-colors">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-neutral-600 line-clamp-2">{featured.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-accent">Read more →</span>
                </div>
              </Link>
            </article>
          )}
          <div className="flex flex-col gap-6">
            {rest.map((article) => (
              <article
                key={article.id}
                className="rounded-lg border border-neutral-200 bg-warm-ivory/50 p-5 hover:border-primary/30 hover:shadow-card transition-all"
              >
                <Link href={`/news#${article.id}`} className="block group">
                  <p className="text-xs text-neutral-500">{article.date} · {article.category}</p>
                  <h3 className="font-heading text-lg font-semibold text-primary mt-1 group-hover:text-primary-light transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{article.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
