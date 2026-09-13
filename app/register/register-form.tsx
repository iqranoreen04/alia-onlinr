'use client'

import { useState } from 'react'

export function RegisterForm({ selectedCourse }: { selectedCourse?: string }) {
  const [submitted, setSubmitted] = useState(false)

  function submitRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const details = [
      `Student: ${form.get('firstName')} ${form.get('lastName') || ''}`.trim(),
      `Parent/Guardian: ${form.get('parentName')}`,
      `Parent email 1: ${form.get('parentEmail1')}`,
      `Parent email 2: ${form.get('parentEmail2') || 'Not provided'}`,
      `Parent phone: ${form.get('parentPhone')}`,
      `Student age: ${form.get('studentAge')}`,
      `Grade: ${form.get('grade') || 'Not provided'}`,
      `Course: ${form.get('course')}`,
      `How they heard about ALIA: ${form.get('referral')}`,
    ].join('\n')
    setSubmitted(true)
    window.location.href = `mailto:admin@aliausa.org?subject=${encodeURIComponent('New ALIA School registration')}&body=${encodeURIComponent(details)}`
  }

  if (submitted) return <div className="rounded-2xl border border-[#0E223C]/15 bg-secondary p-8"><h2 className="font-serif text-3xl text-[#0E223C]">Registration ready to send</h2><p className="mt-3 leading-7 text-muted-foreground">Your email application has opened with the registration details addressed to ALIA School. Please send the email to complete your submission.</p></div>

  return <form onSubmit={submitRegistration} className="grid gap-6 rounded-3xl border border-[#0E223C]/15 bg-white p-6 shadow-sm sm:p-9">
    <div><p className="text-sm font-extrabold uppercase tracking-[.18em] text-[#0E223C]">Student information</p><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">First name <span className="text-destructive">*</span><input name="firstName" required className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]" /></label><label className="grid gap-2 text-sm font-semibold">Last name <span className="font-normal text-muted-foreground">(optional)</span><input name="lastName" className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]" /></label><label className="grid gap-2 text-sm font-semibold">Student age <span className="text-destructive">*</span><input name="studentAge" type="number" min="1" required className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]" /></label><label className="grid gap-2 text-sm font-semibold">Grade <span className="font-normal text-muted-foreground">(optional)</span><input name="grade" className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]" /></label></div></div>
    <div className="border-t border-border pt-6"><p className="text-sm font-extrabold uppercase tracking-[.18em] text-[#0E223C]">Parent or guardian information</p><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold sm:col-span-2">Parent or guardian name <span className="text-destructive">*</span><input name="parentName" required className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]" /></label><label className="grid gap-2 text-sm font-semibold">Parent email 1 <span className="text-destructive">*</span><input name="parentEmail1" type="email" required className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]" /></label><label className="grid gap-2 text-sm font-semibold">Parent email 2 <span className="font-normal text-muted-foreground">(optional)</span><input name="parentEmail2" type="email" className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]" /></label><label className="grid gap-2 text-sm font-semibold sm:col-span-2">Parent phone number <span className="text-destructive">*</span><input name="parentPhone" type="tel" required className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]" /></label></div></div>
    <div className="grid gap-5 border-t border-border pt-6 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Selected course <span className="text-destructive">*</span><select name="course" required defaultValue={selectedCourse ?? ''} className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]"><option value="" disabled>Select a course</option><option value="Urdu">Urdu</option><option value="Arabic">Arabic</option></select></label><label className="grid gap-2 text-sm font-semibold">How did you hear about us? <span className="text-destructive">*</span><input name="referral" required className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#0E223C]" /></label></div>
    <button className="mt-2 w-fit rounded-full bg-[#0E223C] px-7 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5">Register Student</button>
  </form>
}
