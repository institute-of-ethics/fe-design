import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Speaker Series | Research | Institute of Ethics",
  description: "Speaker series, collaborations, and cross-institution initiatives.",
};

const placeholderEvents = [
  { title: "Organizing for Impact", date: "2025", description: "Collaboration with Mehrotra Institute. Proposals invited for new research initiatives." },
  { title: "Ethics in Tech", date: "2024", description: "Panel on ethical frameworks for artificial intelligence and data governance." },
  { title: "Global Leadership Forum", date: "2024", description: "Cross-institution speaker series on responsible leadership in the global economy." },
];

export default function SpeakerSeriesPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: "Speaker Series" },
        ]}
      />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Speaker Series & Collaborations
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        We host speaker events and collaborate with partner institutions to advance ethical discourse and
        research. Past and upcoming initiatives are listed below.
      </p>
      <div className="mt-12 space-y-8">
        {placeholderEvents.map((event) => (
          <div
            key={event.title}
            className="p-6 border border-neutral-200 rounded-lg bg-white"
          >
            <p className="text-sm text-neutral-500">{event.date}</p>
            <h2 className="font-heading text-xl font-semibold text-neutral-900 mt-1">{event.title}</h2>
            <p className="mt-2 text-neutral-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
