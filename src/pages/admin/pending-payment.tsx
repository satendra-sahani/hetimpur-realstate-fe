'use client'

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function PaymentPending() {
  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <h1>Pending Payement List</h1>
      </div>
    
    </DashboardLayout>
  )
}