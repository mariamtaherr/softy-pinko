import FeatureCard from './FeatureCard'
import featureImage from '../assets/images/featured-item-01.png'

// Data for the three cards. Each object becomes one <FeatureCard />
const features = [
  {
    id: 1,
    image: featureImage,
    title: 'Modern Strategy',
    description: 'Customize anything in this template to fit your website needs',
  },
  {
    id: 2,
    image: featureImage,
    title: 'Best Relationship',
    description: 'Contact us immediately if you have a question in mind',
  },
  {
    id: 3,
    image: featureImage,
    title: 'Ultimate Marketing',
    description: 'You just need to tell your friends about our free templates',
  },
]

function Features() {
  return (
    <section className="site-container -mt-[220px] pt-[30px]">
      <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <FeatureCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Features
