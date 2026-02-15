import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EventCard from "@/components/events/EventCard";
import { placeholderEvents } from "@/lib/data";

export const metadata = {
  title: "Events | Outreach | Institute of Ethics",
  description: "Upcoming seminars, symposiums, and events.",
};

export default function EventsPage() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Outreach", href: "/outreach" },
          { label: "Events" },
        ]}
      />
      <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4">
        Events
      </h1>
      <p className="mt-6 text-lg text-neutral-600 max-w-3xl">
        Join us for seminars, workshops, and our annual symposium. Registration links are provided where
        available.
      </p>
      <div className="mt-12 space-y-4">
        {placeholderEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
