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
