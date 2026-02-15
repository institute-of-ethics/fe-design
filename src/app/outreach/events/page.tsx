import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Card, { CardContent, CardTitle, CardExcerpt, CardMeta } from "@/components/ui/Card";
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
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderEvents.map((event) => (
          <Card key={event.id} href={event.registrationLink || "#"}>
            <CardContent>
              <CardMeta>{event.date} · {event.location}</CardMeta>
              <CardTitle as="h2" className="mt-1">
                {event.title}
              </CardTitle>
              <CardExcerpt>{event.description}</CardExcerpt>
              {event.registrationLink && (
                <span className="mt-3 inline-block text-sm font-medium text-primary">
                  Register / Learn more →
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
