"use client"

import { motion } from "framer-motion"
import { Loader2 } from 'lucide-react'
import { Card ,CardContent} from "./card"

export function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-center text-muted-foreground"
          >
            Processing your payment...
          </motion.p>
        </CardContent>
      </Card>
    </div>
  )
}

