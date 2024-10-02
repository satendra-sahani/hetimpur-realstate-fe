'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <motion.section 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Plot</h2>
      <p className="text-xl text-gray-600 mb-8">Discover land opportunities that match your dreams</p>
      <div className="flex items-center justify-center max-w-md mx-auto">
        <Input 
          type="text" 
          placeholder="Search for land..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-r-none bg-white"
        />
        <Button className="rounded-l-none bg-black text-white" onClick={() => console.log('Search:', searchQuery)}>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </motion.section>
  )
}