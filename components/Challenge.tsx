import FocusAreas from "./FocusAreas";

export default function Challenge() {
  return (
    <div>
      <div className="flex justify-center mb-6">
        <h2 className='text-center font-semibold text-4xl  gradient-2'>The Challenge</h2>
      </div>
      <p className='font-inter mb-16  sm:text-md text-foreground/80 leading-relaxed border-l-3 border-primary-500 bg-gray-900 max-w-3xl shadow shadow-secondary p-4 mx-auto'>
        Use <b>Altair Inspire</b> to optimize and transform the design of a real-world
        engineering model. Your task is to demonstrate before-and-after
        optimization results, showcasing how you’ve improved the design based on
        specific engineering criteria.
      </p>
      <div className="px-8">
        <p className='text-center text-2xl mb-12 text-primary font-medium font-mono'>
          Focus Areas Include:
        </p>
        <FocusAreas></FocusAreas>

      </div>
    </div>
  )
}