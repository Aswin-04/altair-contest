import { StaticImageData } from 'next/image'

export interface SliderDataProps {
  img: StaticImageData
  title: string
}

export interface ResourceDataProps {
  id: number
  description: string
  linkName: string
  link: string
}

export interface ContactInfoProps {
  name: string
  email: string
  phone: string
  hasLogo: boolean
}
