export default function Timeline() {
  const items = [
    { quarter: 'Q2 2025', title: 'Books' },
    { quarter: 'Q4 2025', title: 'Podcasts' },
  ]

  return (
    <ol className="timeline" role="list">
      {items.map((item, idx) => (
        <li key={idx} className="timeline__item">
          <div className="timeline__dot" aria-hidden="true" />
          <div className="timeline__content">
            <div className="timeline__quarter">{item.quarter}</div>
            <div className="timeline__title">{item.title}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}


