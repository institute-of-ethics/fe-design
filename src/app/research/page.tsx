import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Research | Institute of Ethics",
  description: "Areas of research, publications, and speaker series at the Institute of Ethics.",
};

export default function ResearchPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Research" }]} />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Research
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        We produce original research across business ethics, responsible leadership, sustainability, and the
        global economy. Explore our focus areas, publications, and speaker series.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-neutral-200 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-neutral-900">Areas of Research</h2>
          <p className="mt-2 text-neutral-600">
            Thematic overviews and focus areas: business ethics, global economy, leadership, sustainability.
          </p>
          <Button href="/research/areas" variant="outline" size="sm" className="mt-4">
            Explore areas
          </Button>
        </div>
        <div className="p-6 border border-neutral-200 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-neutral-900">Publications</h2>
          <p className="mt-2 text-neutral-600">
            Searchable, filterable list of research outputs with abstracts and PDF downloads.
          </p>
          <Button href="/research/publications" variant="outline" size="sm" className="mt-4">
            View publications
          </Button>
        </div>
        <div className="p-6 border border-neutral-200 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-neutral-900">Speaker Series</h2>
          <p className="mt-2 text-neutral-600">
            Collaborations, speaker events, and cross-institution initiatives.
          </p>
          <Button href="/research/speaker-series" variant="outline" size="sm" className="mt-4">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
