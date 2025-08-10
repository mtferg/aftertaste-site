import Meta from '../components/Meta.jsx'
import Section from '../components/Section.jsx'

export default function FAQ() {
  return (
    <main>
      <Meta
        title="Aftertaste — FAQ"
        description="Answers to common questions about the Aftertaste app and community."
        url="/faq"
        image="/opengraph.jpg"
      />

      <Section id="faq" title="Frequently asked questions" headerAlign="center">
        <nav aria-label="FAQ topics" style={{ marginBottom: '1rem' }}>
          <ul className="faq-toc">
            <li><a href="#what-is-aftertaste">What is Aftertaste?</a></li>
            <li><a href="#how-reviews">How are reviews and recommendations sourced?</a></li>
            <li><a href="#platforms">Which platforms are supported?</a></li>
            <li><a href="#privacy">What about privacy?</a></li>
            <li><a href="#community">Community standards</a></li>
          </ul>
        </nav>

        <div className="faq-list">
          <h3 id="what-is-aftertaste">What is Aftertaste?</h3>
          <details open>
            <summary>Learn more</summary>
            <p>Aftertaste is a trusted, community-driven hub for discovering TV, film, podcasts, and music — blending professional reviews with personal recommendations from people you trust.</p>
          </details>

          <h3 id="how-reviews">How are reviews and recommendations sourced?</h3>
          <details>
            <summary>Learn more</summary>
            <p>We combine professional scores and critic context with authentic, human recommendations from friends, family, and creators. This gives you a clear picture without endless scrolling.</p>
          </details>

          <h3 id="platforms">Which platforms are supported?</h3>
          <details>
            <summary>Learn more</summary>
            <p>Mobile apps for iOS and Android are our primary focus. Stay tuned to our roadmap for updates.</p>
          </details>

          <h3 id="privacy">What about privacy?</h3>
          <details>
            <summary>Learn more</summary>
            <p>We keep things simple in V1 — no trackers or analytics scripts. You control what you share with the community.</p>
          </details>

          <h3 id="community">Community standards</h3>
          <details>
            <summary>Learn more</summary>
            <p>We celebrate inclusive, constructive conversations. Be respectful. Avoid spam, harassment, or hateful content.</p>
          </details>
        </div>
      </Section>
    </main>
  )
}


