import React from "react"
import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _firaCode = Fira_Code({ subsets: ["latin"] });

const polyfillScript = `
(function() {
  try {
    var mp = Object.getPrototypeOf(new Map().values());
    if (mp && !mp.toArray) {
      mp.toArray = function() { return Array.from(this); };
    }
    var sp = Object.getPrototypeOf(new Set().values());
    if (sp && !sp.toArray) {
      sp.toArray = function() { return Array.from(this); };
    }
  } catch(e) {}
})();
`

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
        <script dangerouslySetInnerHTML={{ __html: polyfillScript }} />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
