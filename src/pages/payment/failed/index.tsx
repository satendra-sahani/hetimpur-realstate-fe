"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { XCircle } from 'lucide-react'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Card,CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { RootState } from "@/types/types"
import { useSelector } from "react-redux"

export default function PaymentFailedPage() {
  const {user}=useSelector((state:RootState)=>state.authenticationReducer)
  const router = useRouter()
  const { toast } = useToast()
    const homeLink=user?.role=="client"?"/client/post":"/"
  useEffect(() => {
    toast({
      title: "Payment Failed",
      description: "There was an issue processing your payment.",
      variant: "destructive",
    })
  }, [toast])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-muted/50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center justify-center space-x-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <XCircle className="h-8 w-8 text-destructive " />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Payment Failed
            </motion.span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            We were unable to process your payment. Please try again or contact support if the issue persists.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="border rounded-lg p-4 bg-destructive/5 text-destructive"
          >
            <p className="font-medium">Error Details</p>
            <p className="text-sm">Transaction could not be completed</p>
          </motion.div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-black text-white" onClick={() => router.push(homeLink)}>Try Again</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="outline" onClick={() => router.push("/")}>
              Contact Support
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </div>
  )
}

