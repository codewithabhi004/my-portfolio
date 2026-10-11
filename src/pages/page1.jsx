import { useEffect, useState } from 'react'
import profileImage from './abhi.jpeg'

const skills = {
  frontend: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'C', 'Python'],
  database: ['SQL', 'MongoDB', 'Database Design', 'Data Handling'],
  tools: ['Git', 'GitHub', 'Responsive Design', 'UI/UX', 'Debugging', 'Project Deployment'],
}

const services = [
  {
    icon: '⚡',
    title: 'Frontend Development',
    text: 'Responsive websites and web apps built with clean UI, accessible design, and modern user interactions.',
  },
  {
    icon: '🧠',
    title: 'Full Stack Solutions',
    text: 'End-to-end product development with strong frontend logic, backend APIs, and database integration.',
  },
  {
    icon: '📦',
    title: 'Database Handling',
    text: 'Managing data structures, queries, and app storage efficiently using SQL and MongoDB workflows.',
  },
  {
    icon: '🚀',
    title: 'Performance Optimization',
    text: 'Builds that focus on speed, smooth UX, and scalable workflows for real-world product needs.',
  },
]

const experience = [
  {
    period: 'CURRENT',
    role: 'Student Full Stack Developer',
    company: 'Independent learning & project work',
    text: 'Developing my skills through hands-on web projects, exploring how frontend interfaces connect with backend logic and data.',
  },
  {
    period: 'ONGOING',
    role: 'Learning by building',
    company: 'Personal projects',
    text: 'Practicing interface design, JavaScript problem-solving, and full-stack concepts by turning ideas into working web experiences.',
  },
]

const interests = [
  {
    icon: '🛠️',
    title: 'Side-project experiments',
    text: 'Taking a small idea and shaping it into something interactive, useful, and real.',
  },
  {
    icon: '🎨',
    title: 'UI & visual inspiration',
    text: 'Exploring layouts, colors, motion, and the small details that make a digital product feel polished.',
  },
  {
    icon: '🧩',
    title: 'Logic & game ideas',
    text: 'Enjoying the challenge of turning rules and problem-solving into playful browser experiences.',
  },
  {
    icon: '📚',
    title: 'Learning new technology',
    text: 'Staying curious about tools and approaches that can make the next project better.',
  },
]

const principles = [
  {
    number: '01',
    title: 'Start with the person using it',
    text: 'A feature should be understandable and comfortable to use, not just technically interesting.',
  },
  {
    number: '02',
    title: 'Keep learning through practice',
    text: 'I learn best by trying ideas, solving the rough edges, and improving the result one step at a time.',
  },
  {
    number: '03',
    title: 'Build with clarity',
    text: 'Readable structure and thoughtful details make projects easier to use today and improve tomorrow.',
  },
]

const buildSteps = [
  { number: '01', title: 'Understand', text: 'Get clear on the goal, audience, and the main problem to solve.' },
  { number: '02', title: 'Plan the experience', text: 'Map the important screens, interactions, and information before polishing.' },
  { number: '03', title: 'Build & connect', text: 'Create the interface, add the logic, and connect data where the project needs it.' },
  { number: '04', title: 'Test & refine', text: 'Check different screen sizes, fix rough edges, and make the experience feel complete.' },
]

const studioPalettes = [
  { name: 'Aurora', colors: ['#7968ff', '#37d6c0', '#ff8a72'], backdrop: 'linear-gradient(135deg, #16172d, #34316a 58%, #1e827f)' },
  { name: 'After hours', colors: ['#ff4d8d', '#8c5bff', '#24243d'], backdrop: 'linear-gradient(135deg, #201426, #702b63 58%, #372e77)' },
  { name: 'Daybreak', colors: ['#ff9d42', '#f26a75', '#7357e8'], backdrop: 'linear-gradient(135deg, #442642, #c35969 58%, #e6a050)' },
]

const matchingSymbols = ['⚡', '🪐', '🎮', '🧩', '🚀', '💡']

const visualTour = [
  { number: '01', title: 'Catch the vibe', detail: 'Hero & visual identity', target: '#home', color: 'tour-blue' },
  { number: '02', title: 'Talk to the page', detail: 'Interactive developer console', target: '#console', color: 'tour-violet' },
  { number: '03', title: 'See how I think', detail: 'Approach & build steps', target: '#approach', color: 'tour-coral' },
  { number: '04', title: 'Look beyond code', detail: 'Interests & inspiration', target: '#interests', color: 'tour-mint' },
  { number: '05', title: 'Play in the studio', detail: 'Color, calculator & memory games', target: '#lab', color: 'tour-gold' },
  { number: '06', title: 'Enter a project', detail: 'Project gallery & live game', target: '#projects', color: 'tour-pink' },
  { number: '07', title: 'Explore my toolkit', detail: 'Skills & learning journey', target: '#skills', color: 'tour-sky' },
]

const createMemoryDeck = () => {
  const deck = [...matchingSymbols, ...matchingSymbols].map((symbol, index) => ({ id: index, symbol }))
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentCard = deck[index]
    deck[index] = deck[randomIndex]
    deck[randomIndex] = currentCard
  }
  return deck
}

const consoleResponses = {
  help: '20 commands: help, about, stack, projects, contact, education, interests, approach, services, certificates, github, linkedin, instagram, email, cv, blinkchat, calculator, cybergame, frontend, backend.',
  about: 'I’m Abhishek Upadhayay, a second-year student exploring full-stack development by building practical web projects.',
  stack: 'Frontend: HTML, CSS, Tailwind, JavaScript, TypeScript, React, Next.js. Backend & data: Node.js, Express, SQL, MongoDB, Python.',
  projects: 'Featured work: Blink Chat (private messaging), Calculator (everyday utility), and Cyber Guess Game (interactive browser game).',
  contact: 'Email: abhishekupadhyay9878@gmail.com · Phone: +91 98782 29978 · Instagram: @ig.abhishek',
  education: 'I’m currently a second-year student. I have not added college, course, or graduation details yet.',
  interests: 'I enjoy experimenting with side projects, UI inspiration, logic and game ideas, and new technology.',
  approach: 'My approach: understand the goal, plan the experience, build and connect the parts, then test and refine.',
  services: 'I’m interested in frontend development, full-stack features, database-backed applications, and performance improvements.',
  certificates: 'LinkedIn certificates and posts: linkedin.com/in/abhishek-upadhayay-969066386/ · Open my LinkedIn profile to view the shared posts.',
  github: 'GitHub: github.com/codewithabhi004 · Featured repositories: Blink Chat and Calculator.',
  linkedin: 'LinkedIn: linkedin.com/in/abhishek-upadhayay-969066386/',
  instagram: 'Instagram: instagram.com/ig.abhishek',
  email: 'Email me at abhishekupadhyay9878@gmail.com',
  cv: 'Download my CV using the Download CV button in the navigation or hero section.',
  blinkchat: 'Blink Chat is a private real-time chat app with friend requests and messages that disappear after two hours. Repository: github.com/codewithabhi004/blink-chat',
  calculator: 'Calculator is a small project for practicing useful interface behavior and JavaScript logic. Repository: github.com/codewithabhi004/Calculator',
  cybergame: 'Cyber Guess is a browser-based number guessing game with a cyber-inspired interactive interface. Play it at codewithabhi004.github.io/cyber-guess-game/',
  frontend: 'Frontend toolkit: HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React.js, and Next.js.',
  backend: 'Backend and data toolkit: Node.js, Express.js, REST APIs, SQL, MongoDB, and Python.',
}

const projects = [
  {
    title: 'Blink Chat',
    description:
      'A private real-time chat application with friend requests and automatic message expiry after 2 hours.',
    stack: ['React', 'Node.js', 'MongoDB', 'Realtime'],
    link: 'https://github.com/codewithabhi004/blink-chat',
    preview: 'https://github.com/codewithabhi004/blink-chat',
    previewLabel: 'View project repository',
  },
  {
    title: 'Calculator',
    description:
      'A clean and functional calculator project built to practice UI logic, math operations, and responsive design.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/codewithabhi004/Calculator',
    preview: 'https://github.com/codewithabhi004/Calculator',
    previewLabel: 'View project repository',
  },
  {
    title: 'Cyber Guess Game',
    description:
      'A fun browser game with a futuristic theme, built for interaction, user engagement, and smooth gameplay flow.',
    stack: ['JavaScript', 'CSS', 'Gaming UI'],
    link: 'https://codewithabhi004.github.io/cyber-guess-game/',
    preview: 'https://codewithabhi004.github.io/cyber-guess-game/',
    previewLabel: 'Play live project preview',
    livePreview: true,
  },
]

const stats = [
  { value: '2nd', label: 'Year student' },
  { value: '03', label: 'Featured projects' },
  { value: 'Full stack', label: 'Learning focus' },
]

const certificates = [
  { label: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/abhishek-upadhayay-969066386/' },
  { label: 'Certificate 1', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7495787188182216704/' },
  { label: 'Certificate 2', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7495745388293804032/' },
  { label: 'Certificate 3', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7495745579440910337/' },
  { label: 'Certificate 4', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7495725568953446400/' },
]

const Page1 = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [consoleCommand, setConsoleCommand] = useState('')
  const [consoleHistory, setConsoleHistory] = useState([])
  const [selectedPalette, setSelectedPalette] = useState(0)
  const [firstNumber, setFirstNumber] = useState('24')
  const [secondNumber, setSecondNumber] = useState('6')
  const [mathOperation, setMathOperation] = useState('+')
  const [mathResult, setMathResult] = useState(null)
  const [memoryDeck, setMemoryDeck] = useState(createMemoryDeck)
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [memoryMoves, setMemoryMoves] = useState(0)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  const runConsoleCommand = (command) => {
    const normalizedCommand = command.trim().toLowerCase()
    if (!normalizedCommand) return

    setConsoleHistory((history) => [
      ...history.slice(-3),
      {
        command: normalizedCommand,
        response: Object.hasOwn(consoleResponses, normalizedCommand)
          ? consoleResponses[normalizedCommand]
          : `Command not found: "${normalizedCommand}". Type "help" to see available commands.`,
      },
    ])
    setConsoleCommand('')
  }

  const calculate = (event) => {
    event.preventDefault()
    const first = Number(firstNumber)
    const second = Number(secondNumber)
    const operations = {
      '+': () => first + second,
      '-': () => first - second,
      '×': () => first * second,
      '÷': () => (second === 0 ? 'Cannot divide by zero' : first / second),
    }

    setMathResult(operations[mathOperation]())
  }

  const flipMemoryCard = (card) => {
    if (matchedCards.includes(card.id) || flippedCards.includes(card.id)) return

    if (flippedCards.length === 2) {
      setFlippedCards([card.id])
      return
    }

    const nextFlipped = [...flippedCards, card.id]
    setFlippedCards(nextFlipped)
    if (nextFlipped.length === 2) {
      setMemoryMoves((moves) => moves + 1)
      const [firstCardId] = nextFlipped
      const firstCard = memoryDeck.find(({ id }) => id === firstCardId)
      if (firstCard?.symbol === card.symbol) {
        setMatchedCards((matches) => [...matches, firstCardId, card.id])
      }
    }
  }

  const resetMemoryGame = () => {
    setMemoryDeck(createMemoryDeck())
    setFlippedCards([])
    setMatchedCards([])
    setMemoryMoves(0)
  }

  return (
    <div className={`portfolio-shell ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <header className="topbar reveal">
        <a className="brand" href="#home" aria-label="Abhishek Portfolio home">
          <span className="brand-mark" aria-hidden="true">AU</span>
          <span>Abhishek Portfolio</span>
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#console">Console</a>
          <a href="#approach">Approach</a>
          <a href="#interests">Interests</a>
          <a href="#lab">Play Lab</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          <a className="secondary-button" href="./Abhishek-Upadhayay-CV.html" download>
            Download CV
          </a>
          <a className="primary-button" href="#contact">
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-spacing reveal" id="home">
          <div className="hero-copy">
            <span className="eyebrow availability">Available for internships & freelance work</span>
            <span className="hero-kicker">Design-minded developer · Building for the web</span>
            <h1>
              Hi, I&apos;m <span>Abhishek Upadhayay</span>
              <br />
              Building clean digital experiences for the modern web.
            </h1>
            <p>
              I&apos;m a second-year student exploring full-stack development and building for the
              modern web. I enjoy moving between visual details and the logic behind them—from
              responsive interfaces to APIs and data. My current toolkit includes HTML, CSS,
              Tailwind CSS, JavaScript, TypeScript, React, Next.js, Node.js, SQL, MongoDB, and Python.
            </p>

            <div className="cta-row">
              <a className="primary-button" href="#projects">
                View Projects
              </a>
              <a className="secondary-button" href="#about">
                About Me
              </a>
              <a className="text-link" href="./Abhishek-Upadhayay-CV.html" download>
                Download my CV <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="stats-grid">
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile summary">
            <img src={profileImage} alt="Abhishek Upadhayay" className="profile-image" />
          </div>
        </section>

        <section className="visual-tour" id="tour" aria-labelledby="tour-title">
          <div className="tour-heading">
            <span className="tour-orbit" aria-hidden="true">10</span>
            <div>
              <span className="lab-index">EXPLORE THE PORTFOLIO</span>
              <h2 id="tour-title">Take the scenic route.</h2>
              <p>Seven stops. Almost nothing to read—just things to explore.</p>
            </div>
            <a href="#console" aria-label="Start exploring the portfolio">Start here <span aria-hidden="true">↓</span></a>
          </div>
          <div className="tour-stops">
            {visualTour.map((stop) => (
              <a className={`tour-stop ${stop.color}`} href={stop.target} key={stop.number}>
                <span className="tour-stop-number">{stop.number}</span>
                <span className="tour-stop-copy">
                  <strong>{stop.title}</strong>
                  <small>{stop.detail}</small>
                </span>
              </a>
            ))}
          </div>
          <div className="tour-total"><span /><span /><span /><span /><span /><span /><span /><b>Explore in any order</b></div>
        </section>

        <section className="about section-spacing reveal" id="about">
          <div className="section-heading">
            <span>About</span>
            <h2>Creative problem solver with a strong development mindset.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m Abhishek Upadhayay, a second-year student with a growing interest in
                full-stack web development. I like understanding how a product fits together: what
                people see on screen, what happens when they interact with it, and how the data
                supports the experience.
              </p>
              <p>
                My projects are a space to learn by doing. Blink Chat explores private messaging
                and expiring messages; Calculator focuses on clear, useful interaction; Cyber Guess
                turns game logic into a browser experience. Each one gives me a new problem to
                explore and a reason to keep improving.
              </p>
              <p>
                I&apos;m still growing as a developer, and that is part of the process: stay curious,
                build consistently, ask better questions, and make the next version stronger.
              </p>
            </div>

            <div className="highlights">
              <div>
                <strong>01</strong>
                <span>Frontend Architecture</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Backend & API Logic</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Database Design</span>
              </div>
            </div>
          </div>
        </section>

        <section className="dev-console-section section-spacing reveal" id="console">
          <div className="section-heading">
            <span>Signature feature</span>
            <h2>A little portfolio you can talk to.</h2>
            <p className="section-intro">
              Open the console and try a command. It&apos;s a playful shortcut to the essentials about
              me, my toolkit, and the projects I&apos;m learning through.
            </p>
          </div>
          <div className="dev-console">
            <div className="console-topbar">
              <div className="console-lights" aria-hidden="true"><i /><i /><i /></div>
              <span>abhi@portfolio <span className="console-path">~/about</span></span>
              <span className="console-status"><i /> interactive</span>
            </div>
            <div className="console-screen" aria-live="polite" aria-relevant="additions">
              <p className="console-welcome">Welcome to Abhi&apos;s corner of the web.</p>
              <p className="console-hint">Type <code>help</code> to explore available commands.</p>
              {consoleHistory.map((entry, index) => (
                <div className="console-result" key={`${entry.command}-${index}`}>
                  <p><span className="console-prompt">$</span> {entry.command}</p>
                  <p className="console-response">{entry.response}</p>
                </div>
              ))}
            </div>
            <form
              className="console-input-row"
              onSubmit={(event) => {
                event.preventDefault()
                runConsoleCommand(consoleCommand)
              }}
            >
              <label className="console-prompt" htmlFor="portfolio-command">$</label>
              <input
                id="portfolio-command"
                value={consoleCommand}
                onChange={(event) => setConsoleCommand(event.target.value)}
                aria-label="Enter a portfolio console command"
                placeholder="Type any of the 20 commands..."
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit">Run <span aria-hidden="true">↵</span></button>
            </form>
            <div className="console-quick-commands" aria-label="Quick commands">
              {Object.keys(consoleResponses).map((command) => (
                <button type="button" key={command} onClick={() => runConsoleCommand(command)}>
                  {command}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-spacing reveal" id="approach">
          <div className="section-heading">
            <span>My approach</span>
            <h2>Thoughtful work, built one clear step at a time.</h2>
            <p className="section-intro">
              I care about the details people notice—and the structure that keeps everything working
              behind the scenes.
            </p>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="interests section-spacing reveal" id="interests">
          <div className="section-heading">
            <span>Beyond the code</span>
            <h2>A few things I enjoy exploring.</h2>
            <p className="section-intro">
              Curiosity doesn&apos;t stop at the editor. These interests often find their way into the
              projects I choose to build.
            </p>
          </div>
          <div className="interests-grid">
            {interests.map((interest) => (
              <article className="interest-card" key={interest.title}>
                <span className="interest-icon" aria-hidden="true">{interest.icon}</span>
                <h3>{interest.title}</h3>
                <p>{interest.text}</p>
              </article>
            ))}
          </div>
          <div className="personal-note">
            <span className="personal-note-mark" aria-hidden="true">“</span>
            <p>
              For me, the best part of building for the web is seeing an idea go from a rough sketch
              to something another person can actually use.
            </p>
          </div>
        </section>

        <section className="services section-spacing reveal" id="services">
          <div className="section-heading">
            <span>Services</span>
            <h2>What I can help you build.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-spacing reveal" id="skills">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Tools I&apos;m learning and building with.</h2>
            <p className="section-intro">
              A growing toolkit across frontend, backend, and data—with plenty more to learn.
            </p>
          </div>

          <div className="skill-groups">
            <div className="skill-group">
              <h3>Frontend</h3>
              <div className="skill-grid">
                {skills.frontend.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Backend & Logic</h3>
              <div className="skill-grid">
                {skills.backend.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Database & Systems</h3>
              <div className="skill-grid">
                {skills.database.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Tools & Workflow</h3>
              <div className="skill-grid">
                {skills.tools.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="experience section-spacing reveal" id="experience">
          <div className="section-heading">
            <span>Learning journey</span>
            <h2>Growing through curiosity and hands-on practice.</h2>
            <p className="section-intro">
              My current experience is centered on study and independent projects—building
              fundamentals while exploring how complete web products come together.
            </p>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.role}-${item.period}`}>
                <div className="experience-period">{item.period}</div>
                <div className="experience-content">
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="build-process section-spacing reveal" id="process">
          <div className="section-heading">
            <span>How I build</span>
            <h2>From a first idea to a finished experience.</h2>
          </div>
          <div className="build-steps">
            {buildSteps.map((step) => (
              <article className="build-step" key={step.number} data-step={step.number}>
                <span className="build-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="creative-lab section-spacing reveal" id="lab">
          <div className="section-heading">
            <span>Take a break & play</span>
            <h2>A tiny interactive studio.</h2>
            <p className="section-intro">
              Try a color direction, solve a quick calculation, or find the matching pairs. These
              little experiments are made to be clicked, not read.
            </p>
          </div>

          <div className="lab-grid">
            <article className="lab-card palette-lab">
              <div className="lab-card-heading">
                <span className="lab-index">01 / VISUAL PLAY</span>
                <h3>Pick a mood</h3>
              </div>
              <div className="palette-preview" style={{ background: studioPalettes[selectedPalette].backdrop }}>
                <span className="palette-preview-orbit orbit-one" />
                <span className="palette-preview-orbit orbit-two" />
                <div className="palette-preview-copy">
                  <span>COLOR STUDY</span>
                  <strong>Make it feel<br />like something.</strong>
                  <i style={{ background: studioPalettes[selectedPalette].colors[0] }} />
                  <i style={{ background: studioPalettes[selectedPalette].colors[1] }} />
                  <i style={{ background: studioPalettes[selectedPalette].colors[2] }} />
                </div>
              </div>
              <div className="palette-options" aria-label="Choose a color mood">
                {studioPalettes.map((palette, index) => (
                  <button
                    type="button"
                    key={palette.name}
                    className={selectedPalette === index ? 'palette-option is-selected' : 'palette-option'}
                    onClick={() => setSelectedPalette(index)}
                    aria-pressed={selectedPalette === index}
                  >
                    <span className="palette-swatches">
                      {palette.colors.map((color) => <i key={color} style={{ background: color }} />)}
                    </span>
                    {palette.name}
                  </button>
                ))}
              </div>
            </article>

            <article className="lab-card calculator-lab">
              <div className="lab-card-heading">
                <span className="lab-index">02 / LOGIC PLAY</span>
                <h3>Quick math</h3>
              </div>
              <div className="calculator-display">
                <span>YOUR CALCULATION</span>
                <strong>{mathResult === null ? 'Ready when you are' : mathResult}</strong>
              </div>
              <form className="calculator-controls" onSubmit={calculate}>
                <label>
                  <span className="sr-only">First number</span>
                  <input aria-label="First number" type="number" value={firstNumber} onChange={(event) => setFirstNumber(event.target.value)} required />
                </label>
                <select aria-label="Math operation" value={mathOperation} onChange={(event) => setMathOperation(event.target.value)}>
                  {['+', '-', '×', '÷'].map((operation) => <option key={operation} value={operation}>{operation}</option>)}
                </select>
                <label>
                  <span className="sr-only">Second number</span>
                  <input aria-label="Second number" type="number" value={secondNumber} onChange={(event) => setSecondNumber(event.target.value)} required />
                </label>
                <button type="submit" aria-label="Calculate result">=</button>
              </form>
              <p className="lab-helper">Choose two numbers and an operation.</p>
            </article>

            <article className="lab-card memory-lab">
              <div className="lab-card-heading memory-heading">
                <div>
                  <span className="lab-index">03 / MEMORY PLAY</span>
                  <h3>Find the pairs</h3>
                </div>
                <span className="memory-moves">{memoryMoves} {memoryMoves === 1 ? 'move' : 'moves'}</span>
              </div>
              <div className="memory-board" aria-label="Memory matching game">
                {memoryDeck.map((card) => {
                  const isVisible = flippedCards.includes(card.id) || matchedCards.includes(card.id)
                  return (
                    <button
                      type="button"
                      key={card.id}
                      className={`memory-tile ${isVisible ? 'is-open' : ''} ${matchedCards.includes(card.id) ? 'is-matched' : ''}`}
                      onClick={() => flipMemoryCard(card)}
                      aria-label={isVisible ? `Card ${card.symbol}` : 'Reveal card'}
                      aria-pressed={isVisible}
                      disabled={matchedCards.includes(card.id)}
                    >
                      {isVisible ? card.symbol : '✳'}
                    </button>
                  )
                })}
              </div>
              <div className="memory-footer">
                <span role="status" aria-live="polite">{matchedCards.length === memoryDeck.length ? 'All pairs found. Nice work!' : 'Match all six pairs.'}</span>
                <button type="button" onClick={resetMemoryGame}>Shuffle ↻</button>
              </div>
            </article>
          </div>
        </section>

        <section className="projects section-spacing reveal" id="projects">
          <div className="section-heading">
            <span>Projects</span>
            <h2>Recent work and case studies.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.livePreview ? 'has-live-preview' : ''}`} key={project.title}>
                <div className="project-preview">
                  {project.livePreview ? (
                    <iframe
                      className="live-project-frame"
                      src={project.preview}
                      title={`${project.title} live preview`}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  ) : (
                    <div className={`project-art project-art-${project.title.toLowerCase().replaceAll(' ', '-')}`}>
                      <span className="project-art-label">{project.title}</span>
                      <span className="project-art-symbol" aria-hidden="true">
                        {project.title === 'Blink Chat' ? '↗' : '÷'}
                      </span>
                      <span className="project-art-detail">
                        {project.title === 'Blink Chat' ? 'PRIVATE · REAL-TIME MESSAGING' : 'CALCULATE WITH CLARITY'}
                      </span>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    {project.previewLabel} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="certificates section-spacing reveal" id="certificates">
          <div className="section-heading">
            <span>Certificates</span>
            <h2>Milestones and achievements.</h2>
          </div>

          <div className="certificate-grid">
            {certificates.map((item) => (
              <a key={item.label} href={item.link} target="_blank" rel="noreferrer" className="certificate-card">
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section className="contact section-spacing reveal" id="contact">
          <div className="contact-card">
            <div className="contact-intro">
              <span>Contact</span>
              <h2>Let&apos;s build something impactful together.</h2>
              <p>Have a project or opportunity in mind? Send me a message and I&apos;ll get back to you.</p>
              <a href="mailto:abhishekupadhyay9878@gmail.com">abhishekupadhyay9878@gmail.com</a>
            </div>

            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault()
                const formData = new FormData(event.currentTarget)
                const senderName = formData.get('name')
                const senderEmail = formData.get('email')
                const subject = formData.get('subject')
                const message = formData.get('message')
                const body = `Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`
                const mailto = new URL('mailto:abhishekupadhyay9878@gmail.com')
                mailto.searchParams.set('subject', String(subject))
                mailto.searchParams.set('body', body)
                window.location.href = mailto.toString()
              }}
            >
              <div className="contact-form-row">
                <label>
                  Your name
                  <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
                </label>
                <label>
                  Your email
                  <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </label>
              </div>
              <label>
                Subject
                <input name="subject" type="text" placeholder="What would you like to discuss?" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Write your message..." required />
              </label>
              <button className="primary-button contact-submit" type="submit">Open email to send message <span aria-hidden="true">↗</span></button>
              <p className="contact-form-note">Your email app will open with your message addressed to me. You can then send it from your own email account.</p>
            </form>

            <div className="contact-links">
              <a href="tel:+919878229978">+91 98782 29978</a>
              <a href="https://github.com/codewithabhi004" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/abhishek-upadhayay-969066386/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/ig.abhishek" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Abhishek Upadhayay</p>
        <span>Learning, building, and making the web a little more useful—one project at a time.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default Page1
