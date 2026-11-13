import { FormEvent, MouseEvent, ReactNode, useEffect, useState } from "react"

const images = {
  hero: "/assets/19cb0.png",
  heroPortrait: "/assets/24f2b.png",
  blue: "/assets/74935.png",
  figure: "/assets/e21c9.png",
  circles: "/assets/e4f80.png",
  studio: "/assets/10b5c.png",
  gallery: "/assets/5d3a5.png",
  storiesSoft: "/assets/070c9.png",
  storiesBlue: "/assets/efaea.png",
  storiesPortrait: "/assets/2e351.png",
  storiesLamp: "/assets/d0f56.png",
  archiveVessel: "/assets/projects/photo-10.jpg",
  archiveFigures: "/assets/projects/photo-01.jpg",
  archiveLamp: "/assets/projects/photo-02.jpg",
  archivePortrait: "/assets/projects/photo-04.jpg",
  archiveRoom: "/assets/projects/photo-03.jpg",
  archiveMexico: "/assets/projects/photo-05.jpg",
  archiveClassicalFigures: "/assets/projects/photo-07.jpg",
  archiveBlueVessel: "/assets/projects/photo-09.jpg",
  archiveVidas: "/assets/projects/photo-08.jpg",
  archiveMasks: "/assets/projects/photo-06.jpg",
}

type Project = {
  slug: string
  number: string
  title: string
  category: string
  year: string
  medium: string
  dimensions: string
  image: string
  alt: string
  story: string
}

const projects: Project[] = [
  {
    slug: "blue-memories",
    number: "01",
    title: "Blue Memories",
    category: "Ceramic",
    year: "2026",
    medium: "Cold Porcelain and Acrylic",
    dimensions: "26 x 15 cm",
    image: images.archiveVessel,
    alt: "Blue-and-white ceramic vessel with a pom-pom handle",
    story:
      "Inspired by my trip to Greece, this ceramic piece is a personal interpretation of the colours, patterns and traditions I encountered along the way. The shades of blue and white evoke the beauty of Greek architecture and the Aegean Sea, while the geometric patterns and colourful details bring together tradition and contemporary creativity. I wanted to transform a travel memory into a unique object, where colour, texture and creativity preserve a little piece of Greece.",
  },
  {
    slug: "the-shape-of-strength",
    number: "02",
    title: "The Shape of Strength",
    category: "Painting",
    year: "2026",
    medium: "Acrylic on Canvas",
    dimensions: "80 x 130 cm",
    image: images.archiveFigures,
    alt: "Two intertwined figures on a blue painted background",
    story:
      "In Greece, among ruins, mythology, and the traces of a civilization that continues to inspire the present, I found in ancient ceramics the depiction of athletes in motion as a form of expression. In this painting, the struggles of the Olympic Games become tension and balance — a moment suspended between strength and fragility. A travel memory transformed into painting, where history ceases to be the past and, once again, comes to life through movement.",
  },
  {
    slug: "sunshine-and-stripes",
    number: "03",
    title: "Sunshine & Stripes",
    category: "Painting",
    year: "2026",
    medium: "Cold Porcelain and Acrylic",
    dimensions: "53 x 33 cm",
    image: images.archiveLamp,
    alt: "Table lamp with a bright yellow shade and striped ceramic base",
    story:
      "This lamp is a playful exploration of colour, shapes and contrasts, where functionality meets artistic expression. The black and white stripes of the base create a bold graphic pattern, while the bright yellow lampshade and orange details bring warmth, energy and a touch of retro charm. Through this piece, I wanted to transform an everyday object into something full of personality — a little celebration of colour, creativity and the joy of making.",
  },
  {
    slug: "a-legacy-of-love",
    number: "04",
    title: "A Legacy of Love",
    category: "Painting",
    year: "2022",
    medium: "Acrylic, Gouache and Stitching on Canvas",
    dimensions: "70 x 100 cm",
    image: images.archivePortrait,
    alt: "Portrait of a woman wearing layered necklaces against a yellow background",
    story:
      "This painting stems from my admiration for African patterns, vibrant colours and the beauty of traditional jewellery and adornments. This passion is also connected to someone very special: my Cape Verdean aunt, with whom I shared a very strong bond from the moment I was born. A nurse by profession, she was there when I came into the world and, in many ways, brought me closer to a culture that has always fascinated me. Through this work, I wanted to honour her influence, celebrating beauty, strength and feminine identity. More than an aesthetic inspiration, this painting represents a legacy of love, admiration and memories that remain part of who I am.",
  },
  {
    slug: "20-years",
    number: "05",
    title: "20 Years",
    category: "Painting",
    year: "2025",
    medium: "Acrylic and Gouache on Canvas",
    dimensions: "80 x 130 cm",
    image: images.archiveRoom,
    alt: "Colorful painting of a person walking through a room",
    story:
      "In 2006, during a secondary school art class, I discovered Frida Kahlo, and the Blue House (Casa Azul) became one of my greatest travel dreams. This painting captures the moment when the student Ana finally gives way to the artist who makes that dream come true. Walking towards the Casa Azul was so much more than a simple stroll: it was an encounter with an inspiration that has accompanied me since I was 17. The connection between who I was and who I am today was so powerful that I couldn't keep it locked away in my memory. I needed it to become something tangible, to take on texture and colour, and ultimately transform itself into a painting. This artwork holds everything I felt as I walked along that path — two versions of myself who, twenty years apart, finally came together.",
  },
  {
    slug: "las-dos-mexicanas",
    number: "06",
    title: "Las dos Mexicanas",
    category: "Painting",
    year: "2025",
    medium: "Acrylic and Gouache on Canvas",
    dimensions: "80 x 120 cm",
    image: images.archiveMexico,
    alt: "Painting of two people in a Mexico-themed scene",
    story:
      "I painted this work inspired by my trip to Mexico — a dream I had held onto for twenty years, ever since I first discovered Frida Kahlo's work in a secondary school art class. One Saturday, during a visit to Chapultepec Zoo, I came across a mother and daughter wearing large bows in their hair, traditional Mexican blouses and jeans. To me, they embodied the very essence of Mexico — a fusion of colours, patterns and traditions. That image stayed with me: a simple, tender moment in which body, space and culture came together. Through this painting, I wanted to preserve that connection — the tenderness of the bond between them, the quiet strength of tradition, and the way identities intertwine and transform when they encounter new contexts and experiences. Whenever I look at this painting, I feel transported back to that Saturday. And I often find myself wondering where those two women might be now — unaware that they have become part of my memory and my art.",
  },
  {
    slug: "bodies-in-motion",
    number: "07",
    title: "Bodies in Motion",
    category: "Painting",
    year: "2026",
    medium: "Acrylic on Canvas",
    dimensions: "80 x 130 cm",
    image: images.archiveClassicalFigures,
    alt: "Three classical figures depicted in brown, blue, and black",
    story:
      "Inspired by the running competitions of the ancient Olympic Games, this painting captures the beauty of movement, the pursuit of excellence and the human desire to go beyond one's limits. Through the simplicity of the figures and the rhythm of their gestures, I wanted to bring a fragment of Ancient Greece into the present — where movement becomes history, and history becomes art. A memory from my journey through Greece, transformed into painting — a tribute to the enduring spirit of the Olympic Games and the timeless connection between body, culture and movement.",
  },
  {
    slug: "the-sicilian-pinecone",
    number: "08",
    title: "The Sicilian Pinecone",
    category: "Ceramic",
    year: "2026",
    medium: "Cold Porcelain and Acrylic",
    dimensions: "25 x 15 cm",
    image: images.archiveBlueVessel,
    alt: "Tall blue ceramic vessel with a raised textured surface and striped base",
    story:
      "Inspired by the traditional Sicilian pinecones I came across during my trip to Sicily, this ceramic piece is a personal interpretation of one of the island's most iconic symbols. The pinecone-inspired texture celebrates the beauty of traditional craftsmanship, while the blue lines at the base evoke the colours of the Mediterranean and the timeless charm of Sicilian ceramics. A travel memory transformed into an object, where tradition, texture and colour come together — a small tribute to the beauty and symbolism of Sicily.",
  },
  {
    slug: "maias",
    number: "09",
    title: "Maias",
    category: "Painting",
    year: "2025",
    medium: "Acrylic and Gouache on Canvas",
    dimensions: "80 x 130 cm",
    image: images.archiveVidas,
    alt: "Vertical black artwork with colorful repeating patterns",
    story:
      "This painting was born from the trip to Mexico that I've been sharing here, especially from the inspiration I brought back from the Museum of Anthropology in Mexico City. I returned fascinated by the vibrant colors, ancestral patterns, and highly symbolic figures, transforming all of it into a composition full of energy, memory, and imagination.",
  },
  {
    slug: "mascaras",
    number: "10",
    title: "Máscaras",
    category: "Painting",
    year: "2025",
    medium: "Acrylic and Gouache on Canvas",
    dimensions: "80 x 130 cm",
    image: images.archiveMasks,
    alt: "Colorful collage of theatrical masks crossed by blue rays",
    story:
      "This is another painting from my trip to Mexico, another memory I am adding to this series. On the day I visited Chapultepec Castle, as I walked up the path, I came across several stalls filled with lucha libre masks. There were so many of them, lined up, colourful and expressive, that they almost seemed alive. I was fascinated by the intensity of the colours and the expressions, as if each mask carried the energy of a culture full of strength and identity. This is another memory from the streets of Mexico, now living on this canvas.",
  },
]

const previousProjectRoutes = new Set([
  "soft-architectures",
  "things-we-carry",
  "a-room-of-echoes",
  "domestic-weather",
])

function Arrow({
  diagonal = false,
  light = false,
  hero = false,
}: {
  diagonal?: boolean
  light?: boolean
  hero?: boolean
}) {
  if (!diagonal) {
    return (
      <img
        aria-hidden="true"
        className="icon"
        src={
          hero
            ? "/assets/ba72f.svg"
            : light
              ? "/assets/77916.svg"
              : "/assets/bff41.svg"
        }
        alt=""
      />
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  )
}

function AppLink({
  href,
  children,
  className,
  ariaLabel,
  onNavigate,
}: {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  onNavigate?: () => void
}) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }
    event.preventDefault()
    window.history.pushState({}, "", href)
    window.dispatchEvent(new PopStateEvent("popstate"))
    onNavigate?.()
  }

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

const navigation = [
  ["Projects", "/projects"],
  ["Store", "/store"],
  ["Bio", "/bio"],
  ["Contact", "/contact"],
]

function Header({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <AppLink className="wordmark" href="/" ariaLabel="Ana Marques, home">
        <img
          className="wordmark-image"
          src="/assets/8682c.png"
          alt="Ana Marques"
        />
      </AppLink>
      <nav
        className={open ? "nav nav-open" : "nav"}
        aria-label="Main navigation"
      >
        {navigation.map(([label, path]) => (
          <AppLink
            key={path}
            href={path}
            onNavigate={() => setOpen(false)}
            className={pathname.startsWith(path) ? "nav-active" : ""}
          >
            {label}
          </AppLink>
        ))}
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
    </header>
  )
}

type ProjectProps = {
  number: string
  title: string
  category: string
  image: string
  alt: string
  className?: string
  href?: string
}

function ProjectCard({
  number,
  title,
  category,
  image,
  alt,
  className = "",
  href,
}: ProjectProps) {
  const content = (
    <>
      <div className="project-image-wrap">
        <img src={image} alt={alt} className="project-image" />
        {href && (
          <span className="project-arrow">
            <Arrow diagonal />
          </span>
        )}
      </div>
      <div className="project-meta">
        <span>{number}</span>
        <h3>{title}</h3>
        <span>{category}</span>
      </div>
    </>
  )
  const classNames = `project-card ${className}`

  return href ? (
    <AppLink className={classNames} href={href}>
      {content}
    </AppLink>
  ) : (
    <article className={classNames}>{content}</article>
  )
}

function ProductCard({
  image,
  title,
  details,
  price,
  href = "/store/orbit-study-no-4",
}: {
  image: string
  title: string
  details: string
  price: string
  href?: string
}) {
  return (
    <article className="product-card">
      <AppLink href={href} className="product-image-link">
        <img src={image} alt={title} />
        <span>View piece</span>
      </AppLink>
      <div className="product-copy">
        <div>
          <h3>{title}</h3>
          <p>{details}</p>
        </div>
        <p>{price}</p>
      </div>
    </article>
  )
}

function MediaCard({
  image,
  label,
  className = "",
}: {
  image: string
  label: string
  className?: string
}) {
  return (
    <AppLink
      className={`media-card ${className}`}
      href="/media"
      ariaLabel={`Play ${label}`}
    >
      <img src={image} alt="" />
      <span className="play-button" aria-hidden="true">
        Play
      </span>
      <span className="media-label">{label}</span>
    </AppLink>
  )
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <SectionLabel>Stay in the loop</SectionLabel>
        <h2>
          Letters from
          <br />
          the studio.
        </h2>
        <form className="newsletter" onSubmit={handleSubmit}>
          <label htmlFor="footer-email">Email address</label>
          <div className="input-row">
            <input
              id="footer-email"
              type="email"
              placeholder="you@email.com"
              required
            />
            <button type="submit">
              {subscribed ? "Thank you" : "Subscribe"} <Arrow light />
            </button>
          </div>
          <p>
            {subscribed
              ? "You’re on the list. Speak soon."
              : "Occasional notes. No noise, ever."}
          </p>
        </form>
      </div>
      <div className="footer-bottom">
        <AppLink className="footer-logo" href="/">
          ANA MARQUES
        </AppLink>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            TikTok
          </a>
          <a href="mailto:studio@anamarques.com">Email</a>
        </div>
        <p>© 2025 Ana Marques Studio</p>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-heading">
          <SectionLabel>
            Multidisciplinary artist · Porto / Barcelona
          </SectionLabel>
          <h1 id="hero-title">
            Between form
            <span>& feeling.</span>
          </h1>
        </div>
        <div className="hero-composition">
          <p className="hero-index">
            Selected works
            <br />
            2021—2025
          </p>
          <div className="hero-image-frame">
            <img
              src={images.heroPortrait}
              alt="Ana Marques seated in her studio surrounded by paintings"
            />
          </div>
          <p className="hero-note">
            Ana Marques explores memory, place, and the tactile language of
            everyday objects across painting, clay, and moving image.
          </p>
          <AppLink
            href="/projects"
            className="round-link"
            ariaLabel="Explore selected projects"
          >
            <Arrow hero />
          </AppLink>
        </div>
      </section>

      <section className="projects section">
        <div className="section-heading">
          <SectionLabel>01 · Selected projects</SectionLabel>
          <h2>
            Stories told through
            <br />
            material and gesture.
          </h2>
          <AppLink href="/projects" className="text-link">
            View all projects <Arrow />
          </AppLink>
        </div>
        <div className="project-grid">
          <ProjectCard
            number="01"
            title="Soft Architectures"
            category="Painting · 2025"
            image={images.storiesSoft}
            alt="Abstract blue painting from the Soft Architectures series"
            className="project-large"
            href="/projects/soft-architectures"
          />
          <ProjectCard
            number="02"
            title="Things We Carry"
            category="Painting · 2024"
            image={images.storiesBlue}
            alt="Blue-toned painting from Things We Carry"
            className="project-tall"
            href="/projects/things-we-carry"
          />
          <ProjectCard
            number="04"
            title="Things We Carry"
            category="Painting · 2024"
            image={images.storiesPortrait}
            alt="Portrait painting from Things We Carry"
            className="project-repeat"
            href="/projects/things-we-carry"
          />
          <ProjectCard
            number="03"
            title="A Room of Echoes"
            category="Installation · 2023"
            image={images.storiesLamp}
            alt="Sculptural lamp from A Room of Echoes"
            className="project-wide"
            href="/projects/a-room-of-echoes"
          />
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-mark">AM</div>
        <p>
          I make work about what remains: traces of color, inherited rituals,
          and the quiet intelligence of hands.
        </p>
        <AppLink className="light-link" href="/bio">
          Read the artist statement <Arrow light />
        </AppLink>
      </section>

      <section className="store section">
        <div className="store-heading">
          <SectionLabel>02 · Studio store</SectionLabel>
          <h2>
            Objects for
            <br />
            living with.
          </h2>
          <p>
            One-of-a-kind works and small editions, made slowly in Ana’s Porto
            studio.
          </p>
        </div>
        <div className="product-grid">
          <ProductCard
            image={images.circles}
            title="Orbit Study No. 4"
            details="Original on paper · 42 × 30 cm"
            price="€680"
          />
          <ProductCard
            image={images.gallery}
            title="Blue Interval"
            details="Archival pigment print · Edition of 25"
            price="€145"
            href="/store/blue-interval"
          />
          <ProductCard
            image={images.studio}
            title="Studio Vessel 02"
            details="Hand-built stoneware · Unique"
            price="€320"
            href="/store/studio-vessel-02"
          />
        </div>
        <AppLink href="/store" className="store-cta">
          Visit the store <Arrow />
        </AppLink>
      </section>

      <section className="media section">
        <div className="media-heading">
          <SectionLabel>03 · From the studio</SectionLabel>
          <h2>Process, in motion.</h2>
          <p>
            Notes from the studio, exhibition days, and the beautifully
            unfinished.
          </p>
        </div>
        <div className="media-grid">
          <MediaCard
            image={images.studio}
            label="Inside the Porto studio"
            className="media-one"
          />
          <MediaCard
            image={images.blue}
            label="Blue study, process"
            className="media-two"
          />
          <MediaCard
            image={images.figure}
            label="A new body of work"
            className="media-three"
          />
        </div>
        <div className="social-row">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            @anamarques.studio ↗
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            TikTok ↗
          </a>
        </div>
      </section>
    </main>
  )
}

function PageIntro({
  index,
  title,
  copy,
}: {
  index: string
  title: ReactNode
  copy: string
}) {
  return (
    <section className="page-intro">
      <SectionLabel>{index}</SectionLabel>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  )
}

function ProjectsPage() {
  return (
    <main className="inner-page">
      <PageIntro
        index="Projects · 2022—2026"
        title={
          <>
            Bodies of work,
            <br />
            still becoming.
          </>
        }
        copy="Painting, sculpture, and installation shaped by memory, domestic space, and the poetics of material."
      />
      <section className="archive-grid" aria-label="Project archive">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            number={project.number}
            title={project.title}
            category={`${project.category} · ${project.year}`}
            image={project.image}
            alt={project.alt}
            href={`/projects/${project.slug}`}
          />
        ))}
      </section>
    </main>
  )
}

function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div>
          <SectionLabel>
            Project {project.number} · {project.category} · {project.year}
          </SectionLabel>
          <h1>{project.title}</h1>
        </div>
        <p>
          A study of shelter, permeability, and the emotional geometries we
          build around ourselves.
        </p>
      </section>
      <div className="detail-cover">
        <img src={project.image} alt={project.alt} />
      </div>
      <section className="project-story">
        <h2>About the work</h2>
        <p>{project.story}</p>
        <dl>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Medium</dt>
            <dd>{project.medium}</dd>
          </div>
          <div>
            <dt>Dimensions</dt>
            <dd>{project.dimensions}</dd>
          </div>
        </dl>
      </section>
      <div className="detail-image-pair">
        <img src={project.image} alt={`Close-up detail of ${project.title}`} />
        <img src={project.image} alt={`Alternate detail of ${project.title}`} />
      </div>
      <AppLink href="/projects" className="back-link">
        View all projects <Arrow />
      </AppLink>
    </main>
  )
}

function LegacyProjectDetailPage() {
  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div>
          <SectionLabel>Project 01 · Painting · 2025</SectionLabel>
          <h1>Soft Architectures</h1>
        </div>
        <p>
          A study of shelter, permeability, and the emotional geometries we
          build around ourselves.
        </p>
      </section>
      <div className="detail-cover">
        <img src={images.blue} alt="Blue and black abstract paintings" />
      </div>
      <section className="project-story">
        <SectionLabel>About the work</SectionLabel>
        <p>
          These paintings begin with remembered rooms. Layers of pigment, erased
          lines, and recurring thresholds transform architecture into a record
          of feeling—unstable, porous, and alive.
        </p>
        <dl>
          <div>
            <dt>Year</dt>
            <dd>2025</dd>
          </div>
          <div>
            <dt>Medium</dt>
            <dd>Oil, pigment, linen</dd>
          </div>
          <div>
            <dt>Works</dt>
            <dd>12 paintings</dd>
          </div>
        </dl>
      </section>
      <div className="detail-image-pair">
        <img src={images.gallery} alt="Paintings installed in a gallery" />
        <img src={images.circles} alt="Abstract artwork detail" />
      </div>
      <AppLink href="/projects" className="back-link">
        View all projects <Arrow />
      </AppLink>
    </main>
  )
}
function StorePage() {
  return (
    <main className="inner-page shop-page">
      <PageIntro
        index="The studio store"
        title={
          <>
            Art to keep
            <br />
            close.
          </>
        }
        copy="Original paintings, hand-built objects, and signed editions made in small, considered runs."
      />
      <section className="shop-category">
        <div className="category-title">
          <SectionLabel>01</SectionLabel>
          <h2>Originals</h2>
          <p>Unique paintings and ceramics</p>
        </div>
        <div className="product-grid">
          <ProductCard
            image={images.circles}
            title="Orbit Study No. 4"
            details="Original on paper · 42 × 30 cm"
            price="€680"
          />
          <ProductCard
            image={images.studio}
            title="Studio Vessel 02"
            details="Hand-built stoneware · Unique"
            price="€320"
            href="/store/studio-vessel-02"
          />
          <ProductCard
            image={images.figure}
            title="After the Rain"
            details="Oil on linen · 80 × 60 cm"
            price="€1,850"
            href="/store/after-the-rain"
          />
        </div>
      </section>
      <section className="shop-category">
        <div className="category-title">
          <SectionLabel>02</SectionLabel>
          <h2>Printables</h2>
          <p>Signed editions and digital works</p>
        </div>
        <div className="product-grid">
          <ProductCard
            image={images.gallery}
            title="Blue Interval"
            details="Archival pigment print · Edition of 25"
            price="€145"
            href="/store/blue-interval"
          />
          <ProductCard
            image={images.blue}
            title="Night Geometry"
            details="Archival pigment print · Edition of 40"
            price="€95"
            href="/store/night-geometry"
          />
        </div>
      </section>
    </main>
  )
}

function ProductDetailPage() {
  const [added, setAdded] = useState(false)
  return (
    <main className="product-detail">
      <div className="product-gallery">
        <img src={images.circles} alt="Orbit Study No. 4" />
        <img src={images.gallery} alt="Artwork shown in an interior" />
      </div>
      <aside className="product-info">
        <SectionLabel>Original work · 2024</SectionLabel>
        <h1>Orbit Study No. 4</h1>
        <p className="product-price">€680</p>
        <p>
          A one-of-a-kind work on heavyweight cotton paper. Signed and dated on
          reverse, presented unframed.
        </p>
        <dl>
          <div>
            <dt>Medium</dt>
            <dd>Oil pastel and pigment</dd>
          </div>
          <div>
            <dt>Dimensions</dt>
            <dd>42 × 30 cm</dd>
          </div>
          <div>
            <dt>Shipping</dt>
            <dd>Worldwide, 5–10 days</dd>
          </div>
        </dl>
        <button
          className="add-button"
          type="button"
          onClick={() => setAdded(true)}
        >
          {added ? "Added to bag" : "Add to bag"} <Arrow />
        </button>
        <AppLink href="/store" className="quiet-link">
          Return to store
        </AppLink>
      </aside>
    </main>
  )
}

function MediaPage() {
  const items = [
    [images.studio, "A morning in the Porto studio", "Studio note · 00:34"],
    [images.blue, "Building a blue ground", "Process · 00:19"],
    [images.figure, "Things We Carry", "Exhibition · 00:42"],
    [images.hero, "Color diary, entry 08", "Process · 00:27"],
    [images.gallery, "Installing Soft Architectures", "Exhibition · 01:04"],
    [images.circles, "Drawing in circles", "Studio note · 00:16"],
  ]
  return (
    <main className="inner-page media-page">
      <PageIntro
        index="Media · Moving image"
        title={
          <>
            The studio,
            <br />
            in motion.
          </>
        }
        copy="Short films, process notes, and exhibition fragments from Instagram and TikTok."
      />
      <section className="video-feed">
        {items.map(([image, title, detail], index) => (
          <a
            href={index % 2 ? "https://tiktok.com" : "https://instagram.com"}
            target="_blank"
            rel="noreferrer"
            className="video-item"
            key={title}
          >
            <div>
              <img src={image} alt="" />
              <span className="play-button">Play</span>
            </div>
            <h2>{title}</h2>
            <p>{detail} ↗</p>
          </a>
        ))}
      </section>
    </main>
  )
}

function BioPage() {
  return (
    <main className="bio-page">
      <section className="bio-hero">
        <div>
          <SectionLabel>About Ana</SectionLabel>
          <h1>Material remembers what language forgets.</h1>
        </div>
        <img src={images.studio} alt="Ana Marques' working studio" />
      </section>
      <section className="bio-statement">
        <SectionLabel>Artist statement</SectionLabel>
        <div>
          <p className="bio-lead">
            Ana Marques is a multidisciplinary artist working between Porto and
            Barcelona.
          </p>
          <p>
            Her practice moves across painting, ceramics, and moving image to
            examine how memory settles into objects and domestic spaces. Through
            layered surfaces and intuitive gestures, she builds visual languages
            that sit between intimacy and abstraction.
          </p>
          <p>
            Ana studied Fine Art in Lisbon and has exhibited across Portugal,
            Spain, and the United Kingdom. Her work is held in private
            collections internationally.
          </p>
        </div>
      </section>
      <section className="cv-section">
        <div>
          <SectionLabel>Selected exhibitions</SectionLabel>
          <h2>CV</h2>
        </div>
        <div className="cv-list">
          {[
            ["2025", "Soft Architectures", "Galeria Norte, Porto"],
            ["2024", "Things We Carry", "Espacio Lumen, Barcelona"],
            ["2023", "A Room of Echoes", "The Stone Space, London"],
            ["2022", "New Materialities", "Museu do Chiado, Lisbon"],
            ["2021", "Tender Structures", "Casa da Cerca, Almada"],
          ].map(([year, show, place]) => (
            <div className="cv-row" key={show}>
              <span>{year}</span>
              <strong>{show}</strong>
              <span>{place}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function ContactPage() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-heading">
        <SectionLabel>Contact · Porto / Barcelona</SectionLabel>
        <h1>Let’s start a conversation.</h1>
        <p>
          For commissions, collaborations, press, or studio visits, send a note
          below or write directly.
        </p>
      </section>
      <section className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Your name</span>
            <input name="name" required />
          </label>
          <label>
            <span>Email address</span>
            <input name="email" type="email" required />
          </label>
          <label>
            <span>I’m getting in touch about</span>
            <select name="subject" defaultValue="Commission">
              <option>Commission</option>
              <option>Artwork inquiry</option>
              <option>Press and collaboration</option>
              <option>Studio visit</option>
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit">
            {sent ? "Message sent" : "Send inquiry"} <Arrow />
          </button>
        </form>
        <aside className="contact-details">
          <div>
            <SectionLabel>Direct</SectionLabel>
            <a href="mailto:studio@anamarques.com">studio@anamarques.com</a>
            <a href="tel:+351220000000">+351 220 000 000</a>
          </div>
          <div>
            <SectionLabel>Studio</SectionLabel>
            <p>
              Rua do Rosário 48
              <br />
              4050-522 Porto, Portugal
            </p>
          </div>
          <div>
            <SectionLabel>Social</SectionLabel>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              TikTok ↗
            </a>
          </div>
        </aside>
      </section>
    </main>
  )
}

function NotFoundPage() {
  return (
    <main className="not-found">
      <p>404</p>
      <h1>This page has wandered from the studio.</h1>
      <AppLink href="/" className="store-cta">
        Return home <Arrow />
      </AppLink>
    </main>
  )
}

function resolvePage(pathname: string) {
  if (pathname === "/") return <HomePage />
  if (pathname === "/projects") return <ProjectsPage />
  if (pathname.startsWith("/projects/")) {
    const slug = pathname.slice("/projects/".length)
    const project = projects.find((item) => item.slug === slug)
    if (project) return <ProjectDetailPage project={project} />
    if (previousProjectRoutes.has(slug)) return <LegacyProjectDetailPage />
    return <NotFoundPage />
  }
  if (pathname === "/store") return <StorePage />
  if (pathname.startsWith("/store/")) return <ProductDetailPage />
  if (pathname === "/media") return <MediaPage />
  if (pathname === "/bio") return <BioPage />
  if (pathname === "/contact") return <ContactPage />
  return <NotFoundPage />
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    function handleLocationChange() {
      setPathname(window.location.pathname)
      window.scrollTo({ top: 0, behavior: "instant" })
    }
    window.addEventListener("popstate", handleLocationChange)
    return () => window.removeEventListener("popstate", handleLocationChange)
  }, [])

  return (
    <div className="site-shell">
      <Header pathname={pathname} />
      {resolvePage(pathname)}
      <Footer />
    </div>
  )
}
