// One "Work Process" step. Props: image, title, text
function WorkCard({ image, title, text }) {
  return (
    <div className="group relative mb-[30px] cursor-pointer rounded-softy bg-white p-5 shadow-[0_2px_48px_0_rgb(0_0_0/8%)] transition-all duration-300 hover:-translate-y-[15px] after:absolute after:-bottom-2.5 after:left-0 after:h-full after:w-full after:rounded-softy after:bg-white after:opacity-[.15]">
      <img src={image} alt={title} className="mx-auto" />
      <h5 className="py-2.5 transition-all duration-300 group-hover:text-pink">{title}</h5>
      <p className="text-body transition-all duration-300 group-hover:text-dark">{text}</p>
    </div>
  )
}

export default WorkCard
