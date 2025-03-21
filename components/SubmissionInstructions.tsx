import { submissionGuidelines1, submissionGuidelines2 } from '@/lib/constants'

export default function SubmissionInstructions() {
  return (
    <div>
      <div className='mb-6 flex justify-center'>
        <h2 className='gradient-2 mb-4 text-center text-4xl font-semibold'>
          Submission Instructions
        </h2>
      </div>
      <div className='border-primary/80 mx-auto max-w-3xl rounded-xl border bg-gray-900 px-8 py-8 sm:px-16'>
        <h3 className='text-primary font-mono text-2xl font-semibold'>
          What to Submit
        </h3>
        {submissionGuidelines1.map(guideline => (
          <div
            key={guideline.id}
            className='text-primary-400 mt-10 flex flex-col gap-y-4 md:flex-row md:gap-4'
          >
            <div className='min-w-24'>{guideline.icon}</div>
            <div>
              <h4 className='mb-2 text-lg font-medium text-white'>
                {guideline.title}
              </h4>
              <p className='max-w-lg leading-relaxed text-gray-300'>
                {guideline.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='border-primary/80 mx-auto mt-16 max-w-3xl rounded-xl border bg-gray-900 px-8 py-8 sm:px-16'>
        <h3 className='text-primary font-mono text-2xl font-semibold'>
          How to Submit
        </h3>
        {submissionGuidelines2.map(guideline => (
          <div
            key={guideline.id}
            className='text-primary-400 mt-10 flex flex-col gap-y-4 md:flex-row md:gap-4'
          >
            <div className='min-w-24'>{guideline.icon}</div>
            <div>
              <h4 className='mb-2 text-lg font-medium text-white'>
                {guideline.title}
              </h4>
              <p className='max-w-lg leading-relaxed text-gray-300'>
                {guideline.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
