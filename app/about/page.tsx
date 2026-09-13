import { Shell } from '@/components/site-shell'

export default function AboutPage() {
  return <Shell><main className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-4xl">
      <h1 className="text-center font-serif text-5xl leading-[0.98] tracking-tight text-[#0E223C] sm:text-6xl">The ALIA Story</h1>
      <p className="mt-8 text-justify text-lg leading-8 text-muted-foreground">ALIA was founded in 2019 to make high-quality education accessible, meaningful, and academically recognized. Our first Urdu and Arabic classes began in September 2019 with 28 students in Plano, Texas, creating a place where students could strengthen their language skills while connecting with their culture and heritage. Today, ALIA offers accredited language courses for middle and high school students. Students can earn school credit and receive an official transcript to present to their schools, colleges, and universities. Now, ALIA is entering an exciting new chapter. Our expanding programs will include core academic courses, civic education, STEM and technology, arts and cultural enrichment, and study-abroad experiences that connect students with languages and cultures around the world. Students will be able to explore new places, experience different cultures, and earn school credit through learning that extends far beyond the traditional classroom. What began as a small community program has grown into a globally accessible school serving students across communities and beyond geographical boundaries.</p>
    </div>
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      <img src="/about-1.jpg" alt="ALIA students and community" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
      <img src="/about-alia.jpg" alt="ALIA students and community" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
      <img src="/about-3.jpg" alt="ALIA students and community" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
    </div>
  </main></Shell>
}
