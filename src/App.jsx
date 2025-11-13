import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import MenuShowcase from './components/MenuShowcase'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <MenuShowcase />
        <About />
        <Contact />
        <footer className="border-t border-white/10 py-10 text-center text-white/60">
          <p className="text-sm">© {new Date().getFullYear()} Villa Rossa Kempinski — Nairobi, Kenya</p>
        </footer>
      </main>
    </div>
  )
}

export default App
