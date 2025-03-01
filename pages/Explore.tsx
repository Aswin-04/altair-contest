import Challenge from '@/components/Challenge'
import ChooseModel from '@/components/ChooseModel'
import PrizePool from '@/components/PrizePool'
import RegistrationTimeline from '@/components/RegistrationTimeline'
import ResourcesProvided from '@/components/ResourcesProvided'
import SubmissionInstructions from '@/components/SubmissionInstructions'

export default function Explore() {
  return (
    <section className=''>
      <div className='padding-y mx-auto max-w-[1440px]'>
        <Challenge></Challenge>
      </div>
      <div className='padding-y'>
        <div className='flex justify-center'>
          <h2 className='gradient-2 mb-8 text-center text-4xl font-semibold lg:mb-16'>
            How to Participate
          </h2>
        </div>
        <div className='mx-auto max-w-[1440px]'>
          <ChooseModel></ChooseModel>
        </div>
      </div>
      <div className='padding-y mx-auto max-w-[1440px]'>
        <ResourcesProvided></ResourcesProvided>
      </div>
      <div className='padding-y mx-auto max-w-[1440px]'>
        <RegistrationTimeline></RegistrationTimeline>
      </div>
      <div className='padding-y mx-auto max-w-[1440px]'>
        <SubmissionInstructions></SubmissionInstructions>
      </div>
      <div className='padding-y mx-auto max-w-[1440px]'>
        <PrizePool></PrizePool>
      </div>
    </section>
  )
}
