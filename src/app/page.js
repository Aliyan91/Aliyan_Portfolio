const projects = [
  {
    title: "PERN Online Education Platform",
    summary:
      "A full-stack learning ecosystem with role-based dashboards, course management, live progress tracking, and secure authentication.",
    stack: ["PostgreSQL", "Express", "React", "Node.js", "JWT"],
    impact: "Built for scalability with modular APIs and smooth student/instructor experiences.",
  },
  {
    title: "PERN E-Commerce Experience",
    summary:
      "Modern storefront focused on high-converting UI, cart and checkout flow, filtering, and responsive front-end interactions.",
    stack: ["React", "Tailwind", "Node.js", "Express", "PostgreSQL"],
    impact: "Optimized journey from product discovery to order confirmation.",
  },
  {
    title: "Gaming Website with HTML5 Embedded Game",
    summary:
      "An interactive web gaming hub featuring an embedded HTML5 game, immersive visuals, score logic, and community-ready pages.",
    stack: ["HTML5", "CSS3", "JavaScript", "Canvas", "REST APIs"],
    impact: "Balanced performance and aesthetics for a smooth, engaging game session.",
  },
];

const strengths = [
  "Front-End Engineering",
  "Full-Stack PERN Development",
  "Interactive UI Animations",
  "API Design & Integration",
  "Performance-Focused UX",
];

export default function Home() {
  return (
    <div className="page-shell">
      <div className="bg-grid" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <main className="portfolio">
        <section className="hero glass reveal">
          <p className="eyebrow">Portfolio • Aliyan</p>
          <h1>Building futuristic digital experiences with modern web tech.</h1>
          <p className="hero-copy">
            I design and build sleek, high-performance applications with a strong
            focus on usability, animation, and scalable architecture. From
            polished front-end interfaces to complete PERN stack products, I
            turn ideas into impactful web experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let&apos;s Connect
            </a>
          </div>
        </section>

        <section className="glass reveal">
          <h2>Core Strengths</h2>
          <div className="chip-wrap">
            {strengths.map((strength) => (
              <span className="chip" key={strength}>
                {strength}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="projects reveal">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card glass">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="impact">{project.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact glass reveal">
          <h2>Let&apos;s build something incredible.</h2>
          <p>
            Open to exciting collaborations and ambitious projects that need a
            modern look, smooth interactions, and reliable full-stack delivery.
          </p>
          <a href="mailto:aliyan.dev@example.com" className="btn btn-primary">
            aliyan.dev@example.com
          </a>
        </section>
      </main>
    </div>
  );
}
