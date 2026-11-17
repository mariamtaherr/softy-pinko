import { useState } from 'react'
import logo from '../assets/images/logo.png'

// Menu links stored in an array and rendered with .map()
const navLinks = [
  { label: 'Home', href: '#welcome' },
  { label: 'About', href: '#about' },
  { label: 'Work Process', href: '#work' },
  { label: 'Testimonials', href: '#testi' },
  { label: 'Pricing Tables', href: '#price' },
  { label: 'Blog Entries', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
]

function Navbar() {
  // Controls the mobile (hamburger) menu: open or closed
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed inset-x-0 top-[30px] z-[100] mx-1.5 my-2.5 rounded-[40px] border border-white/30 bg-white/[.65] px-[25px] py-[15px] shadow-soft backdrop-blur-[4.2px] transition-all duration-300
        lg:mx-0
        min-[1101px]:mx-[50px] min-[1201px]:mx-[100px] min-[1301px]:mx-[150px] min-[1401px]:mx-[200px]
        min-[1501px]:mx-[250px] min-[1701px]:mx-[300px] min-[1921px]:mx-[400px]"
    >
      <div className="site-container flex flex-wrap items-center justify-between lg:flex-nowrap">
        {/* Logo */}
        <a href="#welcome" className="mr-6 shrink-0 py-[5px]">
          <img src={logo} alt="Softy Pinko logo" className="inline-block align-top" />
        </a>

        {/* Hamburger button (visible on small screens only) */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md border border-black/10 px-3 py-1 lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 30 30" fill="none" stroke="rgba(33,37,41,0.75)" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h22M4 15h22M4 23h22" />
          </svg>
        </button>

        {/* Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} grow basis-full items-center lg:flex lg:basis-auto`}>
          <ul className="ml-auto flex flex-col text-center lg:flex-row lg:text-left">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative block whitespace-nowrap py-2 text-black/55 transition-colors duration-150 hover:text-pink lg:px-2 ${
                    index !== navLinks.length - 1
                      ? "max-lg:my-[5px] max-lg:after:absolute max-lg:after:bottom-0 max-lg:after:left-1/2 max-lg:after:h-px max-lg:after:w-[70%] max-lg:after:-translate-x-1/2 max-lg:after:bg-[#ddd]"
                      : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
