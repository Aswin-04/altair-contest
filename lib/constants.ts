import img1 from '@/public/img-1.png'
import img2 from '@/public/img-2.png'
import img3 from '@/public/img-3.png'
import img4 from '@/public/img-4.png'
import img5 from '@/public/img-5.jpg'

import { icon1, icon2, icon3, icon4, icon5, medal1, medal2, medal3 } from './icons'

export const sliderData = [
  { img: img1, title: 'Structural Optimization' },
  { img: img2, title: 'Manufacturing Simulation' },
  { img: img3, title: 'Multibody Dynamics' },
  { img: img4, title: 'Structural Analysis' },
  { img: img5, title: 'Computational Fluid Dynamics' }
];


export const ResourcesData = [
  { 
    id: 1,
    description: 'Free Academic License',
    linkName: 'Altair Student Edition',
    link: 'https://web.altair.com/altair-student-edition'
  },
  { 
    id: 2,
    description: 'Altair Inspire',
    linkName: 'Download here',
    link: 'https://web.altair.com/academic-hub-inspire'
  },
  { 
    id: 3,
    description: 'Free Altair Domain specialist led training',
    linkName: 'Altair Training Portal',
    link: 'https://learn.altair.com/'
  },
  { 
    id: 4,
    description: 'Free Technical Support Forum',
    linkName: 'Join Here',
    link: 'https://community.altair.com/'
  },
  { 
    id: 5,
    description: 'YouTube Tutorials',
    linkName: 'Altair How-to videos',
    link: 'https://www.youtube.com/c/AltairHowTo'
  },
  { 
    id: 6,
    description: 'Altair Inspire Personal Edition',
    linkName: 'Download here',
    link: 'https://web.altair.com/inspire-personal-edition'
  },
  { 
    id: 7,
    description: 'Altair Global Student Contest Website',
    linkName: 'Altair Global Student Contest',
    link: 'https://web.altair.com/global-student-contest-2023'
  }
];


export const registrationTimeline = [
  {
    id:1,
    event: "Registration Starts",
    date: "February 5, 2025",
    description: "Begin your journey by registering for the Altair optimization challenge."
  },
  {
    id:2,
    event: "Registration Ends",
    date: "March 10, 2025",
    description: "Last date to register. Make sure to complete your registration before the deadline."
  },
  {
    id:3,
    event: "Submission Deadline",
    date: "March 17, 2025",
    description: "Last day to submit your submission. Try not to miss the deadline."
  },
  {
    id:4,
    event: "Result Announcement",
    date: "March 24, 2025 (Tentative)",
    description: "The Altair Optimization Challenge winners will be revealed."
  }
]

export const submissionGuidelines1 = [
  {
    id: 1,
    icon: icon1,
    title: "Altair Inspire Structures Professional Certification",
    description: "Validate your expertise in structural simulation and optimization with industry-recognized credentials for career advancement."
  },
  {
    id: 2,
    icon: icon2,
    title: "Inspire Solved File (.stmod)",
    description: "Include all boundary conditions and optimization parameters in your .stmod file for full technical compliance with contest standards."
  },
  {
    id: 3,
    icon: icon3,
    title: "Analysis Report (PPT, PDF, or DOC)",
    description: "Present a comprehensive analysis correlating simulation results with performance goals across structural, dynamic, and fluid domains."
  },
  {
    id: 4,
    icon: icon4,
    title: "Submit a video recording of the process on YouTube and share the link",
    description: "Showcase your problem-solving approach through a narrated video, demonstrating Inspire’s capabilities in addressing the contest’s open-ended challenge."
  }
];

export const submissionGuidelines2 = [
  {
    id: 1,
    icon: icon2,
    title: "Zip your files and rename the archive as 'CUSAT_YourName.zip'",
    description: "Package all submission components (certification, .stmod file, report, and video link) into one archive. Follow naming conventions for efficient judge tracking and verification."
  },
  {
    id: 2,
    icon: icon5,
    title: "Upload your zipped file",
    description: "Upload your optimized solution package through the official contest portal. Ensure all files are accessible and meet technical requirements before final submission."
  }
];

export const prizePool = [
  {
    id: 2,
    icon: medal2,
    amount: 5000,
  },
  {
    id: 1,
    icon: medal1,
    amount: 10000,
  },
  {
    id: 3,
    icon: medal3,
    amount: 2500
  }
]

export const contactInfoAltair = [
  {
    name: "Harika Manthena",
    phone: "+91 63092 98466",
    email: "hmanthena@altair.com",
    hasLogo: true
  },
  {
    name: "Guru Charan Kotthuru",
    phone: "+91 93923 94354",
    email: "guruc@altair.com",
    hasLogo: true
  },
  {
    name: "Ramesha BS",
    phone: "+91 91777 70258",
    email: "rambs@altair.com",
    hasLogo: true
  }
]
 