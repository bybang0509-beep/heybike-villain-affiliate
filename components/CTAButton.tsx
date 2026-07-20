import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  label?: string;
  href?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  showDisclosure?: boolean;
}

export default function CTAButton({
  label = "Check Price on Amazon",
  href = "/go/buy-now",
  variant = "primary",
  size = "md",
  className,
  showDisclosure = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-colors shadow-sm";

  const variantStyles = {
    primary: "bg-amber-500 text-white hover:bg-amber-600",
    outline:
      "border-2 border-amber-500 text-amber-600 hover:bg-amber-50 bg-transparent",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <div className="inline-flex flex-col items-start gap-1">
      <Link
        href={href}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      >
        {label} →
      </Link>
      {showDisclosure && (
        <span className="affiliate-disclosure">
          As an Amazon Associate, this site earns from qualifying purchases.
        </span>
      )}
    </div>
  );
}
