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
  pro: Plan
}

const presencialServices: Service[] = [
  {
    id: 'prep-fisica-presencial',
    title: 'Preparación Física',
    icon: '⚡',
    basic: {
      label: 'Básico',
      price: '$600',
      sessions: '4 sesiones / mes',
      note: '≈ $150 por sesión · Plan mensual incluido',
      features: [
        'Plan de entrenamiento mensual personalizado',
        '4 sesiones presenciales en espacio equipado',
        'Corrección técnica en tiempo real',
        'Comunicación directa con José Ángel',
      ],
    },
    pro: {
      label: 'Pro',
      price: '$1,000',
      sessions: '8 sesiones / mes',
      note: '≈ $125 por sesión · Seguimiento + ajustes semanales',
      features: [
        'Todo lo del Plan Básico',
        '8 sesiones presenciales en espacio equipado',
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
      price: '$700',
      sessions: '4 sesiones / mes',
      note: '≈ $175 por sesión · Nivel básico–intermedio',
      features: [
        'Técnica de arranque y envión desde básico',
        '4 sesiones con barra y plataforma completa',
        'Corrección de errores técnicos',
        'Comunicación directa con José Ángel',
      ],
    },
    pro: {
      label: 'Pro',
      price: '$1,200',
      sessions: '8 sesiones / mes',
      note: '≈ $150 por sesión · Hasta nivel avanzado / competencia',
      features: [
        'Todo lo del Plan Básico',
        '8 sesiones con plataforma completa',
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
      price: '$350',
      sessions: 'Plan + 2 check-ins/mes',
      note: 'Ajuste quincenal por mensaje o video',
      features: [
        'Plan mensual personalizado digital',
        '2 check-ins quincenales de seguimiento',
        'Retroalimentación por mensaje o video',
        'Disponible para cualquier ciudad de México',
      ],
    },
    pro: {
      label: 'Pro',
      price: '$600',
      sessions: 'Plan + seguimiento semanal',
      note: 'Retroalimentación semanal + revisión de videos',
      features: [
        'Plan mensual personalizado digital',
        'Seguimiento semanal de progreso',
        'Revisión y retroalimentación de videos enviados',
        'Ajuste continuo del plan',
        'Comunicación directa prioritaria',
      ],
    },
  },
  {
    id: 'halterofilia-online',
    title: 'Halterofilia',
    icon: '🏋️',
    basic: {
      label: 'Básico',
      price: '$450',
      sessions: 'Plan + análisis quincenal',
      note: 'Plan de progresión + revisión de video cada 2 semanas',
      features: [
        'Plan de progresión técnica personalizado',
        'Análisis de video quincenal de levantamientos',
        'Corrección técnica a distancia',
        'Disponible para cualquier ciudad de México',
      ],
    },
    pro: {
      label: 'Pro',
      price: '$800',
      sessions: 'Plan + análisis semanal',
      note: 'Retroalimentación técnica semanal + corrección en video',
      features: [
        'Plan de progresión técnica completo',
        'Análisis de video semanal detallado',
        'Corrección técnica con retroalimentación inmediata',
        'Preparación para competencia a distancia',
        'Acceso prioritario a José Ángel',
      ],
    },
  },
]

function ServiceCard({ service, featured }: { service: Service; featured?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Basic plan */}
      <div className="bg-[#0a0a0a] border border-white/8 p-6 hover:border-white/20 transition-colors">
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

        {/* Projection block */}
        <div className="mt-16 bg-black border border-[#E7AE06]/20 p-8 lg:p-10">
          <p className="text-[#E7AE06] text-xs tracking-[0.4em] uppercase font-bold mb-6">
            Proyección conservadora de ingreso mensual
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: '6 clientes Prep. Física Presencial Pro', value: '$6,000' },
              { label: '5 clientes Halterofilia Presencial Pro', value: '$6,000' },
              { label: '10 clientes Online (mix básico/pro)', value: '$5,500' },
              { label: 'Total estimado / mes (21 clientes)', value: '$17,500', highlight: true },
            ].map((metric) => (
              <div
                key={metric.label}
                className={`p-5 border ${
                  metric.highlight
                    ? 'border-[#E7AE06]/40 bg-[#E7AE06]/5'
                    : 'border-white/8 bg-[#0a0a0a]'
                }`}
              >
                <p className={`font-display text-3xl tracking-wide mb-2 ${
                  metric.highlight ? 'text-[#E7AE06]' : 'text-white'
                }`}>
                  {metric.value}
                </p>
                <p className="text-white/35 text-xs leading-snug">{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="text-white/35 text-xs leading-relaxed">
            Con 21 clientes activos, ingreso mensual recurrente y predecible sin depender de ventas nuevas cada semana.
          </p>
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
