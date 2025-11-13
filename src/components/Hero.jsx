import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-white max-w-2xl">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="uppercase tracking-[0.35em] text-xs text-[#D4AF37]">Nairobi • Kenya</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-3 text-4xl sm:text-6xl font-semibold leading-tight">
            Villa Rossa Kempinski
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-4 text-white/80 text-base sm:text-lg">
            An elevated Italian dining experience blending heritage, artistry and contemporary Nairobi elegance.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 opacity-80 blur group-hover:opacity-100 transition" />
              <span className="relative rounded-full bg-black/70 border border-amber-400/40 px-6 py-3 text-white">Explore Menu</span>
            </a>
            <a href="#reserve" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition">
              Book a Table
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
