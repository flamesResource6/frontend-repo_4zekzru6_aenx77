import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${scrolled ? 'backdrop-blur bg-black/50 shadow-lg' : 'bg-transparent'} z-50`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 ring-2 ring-white/10 shadow-[0_0_20px_rgba(212,175,55,0.35)]" />
            <div className="leading-tight">
              <p className="font-semibold tracking-wide text-white text-sm">Villa Rossa</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Kempinski Nairobi</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-white/80 hover:text-white transition">Menu</a>
            <a href="#experience" className="text-white/80 hover:text-white transition">Experience</a>
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+254000000000" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition">
              <Phone size={18} />
              <span className="text-sm">Reserve</span>
            </a>
            <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
              <MapPin size={18} />
              <span className="text-sm">Nairobi</span>
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a href="#menu" className="block text-white/90" onClick={() => setOpen(false)}>Menu</a>
            <a href="#experience" className="block text-white/90" onClick={() => setOpen(false)}>Experience</a>
            <a href="#about" className="block text-white/90" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" className="block text-white/90" onClick={() => setOpen(false)}>Contact</a>
            <a href="tel:+254000000000" className="inline-flex items-center gap-2 text-[#D4AF37]" onClick={() => setOpen(false)}>
              <Phone size={18} />
              <span>Reserve</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
