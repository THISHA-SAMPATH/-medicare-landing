import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
    </main>
  )
}

export default App