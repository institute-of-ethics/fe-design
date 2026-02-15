"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { placeholderPublications } from "@/lib/data";
import { Select } from "@/components/ui/Input";
import { useResolvedStaticPath } from "@/hooks/useResolvedStaticPath";
import type { Publication } from "@/lib/data";

const types = Array.from(new Set(placeholderPublications.map((p) => p.type)));
const topics = Array.from(new Set(placeholderPublications.map((p) => p.topic)));
const years = Array.from(new Set(placeholderPublications.map((p) => p.date.slice(0, 4)))).sort((a, b) => b.localeCompare(a));

function PublicationRow({ pub }: { pub: Publication }) {
  const resolvedImage = useResolvedStaticPath(pub.image);
  const imageSrc = resolvedImage ?? pub.image;

  return (
    <article className="py-6 border-b border-neutral-200 last:border-0">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="shrink-0 w-full sm:w-28 h-[140px] sm:h-[180px] relative rounded overflow-hidden border border-neutral-200 bg-neutral-100">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 112px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-neutral-500">{pub.date} · {pub.type} · {pub.topic}</p>
          <h2 className="font-heading text-lg font-semibold text-neutral-900 mt-1">{pub.title}</h2>
          <p className="text-sm text-neutral-600 mt-1">{pub.authors.join(", ")}</p>
          <p className="mt-2 text-neutral-600">{pub.abstract}</p>
          {pub.pdfUrl && (
            <a href={pub.pdfUrl} className="mt-2 inline-block text-sm font-medium text-primary hover:text-primary-dark">
              Download PDF
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PublicationsPage() {
  const [year, setYear] = useState("");
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");

  const filtered = useMemo(() => {
    return placeholderPublications.filter((p) => {
      if (year && p.date.slice(0, 4) !== year) return false;
      if (topic && p.topic !== topic) return false;
      if (type && p.type !== type) return false;
      return true;
    });
  }, [year, topic, type]);

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: "Publications" },
        ]}
      />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Publications
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        Research outputs from the Institute. Filter by year, topic, or type. PDFs available where indicated.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Select
          name="year"
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          options={years.map((y) => ({ value: y, label: y }))}
          className="min-w-[120px]"
        />
        <Select
          name="topic"
          label="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          options={topics.map((t) => ({ value: t, label: t }))}
          className="min-w-[160px]"
        />
        <Select
          name="type"
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={types.map((t) => ({ value: t, label: t }))}
          className="min-w-[160px]"
        />
      </div>
      <div className="mt-8">
        {filtered.length === 0 ? (
          <p className="text-neutral-600">No publications match the selected filters.</p>
        ) : (
          filtered.map((pub) => <PublicationRow key={pub.id} pub={pub} />)
        )}
      </div>
    </div>
  );
}
