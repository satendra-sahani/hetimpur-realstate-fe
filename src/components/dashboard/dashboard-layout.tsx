'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Map, 
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { useDispatch } from 'react-redux'
import { getUserAction } from '@/service/action/authentication'
import { useRouter } from 'next/router'

type NavItem = {
  icon: React.ReactNode
  label: string
  href: string
}

const navItems: NavItem[] = [
  // { icon: <LayoutDashboard className="mr-2 h-4 w-4" />, label: 'Dashboard', href: '/dashboard' },
  // { icon: <FileText className="mr-2 h-4 w-4" />, label: 'Client', href: '/admin/clients' },
  // { icon: <Users className="mr-2 h-4 w-4" />, label: 'Users', href: '/admin/users' },
  { icon: <Map className="mr-2 h-4 w-4" />, label: 'Properties', href: '/client/post' },
  // { icon: <Currency className="mr-2 h-4 w-4" />, label: 'Pending Payment', href: '/admin/pending-payment' },

]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router=useRouter();
  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(getUserAction({
    errorCB:()=>{
      localStorage.clear()
      router.push("/login")
    }
   }))
  },[])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 z-40 h-screen w-64 bg-white shadow-lg"
      >
        <div className="flex h-full flex-col justify-between">
          <ScrollArea className="flex-grow">
            <div className="px-4 py-6">
              <h2 className="mb-6 text-lg font-semibold">Clboomi.com</h2>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={pathname === item.href ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={item.href}>
                      {item.icon}
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </div>
          </ScrollArea>
          <div className="p-4">
            <Button variant="outline" className="w-full" asChild>
              <Link href="#-"
              onClick={()=>{
                localStorage.clear()
                router.push("/login")
              }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </Button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="w-8" /> {/* Placeholder for balance */}
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}