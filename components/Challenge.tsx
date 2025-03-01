import FocusAreas from './FocusAreas'

export default function Challenge() {
  return (
    <div>
      <div className='mb-6 flex justify-center'>
        <h2 className='gradient-2 text-center text-4xl font-semibold'>
          The Challenge
        </h2>
      </div>
      <p className='font-inter sm:text-md text-foreground/80 border-primary-500 shadow-secondary mx-auto mb-16 max-w-3xl border-l-3 bg-gray-900 p-4 leading-relaxed shadow'>
        Use <b>Altair Inspire</b> to optimize and transform the design of a
        real-world engineering model. Your task is to demonstrate
        before-and-after optimization results, showcasing how you’ve improved
        the design based on specific engineering criteria.
      </p>
      <div className='px-8'>
        <p className='text-primary mb-12 text-center font-mono text-2xl font-medium'>
          Focus Areas Include:
        </p>
        <FocusAreas></FocusAreas>
      </div>
    </div>
  )
}
