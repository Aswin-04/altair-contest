import ContactCard from '@/components/ContactCard'
import { contactInfoAltair } from '@/lib/constants'

export default function ContactUs() {
  return (
    <div>
      <section className=''>
        <div className=''>
          <div className='flex justify-center'>
            <h2 className='gradient-2 mb-8 text-center text-4xl font-semibold sm:text-5xl lg:mb-16'>
              Contact Us
            </h2>
          </div>
          <div className='mb-10 flex items-center justify-center'>
            <div className='grid w-full max-w-5xl grid-cols-1 gap-y-10 lg:grid-cols-2 lg:place-items-center'>
              {contactInfoAltair.map(info => (
                <ContactCard key={info.name} {...info}></ContactCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
