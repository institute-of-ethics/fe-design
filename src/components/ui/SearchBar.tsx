"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type SearchBarProps = {
  onClose?: () => void;
  className?: string;
};

export default function SearchBar({ onClose, className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
      onClose?.();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className} role="search">
      <label htmlFor="site-search" className="sr-only">
        Search site
      </label>
      <div className="flex gap-2">
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="flex-1 rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-label="Search site"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-dark transition-colors"
        >
          Search
        </button>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-2 text-neutral-600 hover:text-neutral-900"
            aria-label="Close search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}
