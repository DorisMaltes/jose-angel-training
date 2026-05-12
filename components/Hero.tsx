import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(231,174,6,0.08)_0%,_transparent_60%)]" />

      {/* Diagonal gold line element */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#E7AE06]/40 to-transparent" style={{ right: '42%' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">

        {/* Left: Text content */}
        <div className="flex flex-col justify-center pt-28 pb-20 lg:pt-0 lg:pb-0 lg:pr-16 z-10">

          {/* Location badge */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-2 border border-[#E7AE06]/40 bg-[#E7AE06]/8 text-[#E7AE06] text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2">
              <span>Villahermosa, Tabasco</span>
              <span className="w-1 h-1 rounded-full bg-[#E7AE06]" />
              <span>Presencial + Online</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="font-display leading-none mb-2 animate-fade-in-up delay-100">
            <span className="block text-[clamp(4rem,10vw,8rem)] text-white tracking-wide">
              ENTRENA
            </span>
            <span className="block text-[clamp(3.5rem,9vw,7rem)] text-[#E7AE06] tracking-wide">
              CON PROPÓSITO,
            </span>
            <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-white/80 tracking-wide">
              TRANSFORMA TU MEJOR VERSIÓN
            </span>
          </h1>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-[#E7AE06] mb-8 mt-4 animate-fade-in-up delay-200" />

          {/* Description */}
          <p className="text-white/55 text-base lg:text-lg max-w-md leading-relaxed mb-10 animate-fade-in-up delay-300">
            Entrenamiento personalizado con la metodología y mentalidad de un atleta de élite.{' '}
            <span className="text-white/80 font-medium">No vendemos clases — ofrecemos resultados.</span>
          </p>

          {/* Service tags */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up delay-300">
            {['Preparación Física', 'Halterofilia', 'Corrección de Errores'].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 text-white/60 text-xs tracking-widest uppercase border border-white/15 px-4 py-2"
              >
                <span className="w-1.5 h-1.5 bg-[#E7AE06] rounded-full" />
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-400">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 bg-[#E7AE06] text-black text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#AF7503] transition-all duration-300"
            >
              <span>Comenzar Hoy</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-[#E7AE06] hover:text-[#E7AE06] transition-all duration-300"
            >
              Ver Servicios
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 animate-fade-in-up delay-500">
            <div className="flex items-center gap-3 text-white/30 text-xs tracking-widest uppercase">
              <span className="text-[#E7AE06] font-bold text-sm">5,482</span>
              <span>seguidores</span>
              <span className="w-px h-4 bg-white/15" />
              <span className="text-[#E7AE06] font-bold text-sm">@joseangel_training</span>
            </div>
          </div>
        </div>

        {/* Right: Trainer image */}
        <div className="relative hidden lg:block">
          {/* Gold accent vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E7AE06] to-transparent z-10" />
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E7AE06]/25 to-transparent z-10" />

          {/* Image container */}
          <div className="relative h-full w-full">
            <Image
              src="/entrenador.png"
              alt="José Ángel Sánchez — Entrenador Personal y Atleta de Alto Rendimiento"
              fill
              className="object-cover object-center"
              priority
              sizes="50vw"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating credential card */}
          <div className="absolute bottom-12 right-8 bg-black/80 border border-[#E7AE06]/30 backdrop-blur-sm p-5 max-w-xs">
            <p className="text-[#E7AE06] text-[10px] tracking-[0.3em] uppercase font-bold mb-2">Entrenador Certificado</p>
            <p className="text-white font-display text-2xl tracking-wide leading-none mb-1">JOSÉ ÁNGEL</p>
            <p className="text-white/60 text-xs">Lic. Dirección de la Cultura Física y el Deporte</p>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7AE06]" />
              <span className="text-white/50 text-[10px] tracking-widest uppercase">Atleta de Alto Rendimiento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile trainer image strip */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="/entrenador.png"
            alt="José Ángel Training"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      </div>

      {/* Bottom tagline bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/50 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {['Fuerza', 'Disciplina', 'Constancia'].map((word, i) => (
              <span key={word} className="text-white/25 text-[10px] tracking-[0.3em] uppercase flex items-center gap-6">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-[#E7AE06]/40" />}
                {word}
              </span>
            ))}
          </div>
          <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase hidden sm:block">
            Disciplina Hoy · Resultados Mañana
          </p>
        </div>
      </div>
    </section>
  )
}
