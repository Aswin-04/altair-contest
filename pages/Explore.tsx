import Challenge from '@/components/Challenge'
import ChooseModel from '@/components/ChooseModel'
import PrizePool from '@/components/PrizePool'
import RegistrationTimeline from '@/components/RegistrationTimeline'
import ResourcesProvided from '@/components/ResourcesProvided'
import SubmissionInstructions from '@/components/SubmissionInstructions'

export default function Explore() {
  return (
    <section className='padding'>
      <div className='max-w-[1440px] mx-auto' >
        <Challenge></Challenge>
      </div>
      <div className='padding-y'>
        <h2 className='text-center text-3xl sm:text-4xl mb-8 lg:mb-16 text-secondary-400 font-semibold'>How to Participate</h2>
        <div className='max-w-[1440px] mx-auto'>
          <ChooseModel></ChooseModel>
        </div>
      </div>
      <div className='padding-b max-w-[1440px] mx-auto'>
        <ResourcesProvided></ResourcesProvided>
      </div>
      <div className='padding-b max-w-[1440px] mx-auto'>
        <RegistrationTimeline></RegistrationTimeline>
      </div>
      <div className='padding-b max-w-[1440px] mx-auto'>
        <SubmissionInstructions></SubmissionInstructions>
      </div>
      <div className='padding-b max-w-[1440px] mx-auto'>
        <PrizePool></PrizePool>
      </div>

    </section>
  )
}
