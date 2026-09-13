import { Shell } from '@/components/site-shell'
import { RegisterForm } from './register-form'

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ course?: string }> }) {
  const { course } = await searchParams
  const selectedCourse = course === 'urdu' ? 'Urdu' : course === 'arabic' ? 'Arabic' : undefined
  return <Shell><main className="bg-secondary/30"><div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-24"><div><p className="text-sm font-extrabold uppercase tracking-[.2em] text-[#0E223C]">Student enrollment</p><h1 className="mt-5 font-serif text-5xl leading-tight tracking-tight text-[#0E223C]">Begin your ALIA journey.</h1><p className="mt-6 max-w-md leading-7 text-muted-foreground">Complete the form to register your student. Required fields are marked with an asterisk.</p></div><RegisterForm selectedCourse={selectedCourse} /></div></main></Shell>
}
