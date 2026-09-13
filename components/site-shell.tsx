'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { brand, navItems } from '@/lib/site-data'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-white/15 bg-[#0E223C] text-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <img src="/alia-logo.png" alt="Alia" className="h-12 w-auto" />
      </Link>
      <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} className="text-base font-medium text-white/80 transition-colors hover:text-white">{item.label}</Link>)}
        <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Sign up <ArrowUpRight className="h-4 w-4" /></Link>
      </nav>
      <button className="rounded-lg p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-white/15 bg-[#0E223C] px-5 py-4 md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-1">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-white hover:bg-white/10">{item.label}</Link>)}<Link href="/signup" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">Start learning</Link></div></nav>}
  </header>
}

export function Footer() { return <footer className="border-t border-white/15 bg-[#0E223C] text-white"><div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-8"><div><Link href="/" className="inline-flex"><img src="/alia-logo.png" alt="Alia" className="h-12 w-auto" /></Link><p className="mt-4 max-w-md text-base leading-7 text-white/75">If you have any questions please do not hesitate to contact us at <a href={`mailto:${brand.email}`} className="font-semibold text-white hover:underline">{brand.email}</a></p></div><div className="flex flex-col gap-5 text-base text-white/80 lg:items-end"><div className="flex flex-wrap gap-x-7 gap-y-4"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link><Link href="/contact" className="hover:text-white">Contact</Link><a href={`tel:${brand.phone.replace(/[^+\\d]/g, '')}`} className="hover:text-white">{brand.phone}</a></div><div className="flex items-center gap-4"><a href="https://www.instagram.com/usa.alia?stkn=MTVrZzZqOGpwMnVkNQ==" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full p-2.5 transition-colors hover:bg-white/10 hover:text-white"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a><a href="https://www.facebook.com/share/1DbEFDLNPy/" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full p-2.5 transition-colors hover:bg-white/10 hover:text-white"><svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" /></svg></a></div></div></div></footer> }

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <section className="border-b border-border bg-secondary/45"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"><p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary">{eyebrow}</p><h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight text-balance sm:text-6xl">{title}</h1><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{description}</p></div></section> }

export function Shell({ children }: { children: React.ReactNode }) { return <><Header />{children}<Footer /></> }
