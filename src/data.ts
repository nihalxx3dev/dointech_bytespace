export type Course = {
  title: string
  creator: string
  level: string
  price: string
  rating: string
  students: string
  duration: string
  lessons: string
  theme: string
  tag: string
}

export const courses: Course[] = [
  { title: 'Build Digital Asset', creator: 'purepearl studio', level: 'Beginner', price: '$25', rating: '4.8', students: '199', duration: '2h 16m', lessons: '17 lessons', theme: 'blueprint', tag: 'Design' },
  { title: 'The Power of Big Data', creator: 'purepearl studio', level: 'Beginner', price: '$25', rating: '4.5', students: '240', duration: '3h 40m', lessons: '24 lessons', theme: 'data', tag: 'Technology' },
  { title: 'Learn Figma from Basic', creator: 'purepearl studio', level: 'Beginner', price: '$25', rating: '4.7', students: '321', duration: '2h 50m', lessons: '21 lessons', theme: 'figma', tag: 'Design' },
  { title: 'Balancing Productivity and Self-Care', creator: 'Lena Morgan', level: 'Beginner', price: '$25', rating: '4.6', students: '154', duration: '1h 48m', lessons: '12 lessons', theme: 'wellness', tag: 'Lifestyle' },
  { title: 'Mastering Money Management', creator: 'Morgan Lee', level: 'Intermediate', price: '$25', rating: '4.9', students: '432', duration: '3h 12m', lessons: '19 lessons', theme: 'finance', tag: 'Business' },
  { title: 'From Idea to Startup Success', creator: 'purepearl studio', level: 'Intermediate', price: '$25', rating: '4.8', students: '260', duration: '4h 04m', lessons: '28 lessons', theme: 'startup', tag: 'Business' },
]

export const categories = [
  { name: 'Design', icon: '◈', color: 'lavender' },
  { name: 'Development', icon: '</>', color: 'cyan' },
  { name: 'Business', icon: '↗', color: 'lime' },
  { name: 'Marketing', icon: '◎', color: 'peach' },
  { name: 'Photography', icon: '▧', color: 'pink' },
  { name: 'Finance', icon: '$', color: 'cream' },
]

export const modules = [
  { title: 'Module 1: Introduction to Digital Assets', description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.", count: 8 },
  { title: 'Module 2: Design Principles for Impact', description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.'", count: 12 },
  { title: 'Module 3: Advanced Techniques in Digital Creation', description: 'Explore advanced workflows, creative tools, and practical techniques for making your ideas real.', count: 10 },
  { title: 'Module 4: User-Centric Design Strategies', description: "Understand design thinking and user experience essentials. Craft digital assets with a focus on people.", count: 9 },
  { title: 'Module 5: Interactive Media and Engagement', description: 'Create immersive digital experiences by combining interactive presentations and multimedia elements.', count: 11 },
  { title: 'Module 6: Project Showcase and Critique', description: 'Present your work with confidence, collaborate with peers, and refine your creative practice.', count: 7 },
  { title: 'Module 7: Optimizing Digital Assets for Various Platforms', description: 'Adapt your digital creations for mobile platforms, social media, and the modern web.', count: 8 },
]

export const reviews = [
  { name: 'PurePearl Studio', role: 'UI/UX Designer', date: 'a year ago', body: 'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!', initials: 'PS' },
  { name: 'Albert Flores', role: 'UI/UX Designer', date: 'a year ago', body: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience.", initials: 'AF' },
  { name: 'Cody Fisher', role: 'UI/UX Designer', date: 'a year ago', body: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills.', initials: 'CF' },
  { name: 'Brooklyn Simmons', role: 'UI/UX Designer', date: 'a year ago', body: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape.', initials: 'BS' },
]
