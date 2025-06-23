'use client'

import { useState, useEffect } from 'react'

export default function SearchFilter({ onFilter }) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    onFilter({ search, status, date })
  }, [search, status, date])

  return (
    <div className="flex flex-row flex-wrap gap-4 px-25">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by ID or Receiver"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/3 bg-transparent"
      />

      {/* Status dropdown */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/3 bg-transparent">
        <option value="">All Status</option>
        <option value="In Transit">In Transit</option>
        <option value="Delayed">Delayed</option>
        <option value="Delivered">Delivered</option>
      </select>

      {/* Date input */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/5 bg-transparent"
      />
    </div>
  )
}
