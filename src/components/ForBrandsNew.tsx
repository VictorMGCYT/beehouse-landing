import {
  ArrowRight,
  ClipboardCheck,
  Eye,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: MapPinned,
    title: "Mayor cobertura",
    text: "Amplía tu alcance en puntos de venta sin necesidad de una fuerza de ventas propia.",
  },
  {
    icon: Eye,
    title: "Visibilidad total",
    text: "Ve en tiempo real cómo se exhiben y posicionan tus productos en cada punto de venta.",
  },
  {
    icon: ClipboardCheck,
    title: "Control de ejecución",
    text: "Recibe reportes con fotos y evidencias de cada visita para garantizar tus estándares.",
  },
  {
    icon: TrendingUp,
    title: "Optimización continua",
    text: "Analiza datos de ejecución para mejorar tu estrategia comercial de manera constante.",
  },
];

// Hexágono "flat-top" (lados planos arriba y abajo): ancho 100, alto 86.6.
// Así las columnas encajan desplazando una de cada dos media celda hacia abajo.
const HEX_W = 100;
const HEX_H = 86.6;
const flatHex = (inset: number) => {
  const cx = HEX_W / 2;
  const cy = HEX_H / 2;
  const r = HEX_W / 2 - inset;
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i);
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
};

// Hexágono "pointy-top" para la insignia con el número
const badgeHex = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 180) * (60 * i - 90);
  return `${(50 + 42 * Math.cos(a)).toFixed(1)},${(50 + 42 * Math.sin(a)).toFixed(1)}`;
}).join(" ");

const honeycombBg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='41.569' height='72' viewBox='0 0 41.569 72'%3E%3Cpath d='M20.785 0L41.569 12V36L20.785 48L0 36V12Z M20.785 48V72' fill='none' stroke='%23f59e0b' stroke-width='1.2'/%3E%3C/svg%3E\")";

export default function ForBrandsNew() {
  return (
    <section
      id="para-marcas"
      className="bg-background relative overflow-hidden py-20 sm:py-24"
    >
      {/* Panal de fondo, tenue y desvanecido hacia los bordes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: honeycombBg,
          backgroundSize: "41.569px 72px",
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 65%, black, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="reveal animate-fade-in-up grid items-end gap-6 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <span className="inline-block rounded-full bg-amber-400 px-4 py-1 text-sm font-semibold text-white shadow-md">
              Para marcas
            </span>
            <h2 className="mt-5 text-3xl leading-tight font-bold text-balance text-amber-950 sm:text-4xl lg:text-5xl">
              Maximiza tu presencia en cada{" "}
              <span className="text-amber-500">punto de venta</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-relaxed text-amber-950/75 sm:text-lg">
              BeeHouse te da el <mark className="highlight">control total</mark>{" "}
              sobre la ejecución de{" "}
              <mark className="highlight">tus actividades comerciales</mark>.
              Sabe exactamente qué pasa con tus productos en cada tienda, en
              tiempo real.
            </p>
            <a
              href="https://beehouse.com.mx/clientes/registro"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-amber-950 px-6 py-3 text-sm font-semibold text-amber-50 shadow-md transition hover:bg-amber-900 sm:text-base"
            >
              Registra tu marca
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/*
          Panal de características
          - móvil: lista de tarjetas redondeadas
          - sm: 2 columnas de hexágonos encajados
          - lg: 4 columnas en zigzag
          Cada hexágono mide ~1/1.75 (sm) o ~1/3.25 (lg) del ancho (un pelín menos
          para que el redondeo no rompa la fila) y se encima
          un 25% con el anterior; el pb compensa el desplazamiento vertical.
        */}
        <ul className="mt-14 flex flex-col gap-4 sm:mx-auto sm:mt-16 sm:max-w-xl sm:flex-row sm:flex-wrap sm:justify-center sm:gap-0 sm:pb-[24.7%] lg:max-w-none lg:pb-[13.3%]">
          {features.map((f, i) => {
            const Icon = f.icon;
            const odd = i % 2 === 1;
            return (
              <li
                key={f.title}
                className={cn(
                  "group reveal animate-zoom-in relative",
                  // Móvil: tarjeta normal
                  "rounded-3xl border-2 border-amber-200 bg-amber-50 p-6",
                  // sm+: celda hexagonal
                  "sm:aspect-[100/86.6] sm:w-[57%] sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0",
                  "lg:w-[30.7%]",
                  odd && "sm:-ml-[14.25%] sm:translate-y-1/2 lg:-ml-[7.675%]",
                  i === 2 && "lg:-ml-[7.675%]",
                )}
              >
                {/* Forma del hexágono (solo sm+) */}
                <svg
                  className="absolute inset-0 hidden h-full w-full drop-shadow-sm sm:block"
                  viewBox={`0 0 ${HEX_W} ${HEX_H}`}
                  aria-hidden="true"
                >
                  <polygon
                    points={flatHex(2.5)}
                    className="fill-amber-50 stroke-amber-300 transition-colors duration-300 group-hover:fill-amber-100"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Contenido: en sm+ ocupa el rectángulo central del hexágono */}
                <div className="relative flex h-full gap-4 sm:mx-auto sm:w-[68%] sm:flex-col sm:items-center sm:justify-center sm:gap-0 sm:text-center">
                  <div className="group-hover:animate-jelly relative size-14 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 sm:size-12 lg:size-14">
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute inset-0"
                      aria-hidden="true"
                    >
                      <polygon
                        points={badgeHex}
                        fill="#f6a821"
                        stroke="#fde3a0"
                        strokeWidth="8"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Icon className="absolute inset-0 m-auto size-6 text-white sm:size-5 lg:size-6" />
                  </div>

                  <div className="sm:mt-2">
                    <span className="text-xs font-bold tracking-widest text-amber-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-amber-950 sm:text-base lg:text-lg">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-amber-950/70 sm:text-[13px] md:text-sm lg:text-[13px] xl:text-sm">
                      {f.text}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
