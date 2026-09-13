export const courses = [
  { slug: 'creative-coding', title: 'Creative Coding', category: 'Technology', level: 'Beginner', duration: '8 weeks', price: '$240', description: 'Build playful, expressive projects while learning the foundations of web development.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80', featured: true, lessons: ['HTML & the web', 'JavaScript foundations', 'Interactive canvas', 'Your first portfolio project'] },
  { slug: 'future-leaders', title: 'Future Leaders', category: 'Leadership', level: 'Intermediate', duration: '6 weeks', price: '$180', description: 'A practical studio for clear communication, confident decisions, and meaningful action.', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80', featured: true, lessons: ['Finding your voice', 'Leading with empathy', 'Decision making', 'Capstone presentation'] },
  { slug: 'design-thinking', title: 'Design Thinking Lab', category: 'Design', level: 'All levels', duration: '4 weeks', price: '$150', description: 'Turn big questions into useful ideas through research, prototyping, and collaboration.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80', featured: true, lessons: ['Problem framing', 'Research methods', 'Rapid prototyping', 'Demo day'] },
  { slug: 'study-smart', title: 'Study Smart', category: 'Academic Success', level: 'Beginner', duration: '3 weeks', price: '$90', description: 'Build a sustainable learning system with better focus, memory, and planning.', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80', featured: false, lessons: ['Planning your week', 'Focus rituals', 'Memory tools', 'Exam confidence'] },
]

export const instructors = [
  { name: 'Dr. Maya Chen', role: 'Learning Director', bio: 'Maya designs learning experiences that help curious people do their best work.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80' },
  { name: 'Jordan Ellis', role: 'Creative Technology', bio: 'Jordan turns complex technical ideas into welcoming, hands-on experiments.', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80' },
  { name: 'Samira Patel', role: 'Student Success', bio: 'Samira helps every learner find momentum, belonging, and a path forward.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80' },
]

export const testimonials = [
  { quote: 'The sessions made learning feel like something I could shape, not something I had to keep up with.', name: 'Nadia R.', detail: 'Creative Coding student' },
  { quote: 'A rare learning space that is ambitious and genuinely kind. I left with a portfolio and more confidence.', name: 'Theo M.', detail: 'Design Thinking student' },
]

export const faqs = [
  ['Who are the courses for?', 'Our studio welcomes motivated learners from middle school through adulthood. Each course lists its recommended level.'],
  ['Are classes live or self-paced?', 'Courses are live, cohort-based experiences with recordings and a small amount of guided independent work.'],
  ['What happens after I register?', 'Our student success team confirms your place, shares the schedule, and helps you choose the right starting point.'],
]

export const navItems = [{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/courses', label: 'Courses' }, { href: '/team', label: 'Meet the Team' }, { href: '/contact', label: 'Contact' }]
export const brand = { name: 'Alia Online', email: 'admin@aliausa.org', phone: '+1201681-6887' }

export type Course = (typeof courses)[number]
