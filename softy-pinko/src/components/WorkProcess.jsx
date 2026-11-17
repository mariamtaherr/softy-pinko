import SectionTitle from './SectionTitle'
import WorkCard from './WorkCard'
import rocket from '../assets/images/work-process-item-01.png'
import workBg from '../assets/images/work-process-bg.png'

// Six steps (same content as the original site)
const steps = [
  { id: 1, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
  { id: 2, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
  { id: 3, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
  { id: 4, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
  { id: 5, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
  { id: 6, image: rocket, title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' },
]

function WorkProcess() {
  return (
    <section
      id="work"
      className="my-[55px] bg-cover bg-center bg-no-repeat px-3 py-[100px] text-center sm:px-[50px]"
      style={{ backgroundImage: `url(${workBg})` }}
    >
      <div className="site-container">
        <SectionTitle
          light
          title="Work Process"
          text="Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam."
          widthClass="md:w-2/5"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-[15px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step) => (
            <WorkCard key={step.id} image={step.image} title={step.title} text={step.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
