import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'José Ángel Training | Entrenador Personal Villahermosa',
  description:
    'Entrenamiento personalizado de alto rendimiento en Villahermosa, Tabasco. Preparación Física y Halterofilia presencial y online con atleta de alto rendimiento. Disciplina hoy, resultados mañana.',
  keywords: [
    'entrenador personal Villahermosa',
    'halterofilia Tabasco',
    'preparación física online',
    'José Ángel Training',
    'entrenamiento personalizado',
    'coaching deportivo',
  ],
  authors: [{ name: 'José Ángel Training' }],
  openGraph: {
    title: 'José Ángel Training | Entrenador Personal Villahermosa',
    description:
      'Entrenamiento personalizado de alto rendimiento. Preparación Física y Halterofilia presencial y online.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'José Ángel Training',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Ángel Training | Entrenador Personal Villahermosa',
    description: 'No vendemos clases. Ofrecemos resultados. Presencial + Online.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
