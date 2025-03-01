import { ResourcesData } from '@/lib/constants'
import Template from './Template'
import Image from 'next/image'
import linkImg from '@/public/link-img.jpg'

export default function ResourcesProvided() {
  return (
    <div className='flex w-full flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2'>
        <h3 className='text-primary mt-8 mb-4 rounded-2xl p-3 text-center font-mono text-2xl font-medium lg:mt-0 lg:text-left'>
          Resources Provided
        </h3>
        <div className='border-primary/80 flex flex-col items-center justify-center gap-8 rounded-lg border bg-gray-900 lg:flex-row'>
          <div className='flex flex-col items-center justify-center px-5 py-10'>
            <div>
              {ResourcesData.map(resource => (
                <Template
                  key={resource.id}
                  id={resource.id}
                  description={resource.description}
                  linkName={resource.linkName}
                  link={resource.link}
                ></Template>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center lg:w-1/2'>
        <div className='max-w-sm'>
          <Image src={linkImg} alt='link-img' className=''></Image>
        </div>
      </div>
    </div>
  )
}
