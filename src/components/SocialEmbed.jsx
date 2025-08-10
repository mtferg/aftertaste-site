import { useEffect, useRef, useState } from 'react'

export default function SocialEmbed({ provider, src, title }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setVisible(true)
      })
    }, { rootMargin: '200px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="social-embed" aria-label={`${provider} embed`}>
      {visible ? (
        <iframe
          title={title || `${provider} embed`}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          style={{ width: '100%', aspectRatio: '16 / 9', border: 0, borderRadius: '12px' }}
        />
      ) : (
        <div style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: '12px', background: 'rgba(0,0,0,0.06)' }} />
      )}
    </div>
  )
}


