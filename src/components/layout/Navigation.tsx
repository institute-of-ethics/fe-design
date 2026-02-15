"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

function NavLink({
  href,
  label,
  sublinks,
}: {
  href: string;
  label: string;
  sublinks?: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  const isActive = pathname === href || (sublinks && sublinks.some((c) => pathname.startsWith(c.href)));
  const isParentActive = pathname.startsWith(href);

  if (sublinks && sublinks.length > 0) {
    return (
      <div className="relative group">
        <button
          type="button"
          className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isParentActive
              ? "text-primary bg-neutral-100"
              : "text-neutral-700 hover:text-primary hover:bg-neutral-100"
          }`}
          aria-expanded={false}
          aria-haspopup="true"
        >
          {label}
          <svg
            className="w-4 h-4 transition-transform group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
          <div className="bg-white rounded-md shadow-card-hover border border-neutral-200 py-1 min-w-[180px]">
            {sublinks.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={`block px-4 py-2 text-sm ${
                  pathname === child.href ? "text-primary font-medium bg-neutral-50" : "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? "text-primary bg-neutral-100" : "text-neutral-700 hover:text-primary hover:bg-neutral-100"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          sublinks={"children" in link ? link.children : undefined}
        />
      ))}
    </nav>
  );
}
