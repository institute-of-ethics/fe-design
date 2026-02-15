"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useResolvedStaticPath } from "@/hooks/useResolvedStaticPath";
import type { Event } from "@/lib/data";

function formatDateBadge(dateStr: string) {
  const d = new Date(dateStr);
  const month = d.toLocaleDateString("en-US", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();
  return { month, day, year };
}

type EventsSectionProps = {
  events: Event[];
  title?: string;
  viewAllHref?: string;
  maxItems?: number;
  featuredEventImage?: string;
};

export default function EventsSection({
  events,
  title = "Upcoming Events",
  viewAllHref = "/outreach/events",
  maxItems = 3,
  featuredEventImage,
}: EventsSectionProps) {
  const items = events.slice(0, maxItems);
  const imageSource0 = items[0]?.image ?? featuredEventImage;
  const imageSource1 = items[1]?.image;
  const imageSource2 = items[2]?.image;
  const resolved0 = useResolvedStaticPath(imageSource0);
  const resolved1 = useResolvedStaticPath(imageSource1);
  const resolved2 = useResolvedStaticPath(imageSource2);
  const resolvedImages = [resolved0, resolved1, resolved2];

  return (
    <section className="py-16 lg:py-20 bg-warm-gray" aria-labelledby="events-heading">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 id="events-heading" className="font-heading heading-display text-2xl lg:text-4xl font-semibold text-primary">
            {title}
          </h2>
          <Button href={viewAllHref} variant="outline" size="sm">
            View all events
          </Button>
        </div>
        <div className="space-y-4">
          {items.map((event, index) => {
            const badge = formatDateBadge(event.date);
            const resolvedEventImage = resolvedImages[index];
            const eventImageSrc = event.image ?? (index === 0 ? featuredEventImage : undefined);
            const hasImage = Boolean(resolvedEventImage ?? eventImageSrc);
            return (
              <Link
                key={event.id}
                href={event.registrationLink || "#"}
                className="flex flex-col sm:flex-row rounded-lg overflow-hidden bg-white border border-neutral-200 shadow-card hover:shadow-card-hover transition-all duration-200 group"
              >
                <div className="flex shrink-0 sm:w-28 lg:w-32 flex-col items-center justify-center bg-primary text-white py-4 px-3 text-center">
                  <span className="font-heading text-2xl font-bold leading-none">{badge.day}</span>
                  <span className="text-xs uppercase tracking-wider mt-1">{badge.month}</span>
                  <span className="text-xs opacity-90">{badge.year}</span>
                </div>
                {hasImage ? (
                  <div className="relative hidden sm:block w-48 lg:w-64 shrink-0 self-stretch overflow-hidden min-h-0">
                    <Image
                      src={resolvedEventImage ?? eventImageSrc ?? ""}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 256px"
                    />
                  </div>
                ) : null}
                <div className="flex-1 p-5 lg:p-6 flex flex-col justify-center">
                  <p className="text-sm text-neutral-500">{event.location}</p>
                  <h3 className="font-heading text-lg lg:text-xl font-semibold text-primary mt-1 group-hover:text-primary-light transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 text-sm line-clamp-2">{event.description}</p>
                  {event.registrationLink && (
                    <span className="mt-3 inline-block text-sm font-semibold text-accent">
                      Register / Learn more →
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
