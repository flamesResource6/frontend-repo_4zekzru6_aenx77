import { motion } from 'framer-motion'
import { Sparkles, Star } from 'lucide-react'

const gold = 'text-[#D4AF37]'

export default function Experience() {
  const items = [
    {
      icon: <Sparkles className={gold} size={22} />, 
      title: 'Haute Cuisine',
      desc: 'Seasonal tasting menus with the finest Kenyan produce and imported Italian delicacies.'
    },
    {
      icon: <Star className={gold} size={22} />, 
      title: 'Sommelier-led Cellar',
      desc: 'Curated old-world and new-world wines, with rare vintages and bespoke pairings.'
    },
    {
      icon: <Sparkles className={gold} size={22} />, 
      title: 'Impeccable Service',
      desc: 'Discrete, anticipatory hospitality in an intimate, refined setting.'
    },
  ]

  return (
    <section id="experience" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold">The Experience</motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 text-white/70 max-w-2xl">A sanctuary of taste and texture, balancing contemporary flair with timeless sophistication.</motion.p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * idx }} className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-amber-400/70 flex items-center justify-center ring-1 ring-white/10" />
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
