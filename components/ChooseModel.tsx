import carImg from '@/public/car-img.png'
import Image from 'next/image'

export default function ChooseModel() {
  return (
    <div className='flex flex-col-reverse lg:flex-row w-full mx-auto '>
      <div className='lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
        <div className='max-w-xl'>
          <Image src={carImg} alt={'car-img'} className=''></Image>

        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <h3 className='text-2xl font-medium mb-4  text-white p-3 mt-4 lg:mt-0 text-center lg:text-left'>Choose Your Model</h3>
        <div className='px-5 py-10 bg-gray-900 flex flex-col items-center justify-center rounded-lg'>
          <div>
            <div className='flex gap-4 mb-8 items-center'>
              <div className='shrink-0 w-10 h-10 rounded-full bg-secondary-500 text-white flex justify-center items-center text-xl font-mono'>
                <span>1</span>
              </div>
              <div className='sm:text-lg max-w-lg text-slate-300 leading-relaxed'>
                Use models from <a href='https://grabcad.com/' target='_blank' rel='noopener noreferrer' className='text-blue-400'>Grabcad.com</a> or create your own using Inspire or any other CAD
              software
              </div>
            </div>
            <div className='flex gap-4 items-center mb-8 text-slate-300'>
              <div className='shrink-0 w-10 h-10 rounded-full bg-secondary-500 text-white flex justify-center items-center text-xl font-mono'>
                <span>2</span>
              </div>
              <div className='sm:text-lg max-w-lg leading-relaxed'>
                <b>Note: </b>use only Altair Inspire Software for simulation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}