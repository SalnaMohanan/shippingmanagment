'use client'

import { useState } from 'react'

export default function SimulatedStatusUpdate({ shipment, onStatusChange }) {
  const [toast, setToast] = useState('')

  const simulateStatusUpdate = (newStatus) => {
    onStatusChange(newStatus)
    setToast(` Status updated to "${newStatus}"`)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <div className="flex gap-4">
        <p>
          {' '}
          <strong>Update status :</strong>
        </p>
        <button
          onClick={() => simulateStatusUpdate('Delivered')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Mark as Delivered
        </button>
        <button
          onClick={() => simulateStatusUpdate('Delayed')}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Simulate Delay
        </button>
      </div>

      {toast && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50">
          {toast}
        </div>
      )}
    </div>
  )
}
