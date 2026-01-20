import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'trainings', 'go-global', 'performances', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (sectionId) => activeSection === sectionId

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    // { id: 'trainings', label: 'Trainings' },
    // { id: 'go-global', label: 'Go Global' },
    { id: 'performances', label: 'Performances' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xl font-bold">D</span>
            </div>
            <span className="text-xl font-serif font-semibold">NitryaIsha</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isActive(link.id)
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block py-2 text-sm font-medium text-left cursor-pointer ${
                  isActive(link.id)
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

