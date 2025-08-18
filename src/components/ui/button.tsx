import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "./utils";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    asChild?: boolean;
  }
>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const variantClass =
      variant === "destructive"
        ? "button-destructive"
        : variant === "outline"
        ? "button-outline"
        : variant === "secondary"
        ? "button-secondary"
        : variant === "ghost"
        ? "button-ghost"
        : variant === "link"
        ? "button-link"
        : "button-default";

    const sizeClass =
      size === "sm"
        ? "button-sm"
        : size === "lg"
        ? "button-lg"
        : size === "icon"
        ? "button-icon"
        : "button-default-size";

    return (
      <Comp
        data-slot="button"
        className={cn("button-base", variantClass, sizeClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
