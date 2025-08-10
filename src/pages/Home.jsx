import Meta from '../components/Meta.jsx'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import WordmarkMint from '../assets/brand/Wordmark-Horizontal-RGB-Mint.png'
import Screenshot1 from '../assets/screenshots/IMG_6376.webp'
import Screenshot2 from '../assets/screenshots/IMG_6377.webp'
import Screenshot3 from '../assets/screenshots/IMG_6378.webp'
import PhoneMock from '../components/PhoneMock.jsx'
import SocialProof from '../components/SocialProof.jsx'
import Timeline from '../components/Timeline.jsx'

export default function Home() {
  return (
    <main>
      <Meta
        title="Aftertaste — Discover what to watch and listen to next"
        description="A community-driven hub to find the best TV, film, podcasts, and music with trusted recommendations."
        url="/"
        image="/opengraph.jpg"
      />

      <Section id="hero" title={null} headerAlign="left">
        <div className="hero-grid">
          <img src={WordmarkMint} alt="Aftertaste wordmark" style={{ height: '40px' }} />
          <h1 className="hero-title">A modern, community-driven platform with vintage cinema charm</h1>
          <p className="hero-sub">
            Discover TV, film, podcasts, and music through trusted recommendations—blending professional
            reviews with authentic voices from your community.
          </p>
          <div className="hero-ctas">
            <Button as="a" href="/download" variant="mint" size="lg">Get the app</Button>
            <Button as="a" href="/features" variant="bubble" size="lg">See features</Button>
          </div>
        </div>
      </Section>

      <Section id="previews" title="App previews" subtitle="A quick look at the experience" headerAlign="center">
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <PhoneMock images={[Screenshot1, Screenshot2, Screenshot3]} />
        </div>
      </Section>

      <Section id="social-proof" title="Loved by our community" subtitle="Real voices, real recommendations" headerAlign="center">
        <SocialProof />
      </Section>

      <Section id="timeline" title="What’s coming next" subtitle="Our near-term roadmap" headerAlign="center">
        <Timeline />
      </Section>
    </main>
  )
}


