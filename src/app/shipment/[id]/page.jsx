'use client' 

import { useRouter, useParams } from 'next/navigation'
import { useState } from 'react'
import shipments from '@/data/shipments.json'
import SimulatedStatusUpdate from '@/components/SimulatedStatusUpdate'
import ShippingDetails from '@/components/ShippingDetails'
import HistoryTracking from '@/components/HistoryTracking'  

export default function ShipmentDetail() {
  const router = useRouter()
  const { id } = useParams()

  const originalShipment = shipments.find((s) => String(s.id) === id)
  const [shipment, setShipment] = useState(originalShipment)

  if (!shipment) {
    return <div className="p-6 text-red-600">Shipment not found</div>
  }

  return (
    <div className="min-h-screen bg-[#ede7e7] px-4 sm:px-12 py-6 w-full">
      <div className="w-full bg-white shadow-md rounded-xl p-6">
        {/* Back Button */}
        <div className="flex gap-2">
          <button
            onClick={() => router.back()}
            className="px-3 py-1 text-sm bg-blue-200 text-black rounded hover:bg-blue-600 transition">
            ← Back
          </button>
        </div>
        {/* Shipment Details */}
        <ShippingDetails shipment={shipment} />
        {/* Tracking History */}
        <HistoryTracking tracking={shipment.tracking} /> 
        {/* Simulate Status Update */}
        <SimulatedStatusUpdate
          shipment={shipment}
          onStatusChange={(status) => setShipment({ ...shipment, status })}
        />
      </div>
    </div>
  )
}
