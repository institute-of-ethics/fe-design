import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Vision | About | Institute of Ethics",
  description: "Our vision and mission: examining global ethical challenges and promoting responsible leadership.",
};

export default function VisionPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Vision" },
        ]}
      />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Our Vision
      </h1>
      <div className="mt-8 prose prose-neutral max-w-3xl">
        <p className="text-lg text-neutral-600">
          The Institute of Ethics aims to be a recognized thought leader and act as a platform for ethical
          business actions and responsible leadership with a global perspective.
        </p>
        <p className="mt-4 text-neutral-600">
          We produce original research, educational offerings, and innovative real-world applications through
          our ecosystem of students, faculty, partner organizations, governments, alumni, and the public at large.
        </p>
        <h2 className="font-heading text-xl font-semibold text-neutral-900 mt-8">Our Values</h2>
        <ul className="mt-4 list-disc pl-6 text-neutral-600 space-y-2">
          <li>Academic rigor and evidence-based discourse</li>
          <li>Global and cross-cultural perspectives on ethics</li>
          <li>Partnership with industry, policy, and civil society</li>
          <li>Accessible education and outreach</li>
        </ul>
        <h2 className="font-heading text-xl font-semibold text-neutral-900 mt-8">Impact Areas</h2>
        <p className="mt-4 text-neutral-600">
          We focus on business ethics, responsible leadership, sustainability and governance, and the ethics of
          technology and the global economy—always with an eye to real-world impact and inclusive dialogue.
        </p>
      </div>
    </div>
  );
}
