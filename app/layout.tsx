import React from "react"
import Script from "next/script"
import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Imane Oujja | Software Developer & AI Enthusiast',
  description: 'EPFL Master\'s student in Computer Science specializing in AI, Machine Learning, and Software Development. Based in Lausanne, Switzerland.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="/polyfill.js" strategy="beforeInteractive" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
