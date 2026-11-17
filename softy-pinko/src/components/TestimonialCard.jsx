// One testimonial. Props: image, text, name, role
function TestimonialCard({ image, text, name, role }) {
  return (
    <div className="group relative mb-[30px] cursor-pointer rounded-softy bg-white px-[15px] py-[25px] shadow-soft transition-all duration-300 max-lg:mx-auto max-lg:w-4/5">
      <img src={image} alt="Quote icon" className="mx-auto" />
      <p className="py-[25px] text-left text-body transition-all duration-300 group-hover:text-dark">
        {text}
      </p>
      <div className="transition-all duration-300 group-hover:translate-x-[15px]">
        <h5>{name}</h5>
        <p className="text-pink">{role}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
