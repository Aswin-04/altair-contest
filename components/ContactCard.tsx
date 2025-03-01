import Image from 'next/image'
import altairImg from '@/public/altair-logo.png'
import { ContactInfoProps } from '@/lib/types'
import { emailIcon, phoneIcon } from '@/lib/icons'

export default function ContactCard({
  name,
  email,
  phone,
  hasLogo,
}: ContactInfoProps) {
  return (
    <div className='border-primary shadow-primary-300 mx-auto w-full max-w-md rounded-xl border bg-slate-900 p-8 font-mono text-lg shadow-md'>
      <div className='mb-4 sm:flex'>
        <h3 className='text-primary font-medium'>{name}</h3>
        {hasLogo && (
          <div className='flex items-center'>
            <div className='mt-1 h-3 w-3 sm:ml-2'>
              <Image src={altairImg} alt='altair-logo'></Image>
            </div>
            <p className='mt-1 ml-1 text-sm'>Altair</p>
          </div>
        )}
      </div>
      <div className='mb-1 flex items-center gap-2 max-[375px]:text-sm'>
        <span className='text-primary'>{phoneIcon}</span>
        {phone}
      </div>
      <div className='mb-1 flex items-center gap-2 max-[375px]:text-sm'>
        <span className='text-primary'>{emailIcon}</span>
        {email}
      </div>
    </div>
  )
}
