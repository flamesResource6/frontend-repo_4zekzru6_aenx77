import { motion } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    alt: 'Candle-lit fine dining table setting',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    alt: 'Chef plating a gourmet dish',
  },
  {
    src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1600&auto=format&fit=crop',
    alt: 'Elegant restaurant interior with warm lighting',
  },
  {
    src: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1600&auto=format&fit=crop',
    alt: 'Wine cellar with curated selection',
  },
  {
    src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1600&auto=format&fit=crop',
    alt: 'Gourmet pasta dish',
  },
  {
    src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1600&auto=format&fit=crop',
    alt: 'White tablecloth and gold flatware',
  },
  {
    src: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=1600&auto=format&fit=crop',
    alt: 'Chef preparing fresh ingredients',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
    alt: 'Signature dessert with gold leaf',
  },
  {
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop',
    alt: 'Dining room ambience',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    alt: 'Chef in action at the pass',
  },
  {
    src: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?q=80&w=1600&auto=format&fit=crop',
    alt: 'Cocktail at the bar',
  },
  {
    src: 'https://images.unsplash.com/photo-1542326891-50b14105a80b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb2NrdGFpbCUyMGF0JTIwdGhlJTIwYmFyfGVufDB8MHx8fDE3NjI5OTM5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Outdoor terrace evening glow',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-black">
      {/* Background lux glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_40%_at_50%_0%,rgba(212,175,55,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              A Glimpse Inside
            </h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Discover the ambience, craft, and details that define Villa Rossa Kempinski — Nairobi’s destination for refined Italian dining.
            </p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <img
                src={`${img.src}&ixlib=rb-4.0.3&crop=center`}
                alt={img.alt}
                className="h-40 md:h-56 lg:h-64 w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                loading="lazy"
              />

              {/* Gold overlay border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-[#D4AF37]/0 transition duration-500 group-hover:ring-2 group-hover:ring-[#D4AF37]/60" />

              {/* Subtle gradient and caption */}
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <div className="rounded-lg bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 opacity-0 backdrop-blur-[2px] transition duration-500 group-hover:opacity-100">
                  <p className="text-sm md:text-base text-white/90">
                    {img.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
