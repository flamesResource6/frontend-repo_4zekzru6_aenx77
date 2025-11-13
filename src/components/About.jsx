import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-semibold">A Legacy of Craft</h2>
          <p className="mt-4 text-white/70">Rooted in Italian heritage and inspired by the rhythm of Nairobi, Villa Rossa Kempinski offers a contemporary interpretation of classical dining. Expect precision, warmth and the subtle shimmer of luxury throughout your evening.</p>
          <div className="mt-6 flex gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full" />
            <div className="h-1 w-10 bg-white/20 rounded-full" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1322&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
