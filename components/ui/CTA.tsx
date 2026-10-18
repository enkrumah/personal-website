import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
  secondary: "border border-line bg-transparent text-foreground hover:bg-highlight",
  text: "px-0 py-0 text-foreground underline decoration-line underline-offset-4 hover:decoration-foreground",
} as const;

export type CtaVariant = keyof typeof variants;

export function ctaClassName(variant: CtaVariant = "primary", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium transition-colors duration-200",
    variants[variant],
    className,
  );
}

type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  external?: boolean;
  download?: string;
  className?: string;
  onClick?: () => void;
};

export function CTA({
  href,
  children,
  variant = "primary",
  external = false,
  download,
  className,
  onClick,
}: CTAProps) {
  const classes = ctaClassName(variant, className);
  const content = (
    <>
      {children}
      {external ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );

  if (!href.startsWith("/") || external || download) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...(download ? { download } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
