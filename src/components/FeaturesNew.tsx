import { Activity, CalendarClock, ChartColumn } from "lucide-react";
import HexBadge from "./HexBadge";

const tools = [
  {
    icon: CalendarClock,
    title: "Programación de visitas",
    text: "Agenda visitas a puntos de venta rápidamente con todos los detalles necesarios para el promotor.",
  },
  {
    icon: Activity,
    title: "Seguimiento en tiempo real",
    text: "Monitorea cada visita desde que inicia hasta que se completa, con evidencias fotográficas incluidas.",
  },
  {
    icon: ChartColumn,
    title: "Reportes de ejecución",
    text: "Genera reportes detallados con métricas y análisis para tomar mejores decisiones comerciales.",
  },
];

// Barras decorativas de la gráfica en la pantalla de la laptop (alto en %)
const bars = [40, 65, 50, 85, 60, 95, 75];

export default function FeaturesNew() {
  return (
    <section id="caracteristicas" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="reveal animate-fade-in-up mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber-400 px-4 py-1 text-sm font-semibold text-white shadow-md">
            Plataforma completa
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-bold text-balance text-amber-950 sm:text-4xl lg:text-5xl">
            Todo lo que necesitas en{" "}
            <span className="text-amber-500">un solo lugar</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-amber-950/75 sm:text-lg">
            Herramientas diseñadas para que marcas y promotores trabajen de
            manera <mark className="highlight">coordinada y eficiente</mark>.
          </p>
        </div>

        {/* Laptop con la plataforma */}
        <div
          className="reveal animate-zoom-in mx-auto mt-12 w-full max-w-md sm:max-w-lg"
          aria-hidden="true"
        >
          <div className="overflow-hidden rounded-t-2xl border-[10px] border-b-[14px] border-amber-950 bg-amber-50 shadow-xl">
            <div className="bg-background flex gap-1.5 border-b border-amber-200 px-3 py-2">
              <span className="size-2 rounded-full bg-amber-300" />
              <span className="size-2 rounded-full bg-amber-200" />
              <span className="size-2 rounded-full bg-amber-100" />
            </div>
            <div className="grid aspect-[16/8] grid-cols-[2fr_3fr] items-center gap-4 p-4 sm:p-6">
              <img
                src="/logotipo-bee-house.png"
                alt=""
                className="mx-auto max-h-full w-auto"
              />
              <div className="flex h-full flex-col justify-center gap-3">
                <div className="flex gap-2">
                  <span className="h-5 flex-1 rounded-full bg-amber-400" />
                  <span className="h-5 flex-1 rounded-full bg-amber-200" />
                </div>
                <div className="flex h-1/2 items-end gap-1.5">
                  {bars.map((h, i) => (
                    <span
                      key={i}
                      className={
                        i === 5
                          ? "flex-1 rounded-t bg-amber-500"
                          : "flex-1 rounded-t bg-amber-300"
                      }
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative -mx-[6%] h-3 rounded-b-xl bg-amber-900">
            <span className="absolute top-0 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-amber-950/60" />
          </div>
        </div>

        {/* Líneas punteadas de la laptop a cada herramienta (md+) */}
        <svg
          className="reveal animate-fade-in mx-auto hidden h-16 w-full text-amber-950/35 md:block"
          viewBox="0 0 300 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M150 0 V20 M50 40 V20 H250 V40"
            className="dash-march"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Herramientas */}
        <ul className="mt-14 grid gap-12 md:mt-9 md:grid-cols-3 md:gap-6">
          {tools.map((t, i) => (
            <li
              key={t.title}
              className="group reveal animate-slide-up-fade relative rounded-3xl border-2 border-amber-200 bg-amber-50/60 px-6 pt-12 pb-7 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
            >
              <HexBadge
                icon={t.icon}
                className="group-hover:animate-jelly absolute -top-8 left-1/2 size-16 -translate-x-1/2"
              />
              <h3 className="text-lg font-bold text-amber-950">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-950/70 sm:text-base">
                {t.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
