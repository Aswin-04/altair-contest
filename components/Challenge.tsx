import FocusAreas from "./FocusAreas";

export default function Challenge() {
  return (
    <div>
      <h2 className='text-center font-semibold mb-4 text-3xl sm:text-4xl text-secondary-400'>The Challenge</h2>
      <p className='font-inter mb-16  sm:text-lg text-foreground/80 leading-relaxed border-l-3 border-secondary-400 bg-gray-900 max-w-5xl shadow shadow-secondary p-4 mx-auto'>
        Use <b>Altair Inspire</b> to optimize and transform the design of a real-world
        engineering model. Your task is to demonstrate before-and-after
        optimization results, showcasing how you’ve improved the design based on
        specific engineering criteria.
      </p>
      <div className="padding-y px-8">
        <p className='text-center text-2xl sm:text-2xl mb-8 text-primary font-medium font-mono'>
          Focus Areas Include:
        </p>
        <FocusAreas></FocusAreas>

      </div>
    </div>
  )
}