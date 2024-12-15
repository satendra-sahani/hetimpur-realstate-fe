'use client'

import { motion } from 'framer-motion'
import { CardContent,Card } from '../ui/card'
import {  Loader2, MapPin } from 'lucide-react'
import { RootState } from '@/types/types'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import {generatePaymentLinkAction} from "../../service/action/common/index.js"
import { useState } from 'react'
import { useRouter } from 'next/router'


interface LandListProps {
  user: RootState['authenticationReducer']['user'];  // Correctly type the user prop
  // landItems: Array<{ id: string; title: string; location: string; price: string }>;  // Define the type for landItems
}
export function LandList({ user }: LandListProps) {
  const {isPaymentLink,userLands}=useSelector((state:RootState)=>state.commonReducer);
  const [loader,setLoader]=useState<Number>(-1)
  const router=useRouter();
  const dispatch=useDispatch();
  const payNow=()=>{
    dispatch(
      generatePaymentLinkAction({
        data: { userType: 'user' },
        cb: (res: { paymentLink: string }) => {
          if (typeof res.paymentLink === 'string') {
            window.location.href = res.paymentLink;
          } else {
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
  return (
    <motion.section 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {userLands?.data?.map((item, index) => (
        <motion.div
          key={item?._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {
              !user?.approved && 
                  <Button  onClick={()=>{
                    payNow();
                    setLoader(index)
                  }} style={{position:"absolute",zIndex:1,right:10,top:10}} className='bg-black text-white'>
                    {(loader ==index && isPaymentLink) ? <Loader2 />:"Payment Now"}
                    </Button>
                
              }
          
              <img 
                src={item.image} 
                alt={item.status} 
                className={`w-full h-48 object-cover`}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.client?.name} (+91 {item?.number})</h3>
                <p className="text-gray-600 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.city}, {item.state}
                </p>
                <p className="text-xl font-bold text-green-600">₹ {item.price}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.section>
  )
}