import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Sultán de México — Escuela & Marketplace de Tarot',
  description: 'Aprende tarot, certifícate y atiende consultantes 24/7.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="border-b border-white/10 sticky top-0 z-30 backdrop-blur-md bg-sultan-dark/80">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Sultán de México" className="w-10 h-10 object-contain rounded-xl" />
              <div>
                <div className="font-extrabold">Sultán de México</div>
                <div className="text-xs text-zinc-400 -mt-0.5">Tarot • Escuela • Marketplace</div>
              </div>
            </div>
            <nav className="hidden md:flex gap-2">
              <a className="btn" href="/">Inicio</a>
              <a className="btn" href="/escuela">Escuela</a>
              <a className="btn" href="/marketplace">Lectores 24/7</a>
              <a className="btn" href="/club">Club</a>
              <a className="btn" href="/dashboard">Mi Cuenta</a>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t border-white/10 mt-10">
          <div className="container py-6 text-zinc-400 text-sm flex items-center justify-between">
            <span>© {new Date().getFullYear()} Sultán de México</span>
            <span>Demo listo para producción</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
