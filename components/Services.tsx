const services = [
  {
    id: 'prep-fisica',
    icon: '⚡',
    title: 'Preparación Física',
    subtitle: 'Fuerza · Resistencia · Rendimiento',
    description:
      'Planes auxiliares diseñados para atletas y deportistas que buscan mejorar su condición física sin interferir con su deporte principal.',
    features: [
      'Planes auxiliares para natación, atletismo, basquetbol y más',
      'Mejora de fuerza, resistencia, potencia y condición general',
      'Ejercicios complementarios adaptados a tu deporte',
      'Para atletas competitivos y deportistas recreativos',
      'Seguimiento continuo y ajuste de cargas mensual',
    ],
    modes: ['Presencial', 'Online'],
    accentColor: '#E7AE06',
  },
  {
    id: 'halterofilia',
    icon: '🏋️',
    title: 'Halterofilia',
    subtitle: 'Técnica · Potencia · Competencia',
    description:
      'Técnica especializada de arranque y envión desde nivel básico hasta preparación para competencia, respaldada por experiencia real de alto rendimiento.',
    features: [
      'Técnica de arranque y envión desde básico hasta avanzado',
      'Corrección de errores que limitan el progreso y causan lesiones',
      'Desarrollo de fuerza, potencia y explosividad',
      'Niveles: básico, intermedio, avanzado y competencia',
      'Único servicio especializado con respaldo de atleta elite',
    ],
    modes: ['Presencial', 'Online'],
    accentColor: '#E7AE06',
    featured: true,
  },
]

const commonErrors = [
  { label: 'Espalda Encorvada', icon: '⚠' },
  { label: 'Rodillas Hacia Adentro', icon: '⚠' },
  { label: 'Posición Incorrecta', icon: '⚠' },
  { label: 'Flexión Temprana de Brazos', icon: '⚠' },
  { label: 'Ruta de la Barra Incorrecta', icon: '⚠' },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-[#E7AE06] text-xs tracking-[0.4em] uppercase font-bold mb-4">
            ¿Qué ofrecemos?
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-none tracking-wide">
            SERVICIOS QUE<br />
            <span className="text-[#E7AE06]">GENERAN RESULTADOS</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E7AE06] mt-6" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-[#111111] border transition-all duration-300 hover:border-[#E7AE06]/50 group p-8 lg:p-10 ${
                service.featured
                  ? 'border-[#E7AE06]/40'
                  : 'border-white/8'
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E7AE06] to-[#AF7503]" />
              )}

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#E7AE06]/10 border border-[#E7AE06]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#E7AE06]/20 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-3xl lg:text-4xl text-white tracking-wide leading-none">
                    {service.title}
                  </h3>
                  <p className="text-[#E7AE06] text-xs tracking-[0.2em] uppercase mt-1">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-7">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span className="text-[#E7AE06] text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-white/65 text-sm leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Modality badges */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/8">
                <span className="text-white/35 text-[10px] tracking-widest uppercase">Disponible:</span>
                {service.modes.map((mode) => (
                  <span
                    key={mode}
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 border border-[#E7AE06]/30 text-[#E7AE06] bg-[#E7AE06]/8"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Error correction block */}
        <div className="bg-[#111111] border border-white/8 p-8 lg:p-12">
          <div className="text-center mb-10">
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-3">Diagnóstico técnico</p>
            <h3 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-white tracking-wide leading-none">
              CORREGIMOS LOS ERRORES QUE<br />
              <span className="text-[#E7AE06]">LIMITAN TU PROGRESO</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {commonErrors.map((error) => (
              <div
                key={error.label}
                className="flex flex-col items-center gap-3 bg-black/50 border border-[#E7AE06]/15 p-4 text-center"
              >
                <span className="text-red-500/70 text-xl">✗</span>
                <span className="text-white/60 text-xs leading-snug">{error.label}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-white/40 text-sm max-w-xl mx-auto">
            Te enseño la técnica correcta para que entrenes seguro, efectivo y sin lesiones.
          </p>
        </div>

      </div>
    </section>
  )
}
