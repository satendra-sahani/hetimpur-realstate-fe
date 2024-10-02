'use client'

import { motion } from 'framer-motion'
import { CardContent,Card } from '../ui/card'
import { MapPin } from 'lucide-react'

const landItems = [
  { id: 1, title: 'Hetimpur Countryside Plot', location: 'Hetimpur Area, Country', price: '₹50,000' },
  { id: 2, title: 'Kushinagar Development Land', location: 'Kushinagar Center, Metropolis', price: '₹500,000' },
  { id: 3, title: 'Hata Property', location: 'Hata Town, Seaside', price: '₹750,000' },
  { id: 4, title: 'Gorakhpur View Lot', location: 'Gorakhpur Region, Mountains', price: '₹100,000' },
  { id: 5, title: 'Deoria Oasis Land', location: 'Deoria City, Sands', price: '₹80,000' },
  { id: 6, title: 'Kasia Oasis Land', location: 'Kasia City, Sands', price: '₹80,000' },
]

export function LandList() {
  return (
    <motion.section 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {landItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHosv2pxMWqoDNWMOrjTOhQGVp674UpwrXRg&s`} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.location}
                </p>
                <p className="text-xl font-bold text-green-600">{item.price}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.section>
  )
}