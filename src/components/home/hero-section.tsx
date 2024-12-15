'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

interface HeroSectionProps {
  search: string; // Current search string
  setSearch: (value: string) => void; // Function to update search string
  getList: (params:number ) => void; // Function to fetch the list
  setPage: (page: number) => void; // Function to set the current page
}

export const HeroSection: React.FC<HeroSectionProps> = ({ search, setSearch, getList, setPage }) => {
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-r-none bg-white"
        />
        <Button 
          className="rounded-l-none bg-black text-white" 
          onClick={() => {
            getList(1);
            setPage(1);
          }}
        >
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </motion.section>
  )
}
