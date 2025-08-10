import { useEffect, useRef, useState } from 'react'

export default function PhoneMock({ images = [], intervalMs = 3000, ariaLabel = 'App preview' }) {
  const [index, setIndex] = useState(0)
  const containerRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el || images.length <= 1) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const play = () => {
      if (prefersReduced) return
      clearInterval(timerRef.current)
      timerRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs)
    }

    const obs = new IntersectionObserver((entries) => {
      const vis = entries.some((e) => e.isIntersecting)
      if (vis) play()
      else clearInterval(timerRef.current)
    }, { rootMargin: '200px' })
    obs.observe(el)

    return () => {
      clearInterval(timerRef.current)
      obs.disconnect()
    }
  }, [images.length, intervalMs])

  return (
    <div ref={containerRef} className="phone-mock" role="img" aria-label={ariaLabel}>
      <div className="phone-mock__notch" aria-hidden="true" />
      <div className="phone-mock__screen">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            className={`phone-mock__slide${i === index ? ' is-active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}


