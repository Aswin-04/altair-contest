import Image from "next/image";
import altairLogo from '@/public/altair-logo.png'
import sairamLogo from '@/public/sairam-icon.png'
import { instagramIcon, linkedinIcon } from "@/lib/icons";

export default function Footer() {
  return (
    <div className=" bg-gray-900">
      <div className="max-w-[1440px] mx-auto pt-16 pb-8 lg:pt-8 ">
        <div className=" flex flex-col gap-14 padding-x lg:flex-row lg:justify-around lg:items-center">
          <div className=" w-fit bg-white/80 rounded-sm">
            <Image src={sairamLogo} alt="sairam-logo" width={170} height={100}></Image>
          </div>
          <div>
            <a className='flex-none text-xl font-semibold focus:opacity-80 focus:outline-none'>
              <span className='font-inter inline-flex items-center gap-x-2 text-xl font-semibold mt-2'>
                <Image
                  src={altairLogo}
                  alt='altair-logo'
                  className='h-auto w-8'
                ></Image>
                ALTAIR
              </span>
            </a>
            <p className="text-[14px] text-white opacity-70">Copyright © 2025 Altair. All rights reserved.</p>
          </div>
          <div className="flex lg:justify-center lg:items-center gap-4">
            <div>{linkedinIcon}</div>
            <div>{instagramIcon}</div>
          </div>
        </div>
      </div>

    </div>
  )
}