import banner from '../assets/images/banner-bg.png'

function Hero() {
  return (
    <section
      id="welcome"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-3"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-full text-center text-white">
        <h1>
          We provide the best <strong>strategy</strong>
        </h1>
        <h2>
          to grow up your <strong>business</strong>
        </h2>
        <p className="mx-auto w-full py-[30px] md:w-1/2 md:max-w-[520px]">
          Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo for your company at absolutely free of charge
        </p>
        <button
          type="button"
          className="rounded-softy border border-pink bg-pink px-[15px] py-2.5 uppercase text-white transition-colors duration-150 hover:border-white hover:bg-purple"
        >
          discover more
        </button>
      </div>
    </section>
  )
}

export default Hero
