import Image from 'next/image'

// ─────────────────────────────────────────────────────────────
// CÓMO AGREGAR LAS FOTOS:
//
// 1. Guarda las imágenes en:  public/results/
//    Nómbralas:  resultado-1.jpg, resultado-2.jpg ... resultado-6.jpg
//
// 2. En cada tarjeta, cambia  hasPhoto: false  →  hasPhoto: true
//    y la sección de placeholder se reemplaza automáticamente
//    por la imagen real con next/image.
// ─────────────────────────────────────────────────────────────

type Result = {
  id: number
  src: string
  title: string
  desc: string
  hasPhoto: boolean
}

const results: Result[] = [
  {
    id: 1,
    src: '/results/resultado-1.jpg',
    title: 'Transformación Total',
    desc: 'Agrega aquí la descripción del resultado de este cliente.',
    hasPhoto: false,
  },
  {
    id: 2,
    src: '/results/resultado-2.jpg',
    title: 'Fuerza y Potencia',
    desc: 'Agrega aquí la descripción del resultado de este cliente.',
    hasPhoto: false,
  },
  {
    id: 3,
    src: '/results/resultado-3.jpg',
    title: 'Halterofilia — Técnica',
    desc: 'Agrega aquí la descripción del resultado de este cliente.',
    hasPhoto: false,
  },
  {
    id: 4,
    src: '/results/resultado-4.jpg',
    title: 'Preparación Deportiva',
    desc: 'Agrega aquí la descripción del resultado de este cliente.',
    hasPhoto: false,
  },
  {
    id: 5,
    src: '/results/resultado-5.jpg',
    title: 'Composición Corporal',
    desc: 'Agrega aquí la descripción del resultado de este cliente.',
    hasPhoto: false,
  },
  {
    id: 6,
    src: '/results/resultado-6.jpg',
    title: 'Rendimiento Online',
    desc: 'Agrega aquí la descripción del resultado de este cliente.',
    hasPhoto: false,
  },
]

export default function Results() {
  return (
    <section id="resultados" className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#E7AE06] text-xs tracking-[0.4em] uppercase font-bold mb-4">
            Prueba real
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-none tracking-wide">
              RESULTADOS QUE<br />
              <span className="text-[#E7AE06]">HABLAN SOLOS</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed lg:text-right">
              Cada transformación es el reflejo de disciplina constante y un plan diseñado para ti.
            </p>
          </div>
          <div className="w-16 h-0.5 bg-[#E7AE06] mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {results.map((result) => (
            <div
              key={result.id}
              className="group relative overflow-hidden border border-white/8 hover:border-[#E7AE06]/40 transition-all duration-300"
            >
              {/* Image area — aspect ratio 4:5 (portrait, estilo Instagram) */}
              <div className="relative aspect-[4/5] bg-[#0a0a0a] overflow-hidden">

                {result.hasPhoto ? (
                  // ── FOTO REAL ──────────────────────────────────
                  // Cuando tengas la foto, cambia hasPhoto: true
                  // y la imagen se mostrará aquí automáticamente.
                  <>
                    <Image
                      src={result.src}
                      alt={result.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </>
                ) : (
                  // ── PLACEHOLDER (mientras no hay foto) ─────────
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 border border-[#E7AE06]/20 flex items-center justify-center">
                      <span className="text-3xl opacity-40">📸</span>
                    </div>
                    <div className="text-center px-6">
                      <p className="font-display text-[#E7AE06]/40 text-lg tracking-widest mb-1">
                        PRÓXIMAMENTE
                      </p>
                      <p className="text-white/20 text-[10px] tracking-widest uppercase">
                        {result.src.replace('/results/', '')}
                      </p>
                    </div>
                    {/* Gold corner accents */}
                    <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#E7AE06]/25" />
                    <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#E7AE06]/25" />
                    <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#E7AE06]/25" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#E7AE06]/25" />
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="bg-[#0d0d0d] border-t border-white/8 px-5 py-4">
                <p className="font-display text-white text-lg tracking-wide leading-none mb-1">
                  {result.title}
                </p>
                <p className="text-white/40 text-xs leading-snug">
                  {result.desc}
                </p>
              </div>

              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E7AE06] to-[#AF7503] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-4">
            Síguenos en Instagram para ver más transformaciones
          </p>
          <a
            href="https://www.instagram.com/joseangel_training"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E7AE06] text-xs font-bold tracking-[0.2em] uppercase border-b border-[#E7AE06]/40 pb-0.5 hover:border-[#E7AE06] transition-colors"
          >
            @joseangel_training →
          </a>
        </div>

      </div>
    </section>
  )
}
