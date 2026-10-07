import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "#como-funciona", label: "¿Cómo funciona?" },
  { href: "#para-marcas", label: "Para marcas" },
  { href: "#para-promotores", label: "Para promotores" },
  { href: "#caracteristicas", label: "Características" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={`bg-background/45 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <img
              src="/logotipo-bee-house.png"
              alt="BeeHouse"
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://beehouse.com.mx/clientes"
              className={cn(
                buttonVariants({ size: "sm" }),
                "rounded-full max-md:hidden",
              )}
            >
              Iniciar sesión
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menú"
              className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg p-2 transition-colors md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`bg-background border-border overflow-hidden border-t transition-all duration-200 md:hidden ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://beehouse.com.mx/clientes"
            onClick={close}
            className={cn(buttonVariants(), "mt-2 w-full rounded-full")}
          >
            Iniciar sesión
          </a>
        </div>
      </div>
    </nav>
  );
}
