'use client'

import { useParams, useRouter } from 'next/navigation'
import shipments from '@/data/shipments.json'
import SimulatedStatusUpdate from '@/components/SimulatedStatusUpdate'
import { useState } from 'react'

export default function ShipmentDetail() {
  const router = useRouter()
  const { id } = useParams()

  const originalShipment = shipments.find((s) => String(s.id) === id)
  const [shipment, setShipment] = useState(originalShipment)

  if (!shipment)
    return <div className="p-6 text-red-600">Shipment not found</div>

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-12 py-6 w-full ">
      <div className="w-full bg-white shadow-md rounded-xl p-6">
        <div className="flex gap-2">
          <button
            onClick={() => router.back()}
            className="px-3 py-1 text-sm bg-blue-700 text-white rounded hover:bg-blue-800 transition">
            ← Back
          </button>
        </div>
        <h1 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Shipment Details - {shipment.id}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-m mb-6 pl-20 ">
          <p>
            <strong>Sender:</strong> {shipment.sender}
          </p>
          <p>
            <strong>Receiver:</strong> {shipment.receiver}
          </p>
          <p>
            <strong>Origin:</strong> {shipment.origin}
          </p>
          <p>
            <strong>Destination:</strong> {shipment.destination}
          </p>
          <p>
            <strong>Date:</strong> {shipment.date}
          </p>
          <p>
            <strong>Status:</strong>{' '}
            <span
              className={`inline-block px-2 py-0.5 rounded text-white ${
                shipment.status === 'Delivered'
                  ? 'bg-green-600'
                  : shipment.status === 'Delayed'
                  ? 'bg-red-500'
                  : 'bg-yellow-500'
              }`}>
              {shipment.status}
            </span>
          </p>
        </div>

        <h2 className="text-xl font-semibold text-blue-800 mb-4 mt-8">
          📍 Tracking History
        </h2>

        <div className="flex justify-center px-4 py-6">
          <div className="relative border-l-2 border-blue-300 pl-6 space-y-6 w-full max-w-5xl bg-blue-50 rounded-lg p-4 shadow">
            {shipment.tracking?.map((track, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[10px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border border-white"></div>
                <div className="bg-white p-4 rounded-md shadow-sm border border-blue-100">
                  <p className="text-sm text-gray-700">
                    <strong>Date:</strong> {track.date}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Location:</strong> {track.location}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Status:</strong> {track.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SimulatedStatusUpdate
          shipment={shipment}
          onStatusChange={(status) => setShipment({ ...shipment, status })}
        />
      </div>
    </div>
  )
}
