export default function SocialProof() {
  const quotes = [
    {
      quote: 'Finally, a place where recommendations feel human again.',
      author: 'Film Enthusiast',
    },
    {
      quote: 'My go-to hub for what to watch and listen to next.',
      author: 'Podcast Junkie',
    },
    {
      quote: 'Thoughtful curation beats noisy algorithms every time.',
      author: 'Music Lover',
    },
  ]

  return (
    <div className="social-proof">
      {quotes.map((q, idx) => (
        <figure key={idx} className="quote-card">
          <blockquote>“{q.quote}”</blockquote>
          <figcaption>— {q.author}</figcaption>
        </figure>
      ))}
    </div>
  )
}


