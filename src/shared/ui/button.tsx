import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const button = cva("transition-all", {
  variants: {
    intent: {
      primary: ["bg-accent", "text-white"],
    },
    size: {
      small: [
        "min-w-[152px]",
        "text-sm",
        "py-3",
        "px-6",
        "rounded-md",
        "font-semibold",
      ],
    },
    disabled: {
      false: [
        "cursor-pointer",
        "hover:drop-shadow-[0_8px_4px_rgba(124,106,70,0.4)]",
        "active:bg-[#524939]",
      ],
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },
  defaultVariants: {
    disabled: false,
    intent: "primary",
    size: "small",
  },
});

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> &
  VariantProps<typeof button>;

export function Button({
  className,
  intent,
  size,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(button({ intent, size, disabled, className }))}
      disabled={disabled || undefined}
      {...props}
    />
  );
}
