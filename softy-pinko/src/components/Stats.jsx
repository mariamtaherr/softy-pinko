import StatCard from './StatCard'
import statsBg from '../assets/images/fun-facts-bg.png'

const stats = [
  { id: 1, value: '126', label: 'Projects', showDecoration: true },
  { id: 2, value: '63', label: 'Happy Clients', showDecoration: true },
  { id: 3, value: '126', label: 'Awards Wins', showDecoration: true },
  { id: 4, value: '27', label: 'Countries', showDecoration: false },
]

function Stats() {
  return (
    <section
      id="count"
      className="bg-cover bg-center bg-no-repeat px-3 py-[100px] text-center sm:px-[50px]"
      style={{ backgroundImage: `url(${statsBg})` }}
    >
      <div className="site-container grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
        {stats.map((item) => (
          <StatCard
            key={item.id}
            value={item.value}
            label={item.label}
            showDecoration={item.showDecoration}
          />
        ))}
      </div>
    </section>
  )
}

export default Stats
