import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

const sizes = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
  xl: "w-20 h-20 text-xl",
  "2xl": "w-28 h-28 text-3xl",
};

const numericSizes = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80,
  "2xl": 112,
};

function getInitials(name?: string): string {
  if (!name) return "?";
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Avatar({
  src,
  alt = "",
  name,
  size = "md",
  className,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center",
        sizes[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || name || ""}
          width={numericSizes[size]}
          height={numericSizes[size]}
          className="object-cover w-full h-full"
          unoptimized={src.startsWith("data:")}
        />
      ) : (
        <span className="font-semibold text-white">{getInitials(name)}</span>
      )}
    </div>
  );
}
