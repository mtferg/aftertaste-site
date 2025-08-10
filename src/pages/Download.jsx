import Meta from '../components/Meta.jsx'
import Section from '../components/Section.jsx'
import StoreBadges from '../components/StoreBadges.jsx'

const IOS_URL = '#'
const ANDROID_URL = '#'

export default function Download() {
  return (
    <main>
      <Meta
        title="Aftertaste — Download"
        description="Get the Aftertaste app for your device."
        url="/download"
        image="/opengraph.jpg"
      />

      <Section id="download" title="Download Aftertaste" subtitle="Smart link sends you to your device’s store" headerAlign="center">
        <StoreBadges iosUrl={IOS_URL} androidUrl={ANDROID_URL} />
      </Section>
    </main>
  )
}


