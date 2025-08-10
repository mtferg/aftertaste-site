import { useEffect } from 'react'

function ensureNamedMeta(name) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  return tag
}

function ensurePropertyMeta(property) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  return tag
}

export default function Meta({ title, description, url, image }) {
  useEffect(() => {
    if (title) {
      document.title = title
      ensurePropertyMeta('og:title').setAttribute('content', title)
      ensureNamedMeta('twitter:title').setAttribute('content', title)
    }
    if (description) {
      ensureNamedMeta('description').setAttribute('content', description)
      ensurePropertyMeta('og:description').setAttribute('content', description)
      ensureNamedMeta('twitter:description').setAttribute('content', description)
    }
    if (url) {
      ensurePropertyMeta('og:url').setAttribute('content', url)
    }
    if (image) {
      ensurePropertyMeta('og:image').setAttribute('content', image)
      ensureNamedMeta('twitter:image').setAttribute('content', image)
    }
    // Set generic card type
    ensureNamedMeta('twitter:card').setAttribute('content', 'summary_large_image')
    ensurePropertyMeta('og:type').setAttribute('content', 'website')
  }, [title, description, url, image])

  return null
}


