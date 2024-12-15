"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useSelector } from "react-redux"
import { RootState } from "@/types/types"

export async function getServerSideProps() {
    // Generate the Transaction ID on the server
    const transactionId = Math.random().toString(36).substr(2, 9);
    return {
        props: { transactionId }, // Pass it as a prop
    };
}

export default function PaymentSuccessPage({ transactionId }:any) {
    const router = useRouter();
    const {user}=useSelector((state:RootState)=>state.authenticationReducer)
    const { toast } = useToast();

    useEffect(() => {
        toast({
            title: "Payment Successful",
            description: "Thank you for your purchase!",
        });
    }, [toast]);

    const homeLink=user?.role=="client"?"/client/post":"/"


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
                            <CheckCircle className="h-8 w-8 text-green-500" />
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            Payment Successful
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
                        Your payment has been processed successfully. You will receive a confirmation email shortly.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="border rounded-lg p-4 bg-muted/50"
                    >
                        <p className="font-medium">Transaction ID</p>
                        <p className="text-sm text-muted-foreground">#{transactionId}</p>
                    </motion.div>
                </CardContent>
                <CardFooter className="flex justify-center space-x-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button className="bg-black text-white" onClick={() => router.push(homeLink)}>Go to Homepage</Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button variant="outline" onClick={() => router.push("/")}>
                            Back to Home
                        </Button>
                    </motion.div>
                </CardFooter>
            </Card>
        </div>
    );
}
