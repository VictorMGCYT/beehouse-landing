import { Mail, Phone } from "lucide-react";

export default function CTAFinalNew() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#f6a821] py-20 sm:py-28"
    >
      {/* "BEE" y "HOUSE" gigantes de fondo, como en el diseño */}
      <span
        className="reveal animate-slide-in-left animate-slide-distance-[20vw] pointer-events-none absolute top-4 -left-3 text-[28vw] leading-none font-black text-white/20 select-none md:text-[16vw] xl:text-[14rem]"
        aria-hidden="true"
      >
        BEE
      </span>
      <span
        className="reveal animate-slide-in-right animate-slide-distance-[20vw] pointer-events-none absolute -right-3 bottom-4 text-[28vw] leading-none font-black text-white/20 select-none md:text-[16vw] xl:text-[14rem]"
        aria-hidden="true"
      >
        HOUSE
      </span>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="reveal animate-bounce-fade-in inline-block rounded-full bg-amber-950 px-4 py-1 text-sm font-semibold text-amber-50 shadow-md">
          Empieza hoy
        </span>

        {/* Título dentro de un hexágono alargado (borde = capa exterior) */}
        <div className="reveal animate-zoom-in hex-frame mt-6 bg-amber-950 p-[3px]">
          <div className="hex-frame bg-background px-10 py-8 sm:px-16 sm:py-10">
            <h2 className="text-3xl leading-tight font-bold text-balance text-amber-950 sm:text-4xl lg:text-5xl">
              ¿Listo para{" "}
              <span className="text-amber-500">transformar tu presencia</span>{" "}
              en puntos de venta?
            </h2>
          </div>
        </div>

        {/* Tarjeta de contacto */}
        <div className="reveal animate-slide-up-fade bg-background/95 mx-auto mt-8 max-w-xl rounded-[2.5rem] p-8 shadow-xl sm:p-10">
          <img
            src="/logotipo-bee-house.png"
            alt="BeeHouse"
            className="mx-auto h-20 w-auto"
          />
          <p className="mt-5 leading-relaxed text-amber-950/75">
            Únete a las marcas que ya están optimizando su{" "}
            <mark className="highlight">ejecución comercial</mark> con BeeHouse.
            Contáctanos y descubre todo lo que podemos hacer por tu negocio.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/523323119644?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Beehouse"
              className="inline-flex items-center gap-2 rounded-full bg-amber-950 px-6 py-3 font-semibold text-amber-50 shadow-md transition hover:bg-amber-900"
            >
              <Phone className="size-4" aria-hidden="true" />
              +52 33 2311 9644
            </a>
            <a
              href="mailto:info@beehouse.mx"
              className="inline-flex items-center gap-2 rounded-full border-2 border-amber-950/15 px-6 py-3 font-semibold text-amber-950 transition hover:border-amber-400 hover:bg-amber-50"
            >
              <Mail className="size-4" aria-hidden="true" />
              info@beehouse.mx
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
