import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import TrustedBy from './components/sections/TrustedBy'
import Consultants from './components/sections/Consultants'
import MapFeatures from './components/sections/MapFeatures'
import CTABanner from './components/sections/CTABanner'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <TrustedBy />
      <Consultants />
      <MapFeatures />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default App