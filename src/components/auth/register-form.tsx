'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Loader2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { signUpAction } from '@/service/action/authentication'

export function RegisterForm() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userType, setUserType] = useState('') // Sell or Buy
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {

    e.preventDefault()
    setError('') // Clear previous errors

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!userType) {
      setError('Please select if you are registering to sell or buy.')
      return
    }
    if (!number) {
      setError('Please enter your mobile number.')
      return
    }

    setIsLoading(true)
    try {
      dispatch(signUpAction({
        data: { name, contact: number, password, role: userType }, cb: () => {
          router.push("/login")
        }
      }))
    } catch (err) {
      setError('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <motion.div whileFocus="focus" variants={inputVariants}>
              <Input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </motion.div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Number</Label>
            <motion.div whileFocus="focus" variants={inputVariants}>
              <Input
                id="number"
                type="number"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter your Number"
              />
            </motion.div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <motion.div whileFocus="focus" variants={inputVariants}>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
              />
            </motion.div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <motion.div whileFocus="focus" variants={inputVariants}>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </motion.div>
          </div>
          <div className="space-y-2">
            <Label>Are you registering to:</Label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="client"
                  checked={userType === 'client'}
                  onChange={() => setUserType('client')}
                  className="mr-2"
                />
                <span>Sell</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="user"
                  checked={userType === 'user'}
                  onChange={() => setUserType('user')}
                  className="mr-2"
                />
                <span>Buy</span>
              </label>
            </div>
          </div>
          <Button type="button" onClick={handleRegister} className="w-full bg-black text-white" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing up...
              </>
            ) : (
              'Sign up'
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
