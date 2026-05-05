import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full border font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
          variant === "default" &&
            "border-cyan-300/30 bg-cyan-300/15 text-cyan-50 shadow-glow hover:bg-cyan-300/25",
          variant === "outline" &&
            "border-cyan-300/20 bg-slate-950/30 text-cyan-100 hover:border-cyan-200/40 hover:bg-cyan-300/10",
          variant === "ghost" &&
            "border-transparent bg-transparent text-cyan-100 hover:bg-cyan-300/10",
          size === "default" && "h-11 px-5 text-sm",
          size === "sm" && "h-9 px-4 text-xs uppercase tracking-[0.22em]",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
