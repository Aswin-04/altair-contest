
import { ResourcesData } from "@/lib/constants"
import Template from "./Template"
import Image from "next/image"
import linkImg from '@/public/link-img.jpg'

export default function ResourcesProvided() {
  return (
    <div className=" flex flex-col lg:flex-row w-full">
      <div className=" w-full lg:w-1/2">
        <h3 className='text-2xl font-medium mb-4 rounded-2xl text-white p-3 mt-8 lg:mt-0 text-center lg:text-left'>Resources Provided</h3>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-gray-900 rounded-lg border border-primary/80">
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