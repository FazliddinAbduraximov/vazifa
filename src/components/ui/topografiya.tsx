import { cn } from "@/lib/utils";

type TypographyProps = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body1"
    | "body2"
    | "caption"
    | "link";
  children: React.ReactNode;
  className?: string;
};

const styles: Record<string, string> = {
  h1: "text-[28px] md:text-[40px] font-bold leading-tight",
  h2: "text-[24px] md:text-[32px] font-semibold",
  h3: "text-[18px] md:text-[28px] font-semibold",
  h4: "text-[16px] md:text-[24px] font-semibold",
  h5: "text-[14px] md:text-[22px] font-medium",

  body1: "text-[16px] md:text-[24px] leading-relaxed",
  body2: "text-[14px] md:text-[22px] leading-relaxed",

  caption: "text-[12px] md:text-[16px] text-gray-500",

  link: "text-[16px] underline cursor-pointer text-blue-600",
};

export function Typography({ variant, children, className }: TypographyProps) {
  const Component = ["h1","h2","h3","h4","h5"].includes(variant)
    ? (variant as any)
    : "p";

  return (
    <Component className={cn(styles[variant], className)}>
      {children}
    </Component>
  );
}