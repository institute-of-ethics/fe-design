import Link from "next/link";
import type { ResearchArea } from "@/lib/data";

type HighlightsSectionProps = {
  areas: ResearchArea[];
  title?: string;
};

export default function HighlightsSection({
  areas,
  title = "Areas of Research",
}: HighlightsSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-warm-ivory" aria-labelledby="highlights-heading">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="highlights-heading" className="font-heading heading-display text-2xl lg:text-4xl font-semibold text-primary mb-10 lg:mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {areas.map((area) => (
            <Link
              key={area.id}
              href="/research/areas"
              className="block rounded-lg bg-white border border-neutral-200/80 shadow-card hover:shadow-card-hover transition-all duration-200 group overflow-hidden border-t-4 border-t-accent"
            >
              <div className="p-6 lg:p-8">
                <h3 className="font-heading text-xl font-semibold text-primary group-hover:text-primary-light transition-colors">
                  {area.title}
                </h3>
                <p className="mt-4 text-neutral-600 leading-relaxed line-clamp-3">
                  {area.description}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-accent group-hover:text-accent-dark transition-colors">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
