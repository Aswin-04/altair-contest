import { ResourceDataProps } from '@/lib/types'

export default function Template({
  id,
  description,
  linkName,
  link,
}: ResourceDataProps) {
  return (
    <div className='bg-gray-900 text-gray-400'>
      <div>
        <div className='mb-8 flex items-center gap-4'>
          <div className='bg-secondary-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xl text-white'>
            <span>{id}</span>
          </div>
          <div className='max-w-lg leading-relaxed text-slate-300 sm:text-lg'>
            {description}: &nbsp;
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400'
            >
              {linkName}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
