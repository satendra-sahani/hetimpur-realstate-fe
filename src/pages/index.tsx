import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'
import { HeroSection } from '../components/home/hero-section'
import { LandList } from '../components/home/land-list'
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-green-100">
      <Header />
      <main className="container mx-auto px-6 py-8 flex-grow">
        <HeroSection />
        <LandList />
      </main>
      <Footer />
    </div>
  )
}