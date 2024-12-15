"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { generatePaymentLinkAction } from '@/service/action/common'
import { RootState } from '@/types/types'
import { getUserAction } from '@/service/action/authentication'

export default function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const {user}=useSelector((state:RootState)=>state.authenticationReducer)

  const router=useRouter();
  const dispatch=useDispatch();
  const payNow=()=>{
    setIsProcessing(true)
    dispatch(
      generatePaymentLinkAction({
        data: { userType: 'user' },
        cb: (res: { paymentLink: string }) => {
          if (typeof res.paymentLink === 'string') {
            setIsProcessing(false)
            window.location.href = res.paymentLink;
          } else {
            setIsProcessing(false)
            console.error('Invalid payment link:', res.paymentLink);
          }
        },
        hideError:true,
        errorCB:()=>{
          router.push("/login")
        }
      })
    );
  }

  useEffect(()=>{
   if(user && user?.approved){
    router.push("/")
   }
  },[user])

  useEffect(()=>{
   dispatch(getUserAction({}))
  },[dispatch])
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-gray-100 to-gray-200">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Payment Required</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 mb-4">Your profile is pending. Please complete the payment to activate your account.</p>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full h-14 text-lg font-semibold bg-black text-white"
            onClick={payNow}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

