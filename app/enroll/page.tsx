'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Shell } from '@/components/site-shell'

const policies = [
  ['Required Course Preparation', 'Students must know the Arabic alphabet and be able to read basic Arabic before beginning this course. Enrollment and placement may be subject to a brief assessment to ensure the course is appropriate for the student’s current level.'],
  ['Credit Requirements', 'Earning 1.0 credit requires successful completion of four courses, including 20 hours of live instruction, all assigned ALIA School coursework and assessments, and the documented program hours required for credit completion.'],
  ['Class Attendance and Camera Policy', 'Regular attendance is expected. Students must attend online classes with their cameras on unless an exception has been approved by ALIA School. Students are expected to participate actively and arrive prepared for each class.'],
  ['Class Minimum Enrollment', 'Classes require a minimum of three students to begin. If a class does not meet the minimum enrollment requirement, students may be asked to select another available class time or wait for the next session beginning the following month.'],
  ['Make-Up Class Policy', 'If ALIA School cancels a class due to unforeseen circumstances, a make-up class will be provided. If a student misses a class, an individual make-up class will not be available. However, the student may attend study hall to review missed material and receive additional support.'],
  ['Tuition and Payment Agreement', 'By enrolling, the parent or guardian agrees to pay the tuition and any applicable fees associated with the selected course. Payment must be completed according to the enrollment requirements before the student begins classes.'],
  ['Cancellation and Refund Policy', 'Refund requests must be submitted at least seven calendar days before the class start date. Approved refunds are subject to a $25 administrative fee. No refunds will be issued within seven days of the start date or after classes have started. If ALIA School cancels a class, families may choose a full refund or transfer their payment to another class without an administrative fee.'],
  ['Student Code of Conduct', 'Students are expected to demonstrate respect, responsibility, and appropriate behavior toward instructors and fellow students. Disruptive, disrespectful, or inappropriate conduct may result in disciplinary action, including removal from the course.'],
  ['Technology and Online Learning Policy', 'Students are responsible for having a reliable internet connection, a suitable device, and the technology necessary to participate in online classes. Students should join classes on time, use the required learning platforms responsibly, and notify ALIA School of any technical difficulties that may affect participation.'],
  ['Online Class Media Permission', 'During online classes, ALIA School may take screenshots or record portions of virtual classes, student presentations, projects, performances, or special activities. These images or recordings may be used to highlight student learning and promote ALIA School through newsletters, the website, and official social media accounts.'],
  ['How Did You Hear About Us?', 'Please tell us how you heard about ALIA School.'],
  ['Final Acknowledgment and Agreement', 'By checking the box below, I acknowledge that I have read, understood, and agree to all of the terms and policies listed above. I understand the course preparation requirements, credit requirements, attendance and camera policy, minimum enrollment policy, make-up class policy, tuition and payment agreement, cancellation and refund policy, student code of conduct, technology and online learning policy, and online class media permission. I understand that enrollment and placement may be subject to a brief assessment, and that submitting this form confirms my agreement to these policies.'],
]

export default function EnrollmentTermsPage() {
  const [agreed, setAgreed] = useState(false)
  const router = useRouter()

  function continueToRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!agreed) return
    const course = new URLSearchParams(window.location.search).get('course')
    router.push(course ? `/register?course=${course}` : '/register')
  }

  return <Shell><main className="bg-secondary/30"><div className="mx-auto max-w-4xl px-5 py-16 lg:py-24"><div className="rounded-3xl border border-[#0E223C]/15 bg-white p-6 shadow-sm sm:p-10"><p className="text-sm font-extrabold uppercase tracking-[.2em] text-[#0E223C]">Enrollment agreement</p><h1 className="mt-4 font-serif text-4xl leading-tight text-[#0E223C] sm:text-5xl">ALIA School Student Enrollment Terms &amp; Policies</h1><p className="mt-6 leading-7 text-muted-foreground">Please review the following terms and policies carefully before submitting your enrollment form. By submitting this form, you confirm that you understand and agree to the policies outlined below.</p><ol className="mt-10 space-y-6">{policies.map(([title, content], index) => <li key={title} className="rounded-2xl border border-border bg-secondary/35 p-5"><h2 className="font-bold text-[#0E223C]">{index + 1}. {title}</h2><p className="mt-2 leading-7 text-muted-foreground">{content}</p></li>)}</ol><form onSubmit={continueToRegistration} className="mt-10 border-t border-border pt-7"><label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-[#0E223C]/5 p-5 text-sm leading-6"><input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} className="mt-1 h-5 w-5 accent-[#0E223C]" /><span>I have read, understood, and agree to ALIA School’s Student Enrollment Terms &amp; Policies.</span></label><button disabled={!agreed} className="mt-6 rounded-full bg-[#0E223C] px-7 py-3.5 font-bold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40">Agree &amp; Continue to Registration</button></form></div></div></main></Shell>
}
