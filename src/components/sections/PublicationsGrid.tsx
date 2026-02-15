import Link from "next/link";
import Button from "@/components/ui/Button";
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
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="shrink-0 lg:w-32 text-sm text-neutral-500">
                  {pub.date}
                  <span className="hidden lg:inline"> · </span>
                  <span className="block lg:inline">{pub.type}</span>
                </div>
                <div className="mt-2 lg:mt-0 flex-1 min-w-0">
                  <h3 className="font-heading text-lg lg:text-xl font-semibold text-primary">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">{pub.authors.join(", ")}</p>
                  <p className="mt-2 text-neutral-600">{pub.abstract}</p>
                  {pub.pdfUrl && (
                    <Link
                      href={pub.pdfUrl}
                      className="mt-3 inline-block text-sm font-semibold text-accent hover:text-accent-dark"
                    >
                      Download PDF
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
