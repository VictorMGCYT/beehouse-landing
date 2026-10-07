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
      className={`fixed top-0 left-0 right-0 z-50 bg-background/45 backdrop-blur-md border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex-shrink-0">
            <img
              src="/logotipo-bee-house.png"
              alt="BeeHouse"
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
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
                "max-md:hidden rounded-full",
              )}
            >
              Iniciar sesión
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menú"
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 bg-background border-t border-border ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
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
