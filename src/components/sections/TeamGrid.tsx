import Card, { CardContent, CardTitle } from "@/components/ui/Card";
import type { TeamMember } from "@/lib/data";

type TeamGridProps = {
  members: TeamMember[];
  title?: string;
  className?: string;
};

export default function TeamGrid({
  members,
  title = "Our Team",
  className = "",
}: TeamGridProps) {
  return (
    <section
      className={`py-12 lg:py-16 ${className}`}
      aria-labelledby={title ? "team-heading" : undefined}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 id="team-heading" className="font-heading text-2xl lg:text-3xl font-semibold text-neutral-900 mb-8">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <Card key={member.id} as="article">
              <div className="aspect-square bg-neutral-200" />
              <CardContent>
                <CardTitle as="h3">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium mt-1">{member.title}</p>
                <p className="mt-2 text-sm text-neutral-600 line-clamp-4">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
