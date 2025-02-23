import Image from 'next/image'

export default function Hero() {
  return (
    <main className='padding-x padding-t max-w-[1440px] mx-auto'>
      <section className='flex flex-col'>
        <h1 className='bg-gradient-to-bl from-[#1e293b] via-[#3b30ff] to-[#1e293b] bg-clip-text text-transparent
 text-center text-3xl sm:text-5xl font-sans tracking-tight font-bold mb-4'>
          Altair Optimization Contest 2025
        </h1>
        <p className='text-center text-md sm:text-xl text-foreground/80 font-inter'>
          Showcase your engineering skills and tackle a real-world optimization
          contest with Altair Inspire!
        </p>
      </section>

      <section>
        <div className='container mx-auto flex flex-col lg:flex-row items-center px-5 mt-24 md:gap-16 lg:gap-24 '>
          <div className='lg:max-w-lg lg:w-full mad:w-1/2 w-5/6 md:mb-0 mb-10'>
            <Image
              className='object-cover object-center rounded'
              src={'https://dummyimage.com/720x600'}
              alt='Hero'
              width={720}
              height={600}
            ></Image>
          </div>
          <div className='lg:grow lg:w-1/2 flex flex-col'>
            <h2 className='text-3xl sm:text-4xl mb-4 font-semibold text-secondary-400 text-center lg:text-left'>About the Contest</h2>
            <p className='mb-8 leading-relaxed text-foreground/80 sm:text-lg font-inter'>
              <b>Altair® Inspire™</b> transforms simulation into a
              simple and powerful tool for design optimization. With its
              intuitive interface and comprehensive features, Inspire helps you
              push the boundaries of component design and accelerate product
              development from concept to reality. Whether you are aiming for
              performance or manufacturability, Inspire offers a seamless
              experience to create, optimize, and study innovative parts and
              assemblies.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
