import { Mail, Phone } from "lucide-react";

const links = [
  { href: "#como-funciona", label: "¿Cómo funciona?" },
  { href: "#para-marcas", label: "Para marcas" },
  { href: "#para-promotores", label: "Para promotores" },
  { href: "#caracteristicas", label: "Características" },
];

const linkClass =
  "text-sm text-amber-950/65 transition-colors hover:text-amber-600";

export default function FooterNew() {
  return (
    <footer className="border-t-4 border-amber-400 bg-amber-50 text-amber-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr]">
          {/* Marca */}
          <div className="sm:col-span-2 md:col-span-1">
            <img
              src="/logotipo-bee-house.png"
              alt="BeeHouse"
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-amber-950/65">
              La plataforma digital que conecta marcas con promotores
              independientes para optimizar la ejecución en puntos de venta.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-amber-600 uppercase">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-amber-600 uppercase">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/523323119644?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Beehouse"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <Phone className="size-4" aria-hidden="true" />
                  +52 1 33 2311 9644
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@beehouse.mx"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <Mail className="size-4" aria-hidden="true" />
                  info@beehouse.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-amber-200 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-amber-950/50">
            © {new Date().getFullYear()} BeeHouse — Estrategias Retail
            Innovadoras. Todos los derechos reservados.
          </p>
          <a
            href="/terminos"
            className="text-xs text-amber-950/50 underline underline-offset-2 transition-colors hover:text-amber-600"
          >
            Términos y Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
}
