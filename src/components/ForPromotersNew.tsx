import { BellRing, Clock, HandCoins, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import HexBadge from "./HexBadge";

const perks = [
  {
    icon: BellRing,
    title: "Modelo bajo demanda",
    text: "Recibe notificaciones de visitas en tu área y elige las que mejor se adapten a ti. Sin compromisos fijos.",
  },
  {
    icon: Clock,
    title: "Total flexibilidad",
    text: "Tú decides cuándo y dónde trabajas. Acepta únicamente las visitas que se adapten a tu disponibilidad.",
  },
  {
    icon: HandCoins,
    title: "Ingresos adicionales",
    text: "Cada visita completada se traduce en un pago directo. Aprovecha tu tiempo libre para generar dinero extra.",
  },
];

export default function ForPromotersNew() {
  return (
    <section
      id="para-promotores"
      className="bg-muted relative overflow-hidden py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Encabezado */}
        <div className="reveal animate-fade-in-right">
          <span className="inline-block rounded-full bg-amber-400 px-4 py-1 text-sm font-semibold text-white shadow-md">
            Para promotores freelance
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-bold text-balance text-amber-950 sm:text-4xl lg:text-5xl">
            Genera ingresos con total{" "}
            <span className="text-amber-500">flexibilidad</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-amber-950/75 sm:text-lg">
            <mark className="highlight">Sé tu propio jefe.</mark> Acepta visitas
            cuando quieras y genera ingresos adicionales aprovechando tu tiempo
            libre.
          </p>

          {/* Notificación de ejemplo: muestra el modelo bajo demanda */}
          <div
            className="reveal animate-swing-drop-in relative mt-10 max-w-sm"
            aria-hidden="true"
          >
            <div className="absolute -inset-3 -rotate-2 rounded-3xl bg-amber-200/60" />
            <div className="bg-background motion-safe:animate-float animate-duration-[3s] animate-iteration-count-infinite relative flex items-center gap-4 rounded-2xl border border-amber-200 p-4 shadow-lg">
              <HexBadge icon={MapPin} className="size-12" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-amber-600">
                  Nueva visita cerca de ti
                </p>
                <p className="truncate text-sm font-bold text-amber-950">
                  Tienda Centro · a 1.2 km
                </p>
                <p className="text-xs text-amber-950/60">Hoy, 4:00 pm</p>
              </div>
              <span className="rounded-full bg-amber-950 px-3 py-1.5 text-xs font-semibold text-amber-50">
                Aceptar
              </span>
            </div>
          </div>
        </div>

        {/* Beneficios en zigzag (desde lg) */}
        <ul className="flex flex-col gap-5">
          {perks.map((p, i) => {
            const featured = i === 1;
            return (
              <li
                key={p.title}
                className={cn(
                  "group reveal animate-fade-in-left flex items-start gap-5 rounded-3xl border-2 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7",
                  featured
                    ? "border-amber-400 bg-amber-400 lg:mr-12"
                    : "bg-background border-amber-200 lg:ml-12",
                )}
              >
                <HexBadge
                  icon={p.icon}
                  variant={featured ? "dark" : "honey"}
                  className="group-hover:animate-jelly"
                />
                <div>
                  <h3 className="text-lg font-bold text-amber-950">
                    {p.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 text-sm leading-relaxed sm:text-base",
                      featured ? "text-amber-950/80" : "text-amber-950/70",
                    )}
                  >
                    {p.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
