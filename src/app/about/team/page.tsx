import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TeamGrid from "@/components/sections/TeamGrid";
import { placeholderTeam } from "@/lib/data";

export const metadata = {
  title: "Team | About | Institute of Ethics",
  description: "Leadership and team at the Institute of Ethics.",
};

export default function TeamPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Team" },
        ]}
      />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Our Team
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        Meet the leadership and staff who drive our research, education, and outreach.
      </p>
      <div className="mt-12">
        <TeamGrid members={placeholderTeam} title="" />
      </div>
    </div>
  );
}
