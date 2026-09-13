import Link from 'next/link'
import { Shell } from '@/components/site-shell'

export default function CoursesPage() {
  return <Shell><main>
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#0E223C]">ALIA Language Programs</p>
        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-tight text-[#0E223C] sm:text-6xl">Learn a language. Connect with your heritage.</h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">ALIA offers accredited Urdu and Arabic courses that build language proficiency while strengthening cultural literacy. Designed for middle and high school students, each program offers an engaging, structured path to meaningful academic progress and school credit.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/courses/urdu" className="rounded-full bg-[#0E223C] px-8 py-4 text-base font-bold text-white transition-transform hover:-translate-y-0.5">Urdu</Link>
          <Link href="/courses/arabic" className="rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">Arabic</Link>
        </div>
      </div>
    </section>
  </main></Shell>
}
