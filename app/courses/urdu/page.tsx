import Link from 'next/link'
import { Shell } from '@/components/site-shell'

const courses = [
  { title: 'Urdu Course 1', image: '/urdu-course-1.png', description: 'Explore the Urdu alphabet. Focus on letter sets, identify sight words and basic grammar elements to begin language production. Students learn to read, write, speak, and understand Urdu in an engaging and interactive environment.' },
  { title: 'Urdu Course 2', image: '/urdu-course-2.png', description: 'Build confidence with familiar vocabulary, everyday phrases, and sentence patterns. Students strengthen reading, writing, speaking, and listening skills through guided practice, conversation, and interactive language activities.' },
  { title: 'Urdu Course 3', image: '/urdu-course-3.png', description: 'Develop greater fluency through meaningful conversations, richer grammar, and cultural context. Students apply their Urdu skills through reading, writing, speaking, and listening activities designed for practical communication.' },
]

export default function UrduCoursePage() {
  return <Shell><main>
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
          <img src="/alia-urdu-roadmap.png" alt="ALIA Urdu roadmap" className="aspect-[4/3] w-full object-cover object-center" />
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#0E223C]">ALIA Urdu Program</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight tracking-tight text-[#0E223C] sm:text-6xl">Start Your Learning Urdu Journey with Us</h1>
          <Link href="/enroll?course=urdu" className="mt-8 inline-flex rounded-full bg-[#0E223C] px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5">Enroll Now</Link>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-extrabold uppercase tracking-[.22em] text-[#0E223C]">Featured Urdu courses</p><h2 className="mt-4 font-serif text-4xl tracking-tight text-[#0E223C] sm:text-5xl">Start where you are</h2></div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">{courses.map((course) => <article key={course.title} className="overflow-hidden rounded-3xl border border-[#0E223C]/15 bg-white shadow-sm"><img src={course.image} alt={course.title} className="aspect-[4/3] w-full object-cover" /><div className="p-6"><h3 className="font-serif text-2xl text-[#0E223C]">{course.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{course.description}</p><Link href="/enroll?course=urdu" className="mt-6 inline-flex rounded-full bg-[#0E223C] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">Purchase — $150</Link></div></article>)}</div>
    </section>
    <section className="mx-auto max-w-5xl px-5 pb-20 lg:px-8 lg:pb-28">
      <h2 className="text-center font-serif text-4xl tracking-tight text-[#0E223C] sm:text-5xl">Urdu Language Pathway</h2>
      <p className="mt-8 text-justify text-lg leading-8 text-muted-foreground">Each course in the ALIA Urdu Language Pathway is a five-week course that includes 5 hours of live instruction and 5 hours of asynchronous language-learning activities, with an optional 5-hour weekly study hall for additional practice, support, and guidance. Together, these components provide up to 15 instructional hours per course. Courses are organized into four-course series (e.g., the 100 Series and 200 Series). Students who successfully complete all four courses within a series earn one full year of language credit.</p>
      <img src="/alia-urdu-language.png" alt="ALIA Urdu Language Pathway course series" className="mx-auto mt-12 w-full max-w-3xl rounded-xl border border-border shadow-lg" />
    </section>
  </main></Shell>
}
