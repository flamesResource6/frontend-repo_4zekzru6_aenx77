import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold">Contact & Reservations</motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">We welcome you to join us for an unforgettable evening.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <motion.a href="tel:+254000000000" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
            <Phone className="text-[#D4AF37]" />
            <p className="mt-2 text-sm text-white/70">Call to reserve</p>
            <p className="font-medium">+254 000 000 000</p>
          </motion.a>

          <motion.a href="mailto:reservations@villarossa.co.ke" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
            <Mail className="text-[#D4AF37]" />
            <p className="mt-2 text-sm text-white/70">Email us</p>
            <p className="font-medium">reservations@villarossa.co.ke</p>
          </motion.a>

          <motion.a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
            <MapPin className="text-[#D4AF37]" />
            <p className="mt-2 text-sm text-white/70">Visit us</p>
            <p className="font-medium">Nairobi, Kenya</p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
