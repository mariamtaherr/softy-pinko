import SectionTitle from './SectionTitle'
import PricingCard from './PricingCard'

const plans = [
  {
    id: 1,
    name: 'Starter',
    price: '14.50',
    highlighted: false,
    features: [
      { text: '60 GB space', included: true },
      { text: '600 GB transfer', included: true },
      { text: 'Pro Design Panel', included: true },
      { text: '15-minute support', included: false },
      { text: 'Unlimited Emails', included: false },
      { text: '24/7 Security', included: false },
    ],
  },
  {
    id: 2,
    name: 'Premium',
    price: '21.50',
    highlighted: true,
    features: [
      { text: '120 GB space', included: true },
      { text: '1200 GB transfer', included: true },
      { text: 'Pro Design Panel', included: true },
      { text: '15-minute support', included: true },
      { text: 'Unlimited Emails', included: false },
      { text: '24/7 Security', included: false },
    ],
  },
  {
    id: 3,
    name: 'Advanced',
    price: '42.00',
    highlighted: false,
    features: [
      { text: '250 GB space', included: true },
      { text: '5000 GB transfer', included: true },
      { text: 'Pro Design Panel', included: true },
      { text: '15-minute support', included: true },
      { text: 'Unlimited Emails', included: true },
      { text: '24/7 Security', included: true },
    ],
  },
]

function Pricing() {
  return (
    <section id="price" className="mt-12 bg-soft py-[55px]">
      <div className="site-container">
        <SectionTitle
          title="Pricing Plans"
          text="Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat."
          widthClass="md:w-2/5"
          titleClass="text-dark"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-[17px] md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              highlighted={plan.highlighted}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
