import Image from 'next/image'
import heroImg from '@/public/hero-img4.jpg'

export default function Hero() {
  return (
    <main className='padding-t mx-auto mt-20 max-w-[1440px] lg:mt-16'>

      <div className='flex flex-col justify-between gap-20'>
        <div className='flex flex-col items-center'>
          <h1 className='mb-4 bg-gradient-to-bl from-[#1e293b] via-[#3b30ff] to-[#1e293b] bg-clip-text text-center font-sans text-3xl font-bold tracking-tight text-transparent sm:text-5xl'>
            Altair Optimization Contest 2025
          </h1>
          <p className=' text-foreground/80 font-inter text-center text-md max-w-md'>
            Showcase your engineering skills and tackle a real-world optimization
            contest with Altair Inspire!
          </p>
        </div>

        <div className='container max-w-3xl mx-auto'>
          <Image
            className='rounded-xl object-cover object-center'
            src={heroImg}
            alt='Hero'
            priority={true}
          ></Image>
        </div>

      </div>

      <div className='container mx-auto padding-t max-w-3xl mt-10'>
        <div className=''>
          <div className='flex justify-center mb-6 '>
            <h2 className=' text-center text-4xl font-semibold  gradient-2 '>
              About the Contest
            </h2>
          </div>
          <p className='text-foreground/80 font-inter text-center mb-8 leading-relaxed sm:text-md'>
            <b>Altair® Inspire™</b> transforms simulation into a simple and
            powerful tool for design optimization. With its intuitive interface
            and comprehensive features, Inspire helps you push the boundaries of
            component design and accelerate product development from concept to
            reality. Whether you are aiming for performance or
            manufacturability, Inspire offers a seamless experience to create,
            optimize, and study innovative parts and assemblies.
          </p>
        </div>
      </div>
    </main>
  )
}
