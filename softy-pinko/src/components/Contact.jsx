import { useState } from 'react'
import SectionTitle from './SectionTitle'

// The two small inputs, rendered with .map()
const inputFields = [
  { name: 'name', type: 'text', placeholder: 'Full Name' },
  { name: 'email', type: 'email', placeholder: 'Email Address' },
]

// Shared Tailwind classes for the form fields
const fieldClass =
  'w-full rounded-softy border border-[#dee2e6] bg-white text-base text-[#212529] outline-none transition-all duration-150 placeholder:text-[#6c757d] focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,0.25)]'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // Keep the form values in state while typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setSent(false)
  }

  // Stop the page from reloading, then clear the form
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ name: '', email: '', message: '' })
    setSent(true)
  }

  return (
    <section id="contact" className="mt-[100px] bg-[rgb(242,242,254)] py-[100px] text-center">
      <div className="site-container">
        <SectionTitle
          title="Talk To Us"
          text="Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper."
          widthClass="md:w-3/5"
          textClass="pb-[50px]"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left: address text */}
          <div className="text-left">
            <h3>Blog Entries</h3>
            <p className="mt-6 text-body">
              110-220 Quisque diam odio, maximus ac consectetur eu, 10260 auctor non lorem
            </p>
            <p className="mt-6 text-body">
              You are NOT allowed to re-distribute Softy Pinko template on any template collection
              websites. Thank you.
            </p>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="md:col-span-2">
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {inputFields.map((field) => (
                <div key={field.name} className="mb-4">
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`${fieldClass} p-2.5`}
                  />
                </div>
              ))}
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`${fieldClass} block h-[150px] resize-none p-5`}
              />
            </div>

            <button type="submit" className="btn-softy mx-auto block uppercase md:ml-0 md:mr-auto">
              Send Message
            </button>

            {sent && <p className="mt-4 text-left text-pink">Thank you! Your message was sent.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
