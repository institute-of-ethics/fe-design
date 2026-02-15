import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Institute of Ethics",
  description: "Press releases, announcements, and updates from the Institute of Ethics.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
