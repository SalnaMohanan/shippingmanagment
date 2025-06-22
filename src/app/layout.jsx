// src/app/layout.js

import '../style/globals.css'


export const metadata = {
  title: 'Shipping Management',
  description: 'Track and manage your shipments',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
