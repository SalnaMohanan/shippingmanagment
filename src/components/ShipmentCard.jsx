import Link from 'next/link'

const statusColor = {
  'In Transit': 'bg-yellow-100 text-yellow-800',
  Delivered: 'bg-green-100 text-green-800',
  Delayed: 'bg-red-100 text-red-800',
}

export default function ShipmentCard({ shipments }) {
  return (
    <div className="w-screen min-h-screen  p-6 flex items-center justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
        {shipments.map((ship) => (
          <div key={ship.id} className="bg-white rounded-xl shadow-md p-5">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">ID: {ship.id}</h2>
              <span className={`text-xs px-3 py-1 rounded-full ${statusColor[ship.status]}`}>
                {ship.status}
              </span>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Sender:</strong> {ship.sender}
            </p>
            <br />
            <p className="text-sm text-gray-700">
              <strong>Receiver:</strong> {ship.receiver}
            </p>
            <br />
            <div className="flex items-center gap-10">
              <p className="text-sm text-gray-700">
                <strong>From:</strong> {ship.origin}
              </p>
              <p className="text-sm text-gray-700">
                <strong>To:</strong> {ship.destination}
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Date:</strong> {ship.date}
            </p>
            <Link href={`/shipment/${ship.id}`}>
              <button className="w-full bg-[#143D60] text-white rounded-lg py-2 text-sm font-semibold hover:bg-[#0e2e4a] transition mt-3">
                View Details & Tracking
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
