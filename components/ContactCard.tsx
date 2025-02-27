import Image from "next/image";
import altairImg from '@/public/altair-logo.png'
import { ContactInfoProps } from "@/lib/types";
import { emailIcon, phoneIcon } from "@/lib/icons";

export default function ContactCard({name, email, phone, hasLogo}: ContactInfoProps) {
  return (
    <div className="font-mono text-lg border border-primary shadow-md shadow-primary-300 max-w-md w-full mx-auto p-8 rounded-xl bg-slate-900">
      <div className="mb-4 sm:flex">
        <h3 className=" font-medium text-primary">{name}</h3>
        {hasLogo && <div className="flex items-center">
          <div className="h-3 w-3 sm:ml-2 mt-1">
            <Image src={altairImg} alt="altair-logo"></Image>
          </div>
          <p className="ml-1 mt-1 text-sm">Altair</p>
        </div>}
      </div>
      <div className="mb-1 flex items-center gap-2 max-[375px]:text-sm"><span className="text-primary">{phoneIcon}</span>{phone}</div>
      <div className="mb-1 flex items-center gap-2  max-[375px]:text-sm"><span className="text-primary">{emailIcon}</span>{email}</div>
    </div>
  )
}