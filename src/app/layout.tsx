import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../common/styles/globals.css'
import Navbar from '@/common/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cyber Ninja',
  description: 'Apex Legends Cyber Ninja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <div className='flex justify-center'>
        <Navbar  />
        </div>
        {children}
        </body>
    </html>
  )
}
