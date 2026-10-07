import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Hexágono con punta arriba en un viewBox de 100x100
const points = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 180) * (60 * i - 90);
  return `${(50 + 42 * Math.cos(a)).toFixed(1)},${(50 + 42 * Math.sin(a)).toFixed(1)}`;
}).join(" ");

const variants = {
  honey: { fill: "#f6a821", stroke: "#fde3a0", icon: "text-white" },
  dark: { fill: "#3b2412", stroke: "#fcd34d", icon: "text-amber-300" },
};

interface Props {
  icon: LucideIcon;
  variant?: keyof typeof variants;
  className?: string;
}

/** Celda de miel con un ícono al centro (mismo estilo que el divisor de panal). */
export default function HexBadge({
  icon: Icon,
  variant = "honey",
  className,
}: Props) {
  const v = variants[variant];
  return (
    <div className={cn("relative size-14 shrink-0", className)}>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <polygon
          points={points}
          fill={v.fill}
          stroke={v.stroke}
          strokeWidth="8"
          strokeLinejoin="round"
        />
      </svg>
      <Icon
        className={cn("absolute inset-0 m-auto size-[44%]", v.icon)}
        aria-hidden="true"
      />
    </div>
  );
}
