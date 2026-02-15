import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Outreach | Institute of Ethics",
  description: "Events, symposium, and community engagement at the Institute of Ethics.",
};

export default function OutreachPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Outreach" }]} />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Outreach
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        We connect with the wider community through events, our annual symposium, and ongoing engagement
        initiatives. Explore upcoming events and learn about our flagship symposium.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border border-neutral-200 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-neutral-900">Events</h2>
          <p className="mt-2 text-neutral-600">
            Seminars, workshops, and public events. View the calendar and register for upcoming events.
          </p>
          <Button href="/outreach/events" variant="outline" size="sm" className="mt-4">
            View events
          </Button>
        </div>
        <div className="p-6 border border-neutral-200 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-neutral-900">Annual Symposium</h2>
          <p className="mt-2 text-neutral-600">
            Our flagship event examines business ethics from multiple stakeholder perspectives. Agenda,
            past symposiums, and registration.
          </p>
          <Button href="/outreach/symposium" variant="outline" size="sm" className="mt-4">
            Symposium details
          </Button>
        </div>
      </div>
    </div>
  );
}
