import { ClienstCard } from '../Components/ClientsCard'
import Title from '../Components/Title'
export function Clients () {
  return (
    <section>
      <Title title="Client's " span='Review' />
     <div className='flex flex-col gap-4'>
        <ClienstCard name='John Deo' img='pic-1' />
        <ClienstCard name='Anna' img='pic-2' />
        <ClienstCard name='Alex' img='pic-3' />
     </div>
    </section>
  )
}
