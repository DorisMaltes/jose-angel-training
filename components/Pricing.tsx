'use client'

import { useState } from 'react'

type Plan = {
  label: string
  price: string
  sessions: string
  note: string
  features: string[]
}

type Service = {
  id: string
  title: string
  icon: string
  basic: Plan
  pro?: Plan
}

const presencialServices: Service[] = [
  {
    id: 'prep-fisica-presencial',
    title: 'Preparación Física',
    icon: '⚡',
    basic: {
      label: 'Básico',
      price: '$650',
      sessions: '2 sesiones / semana',
      note: '≈ 8 sesiones al mes · Plan mensual incluido',
      features: [
        'Plan de entrenamiento mensual personalizado',
        '2 sesiones presenciales por semana en espacio equipado',
        'Corrección técnica en tiempo real',
        'Comunicación directa con José Ángel',
      ],
    },
    pro: {
      label: 'Pro',
      price: '$1,000',
      sessions: '4 sesiones / semana',
      note: '≈ 16 sesiones al mes · Seguimiento + ajustes semanales',
      features: [
        'Todo lo del Plan Básico',
        '4 sesiones presenciales por semana en espacio equipado',
        'Seguimiento semanal de progreso',
        'Ajuste de cargas y plan mensual',
        'Acceso prioritario a José Ángel',
      ],
    },
  },
  {
    id: 'halterofilia-presencial',
    title: 'Halterofilia',
    icon: '🏋️',
    basic: {
      label: 'Básico',
      price: '$850',
      sessions: '3 sesiones / semana',
      note: '≈ 12 sesiones al mes · Nivel básico–intermedio',
      features: [
        'Técnica de arranque y envión desde básico',
        '3 sesiones por semana con barra y plataforma completa',
        'Corrección de errores técnicos',
        'Comunicación directa con José Ángel',
      ],
    },
    pro: {
      label: 'Pro',
      price: '$1,200',
      sessions: '4 sesiones / semana',
      note: '≈ 16 sesiones al mes · Hasta nivel avanzado / competencia',
      features: [
        'Todo lo del Plan Básico',
        '4 sesiones por semana con plataforma completa',
        'Preparación para competencia',
        'Ajuste semanal de progresión técnica',
        'Evaluación de video de levantamientos',
      ],
    },
  },
]

const onlineServices: Service[] = [
  {
    id: 'prep-fisica-online',
    title: 'Preparación Física',
    icon: '⚡',
    basic: {
      label: 'Básico',
      price: '$650',
      sessions: 'Plan de entrenamiento cada 2 semanas',
      note: '2 videollamadas al mes · Retroalimentación continua por mensaje',
      features: [
        'Plan de entrenamiento actualizado cada 2 semanas',
        '2 sesiones de retroalimentación al mes: envías tu video de entrenamiento y José Ángel te da su retroalimentación',
        'Videollamada quincenal para platicar progreso, explicar el plan, ajustar y retroalimentación general',
        'Disponible en todo México',
      ],
    },
  },
  {
    id: 'halterofilia-online',
    title: 'Halterofilia',
    icon: '🏋️',
    basic: {
      label: 'Básico',
      price: '$1,000',
      sessions: 'Plan de entrenamiento semanal',
      note: '4 videollamadas al mes · Una por semana',
      features: [
        'Plan de entrenamiento actualizado cada semana',
        '4 videollamadas al mes (una por semana) para platicar avances, ajustar técnica y retroalimentación',
        'Seguimiento continuo de progresión técnica',
        'Disponible en todo México',
      ],
    },
  },
]

function ServiceCard({ service }: { service: Service }) {
  const hasPro = !!service.pro

  return (
    <div className={`grid grid-cols-1 ${hasPro ? 'sm:grid-cols-2' : ''} gap-4`}>
      {/* Basic plan */}
      <div className={`bg-[#0a0a0a] border border-white/8 p-6 hover:border-white/20 transition-colors ${!hasPro ? 'max-w-md' : ''}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">{service.icon}</span>
          <div>
            <p className="text-white text-xs font-bold tracking-wide">{service.title}</p>
            <p className="text-[10px] text-white/35 tracking-widest uppercase">{service.basic.label}</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl text-white tracking-wide">{service.basic.price}</span>
            <span className="text-white/40 text-xs">MXN / mes</span>
          </div>
          <p className="text-[#E7AE06] text-xs mt-1">{service.basic.sessions}</p>
          <p className="text-white/30 text-xs mt-0.5">{service.basic.note}</p>
        </div>
        <ul className="space-y-2 mb-6">
          {service.basic.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-white/30 text-xs mt-0.5 flex-shrink-0">✓</span>
              <span className="text-white/45 text-xs leading-snug">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="block w-full text-center border border-white/15 text-white/70 text-[10px] tracking-widest uppercase py-3 hover:border-[#E7AE06]/40 hover:text-[#E7AE06] transition-all"
        >
          Elegir Plan Básico
        </a>
      </div>

      {/* Pro plan */}
      {hasPro && service.pro && (
        <div className="relative bg-[#111111] border border-[#E7AE06]/40 p-6">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E7AE06] to-[#AF7503]" />
          <div className="absolute top-3 right-3">
            <span className="bg-[#E7AE06] text-black text-[9px] font-bold tracking-widest uppercase px-2 py-0.5">
              RECOMENDADO
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">{service.icon}</span>
            <div>
              <p className="text-white text-xs font-bold tracking-wide">{service.title}</p>
              <p className="text-[10px] text-[#E7AE06] tracking-widest uppercase font-bold">{service.pro.label}</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl text-[#E7AE06] tracking-wide">{service.pro.price}</span>
              <span className="text-white/40 text-xs">MXN / mes</span>
            </div>
            <p className="text-[#E7AE06]/80 text-xs mt-1">{service.pro.sessions}</p>
            <p className="text-white/30 text-xs mt-0.5">{service.pro.note}</p>
          </div>
          <ul className="space-y-2 mb-6">
            {service.pro.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#E7AE06] text-xs mt-0.5 flex-shrink-0">✓</span>
                <span className="text-white/65 text-xs leading-snug">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="block w-full text-center bg-[#E7AE06] text-black text-[10px] font-bold tracking-widest uppercase py-3 hover:bg-[#AF7503] transition-colors"
          >
            Elegir Plan Pro →
          </a>
        </div>
      )}
    </div>
  )
}

export default function Pricing() {
  const [tab, setTab] = useState<'presencial' | 'online'>('presencial')
  const services = tab === 'presencial' ? presencialServices : onlineServices

  return (
    <section id="precios" className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-[#E7AE06] text-xs tracking-[0.4em] uppercase font-bold mb-4">
            Inversión
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-none tracking-wide">
              PLANES Y<br />
              <span className="text-[#E7AE06]">PRECIOS</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Todos los planes incluyen plan personalizado y comunicación directa con José Ángel.
            </p>
          </div>
          <div className="w-16 h-0.5 bg-[#E7AE06] mt-6" />
        </div>

        {/* Mode tabs */}
        <div className="flex items-center gap-0 mb-12 border border-white/10 w-fit">
          <button
            onClick={() => setTab('presencial')}
            className={`px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all ${
              tab === 'presencial'
                ? 'bg-[#E7AE06] text-black'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            Presencial
          </button>
          <button
            onClick={() => setTab('online')}
            className={`px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all ${
              tab === 'online'
                ? 'bg-[#E7AE06] text-black'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            Online
          </button>
        </div>

        {/* Context note */}
        {tab === 'presencial' && (
          <div className="bg-black/40 border border-white/8 px-5 py-3 mb-8 flex items-center gap-3">
            <span className="text-[#E7AE06] text-sm">📍</span>
            <p className="text-white/45 text-xs">
              Sesiones en espacio propio equipado · Corrección técnica en tiempo real · Villahermosa, Tabasco
            </p>
          </div>
        )}
        {tab === 'online' && (
          <div className="bg-black/40 border border-white/8 px-5 py-3 mb-8 flex items-center gap-3">
            <span className="text-[#E7AE06] text-sm">🌐</span>
            <p className="text-white/45 text-xs">
              Planificación digital · Seguimiento asíncrono · Retroalimentación por video · Disponible en todo México
            </p>
          </div>
        )}

        {/* Service cards */}
        <div className="space-y-8">
          {services.map((service) => (
            <div key={service.id}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{service.icon}</span>
                <h3 className="font-display text-2xl text-white tracking-wide">{service.title}</h3>
                <div className="flex-1 h-px bg-white/8" />
              </div>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-white/30 text-xs mb-4">
            ¿Tienes dudas sobre qué plan elegir? Platícame tu caso.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#E7AE06] text-xs tracking-widest uppercase border-b border-[#E7AE06]/40 pb-0.5 hover:border-[#E7AE06] transition-colors"
          >
            Asesoría gratuita →
          </a>
        </div>

      </div>
    </section>
  )
}
