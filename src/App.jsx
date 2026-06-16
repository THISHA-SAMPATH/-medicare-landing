import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import TrustedBy from './components/sections/TrustedBy'

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <TrustedBy />
    </main>
  )
}

export default App