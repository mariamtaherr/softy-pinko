// Reusable card. Receives its data through props: image, title, description
function FeatureCard({ image, title, description }) {
  return (
    <div className="group relative mb-[30px] cursor-pointer rounded-softy bg-white p-[30px] text-center shadow-soft transition-all duration-300 hover:-translate-y-2.5 max-md:mx-auto max-md:w-[90%]">
      <div className="mx-auto mb-[30px] h-[90px] w-[90px] rounded-full bg-purple p-5 transition-all duration-300 group-hover:bg-pink">
        <img src={image} alt={title} />
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard
