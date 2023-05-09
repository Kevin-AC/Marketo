import { ClienstCard } from '../Components/ClientsCard'
import Title from '../Components/Title'
export function Clients () {
  return (
    <section id='review' className='-scroll-mt-10 mb-10'>
      <Title title="Client's " span='Review' />
      <div className='grid sm:grid-cols-3 gap-4'>
        <ClienstCard name='John Deo' img='pic-1' />
        <ClienstCard name='Anna' img='pic-2' />
        <ClienstCard name='Alex' img='pic-3' />
     </div>
    </section>
  )
}
