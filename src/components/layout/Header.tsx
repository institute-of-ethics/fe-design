"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import SearchBar from "@/components/ui/SearchBar";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="h-1 bg-accent" aria-hidden />
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-xl lg:text-2xl font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            <span>Institute of Ethics</span>
          </Link>
          <div className="flex items-center gap-2">
            <Navigation />
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md text-neutral-600 hover:bg-neutral-100 lg:ml-2"
              aria-label="Toggle search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <MobileMenu />
          </div>
        </div>
        {searchOpen && (
          <div className="pb-4">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}
