import { motion } from 'framer-motion'

const dishes = [
  { name: 'Gold Leaf Burrata', desc: 'heirloom tomatoes • basil oil • 24k leaf', price: 'KSh 2,900' },
  { name: 'Black Truffle Risotto', desc: 'aged parmigiano • wild mushrooms', price: 'KSh 3,800' },
  { name: 'Wagyu Tagliata', desc: 'rosemary • sea salt • balsamic glaze', price: 'KSh 6,500' },
  { name: 'Saffron Panna Cotta', desc: 'citrus • almond praline', price: 'KSh 1,800' },
]

export default function MenuShowcase() {
  return (
    <section id="menu" className="relative py-24 bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,55,0.06),transparent_30%,transparent_70%,rgba(212,175,55,0.06))]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold">Signature Menu</motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">A curated selection to whet your appetite. Ask for the full tasting journey.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {dishes.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-white">{d.name}</h3>
                <span className="text-[#D4AF37] font-semibold">{d.price}</span>
              </div>
              <p className="text-white/60 mt-2 text-sm">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
