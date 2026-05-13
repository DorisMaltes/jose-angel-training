export default function ContactCTA() {
  return (
    <section id="contacto" className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Background radial gold */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(231,174,6,0.07)_0%,_transparent_70%)]" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7AE06]/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">

        {/* Label */}
        <p className="text-[#E7AE06] text-xs tracking-[0.5em] uppercase font-bold mb-6">
          Comienza Hoy
        </p>

        {/* Main headline */}
        <h2 className="font-display text-[clamp(3.5rem,10vw,8rem)] text-white leading-none tracking-wide mb-6">
          TU ESFUERZO<br />
          <span className="text-[#E7AE06]">VALE LA PENA</span>
        </h2>

        <div className="w-16 h-0.5 bg-[#E7AE06] mx-auto mb-8" />

        <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Escríbeme y comienza hoy tu cambio. Sin rodeos, sin plantillas genéricas.{' '}
          <span className="text-white/80">Tu plan, tu nivel, tu disciplina.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://www.instagram.com/joseangel_training"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#E7AE06] text-black text-sm font-bold tracking-[0.2em] uppercase px-10 py-5 hover:bg-[#AF7503] transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Escríbeme en Instagram</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-3 border border-white/20 text-white/70 text-sm tracking-[0.2em] uppercase px-10 py-5 hover:border-[#E7AE06]/50 hover:text-[#E7AE06] transition-all duration-300"
          >
            Ver Servicios
          </a>
        </div>

        {/* Instagram handle */}
        <div className="mt-0 pt-8 border-t border-white/10">
          <a
            href="https://www.instagram.com/joseangel_training"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 text-sm tracking-[0.2em] hover:text-[#E7AE06] transition-colors"
          >
            @joseangel_training
          </a>
        </div>

      </div>
    </section>
  )
}
