import Link from "next/link";

type CardVariant = "default" | "featured" | "editorial";

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-white rounded-lg border border-neutral-200 shadow-card hover:shadow-card-hover transition-shadow overflow-hidden",
  featured:
    "bg-white rounded-lg border-t-4 border-t-accent shadow-card hover:shadow-card-hover transition-shadow overflow-hidden",
  editorial:
    "bg-transparent border-b border-neutral-200 pb-6 last:border-b-0 rounded-none shadow-none",
};

type CardProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  as?: "div" | "article";
  variant?: CardVariant;
};

export default function Card({
  children,
  href,
  className = "",
  as: Component = "div",
  variant = "default",
}: CardProps) {
  const styles = variantStyles[variant];

  if (href) {
    return (
      <Link href={href} className={`block ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return <Component className={`${styles} ${className}`}>{children}</Component>;
}

export function CardImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className="aspect-video bg-neutral-200 overflow-hidden relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
}

export function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

export function CardTitle({
  children,
  as: Tag = "h3",
  className = "",
}: {
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}) {
  return (
    <Tag
      className={`font-heading text-lg font-semibold text-neutral-900 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function CardExcerpt({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`mt-2 text-sm text-neutral-600 line-clamp-3 ${className}`}>{children}</p>;
}

export function CardMeta({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`mt-2 text-xs text-neutral-500 ${className}`}>{children}</p>;
}
