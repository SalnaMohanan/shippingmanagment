'use client'

import { useState, useEffect } from 'react'
import shipments from '@/data/shipments.json'
import ShipmentCard from '@/components/ShipmentCard'
import SearchFilter from '@/components/SearchFilter'

export default function Home() {
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    date: '', // single date input
  })

  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const { search, status, date } = filters

    const result = shipments.filter((ship) => {
      const matchSearch =
        ship.id.toLowerCase().includes(search.toLowerCase()) ||
        ship.receiver.toLowerCase().includes(search.toLowerCase())

      const matchStatus = status === '' || ship.status === status

      const matchDate = !date || new Date(ship.date) <= new Date(date) 

      return matchSearch && matchStatus && matchDate
    })

    setFilteredData(result)
  }, [filters])

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-6 text-gray-800">
        Shipping Management
      </h1>

      <div className="mt-6 mb-4 px-4">
        <SearchFilter onFilter={setFilters} />
      </div>

      <div className="flex gap-4 flex-wrap mt-6 ml-12 mr-12">
        <ShipmentCard shipments={filteredData} />
      </div>
    </div>
  )
}
