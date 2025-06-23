// src/components/ShipmentDetails.jsx

export default function ShipmentDetails({ shipment }) {
  if (!shipment) return null

  return (
    <>
      <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-6 text-center">
        <strong> Shipment Details</strong>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-m mb-8 mt-5 pl-20">
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
            className={`inline-block px-2 py-0.5 rounded text-black ${
              shipment.status === 'Delivered'
                ? 'bg-green-300'
                : shipment.status === 'Delayed'
                ? 'bg-red-300'
                : 'bg-yellow-300'
            }`}>
            {shipment.status}
          </span>
        </p>
      </div>
    </>
  )
}
