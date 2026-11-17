// One row of the About section: an image and a text block side by side.
// Props: id, title, text, image, imageOnLeft, divider, animation
function AboutRow({ id, title, text, image, imageOnLeft, divider, animation }) {
  const imageColumn = (
    <div className={`w-full px-3 md:w-1/2 ${imageOnLeft ? 'mb-[17px]' : ''}`}>
      <img
        src={image}
        alt={title}
        className={imageOnLeft ? 'mb-[17px] max-md:mx-auto' : 'ml-auto mt-[55px] max-md:mx-auto'}
      />
    </div>
  )

  const textColumn = (
    <div className={`w-full px-3 md:w-1/2 ${imageOnLeft ? '' : 'mt-[55px]'}`}>
      <h3 className={imageOnLeft ? 'mb-[17px]' : 'mt-[55px]'}>{title}</h3>
      <p className="mt-12 text-body">{text}</p>
    </div>
  )

  return (
    <div id={id} className="site-container mt-12" data-aos={animation}>
      <div
        className={`relative flex flex-wrap items-center px-3 py-[15px] md:px-[55px] ${
          divider
            ? 'after:absolute after:-bottom-[10%] after:left-1/2 after:h-px after:w-[70%] after:-translate-x-1/2 after:bg-[#ddd]'
            : ''
        }`}
      >
        {imageOnLeft ? imageColumn : textColumn}
        {imageOnLeft ? textColumn : imageColumn}
      </div>
    </div>
  )
}

export default AboutRow
