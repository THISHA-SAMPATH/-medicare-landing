import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import TrustedBy from './components/sections/TrustedBy'
import Consultants from './components/sections/Consultants'
import MapFeatures from './components/sections/MapFeatures'

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <TrustedBy />
      <Consultants />
      <MapFeatures />
    </main>
  )
}

export default App