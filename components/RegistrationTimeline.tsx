import { registrationTimeline } from '@/lib/constants'

export default function RegistrationTimeline() {
  return (
    <section>
      <div>
        <div className='mb-6 flex justify-center'>
          <h2 className='gradient-2 mb-4 text-center text-4xl font-semibold'>
            Registration Timeline
          </h2>
        </div>
        <div className='border-primary/80 mx-auto max-w-3xl rounded-xl border bg-gray-900 text-gray-400'>
          <div className='container mx-auto flex flex-wrap px-8 py-16 sm:px-16'>
            {registrationTimeline.map(timelineEvent => (
              <div
                key={timelineEvent.id}
                className='relative mx-auto flex w-full pb-10 sm:items-center'
              >
                <div className='absolute inset-0 flex h-full w-6 items-center justify-center'>
                  <div className='pointer-events-none h-full w-1 bg-gray-800'></div>
                </div>
                <div className='fond-medium bg-secondary-400 relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-mono text-sm text-white sm:mt-0'></div>
                <div className='space-y-2 pl-6'>
                  <div className='text-xl font-medium text-white'>
                    {timelineEvent.event}
                  </div>
                  <div className=''>{timelineEvent.date}</div>
                  <div className='max-w-md flex-grow leading-relaxed sm:text-lg'>
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
