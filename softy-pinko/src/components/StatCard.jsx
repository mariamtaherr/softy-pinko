import decoration from '../assets/images/circle-dec.png'

// One number in the counter strip.
// Props: value, label, showDecoration (small circle image on the right)
function StatCard({ value, label, showDecoration }) {
  return (
    <div className="group flex items-center justify-center">
      <div className="cursor-pointer transition-all duration-300 group-hover:-translate-y-[15px]">
        <p className="text-[35px] font-medium text-white">{value}</p>
        <span className="text-white">{label}</span>
      </div>

      {showDecoration && (
        <div className="ml-[100px] max-lg:hidden">
          <img src={decoration} alt="" />
        </div>
      )}
    </div>
  )
}

export default StatCard
