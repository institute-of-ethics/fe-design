import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";
import { placeholderEvents } from "@/lib/data";

export function generateStaticParams() {
  return placeholderEvents.map((e) => ({ slug: e.slug }));
}

function formatDateBadge(dateStr: string) {
  const d = new Date(dateStr);
  const month = d.toLocaleDateString("en-US", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();
  return { month, day, year };
}

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = placeholderEvents.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Outreach", href: "/outreach" },
    { label: "Events", href: "/outreach/events" },
    { label: event.title },
  ];

  const badge = formatDateBadge(event.date);

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs items={breadcrumbItems} />
      <Link
        href="/outreach/events"
        className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-dark transition-colors"
      >
        ← Back to Events
      </Link>
      <div className="mt-8 flex flex-col lg:flex-row gap-8 items-start">
        <div className="shrink-0 w-24 flex flex-col items-center justify-center bg-primary text-white py-5 px-4 rounded-lg text-center">
          <span className="font-heading text-3xl font-bold leading-none">{badge.day}</span>
          <span className="text-xs uppercase tracking-wider mt-1">{badge.month}</span>
          <span className="text-xs opacity-90 mt-0.5">{badge.year}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-900">
            {event.title}
          </h1>
          <p className="mt-2 text-sm text-neutral-500 flex items-center gap-1">
            {event.location}
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            {event.description}
          </p>
          {event.registrationLink ? (
            <Button
              variant="primary"
              size="lg"
              href={event.registrationLink}
              className="mt-6"
            >
              Register Now
            </Button>
          ) : (
            <Button variant="primary" size="lg" disabled className="mt-6">
              Learn More
            </Button>
          )}
        </div>
      </div>
      {event.image && (
        <div className="mt-8 w-full max-h-[400px] rounded-lg overflow-hidden relative aspect-video">
          <Image
            src={event.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 96rem"
          />
        </div>
      )}
      <div className="mt-12 pt-8 border-t border-neutral-200">
        <Button variant="outline" size="sm" href="/outreach/events">
          ← Back to Events
        </Button>
      </div>
    </div>
  );
}
