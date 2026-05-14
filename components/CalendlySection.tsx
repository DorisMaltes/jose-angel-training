'use client'

import Script from 'next/script'

const CALENDLY_URL =
  'https://calendly.com/joseang2103/30min?background_color=0a0a0a&text_color=ffffff&primary_color=e7ae06'

export default function CalendlySection() {
  return (
    <section id="agendar" className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      {/* Top border */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7AE06]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[#E7AE06] text-xs tracking-[0.5em] uppercase font-bold mb-4 pt-6">
            Sin costo · Sin compromiso
          </p>
          <h2 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] text-white leading-none tracking-wide mb-4">
            AGENDA TU SESIÓN<br />
            <span className="text-[#E7AE06]">DIAGNÓSTICO GRATIS</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E7AE06] mx-auto mb-6" />
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            15 minutos contigo para evaluar tu nivel, entender tus metas y diseñar el plan exacto que necesitas.
            Sin rodeos — saldrás sabiendo exactamente qué hacer.
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            '⏱ 15 minutos',
            '📍 Videollamada',
            '🎯 Evaluación de objetivos',
            '📋 Plan preliminar incluido',
            '✅ 100% Gratuita',
          ].map((item) => (
            <span
              key={item}
              className="text-white/60 text-xs tracking-wide border border-white/10 bg-white/3 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Calendly inline widget */}
        <div className="border border-[#E7AE06]/20 bg-black overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Note below */}
        <p className="text-center text-white/25 text-xs mt-6 tracking-wide">
          Al agendar aceptas que José Ángel te contacte para confirmar tu cita.
        </p>

      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  )
}
