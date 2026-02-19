import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";
import { placeholderPublications } from "@/lib/data";

export function generateStaticParams() {
  return placeholderPublications.map((p) => ({ slug: p.slug }));
}

export default function PublicationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const pub = placeholderPublications.find((p) => p.slug === params.slug);
  if (!pub) notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/research/publications" },
    { label: pub.title },
  ];

  const year = pub.date.slice(0, 4);

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={breadcrumbItems} />
      <Link
        href="/research/publications"
        className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-dark transition-colors"
      >
        ← Back to Publications
      </Link>
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="shrink-0 lg:w-1/3 max-w-[200px]">
          <div className="aspect-[3/4] rounded overflow-hidden border border-neutral-200 bg-neutral-100 relative">
            <Image
              src={pub.image}
              alt=""
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1 lg:w-2/3">
          <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900">
            {pub.title}
          </h1>
          <p className="mt-2 text-base text-neutral-600">
            {pub.authors.join(", ")}
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            {year} · {pub.type} · {pub.topic}
          </p>
          <h2 className="mt-8 font-heading text-xl font-semibold text-neutral-900">
            Abstract
          </h2>
          <p className="mt-2 text-neutral-600">{pub.abstract}</p>
          {pub.pdfUrl && (
            <Button
              variant="primary"
              size="md"
              href={pub.pdfUrl}
              className="mt-6"
            >
              Download PDF
            </Button>
          )}
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-neutral-200">
        <Button variant="outline" size="sm" href="/research/publications">
          ← Back to Publications
        </Button>
      </div>
    </div>
  );
}
