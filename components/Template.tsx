import { ResourceDataProps } from "@/lib/types"


export default function Template({id, description, linkName, link}: ResourceDataProps) {
  return (
    <div className="bg-gray-900 text-gray-400">
        <div>
          <div className='flex gap-4 mb-8 items-center'>
            <div className='shrink-0 w-10 h-10 rounded-full bg-secondary-500 text-white flex justify-center items-center text-xl font-mono'>
              <span>{id}</span>
            </div>
            <div className='sm:text-lg max-w-lg text-slate-300 leading-relaxed'>
              {description}: &nbsp;
              <a href={link} target='_blank' rel='noopener noreferrer' className='text-blue-400'>{linkName}</a>
            </div>

          </div>
        </div>
      </div>
  )
}