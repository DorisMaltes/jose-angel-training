'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import logoNavBar from '../app/logoNavBar.png'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Precios', href: '#precios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Agendar Gratis', href: '#agendar', highlight: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="relative w-10 h-10 lg:w-12 lg:h-12">
            <Image
              src={logoNavBar}
              alt="José Ángel Training"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-white text-sm leading-none tracking-widest uppercase">José Ángel</p>
            <p className="text-[#E7AE06] text-[10px] tracking-[0.3em] uppercase leading-none mt-0.5">Training</p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={
                  l.highlight
                    ? 'border border-[#E7AE06]/60 text-[#E7AE06] text-xs font-bold tracking-widest uppercase px-4 py-2 hover:bg-[#E7AE06] hover:text-black transition-all duration-200'
                    : 'text-white/70 hover:text-[#E7AE06] text-sm tracking-widest uppercase transition-colors duration-200'
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 bg-[#E7AE06] text-black text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#AF7503] transition-colors duration-200"
        >
          Escríbeme →
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-black/98 border-t border-white/10 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={closeMenu}
                className={
                  l.highlight
                    ? 'block text-[#E7AE06] font-bold text-sm tracking-widest uppercase transition-colors py-2 border-b border-[#E7AE06]/20'
                    : 'block text-white/70 hover:text-[#E7AE06] text-sm tracking-widest uppercase transition-colors py-2 border-b border-white/5'
                }
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="inline-block w-full text-center bg-[#E7AE06] text-black text-xs font-bold tracking-widest uppercase px-6 py-3 mt-2 hover:bg-[#AF7503] transition-colors"
            >
              Escríbeme →
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
