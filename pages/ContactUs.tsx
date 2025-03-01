import ContactCard from "@/components/ContactCard";
import { contactInfoAltair } from "@/lib/constants";

export default function ContactUs() {
  return (
    <div>
      <section className="">
        <div className="">
          <div className="flex justify-center">
            <h2 className="gradient-2 text-center text-4xl sm:text-5xl mb-8 lg:mb-16 font-semibold">Contact Us</h2>
          </div>
          <div className="mb-10 flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-5xl gap-y-10 lg:place-items-center">
              {contactInfoAltair.map(info => (
                <ContactCard key={info.name} {...info}></ContactCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}