const reasons = [
  {
    icon: '🏅',
    number: '01',
    title: 'Atleta de Alto Rendimiento',
    desc: 'No teoría — experiencia competitiva real en halterofilia. Sabes que el plan viene de quien ha estado en la plataforma.',
  },
  {
    icon: '🎯',
    number: '02',
    title: 'Técnica Correcta desde el Día 1',
    desc: 'Corrección personalizada en cada sesión. Entrenamos para progresar, no para acumular lesiones.',
  },
  {
    icon: '📋',
    number: '03',
    title: 'Plan Diseñado para Ti',
    desc: 'Sin plantillas genéricas. Cada plan se ajusta a tus objetivos, tu nivel, tu deporte y tu disponibilidad.',
  },
  {
    icon: '🌐',
    number: '04',
    title: 'Presencial u Online',
    desc: 'Espacio propio equipado en Villahermosa o seguimiento remoto para cualquier ciudad de México.',
  },
  {
    icon: '📊',
    number: '05',
    title: 'Seguimiento Constante',
    desc: 'Ajuste de cargas mensual, retroalimentación semanal y comunicación directa con tu entrenador.',
  },
  {
    icon: '💰',
    number: '06',
    title: 'Por lo Mismo que un Gym',
    desc: 'Entrenamiento personalizado de alto rendimiento al precio de una mensualidad convencional.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-[#E7AE06] text-xs tracking-[0.4em] uppercase font-bold mb-4">
            Diferenciadores
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-none tracking-wide">
              ¿POR QUÉ ENTRENAR<br />
              <span className="text-[#E7AE06]">CONMIGO?</span>
            </h2>
            <p className="text-white/45 text-sm max-w-xs leading-relaxed lg:text-right">
              La diferencia entre un plan que funciona y uno que no está en quién lo diseña.
            </p>
          </div>
          <div className="w-16 h-0.5 bg-[#E7AE06] mt-6" />
        </div>

        {/* VS Bar */}
        <div className="bg-[#0a0a0a] border border-[#E7AE06]/20 p-6 lg:p-8 mb-12 flex flex-col sm:flex-row items-center gap-6 lg:gap-0">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase mb-2">Gimnasio convencional</p>
            <p className="font-display text-3xl text-white/50 tracking-wide">$800–$1,200 / mes</p>
            <p className="text-white/30 text-xs mt-1">Sin atención personalizada · Sin plan · Sin seguimiento</p>
          </div>

          <div className="w-px h-16 bg-white/10 hidden sm:block mx-8" />
          <div className="text-white/25 font-display text-3xl tracking-widest hidden sm:block">VS</div>
          <div className="text-white/25 font-bold text-sm sm:hidden">VS</div>
          <div className="w-px h-16 bg-white/10 hidden sm:block mx-8" />

          <div className="flex-1 text-center sm:text-right">
            <p className="text-[#E7AE06] text-[10px] tracking-[0.3em] uppercase mb-2 font-bold">José Ángel — Plan básico</p>
            <p className="font-display text-3xl text-[#E7AE06] tracking-wide">$600–$800 / mes</p>
            <p className="text-white/50 text-xs mt-1">Plan personalizado · Corrección técnica · Seguimiento real</p>
          </div>
        </div>

        <div className="bg-[#E7AE06]/8 border border-[#E7AE06]/20 px-6 py-4 mb-16 flex items-start gap-3">
          <span className="text-[#E7AE06] text-lg flex-shrink-0">💡</span>
          <p className="text-white/70 text-sm leading-relaxed">
            <span className="text-white font-medium">Este es el argumento ganador:</span>{' '}
            por lo mismo que pagas en un gym, tienes entrenador personal de alto rendimiento.
            El cliente no siente que gasta más — siente que obtiene mucho más por su dinero.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group bg-[#0a0a0a] border border-white/8 p-7 hover:border-[#E7AE06]/40 transition-all duration-300 hover:bg-[#0f0f0f]"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{reason.icon}</span>
                <span className="font-display text-4xl text-white/8 tracking-wider group-hover:text-[#E7AE06]/15 transition-colors">
                  {reason.number}
                </span>
              </div>
              <h3 className="font-display text-xl text-white tracking-wide mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
