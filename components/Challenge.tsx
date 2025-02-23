import FocusAreas from "./FocusAreas";

export default function Challenge() {
  return (
    <div>
      <h2 className='text-center font-medium mb-4 text-3xl sm:text-4xl'>The Challenge</h2>
      <p className='mb-16  sm:text-lg leading-relaxed border-l-3 border-secondary-400 bg-secondary/20 max-w-5xl shadow shadow-secondary p-4 mx-auto'>
        Use <b>Altair Inspire</b> to optimize and transform the design of a real-world
        engineering model. Your task is to demonstrate before-and-after
        optimization results, showcasing how you’ve improved the design based on
        specific engineering criteria.
      </p>
      <p className='text-center text-2xl mb-4'>
        Focus Areas Include:
      </p>
      <FocusAreas></FocusAreas>
    </div>
  )
}