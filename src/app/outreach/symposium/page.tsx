import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Symposium | Outreach | Institute of Ethics",
  description: "Annual flagship symposium on business ethics. Agenda, past events, and registration.",
};

export default function SymposiumPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Outreach", href: "/outreach" },
          { label: "Symposium" },
        ]}
      />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Annual Symposium
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        The Institute hosts an annual symposium that examines business ethics issues from a variety of
        stakeholder perspectives. It is our flagship event, bringing together academics, practitioners,
        and the public.
      </p>
      <section className="mt-12" aria-labelledby="symposium-2025">
        <h2 id="symposium-2025" className="font-heading text-2xl font-semibold text-neutral-900">
          Symposium 2025
        </h2>
        <p className="mt-4 text-neutral-600">
          Date and venue to be announced. The program will include keynote speakers, panel discussions,
          and networking. Registration will open in the spring.
        </p>
        <Button href="#" variant="primary" size="md" className="mt-6">
          Get notified when registration opens
        </Button>
      </section>
      <section className="mt-12 pt-8 border-t border-neutral-200" aria-labelledby="past">
        <h2 id="past" className="font-heading text-2xl font-semibold text-neutral-900">
          Past Symposiums
        </h2>
        <ul className="mt-4 space-y-4">
          <li>
            <strong>2024</strong> — Theme: Ethics in the Global Economy. Twenty teams from business schools
            worldwide competed in the case competition finals.
          </li>
          <li>
            <strong>2023</strong> — Symposium held with international participants. Keynotes on responsible
            leadership and sustainability.
          </li>
        </ul>
      </section>
    </div>
  );
}
