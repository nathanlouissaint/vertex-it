import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: "primary" | "secondary"; showArrow?: boolean };

export function Button({ children, variant = "primary", showArrow = false, className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "border border-primary bg-primary text-white shadow-[0_8px_20px_rgba(37,99,235,0.16)] hover:-translate-y-px hover:border-primary-hover hover:bg-primary-hover hover:shadow-[0_12px_24px_rgba(37,99,235,0.22)]",
    secondary: "border border-line bg-white/[0.02] text-foreground hover:-translate-y-px hover:border-white/20 hover:bg-white/[0.06]",
  };
  return <a className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium tracking-[-0.01em] transition-[background-color,border-color,box-shadow,transform] duration-200 ${variants[variant]} ${className}`} {...props}>{children}{showArrow && <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />}</a>;
}
