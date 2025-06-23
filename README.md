#  Shipping Management App

A modern, responsive web application built with **Next.js** and **Tailwind CSS** for managing shipment tracking and details.

---

## Features

- View all shipments in a card-style layout
- Filter shipments by **ID**, **Receiver Name**, and **Status**
- View detailed shipment tracking history
- Simulate status updates (e.g., Delivered, Delayed)
- Fully responsive and clean UI

---

##  Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SalnaMohanan/shippingmanagment.git
   cd shippingmanagment

## Project Setup
- File & Folder Structure Created by npx create-next-app@latest

With the following selected:
- TypeScript: No
- ESLint: No
- Tailwind CSS: Yes
- Use src/ directory: Yes
- Use App Router: Yes

## Install dependencies:
   npm install

## Run the development server:
   npm run dev   

## Open your browser and go to:
http://localhost:3000

## Framework & Styling

- Next.js App Router was used for its file-based routing, performance, and developer experience.

- Tailwind CSS was chosen for fast and customizable UI development with utility-first classes.

## Component Structure

- UI elements like ShipmentCard, SearchFilter, and SimulatedStatusUpdate are broken into reusable components to promote maintainability and scalability.

- Filtering logic is handled at the top level (Home page) to maintain centralized state and reduce prop-drilling.

## Data Handling

- Static shipment data is loaded from shipments.json for simplicity and testing.

- Status simulation is done in local state only (no backend), to demonstrate interactivity and feedback using React's useState.

## UX/UI
- Responsive card layout for shipment listing
- Tracking timeline with location, date, and status
- Visual indicators (color-coded tags, toast messages) to enhance usability

## Folder Structure
 
├── public/
├── src/
│   ├── app/
│   │   ├── page.jsx
│   │   └── shipment/
│   │       └── [id]/
│   │           └── page.jsx
│   ├── components/
│   │   ├── HistoryTracking.jsx
│   │   ├── SearchFilter.jsx
│   │   └── ShipmentCard.jsx
|   |   |__ ShippingDetails.jsx
|   |   |__ SimulatedStatusUpdate.jsx
│   ├── data/
│   │   └── shipments.json
│   └── styles/
│       └── globals.css
├── README.md
├── package.json
└── tailwind.config.js
  