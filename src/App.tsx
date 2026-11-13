import {
  FormEvent,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from "react"

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
}

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
  className?: string
  href?: string
}

function ProjectCard({
  number,
  title,
  category,
  image,
  className = "",
  href = "/projects/soft-architectures",
}: ProjectProps) {
  return (
    <AppLink className={`project-card ${className}`} href={href}>
      <div className="project-image-wrap">
        <img src={image} alt="" className="project-image" />
        <span className="project-arrow">
          <Arrow diagonal />
        </span>
      </div>
      <div className="project-meta">
        <span>{number}</span>
        <h3>{title}</h3>
        <span>{category}</span>
      </div>
    </AppLink>
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
            className="project-large"
          />
          <ProjectCard
            number="02"
            title="Things We Carry"
            category="Painting · 2024"
            image={images.storiesBlue}
            className="project-tall"
            href="/projects/things-we-carry"
          />
          <ProjectCard
            number="04"
            title="Things We Carry"
            category="Painting · 2024"
            image={images.storiesPortrait}
            className="project-repeat"
            href="/projects/things-we-carry"
          />
          <ProjectCard
            number="03"
            title="A Room of Echoes"
            category="Installation · 2023"
            image={images.storiesLamp}
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
        index="Projects · 2021—2025"
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
        <ProjectCard
          number="01"
          title="Soft Architectures"
          category="Painting · 2025"
          image={images.blue}
        />
        <ProjectCard
          number="02"
          title="Things We Carry"
          category="Painting · 2024"
          image={images.figure}
          href="/projects/things-we-carry"
        />
        <ProjectCard
          number="03"
          title="A Room of Echoes"
          category="Installation · 2023"
          image={images.circles}
          href="/projects/a-room-of-echoes"
        />
        <ProjectCard
          number="04"
          title="Domestic Weather"
          category="Mixed media · 2022"
          image={images.gallery}
          href="/projects/domestic-weather"
        />
      </section>
    </main>
  )
}

function ProjectDetailPage() {
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
          These paintings begin with remembered rooms. Layers of pigment,
          erased lines, and recurring thresholds transform architecture into a
          record of feeling—unstable, porous, and alive.
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
        <button className="add-button" type="button" onClick={() => setAdded(true)}>
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
            examine how memory settles into objects and domestic spaces.
            Through layered surfaces and intuitive gestures, she builds visual
            languages that sit between intimacy and abstraction.
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
  if (pathname.startsWith("/projects/")) return <ProjectDetailPage />
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
