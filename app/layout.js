import './globals.css'
import Header from "@/app/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head />

      <body className="overflow-x-hidden">
      <Header />
      {children}
      </body>
    </html>
  )
}
