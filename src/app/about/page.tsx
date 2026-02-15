import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About | Institute of Ethics",
  description: "Our vision, history, and team. The Institute of Ethics examines global ethical challenges and promotes responsible leadership.",
};

export default function AboutPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        About the Institute
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        The Institute of Ethics aims to be a recognized thought leader and act as a platform for ethical business
        actions and responsible leadership with a global perspective. We produce original research, educational
        offerings, and innovative real-world applications through our ecosystem of students, faculty, partner
        organizations, and the public.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-neutral-200 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-neutral-900">Vision</h2>
          <p className="mt-2 text-neutral-600">
            Our mission and values: examining global ethical challenges and promoting responsible leadership.
          </p>
          <Button href="/about/vision" variant="outline" size="sm" className="mt-4">
            Learn more
          </Button>
        </div>
        <div className="p-6 border border-neutral-200 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-neutral-900">History</h2>
          <p className="mt-2 text-neutral-600">
            Founding context and milestones in our journey as an institute.
          </p>
          <Button href="/about/history" variant="outline" size="sm" className="mt-4">
            Learn more
          </Button>
        </div>
        <div className="p-6 border border-neutral-200 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-neutral-900">Team</h2>
          <p className="mt-2 text-neutral-600">
            Leadership and staff driving research, education, and outreach.
          </p>
          <Button href="/about/team" variant="outline" size="sm" className="mt-4">
            Meet the team
          </Button>
        </div>
      </div>
    </div>
  );
}
