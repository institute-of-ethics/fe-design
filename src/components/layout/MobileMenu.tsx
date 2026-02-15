"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleExpanded = (href: string) => {
    setExpanded((prev) => (prev === href ? null : href));
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full bg-white border-b border-neutral-200 shadow-lg z-50 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link) => {
            const hasChildren = "children" in link && link.children && link.children.length > 0;
            const isExpanded = expanded === link.href;

            if (hasChildren && link.children) {
              return (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => toggleExpanded(link.href)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-left text-sm font-medium ${
                      pathname.startsWith(link.href) ? "text-primary bg-neutral-50" : "text-neutral-700"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isExpanded && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`block px-4 py-2 rounded-md text-sm ${
                            pathname === child.href ? "text-primary font-medium" : "text-neutral-600"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium ${
                  pathname === link.href ? "text-primary bg-neutral-50" : "text-neutral-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
