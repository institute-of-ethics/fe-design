import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Card, { CardContent, CardTitle, CardExcerpt } from "@/components/ui/Card";

export const metadata = {
  title: "Education | Institute of Ethics",
  description: "Courses, workshops, and academic programs in ethics and responsible leadership.",
};

const programs = [
  {
    id: "1",
    title: "Ethics in Business",
    description: "Core course examining ethical decision-making in corporate environments. Open to graduate and advanced undergraduate students.",
  },
  {
    id: "2",
    title: "Responsible Leadership",
    description: "Workshop series on ethical leadership frameworks and practice. Designed for emerging leaders and executives.",
  },
  {
    id: "3",
    title: "Business + Ethics Case Competition",
    description: "Annual case competition for business school teams worldwide. Applications open each fall.",
  },
];

const resources = [
  { label: "Course syllabi and readings", href: "#" },
  { label: "Ethics modules for instructors", href: "#" },
  { label: "Academic partnerships", href: "#" },
];

export default function EducationPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Education" }]} />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Education
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        We offer courses, workshops, and learning initiatives that integrate ethics into business education
        and professional development. Our programs are designed for students, faculty, and practitioners.
      </p>
      <section className="mt-12" aria-labelledby="programs-heading">
        <h2 id="programs-heading" className="font-heading text-2xl font-semibold text-neutral-900 mb-6">
          Programs & Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.id} as="article">
              <CardContent>
                <CardTitle as="h3">{program.title}</CardTitle>
                <CardExcerpt>{program.description}</CardExcerpt>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="mt-12 py-8 border-t border-neutral-200" aria-labelledby="resources-heading">
        <h2 id="resources-heading" className="font-heading text-2xl font-semibold text-neutral-900 mb-4">
          Learning Resources
        </h2>
        <ul className="space-y-2">
          {resources.map((r) => (
            <li key={r.label}>
              <a href={r.href} className="text-primary hover:text-primary-dark font-medium">
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
