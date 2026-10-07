import { cn } from "@/lib/utils";
import TypeIt from "typeit-react";

// Cada paso usa una celda de panal con su propio tono, como en el diseño
// (café claro → miel → café oscuro).
const steps = [
  {
    title: "Registra tu visita",
    text: "Define el punto de venta, fecha, horario y los requerimientos de la visita desde la plataforma.",
    cell: { wax: "#f3e3c8", honey: "#b08a62", text: "#ffffff" },
    pill: "bg-[#b08a62] text-white",
  },
  {
    title: "Promotor acepta",
    text: "Un promotor disponible en la zona ve la visita y la acepta desde su app, modelo bajo demanda.",
    cell: { wax: "#fde3a0", honey: "#f6a821", text: "#ffffff" },
    pill: "bg-amber-400 text-white",
  },
  {
    title: "Ejecución y seguimiento",
    text: "El promotor realiza la visita y el cliente recibe actualizaciones en tiempo real con evidencias.",
    cell: { wax: "#e7d3b5", honey: "#3b2412", text: "#fcd34d" },
    pill: "bg-amber-950 text-amber-50",
  },
];

// Hexágono con punta arriba en un viewBox de 100x100
const hex = (rad: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return `${(50 + rad * Math.cos(a)).toFixed(1)},${(50 + rad * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

export default function HowItWorksNew() {
  return (
    <section id="como-funciona" className="bg-muted pt-12 pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[5fr_6fr] lg:gap-20 lg:px-8">
        {/* Encabezado */}
        <div className="timeline-view animate-expand-vertically animate-range-[entry_5%_contain_20%]">
          {/* Tarro de miel: tapa + cuello + cuerpo */}
          <div className="relative pt-16" data-animate>
            {/* Tapa con la etiqueta */}
            <div className="absolute top-0 left-1/2 z-10 w-3/5 -translate-x-1/2 rounded-2xl bg-amber-400 py-2 text-center text-sm font-semibold text-white shadow-md">
              <span
                className="absolute top-1.5 left-4 h-1.5 w-8 rounded-full bg-white/50"
                aria-hidden="true"
              />
              Proceso simple
              <span
                className="absolute inset-x-3 -bottom-1.5 -z-10 h-3 rounded-b-xl bg-amber-500"
                aria-hidden="true"
              />
            </div>

            {/* Cuello: tapa el borde superior del cuerpo para que se vean unidos */}
            <div
              className="absolute top-10 left-1/2 z-1 h-6.5 w-1/2 -translate-x-1/2 border-x-2 border-amber-300 bg-amber-50"
              aria-hidden="true"
            />

            {/* Cuerpo */}
            <div className="relative rounded-[2.5rem] border-2 border-amber-300 bg-amber-50 px-7 pt-10 pb-14 sm:px-10">
              {/* Miel al fondo + reflejo del vidrio */}
              <div
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-x-0 bottom-0 h-1/4 w-full text-amber-200"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 4 Q12.5 0 25 4 T50 4 T75 4 T100 4 V20 H0Z"
                    fill="currentColor"
                    opacity="0.7"
                  />
                </svg>
                <span className="absolute top-8 left-4 h-20 w-1.5 rounded-full bg-white" />
                <span className="absolute top-30 left-4 h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <div className="relative">
                <h2 className="text-4xl leading-tight font-bold text-amber-950 sm:text-5xl">
                  ¿Cómo funciona{" "}
                  <span className="block text-amber-500">BeeHouse?</span>
                </h2>

                <TypeIt
                  options={{
                    speed: 15,
                    waitUntilVisible: true,
                  }}
                  className="mt-5 max-w-md text-base leading-relaxed text-amber-950/75 sm:text-lg"
                >
                  En tres pasos{" "}
                  <mark className="highlight">
                    conecta tu marca con promotores
                  </mark>{" "}
                  y lleva el control total de tus{" "}
                  <mark className="highlight">puntos de venta</mark>.
                </TypeIt>
              </div>
            </div>

            {/* Celdas decorativas */}
            <svg
              className="pointer-events-none absolute top-2 -right-2 hidden h-24 w-24 opacity-60 sm:block lg:-right-8"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <g
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinejoin="round"
              >
                <polygon points={hex(22)} transform="translate(-14 -10)" />
                <polygon points={hex(22)} transform="translate(24 -10)" />
                <polygon points={hex(22)} transform="translate(5 23)" />
              </g>
            </svg>
          </div>
        </div>

        {/* Pasos */}
        <ol className="timeline-view animate-zoom-in animate-range-[entry_5%_contain_20%] flex flex-col gap-10">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="step relative flex items-start gap-5 sm:gap-6"
              data-animate
              data-delay={String(i * 150)}
            >
              {i < steps.length - 1 && (
                <span className="connector" aria-hidden="true" />
              )}

              <svg
                className="h-20 w-20 shrink-0 drop-shadow-sm sm:h-24 sm:w-24"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <polygon
                  points={hex(44)}
                  fill={s.cell.wax}
                  stroke={s.cell.wax}
                  strokeWidth="8"
                  strokeLinejoin="round"
                />
                <polygon
                  points={hex(34)}
                  fill={s.cell.honey}
                  stroke={s.cell.honey}
                  strokeWidth="10"
                  strokeLinejoin="round"
                />
                <rect
                  x="66"
                  y="26"
                  width="5"
                  height="16"
                  rx="2.5"
                  fill="white"
                  opacity="0.7"
                  transform="rotate(30 68 34)"
                />
                <text
                  x="50"
                  y="52"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="40"
                  fontWeight="800"
                  fill={s.cell.text}
                >
                  {i + 1}
                </text>
              </svg>

              <div className="pt-2 sm:pt-4">
                <h3
                  className={cn(
                    "inline-block rounded-full px-4 py-1 text-sm font-semibold shadow-sm sm:text-base",
                    s.pill,
                  )}
                >
                  {s.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-amber-950/75 sm:text-base">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
