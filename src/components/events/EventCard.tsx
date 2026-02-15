"use client";

import Link from "next/link";
import Image from "next/image";
import { useResolvedStaticPath } from "@/hooks/useResolvedStaticPath";
import type { Event } from "@/lib/data";

function formatDateBadge(dateStr: string) {
  const d = new Date(dateStr);
  const month = d.toLocaleDateString("en-US", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();
  return { month, day, year };
}

export default function EventCard({ event }: { event: Event }) {
  const badge = formatDateBadge(event.date);
  const resolvedImage = useResolvedStaticPath(event.image);
  const imageSrc = resolvedImage ?? event.image;
  const hasImage = Boolean(imageSrc);

  return (
    <Link
      href={event.registrationLink || "#"}
      className="flex flex-col sm:flex-row rounded-lg overflow-hidden bg-white border border-neutral-200 shadow-card hover:shadow-card-hover transition-all duration-200 group"
    >
      <div className="flex shrink-0 sm:w-28 lg:w-32 flex-col items-center justify-center bg-primary text-white py-4 px-3 text-center">
        <span className="font-heading text-2xl font-bold leading-none">{badge.day}</span>
        <span className="text-xs uppercase tracking-wider mt-1">{badge.month}</span>
        <span className="text-xs opacity-90">{badge.year}</span>
      </div>
      {hasImage ? (
        <div className="relative w-full sm:w-48 lg:w-64 shrink-0 aspect-video sm:aspect-auto sm:self-stretch sm:min-h-0 overflow-hidden">
          <Image
            src={imageSrc ?? ""}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 256px"
          />
        </div>
      ) : null}
      <div className="flex-1 p-5 lg:p-6 flex flex-col justify-center">
        <p className="text-sm text-neutral-500">{event.location}</p>
        <h2 className="font-heading text-lg lg:text-xl font-semibold text-primary mt-1 group-hover:text-primary-light transition-colors">
          {event.title}
        </h2>
        <p className="mt-2 text-neutral-600 text-sm line-clamp-2">{event.description}</p>
        {event.registrationLink && (
          <span className="mt-3 inline-block text-sm font-semibold text-accent">
            Register / Learn more →
          </span>
        )}
      </div>
    </Link>
  );
}
