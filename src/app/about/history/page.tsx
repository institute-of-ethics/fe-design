import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "History | About | Institute of Ethics",
  description: "The founding and milestones of the Institute of Ethics.",
};

const milestones = [
  { year: "2020", title: "Foundation", description: "The Institute was established to advance ethics research and education." },
  { year: "2021", title: "First Symposium", description: "Launch of the annual flagship symposium on business ethics." },
  { year: "2022", title: "Research Expansion", description: "New research areas and partnerships with industry and academia." },
  { year: "2023", title: "Case Competition", description: "First annual Business + Ethics case competition with global teams." },
  { year: "2024", title: "Today", description: "Ongoing research, education, and outreach with a growing global footprint." },
];

export default function HistoryPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "History" },
        ]}
      />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Our History
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        From our founding to the present day, the Institute has grown into a platform for ethical discourse,
        research, and education with a global reach.
      </p>
      <div className="mt-12 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200" aria-hidden />
        <ul className="space-y-8">
          {milestones.map((m) => (
            <li key={m.year} className="relative pl-12">
              <span className="absolute left-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-medium">
                {m.year.slice(2)}
              </span>
              <h2 className="font-heading text-xl font-semibold text-neutral-900">{m.title}</h2>
              <p className="mt-2 text-neutral-600">{m.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
