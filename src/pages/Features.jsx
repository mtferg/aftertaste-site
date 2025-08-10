import Meta from '../components/Meta.jsx'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import IconTV from '../assets/brand/TV-bw.png'
import IconMic from '../assets/brand/mic-bw.png'
import IconHeadphones from '../assets/brand/headphones-bw.png'
import IconPopcorn from '../assets/brand/popcorn.png'
import Shot3 from '../assets/screenshots/IMG_6378.webp'
import Shot4 from '../assets/screenshots/IMG_6379.webp'
import Shot5 from '../assets/screenshots/IMG_6380.webp'

export default function Features() {
  return (
    <main>
      <Meta
        title="Aftertaste — Features"
        description="Cross-media discovery across TV, film, podcasts, and music with a blend of professional scores and personal recommendations."
        url="/features"
        image="/opengraph.jpg"
      />

      <Section id="how-it-works" title="How it works" subtitle="Professional + personal, all in one place" headerAlign="left">
        <ul className="feature-cards">
          <li>
            <h3>Professional reviews</h3>
            <p>Context from trusted sources helps you evaluate quality at a glance.</p>
          </li>
          <li>
            <h3>Personal recommendations</h3>
            <p>Signals from friends, family, and creators who share your taste.</p>
          </li>
          <li>
            <h3>Clear decisions</h3>
            <p>One view that blends scores and human input — less noise, more clarity.</p>
          </li>
        </ul>
      </Section>

      <Section id="cross-media" title="Cross‑media discovery" subtitle="TV, film, podcasts, and music" headerAlign="center">
        <div className="icon-grid">
          <img src={IconTV} alt="TV icon" />
          <img src={IconPopcorn} alt="Popcorn icon" />
          <img src={IconMic} alt="Microphone icon" />
          <img src={IconHeadphones} alt="Headphones icon" />
        </div>
      </Section>

      <Section id="previews" title="See the app" subtitle="A few screens from the experience" headerAlign="center">
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <img src={Shot3} alt="App screenshot" loading="lazy" decoding="async" style={{ width: '100%', borderRadius: '12px' }} />
          <img src={Shot4} alt="App screenshot" loading="lazy" decoding="async" style={{ width: '100%', borderRadius: '12px' }} />
          <img src={Shot5} alt="App screenshot" loading="lazy" decoding="async" style={{ width: '100%', borderRadius: '12px' }} />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Button as="a" href="/download" variant="mint" size="lg">Get the app</Button>
        </div>
      </Section>
    </main>
  )
}


