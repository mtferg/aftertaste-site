import Meta from '../components/Meta.jsx'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import IconTV from '../assets/brand/TV-bw.png'
import IconMic from '../assets/brand/mic-bw.png'
import IconHeadphones from '../assets/brand/headphones-bw.png'
import IconPopcorn from '../assets/brand/popcorn.png'

export default function About() {
  return (
    <main>
      <Meta
        title="Aftertaste — Our Story"
        description="We exist to make discovery human again — blending professional reviews with authentic recommendations from people you trust."
        url="/about"
        image="/opengraph.jpg"
      />

      <Section id="mission" title="Our Mission" headerAlign="left">
        <p style={{ maxWidth: 760 }}>
          Aftertaste is a trusted, community-driven hub where people discover and discuss what they love in TV, film,
          podcasts, and music. We replace noisy, opaque algorithms with meaningful recommendations from friends,
          family, and creators — a single reliable place to decide what to enjoy next.
        </p>
      </Section>

      <Section id="why" title="Why Aftertaste" subtitle="Clear, human discovery across every medium" headerAlign="left">
        <ul style={{ maxWidth: 760, lineHeight: 1.7 }}>
          <li>Blends professional scores with authentic personal recommendations</li>
          <li>One hub for TV, film, podcasts, and music — no more app-hopping</li>
          <li>Community-first conversations that surface taste you actually trust</li>
          <li>Designed to be warm, inclusive, and easy — not another feed to fight</li>
        </ul>
        <div style={{ marginTop: '1rem' }}>
          <Button as="a" href="/features" variant="mint">Explore features</Button>
        </div>
      </Section>

      <Section id="aesthetic" title="A nostalgic look, built for today" subtitle="Vintage cinema charm, modern clarity" headerAlign="center">
        <div className="icon-grid">
          <img src={IconTV} alt="TV icon" />
          <img src={IconPopcorn} alt="Popcorn icon" />
          <img src={IconMic} alt="Microphone icon" />
          <img src={IconHeadphones} alt="Headphones icon" />
        </div>
        <p style={{ maxWidth: 760, margin: '1rem auto 0', textAlign: 'center' }}>
          Inspired by the golden age of Hollywood — bold lettering, subtle textures, and playful, high-contrast accents —
          while remaining fast, accessible, and responsive on every device.
        </p>
      </Section>
    </main>
  )
}


