const steps = [
  {
    number: '01',
    title: 'Sígueme en Instagram',
    subtitle: '@joseangel_training',
    icon: '📱',
    highlight: false,
  },
  {
    number: '02',
    title: 'Sesión Diagnóstico',
    subtitle: 'Completamente Gratuita',
    icon: '🔍',
    highlight: true,
  },
  {
    number: '03',
    title: 'Elige tu Plan',
    subtitle: 'Básico o Pro',
    icon: '📋',
    highlight: false,
  },
  {
    number: '04',
    title: 'Transforma tu Cuerpo',
    subtitle: 'Resultados Reales',
    icon: '📈',
    highlight: false,
  },
]

export default function HowItWorks() {
  return (
    <section id="proceso" className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-16 lg:mb-20 text-center">
          <p className="text-[#E7AE06] text-xs tracking-[0.4em] uppercase font-bold mb-4">
            Cómo funciona
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-none tracking-wide">
            EL CAMINO HACIA<br />
            <span className="text-[#E7AE06]">TU TRANSFORMACIÓN</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E7AE06] mt-6 mx-auto" />
          <p className="text-white/40 text-sm max-w-md mx-auto mt-6 leading-relaxed">
            Un proceso claro y probado que convierte a principiantes en atletas comprometidos con sus resultados.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7AE06]/30 to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`relative group flex flex-col p-7 border transition-all duration-300 hover:border-[#E7AE06]/50 ${
                  step.highlight
                    ? 'bg-[#E7AE06]/5 border-[#E7AE06]/40'
                    : 'bg-[#111111] border-white/8'
                }`}
              >
                {step.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E7AE06] to-[#AF7503]" />
                )}

                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 flex items-center justify-center border font-display text-xl tracking-wider ${
                    step.highlight
                      ? 'bg-[#E7AE06] text-black border-[#E7AE06]'
                      : 'bg-transparent text-white/40 border-white/15'
                  }`}>
                    {step.number}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-white tracking-wide leading-tight mb-1">
                  {step.title}
                </h3>
                <p className={`text-xs tracking-widest uppercase mb-4 font-bold ${
                  step.highlight ? 'text-[#E7AE06]' : 'text-white/35'
                }`}>
                  {step.subtitle}
                </p>
                {/* Arrow indicator */}
                <div className="mt-6 flex items-center gap-2 text-[#E7AE06]/40 text-xs tracking-widest uppercase">
                  <div className="flex-1 h-px bg-[#E7AE06]/15" />
                  <span className="text-[#E7AE06]">›</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-6">
            Todo comienza con una conversación. Sin compromiso.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 bg-[#E7AE06] text-black text-xs font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#AF7503] transition-colors"
          >
            Agendar Sesión Diagnóstico Gratis →
          </a>
        </div>

      </div>
    </section>
  )
}
