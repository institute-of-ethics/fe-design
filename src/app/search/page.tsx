"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-heading text-2xl font-semibold text-neutral-900">
        Search
      </h1>
      <p className="mt-2 text-neutral-600">
        {q
          ? `Results for "${q}" (placeholder – integrate with search API later).`
          : "Enter a search term above."}
      </p>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-12 font-body text-neutral-600">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
