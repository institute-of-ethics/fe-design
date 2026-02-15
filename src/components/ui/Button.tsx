import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variantStyles: Record<
  ButtonVariant,
  string
> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus:ring-primary-light border-transparent",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary-light border-transparent",
  outline:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary",
  ghost:
    "bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-400 border-transparent",
};

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:pointer-events-none";

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: keyof typeof sizeStyles;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
