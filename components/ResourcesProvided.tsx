
import { ResourcesData } from "@/lib/constants"
import Template from "./Template"
import Image from "next/image"
import linkImg from '@/public/link-img.jpg'

export default function ResourcesProvided() {
  // return (
  //   <section className="text-gray-400 bg-gray-900">
  //     <div className="container px-5 py-24 mx-auto flex flex-wrap">
  //       {ResourcesData.map((resource) => (
  //         <div key={resource.id} className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
  //           <div className="h-full w-6 absolute inset-0  flex items-center justify-center">
  //             <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
  //           </div>
  //           <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 fond-medium text-sm font-mono">
  //             {resource.id}
  //           </div>
  //           <div className="flex-grow  am:text-lg leading-relaxed pl-6">{resource.description}: &nbsp;
  //             <a href={resource.link} rel={'noopener noreferrer'} className="text-blue-400">  {resource.linkName}</a>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // )

  return (
    <div className=" flex flex-col lg:flex-row w-full">
      <div className=" w-full lg:w-1/2">
        <h3 className='text-2xl font-medium mb-4 rounded-2xl text-white p-3 mt-8 lg:mt-0 text-center lg:text-left'>Resources Provided</h3>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-gray-900 rounded-lg">
          <div className="px-5 py-10 flex flex-col items-center justify-center">
          <div>
            {ResourcesData.map((resource) => (
              <Template key={resource.id} id={resource.id} description={resource.description} linkName={resource.linkName} link={resource.link}></Template>
            ))}
          </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="max-w-sm">
          <Image src={linkImg} alt='link-img' className=""></Image>
        </div>
      </div>
    </div>
  )
}