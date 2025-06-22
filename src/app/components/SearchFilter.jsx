'use client'
import { useState } from 'react'

export default function SearchFilter({ onFilter }) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')

  const handleChange = (searchVal, statusVal) => {
    onFilter({ search: searchVal, status: statusVal })
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded shadow">
      <input
        type="text"
        placeholder="Search by ID or Receiver"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          handleChange(e.target.value, status)
        }}
        className="border p-2 rounded w-full sm:w-1/2"
      />
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value)
          handleChange(search, e.target.value)
        }}
        className="border p-2 rounded w-full sm:w-1/4">
        <option value="">All Status</option>
        <option value="Delivered">Delivered</option>
        
      </select>
    </div>
  )
}
