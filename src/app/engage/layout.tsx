import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engage | Institute of Ethics",
  description: "Newsletter signup, social media, and partnership inquiries.",
};

export default function EngageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
