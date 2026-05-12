import Image from 'next/image'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Precios', href: '#precios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo2.png"
                  alt="José Ángel Training"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-white text-sm leading-none tracking-widest uppercase">José Ángel</p>
                <p className="text-[#E7AE06] text-[10px] tracking-[0.3em] uppercase leading-none mt-0.5">Training</p>
              </div>
            </div>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs mb-6">
              Entrenamiento personalizado de alto rendimiento. Preparación Física y Halterofilia presencial y online desde Villahermosa, Tabasco.
            </p>
            <div className="flex items-center gap-2 text-white/25 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7AE06]" />
              <span className="tracking-widest uppercase">Villahermosa, Tabasco · México</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/35 text-[10px] tracking-[0.4em] uppercase font-bold mb-5">Navegación</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#E7AE06] text-sm tracking-wide transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/35 text-[10px] tracking-[0.4em] uppercase font-bold mb-5">Contacto</p>
            <div className="space-y-4">
              <div>
                <p className="text-white/25 text-[10px] tracking-widest uppercase mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/joseangel_training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E7AE06] text-sm hover:text-white transition-colors"
                >
                  @joseangel_training
                </a>
              </div>
              <div>
                <p className="text-white/25 text-[10px] tracking-widest uppercase mb-1">Modalidades</p>
                <div className="flex gap-2">
                  <span className="text-[10px] border border-[#E7AE06]/30 text-[#E7AE06] px-2 py-0.5 tracking-widest uppercase">Presencial</span>
                  <span className="text-[10px] border border-white/15 text-white/40 px-2 py-0.5 tracking-widest uppercase">Online</span>
                </div>
              </div>
              <div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-[#E7AE06] text-black text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-[#AF7503] transition-colors mt-2"
                >
                  Comenzar Hoy →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © {year} José Ángel Training. Todos los derechos reservados.
          </p>
          <p className="text-white/15 text-xs tracking-[0.3em] uppercase">
            Disciplina Hoy · Resultados Mañana
          </p>
        </div>

      </div>
    </footer>
  )
}
