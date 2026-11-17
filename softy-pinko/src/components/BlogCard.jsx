// One blog entry. Props: image, title, text
function BlogCard({ image, title, text }) {
  return (
    <article className="group cursor-pointer text-center max-md:mb-[25px]">
      <img src={image} alt={title} className="mx-auto" />

      <div>
        <h5 className="py-[15px]">
          <a href="#blog" className="text-dark transition-all duration-300 group-hover:text-pink">
            {title}
          </a>
        </h5>
        <p className="text-body transition-all duration-300 group-hover:text-dark">{text}</p>
      </div>

      <button type="button" className="btn-softy">
        READ MORE
      </button>
    </article>
  )
}

export default BlogCard
