'use client'

import { useState, useEffect } from 'react'
 import shipments from '@/data/shipments.json'
import ShipmentCard from '@/components/ShipmentCard'

export default function Home() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const result = shipments.filter((ship) => {
      const matchSearch =
        ship.id.toLowerCase().includes(search.toLowerCase()) ||
        ship.receiver.toLowerCase().includes(search.toLowerCase())

      const matchStatus = status === '' || ship.status === status

      return matchSearch && matchStatus
    })

    setFilteredData(result)
  }, [search, status]) // re-filter on any change

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-6 text-gray-800">
        Shipping Management
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 mb-4 px-4">
        <input
          type="text"
          placeholder="Search by ID or Receiver"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/4">
          <option value="">All Status</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      <div className="flex gap-4 flex-wrap mt-6 ml-12 mr-12">
        <ShipmentCard shipments={filteredData} />
      </div>
    </div>
  )
}
