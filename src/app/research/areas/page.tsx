import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { placeholderResearchAreas } from "@/lib/data";

export const metadata = {
  title: "Areas of Research | Research | Institute of Ethics",
  description: "Thematic research areas: business ethics, global economy, leadership, sustainability.",
};

export default function ResearchAreasPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: "Areas of Research" },
        ]}
      />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Areas of Research
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        Our work is organized around the following thematic areas. Each informs our publications, teaching,
        and outreach.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {placeholderResearchAreas.map((area) => (
          <div
            key={area.id}
            className="p-6 lg:p-8 border border-neutral-200 rounded-lg bg-white hover:shadow-card-hover transition-shadow"
          >
            <h2 className="font-heading text-xl font-semibold text-neutral-900">{area.title}</h2>
            <p className="mt-4 text-neutral-600">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
