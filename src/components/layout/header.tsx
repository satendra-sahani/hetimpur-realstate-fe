'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/button'
import { Mountain, Menu, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '@/service/action/authentication'
import { RootState } from '@/types/types'
import { useRouter } from 'next/router'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useSelector((state: RootState) => state.authenticationReducer);
  const pathname = usePathname()
  const navItems = [
    { href: "/", label: 'Home' },
    { href: '/login', label: 'Buy' },
    { href: '/client/post', label: 'Sell' },
  ]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAction({hideError:true  }))
  }, [dispatch])

  const logout=()=>{
    localStorage.clear();
    window.location.href="/login";
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center justify-center">
            {/* <Mountain className="h-6 w-6 text-primary" /> */}
            <img src='/logo.png' height={10} width={120}/>
            {/* <span className="ml-2 text-xl font-bold text-gray-800">CLBHOO</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant={pathname === item.href ? 'default' : 'ghost'}
                className="transition-colors duration-200"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
             {user?.name && <Button
                variant='ghost'
                className="w-full justify-start mb-2"
              >
                <Link href={user?.role=="client"?"/client/post":"/"}>{user?.name}</Link>
              </Button>}
              {user && <Button
                variant='ghost'
                className="w-full justify-start mb-2"
              >
                <Link href={"#-"} onClick={logout}>Logout</Link>
              </Button>}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant={pathname === item.href ? 'default' : 'ghost'}
                  className="w-full justify-start mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}

              {/* {user?.name && <Button
                variant='ghost'
                className="w-full justify-start mb-2"
              >
                <Link href={user?.role=="client"?"/client/post":"/"}>{user?.name}</Link>
              </Button>} */}
              {user && <Button
                variant='ghost'
                className="w-full justify-start mb-2"
                onClick={logout}
              >
                <Link href={"#-"}>Logout</Link>
              </Button>}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}