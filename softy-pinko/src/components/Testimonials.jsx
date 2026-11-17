import SectionTitle from './SectionTitle'
import TestimonialCard from './TestimonialCard'
import testiIcon from '../assets/images/testimonial-icon.png'

const testimonials = [
  {
    id: 1,
    text: 'Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.',
    name: 'Catherine Soft',
    role: 'Managing Director',
  },
  {
    id: 2,
    text: 'Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.',
    name: 'Kelvin Wood',
    role: 'Digital Marketer',
  },
  {
    id: 3,
    text: 'Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.',
    name: 'David Martin',
    role: 'Website Manager',
  },
]

function Testimonials() {
  return (
    <section id="testi" className="my-12 text-center">
      <div className="site-container">
        <SectionTitle
          title="What do they say?"
          text="Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero."
          widthClass="md:w-3/5"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-[30px] lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              image={testiIcon}
              text={item.text}
              name={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
