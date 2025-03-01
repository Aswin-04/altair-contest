import { prizePool } from '@/lib/constants'

export default function PrizePool() {
  return (
    <div>
      <div className='flex'>
        <h3 className='gradient-2 mx-auto mb-8 font-sans text-4xl font-semibold sm:text-5xl lg:mb-16'>
          Prize Pool
        </h3>
      </div>
      <div className='lg:flex lg:items-center lg:justify-center'>
        <div className='flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:space-y-0'>
          {prizePool.map(prize => (
            <div
              key={prize.id}
              className={`border-primary-500 shadow-primary-500 mx-auto flex h-80 w-[300px] flex-col items-center rounded-xl border bg-gray-900 shadow-lg ${prize.id == 1 ? 'order-first lg:z-10 lg:order-none lg:scale-110 lg:transform' : 'lg:scale-90 lg:transform'}`}
            >
              <div className='text-primary mt-10 w-36'>{prize.icon}</div>
              <div className='font-inter mt-10 text-5xl font-semibold tracking-tight text-zinc-300 drop-shadow-[2px_2px_2px_#3fd2c7]'>
                &#8377;{prize.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
