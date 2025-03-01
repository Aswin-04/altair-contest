import carImg from '@/public/car-img.png'
import Image from 'next/image'

export default function ChooseModel() {
  return (
    <div className='mx-auto flex w-full flex-col-reverse lg:flex-row'>
      <div className='mt-10 flex justify-center lg:mt-0 lg:w-1/2'>
        <div className='max-w-xl'>
          <Image src={carImg} alt={'car-img'} className=''></Image>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <h3 className='text-primary mt-4 mb-4 p-3 text-center font-mono text-2xl font-medium lg:mt-0 lg:text-left'>
          Choose Your Model
        </h3>
        <div className='border-primary/80 flex flex-col items-center justify-center rounded-lg border bg-gray-900 px-5 py-10'>
          <div>
            <div className='mb-8 flex items-center gap-4'>
              <div className='bg-secondary-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xl text-white'>
                <span>1</span>
              </div>
              <div className='max-w-lg leading-relaxed text-slate-300 sm:text-lg'>
                Use models from{' '}
                <a
                  href='https://grabcad.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400'
                >
                  Grabcad.com
                </a>{' '}
                or create your own using Inspire or any other CAD software
              </div>
            </div>
            <div className='mb-8 flex items-center gap-4 text-slate-300'>
              <div className='bg-secondary-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xl text-white'>
                <span>2</span>
              </div>
              <div className='max-w-lg leading-relaxed sm:text-lg'>
                <b>Note: </b>use only Altair Inspire Software for simulation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
