import Meta from '../components/Meta.jsx'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import IconClapper from '../assets/brand/clapper.png'
import IconMic from '../assets/brand/mic-bw.png'
import IconHeadphones from '../assets/brand/headphones-bw.png'
import IconTV from '../assets/brand/TV-bw.png'

const curators = [
  {
    name: 'Alex M.',
    focus: 'Indie Film Curator',
    blurb: 'Spotlighting festival favorites and hidden gems with timeless storytelling.',
    img: IconClapper,
  },
  {
    name: 'Rae P.',
    focus: 'Podcast Explorer',
    blurb: 'Weekly deep dives into narrative nonfiction and culture conversations.',
    img: IconMic,
  },
  {
    name: 'Kai S.',
    focus: 'New Music Scout',
    blurb: 'Genre-blending picks that balance critics’ darlings with fan favorites.',
    img: IconHeadphones,
  },
  {
    name: 'Sam T.',
    focus: 'Classic TV Historian',
    blurb: 'Curated eras and episode guides for essential small-screen arcs.',
    img: IconTV,
  },
]

export default function Community() {
  return (
    <main>
      <Meta
        title="Aftertaste — Community & Curators"
        description="Explore highlighted curators and creators in the Aftertaste community."
        url="/community"
        image="/opengraph.jpg"
      />

      <Section id="curators" title="Curators & creators" subtitle="A few of the voices shaping taste on Aftertaste" headerAlign="center">
        <div className="card-grid">
          {curators.map((c) => (
            <article key={c.name} className="curator-card">
              <img src={c.img} alt="" className="curator-card__img" />
              <div className="curator-card__body">
                <h3 className="curator-card__name">{c.name}</h3>
                <p className="curator-card__focus">{c.focus}</p>
                <p className="curator-card__blurb">{c.blurb}</p>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Button as="a" href="/download" variant="mint">Get the app</Button>
        </div>
      </Section>
    </main>
  )
}


