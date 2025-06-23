import { Clock, MapPin, CheckCircle } from 'lucide-react'

export default function HistoryTracking({ tracking = [] }) {
  if (!tracking.length) return null

  return (
    <div className="mt-8 px-4 sm:px-8">
      <h2 className="text-xl font-semibold text-blue-800 mb-6 text-left sm:pl-4">
        📍 Tracking History
      </h2>

      <ol className="relative border-l-2 border-blue-300 pl-6 sm:pl-10">
        {tracking.map((track, index) => (
          <li key={index} className="mb-10 relative">
            {/* Timeline Dot */}
            <span
              className={`absolute left-[-7px] top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-md 
                ${
                  track.status === 'Dispatched' ? 'bg-red-500' : 'bg-blue-500'
                }`}
            />

            {/* Card */}
            <div className="ml-4 shadow-md rounded-md p-4 bg-white">
              <div className="flex items-center text-sm text-gray-700 mb-1">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                <span>{track.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-700 mb-1">
                <MapPin className="w-4 h-4 mr-2 text-green-600" />
                <span>{track.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 mr-2 text-yellow-600" />
                <span>{track.status}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
