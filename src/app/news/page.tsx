"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Card, { CardContent, CardTitle, CardExcerpt, CardMeta } from "@/components/ui/Card";
import { placeholderNews } from "@/lib/data";
import { Select } from "@/components/ui/Input";

const categories = Array.from(new Set(placeholderNews.map((a) => a.category)));

export default function NewsPage() {
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => {
    if (!category) return placeholderNews;
    return placeholderNews.filter((a) => a.category === category);
  }, [category]);

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News & Updates" }]} />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        News & Updates
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        Press releases, announcements, case competition updates, and more. Filter by category below.
      </p>
      <div className="mt-8">
        <Select
          name="category"
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={categories.map((c) => ({ value: c, label: c }))}
          className="max-w-xs"
        />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <Card key={article.id} href={`/news/${article.slug}`} as="article">
            <CardContent>
              <CardMeta>{article.date} · {article.category}</CardMeta>
              <CardTitle as="h2" className="mt-1">
                {article.title}
              </CardTitle>
              <CardExcerpt>{article.excerpt}</CardExcerpt>
              <p className="mt-2 text-xs text-neutral-500">{article.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
