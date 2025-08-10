import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} role="banner">
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label="Aftertaste home">
          Aftertaste
        </Link>
        <nav className="main-nav" aria-label="Main Navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? 'active' : undefined}>Features</NavLink>
          <NavLink to="/download" className={({ isActive }) => isActive ? 'active' : undefined}>Download</NavLink>
          <NavLink to="/community" className={({ isActive }) => isActive ? 'active' : undefined}>Community</NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : undefined}>FAQ</NavLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}


