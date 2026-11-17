import textLogo from '../assets/images/text-logo.png'

// Boxicons class names for the footer icons
const icons = ['bxl-html5', 'bxl-sass', 'bxl-react', 'bxl-javascript', 'bxs-file-json']

function Footer() {
  return (
    <footer id="footer" className="bg-purple-gradient bg-cover bg-center bg-no-repeat py-[50px] text-center">
      <div className="site-container">
        <div>
          {icons.map((icon) => (
            <i key={icon} className={`bx ${icon} px-2.5 text-[25px] text-white`}></i>
          ))}
        </div>

        <hr className="my-4 border-t border-current opacity-25" />

        <p className="text-white">
          COPYRIGHT © 2023 SOFTY PINKO COMPANY - DESIGN:{' '}
          <img src={textLogo} alt="Design logo" className="inline w-[15%] align-middle md:w-[7.5%]" />
        </p>
      </div>
    </footer>
  )
}

export default Footer
