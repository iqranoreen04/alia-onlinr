import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const serif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })
export const metadata: Metadata = { title: { default: 'Alia Online — Accredited Online Language Classes', template: '%s — Alia Online' }, description: 'Accredited online language classes for learners who want to grow with confidence.', generator: 'Alia Online' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#ffffff', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-background"><body className={`${sans.variable} ${serif.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
