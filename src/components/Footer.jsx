export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <p>© {new Date().getFullYear()} Aftertaste</p>
        <nav aria-label="Footer links">
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/download">Download</a>
          <a href="/community">Community</a>
          <a href="/faq">FAQ</a>
        </nav>
      </div>
    </footer>
  )
}


