import Image from 'next/image'

export default function Hero() {
  return (
    <main className='padding border'>
      <section className='border-primary border'>
        <h1 className='text-center font-bold'>
          ALTAIR OPTIMIZATION CONTEST 2025
        </h1>
        <p className='text-center'>
          Showcase your engineering skills and tackle a real-world optimization
          contest with Altair Inspire!
        </p>
      </section>

      <section>
        <div className='container mx-auto flex flex-col md:flex-row items-center px-5 py-24 md:gap-16 lg:gap-24 border'>
          <div className='lg:max-w-lg lg:w-full mad:w-1/2 w-5/6 md:mb-0 mb-10'>
            <Image
              className='object-cover object-center rounded'
              src={'https://dummyimage.com/720x600'}
              alt='Hero'
              width={720}
              height={600}
            ></Image>
          </div>
          <div className='lg:grow md:w-1/2'>
            <h2 className='text-3xl sm:text-4xl mb-4 font-medium'>About the Contest</h2>
            <p className='mb-8 leading-relaxed'>
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
