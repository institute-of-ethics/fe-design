"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    __BASE__?: string;
  }
}

export function useResolvedStaticPath(path: string | undefined): string | undefined {
  const [resolved, setResolved] = useState<string | undefined>(path);

  useEffect(() => {
    if (!path) {
      setResolved(undefined);
      return;
    }
    if (typeof window === "undefined") return;
    const base = window.__BASE__;
    if (base !== undefined && base !== "") {
      setResolved(base + path.replace(/^\//, ""));
    } else {
      setResolved(path);
    }
  }, [path]);

  return resolved ?? path;
}
