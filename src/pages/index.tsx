import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'
import { HeroSection } from '../components/home/hero-section'
import { LandList } from '../components/home/land-list'
import { useSelector } from 'react-redux'
import { RootState } from '@/types/types'
export default function HomePage() {
  const {user}=useSelector((state:RootState)=>state.authenticationReducer)
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-green-100">
      <Header />
      <main className="container mx-auto px-6 py-8 flex-grow">
        <HeroSection />
        <LandList user={user} />
      </main>
      <Footer />
    </div>
  )
}