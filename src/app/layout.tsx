import './globals.css'
import { Roboto_Mono } from 'next/font/google'

import Navbar from  "@/components/Navbar"

const RobotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={RobotoMono.className}>
        <div className="grid place-content-center min-h-screen bg-blue-950 px-4">
          <div className="sm:w-[500px] md:w-[600px] lg:w-[700px]">
            <Navbar />
          <main>
            {children}
          </main>
          </div>
        </div>
        </body>
    </html>
  )
}
