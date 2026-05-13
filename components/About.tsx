import Image from 'next/image'

const credentials = [
  {
    icon: '🎓',
    title: 'Licenciado en Cultura Física',
    desc: 'Dirección de la Cultura Física y el Deporte',
  },
  {
    icon: '🏅',
    title: 'Atleta de Alto Rendimiento',
    desc: 'Halterofilia — Trayectoria competitiva amplia',
  },
  {
    icon: '🏆',
    title: 'Certificado Nivel 2 en Halterofilia',
    desc: 'Avalado por la Federación Mexicana de Levantamiento de Pesas',
  },
  {
    icon: '👥',
    title: 'Atención Personalizada',
    desc: 'Presencial en Villahermosa y online a todo México',
  },
  {
    icon: '🏋️',
    title: 'Espacio Propio Equipado',
    desc: 'Barra, pesas, plataforma y equipo completo',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#111111] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-[#E7AE06] text-xs tracking-[0.4em] uppercase font-bold mb-4">
            Quién soy
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-none tracking-wide">
            EL ENTRENADOR<br />
            <span className="text-[#E7AE06]">DETRÁS DEL MÉTODO</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E7AE06] mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            {/* Gold frame accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#E7AE06] z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#E7AE06] z-10" />

            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/entrenador.png"
                alt="José Ángel Sánchez — Entrenador Personal y Coach Deportivo"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Side overlay for integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-8 -right-4 lg:-right-8 bg-black border border-[#E7AE06]/30 p-5 shadow-2xl z-20">
              <p className="text-[#E7AE06] text-3xl font-display tracking-wider">100%</p>
              <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Planes Personalizados</p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="text-[#E7AE06] text-xs tracking-[0.4em] uppercase font-bold mb-2">
              José Ángel Sánchez
            </p>
            <h3 className="font-display text-4xl lg:text-5xl text-white tracking-wide leading-none mb-6">
              ENTRENADOR PERSONAL<br />Y COACH DEPORTIVO
            </h3>

            <blockquote className="border-l-2 border-[#E7AE06] pl-5 mb-8">
              <p className="text-white/70 text-lg italic leading-relaxed">
                "No vendemos clases. Ofrecemos resultados."
              </p>
            </blockquote>

            <div className="space-y-5 text-white/55 text-sm leading-relaxed mb-10">
              <p>
                Licenciado en Dirección de la Cultura Física y el Deporte, y atleta de alto rendimiento
                con amplia trayectoria competitiva en halterofilia. Mi experiencia combina formación
                académica sólida con años de práctica real en la disciplina.
              </p>
              <p>
                Lo que me hace diferente es simple: no soy un entrenador que solo vio videos.{' '}
                <span className="text-white/80">Soy un atleta que compite, que entiende el dolor del entrenamiento,
                que conoce los errores porque los viví.</span> Esa es la metodología que transmito a cada cliente.
              </p>
              <p>
                Cada persona recibe un plan diseñado específicamente para sus objetivos, su nivel
                y su disciplina. El seguimiento constante, la corrección técnica y el acompañamiento
                son la base de cada servicio.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="flex items-start gap-3 bg-black/40 border border-white/8 p-4 hover:border-[#E7AE06]/30 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{cred.icon}</span>
                  <div>
                    <p className="text-white text-xs font-bold tracking-wide mb-0.5">{cred.title}</p>
                    <p className="text-white/40 text-xs leading-snug">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-[#E7AE06] text-black text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#AF7503] transition-colors"
              >
                Trabajar con José Ángel →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
