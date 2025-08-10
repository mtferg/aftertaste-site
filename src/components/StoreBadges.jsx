function detectPlatform() {
  const ua = navigator.userAgent || navigator.vendor || ''
  const isAndroid = /Android/i.test(ua)
  const isIOS = /iPhone|iPad|iPod/i.test(ua)
  return { isAndroid, isIOS }
}

export default function StoreBadges({ iosUrl, androidUrl, className }) {
  const { isAndroid, isIOS } = detectPlatform()

  const handleSmartDownload = () => {
    if (isIOS && iosUrl) window.location.href = iosUrl
    else if (isAndroid && androidUrl) window.location.href = androidUrl
  }

  return (
    <div className={`store-badges ${className || ''}`}>
      <button className="store-badge store-badge--primary" onClick={handleSmartDownload}>
        Get the app
      </button>
      <a className="store-badge" href={iosUrl || '#'} aria-label="Download on the App Store">App Store</a>
      <a className="store-badge" href={androidUrl || '#'} aria-label="Get it on Google Play">Google Play</a>
    </div>
  )
}


