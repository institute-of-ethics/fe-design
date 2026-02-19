import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";
import { CardMeta } from "@/components/ui/Card";
import { placeholderNews } from "@/lib/data";

export function generateStaticParams() {
  return placeholderNews.map((a) => ({ slug: a.slug }));
}

export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = placeholderNews.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News & Updates", href: "/news" },
    { label: article.title },
  ];

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={breadcrumbItems} />
      <Link
        href="/news"
        className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-dark transition-colors"
      >
        ← Back to News
      </Link>
      {article.featuredImage && (
        <div className="mt-6 w-full max-h-[480px] rounded-lg overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.featuredImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="mt-8">
        <CardMeta className="mt-0">
          {article.date} · {article.category}
        </CardMeta>
        <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-2">
          {article.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-600">{article.author}</p>
      </div>
      {article.content && (
        <div
          className="mt-8 prose prose-neutral max-w-3xl prose-headings:font-heading prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      )}
      <div className="mt-12 pt-8 border-t border-neutral-200">
        <Button variant="outline" size="sm" href="/news">
          ← Back to News
        </Button>
      </div>
    </div>
  );
}
