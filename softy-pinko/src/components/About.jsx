import AboutRow from './AboutRow'
import leftImage from '../assets/images/left-image.png'
import rightImage from '../assets/images/right-image.png'

// Two rows: image on the left, then image on the right
const aboutItems = [
  {
    id: 'about',
    title: 'Let’s discuss about you project',
    text: 'Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.',
    image: leftImage,
    imageOnLeft: true,
    divider: true,
    animation: 'fade-right',
  },
  {
    id: 'about-grow',
    title: 'We can help you to grow your business',
    text: 'Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.',
    image: rightImage,
    imageOnLeft: false,
    divider: false,
    animation: 'fade-left',
  },
]

function About() {
  return (
    <section>
      {aboutItems.map((item) => (
        <AboutRow
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          image={item.image}
          imageOnLeft={item.imageOnLeft}
          divider={item.divider}
          animation={item.animation}
        />
      ))}
    </section>
  )
}

export default About
