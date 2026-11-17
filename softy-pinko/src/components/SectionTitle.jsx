// Reusable heading + paragraph used at the top of several sections.
// Props: title, text, light (white text), widthClass, titleClass, textClass
function SectionTitle({
  title,
  text,
  light = false,
  widthClass = '',
  titleClass = '',
  textClass = '',
}) {
  return (
    <div className={`text-center ${light ? 'text-white' : ''}`}>
      <h3 className={titleClass}>{title}</h3>
      <p className={`mx-auto mt-6 w-full ${light ? '' : 'text-body'} ${widthClass} ${textClass}`}>
        {text}
      </p>
    </div>
  )
}

export default SectionTitle
