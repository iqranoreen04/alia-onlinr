import { Shell } from '@/components/site-shell'

const team = [
  {
    role: 'Founder And Education Director',
    name: 'Dr. Amber Sheikh',
    image: '/amber.png',
    bio: [
      'Dr. Amber Sheikh is an educator and social entrepreneur dedicated to creating innovative learning opportunities that help students grow, lead, and make a meaningful impact in their communities. She is the founder of ALIA School and co-founder of GEM Academy and GEM School. Through these organizations, she leads programs in language education, academic enrichment, civic engagement, STEM, and youth leadership development.',
      'Dr. Amber Sheikh grew up in a multilingual home surrounded by Urdu, Kashmiri, and Punjabi. She later studied Spanish and Arabic, and her travels to more than 30 countries around the world strengthened her appreciation for different languages, cultures, and communities. She believes that learning languages and experiencing other cultures open the mind and deepen our understanding of the world around us. She holds a master’s degree from New York University and a Doctorate in Education from Northeastern University. Dr. Sheikh resides in Plano, Texas, with her husband and four children.',
    ],
  },
  {
    role: 'Learning Experience Designer',
    name: 'Shagufta Khan',
    image: '/placeholder-user.jpg',
    bio: ['Shagufta Khan is a certified learning strategist and instructional designer with an outstanding reputation for advancing technology-enabled education across corporate, defense, and higher education sectors. With a strong focus on innovation, change management, learner autonomy, emerging technologies, including AI, and ed tech integration, Shagufta brings a systems-thinking approach to every project, ensuring each solution is strategic, scalable, and learner-centered. Anchored in servant leadership, she is passionate about future-ready learning, instructional innovation, and building learning environments that simplify complexities. Her tenure includes positions at New York University, the Defense Language Institute Foreign Language Center, the Naval Postgraduate School, and Dole Food Company. Shagufta holds a BA in International Relations from Columbia University and an MA in Education from California State University. She is an established abstract impressionist painter. She resides in Monterey, California, with her family.'],
  },
  {
    role: 'Senior Curriculum Developer',
    name: 'Tahira Rabbani',
    image: '/placeholder-user.jpg',
    bio: ['Alongside homeschooling for more than 10 years, Tahira earned a bachelor’s degree in Writing and Secondary Education and has taught at both the middle and high school levels. She has developed curriculum and currently teaches English Language Arts and Social Studies to middle school students. Tahira earned a master’s degree in Hindi-Urdu Language Pedagogy from Kean University, completing a unique program focused on innovative, 21st-century teaching methods. Since then, she has developed engaging Urdu instructional materials specifically designed for heritage language learners.'],
  },
  {
    role: 'Curriculum Developer',
    name: 'Qudsia Hussan',
    image: '/placeholder-user.jpg',
    bio: ['Qudsia Hussan is an experienced educator, instructional leader, and curriculum developer with more than 20 years of teaching experience. She earned her bachelor’s degree in Mathematics and teacher certification from Northwestern University, a Master of Arts in Urdu Language Pedagogy from Kean University, and a Master of Education in Instructional Leadership from the University of Illinois Chicago (UIC). Since 2021, Qudsia has served as a teacher and curriculum developer at ALIA, where she designs engaging online Urdu language curriculum and teaches students through interactive, student-centered instruction. She is also the Founder and President of Rawdah Academy, a homeschool co-op dedicated to providing academically rigorous, character-centered education for Muslim homeschooling families. Passionate about student success and lifelong learning, Qudsia specializes in curriculum design, teacher training, educational technology, and creating engaging learning experiences that inspire curiosity, confidence, and academic excellence. Qudsia lives in the Chicago area with her husband and their three children, where they enjoy learning, serving their community, and spending time together as a family.'],
  },
]

export default function TeamPage() {
  return <Shell><main>
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-14 text-center lg:px-8 lg:py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-[#0E223C]">Meet The Alia Team</h1>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="space-y-20 lg:space-y-28">
        {team.map((member) => <article key={member.name} className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="text-center text-xl font-bold text-[#0E223C] sm:text-2xl">{member.role}</h2>
            <h3 className="mt-3 text-center font-serif text-3xl font-bold text-[#0E223C]">{member.name}</h3>
            <div className="mt-7 space-y-5 text-justify leading-8 text-muted-foreground">
              {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-secondary shadow-lg">
            <img src={member.image} alt={member.image === '/amber.png' ? 'Dr. Amber Sheikh' : 'Team member placeholder'} className="aspect-[4/5] w-full object-cover" />
          </div>
        </article>)}
      </div>
    </section>
  </main></Shell>
}
