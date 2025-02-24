import { registrationTimeline } from '@/lib/constants'

export default function RegistrationTimeline() {
  return (
    <section>
      <div>
        <h2 className='text-secondary-400 mb-4 text-center text-3xl font-semibold sm:text-4xl'>
          Registration Timeline
        </h2>
        <div className='bg-gray-900 text-gray-400  max-w-3xl mx-auto rounded-xl border border-primary/80'>
          <div className='container mx-auto flex flex-wrap px-8 sm:px-16 py-16 '>
            {registrationTimeline.map( timelineEvent => (
              <div
                key={timelineEvent.id}
                className='relative mx-auto flex pb-10 sm:items-center w-full'
              >
                <div className='absolute inset-0 flex h-full w-6 items-center justify-center'>
                  <div className='pointer-events-none h-full w-1 bg-gray-800'></div>
                </div>
                <div className='fond-medium relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary-400 font-mono text-sm text-white sm:mt-0'>
                </div>
                <div className='pl-6 space-y-2'>
                  <div className='font-medium text-xl text-white'>{timelineEvent.event}</div>
                  <div className=''>{timelineEvent.date}</div>
                  <div className='sm:text-lg flex-grow leading-relaxed max-w-md'>
                    {timelineEvent.description}: &nbsp;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </section>
  )
}
