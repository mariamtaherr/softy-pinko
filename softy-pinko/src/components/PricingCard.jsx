// One pricing plan.
// Props: name, price, highlighted (pink price box), features (array)
function PricingCard({ name, price, highlighted, features }) {
  return (
    <div className="group mb-[30px] mt-5 cursor-pointer rounded-softy bg-white pb-10 pt-[30px] text-center shadow-soft transition-all duration-300 hover:-translate-y-[15px] max-md:mx-auto max-md:w-[90%]">
      <p>{name}</p>

      <div
        className={`mx-auto w-[70%] rounded-softy text-white shadow-soft ${
          highlighted ? 'bg-pink' : 'bg-purple'
        }`}
      >
        <p className="text-[20px]">
          <span className="text-[25px]">$</span> {price}
        </p>
        <p className="text-[20px]">
          <small>monthly</small>
        </p>
      </div>

      <div>
        {/* Included features are normal text, missing ones are crossed out */}
        {features.map((feature) => (
          <p key={feature.text}>{feature.included ? feature.text : <del>{feature.text}</del>}</p>
        ))}
      </div>

      <button type="button" className="btn-softy group-hover:bg-pink">
        PURCHASE NOW
      </button>
    </div>
  )
}

export default PricingCard
