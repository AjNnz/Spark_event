import './globals.css'
import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'

export const metadata = {
  title: 'Spark Events | Event Planning',
  description: 'Unforgettable moments start here.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Add suppressHydrationWarning here */}
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}