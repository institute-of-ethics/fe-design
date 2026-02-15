import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications | Research | Institute of Ethics",
  description: "Searchable list of research publications. Filter by year, topic, or type.",
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
