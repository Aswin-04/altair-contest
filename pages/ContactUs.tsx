import ContactCard from "@/components/ContactCard";
import { contactInfoAltair } from "@/lib/constants";

export default function ContactUs() {
  return (
    <div>
      <section className="">
        <div className="">
          <h2 className="text-center text-3xl sm:text-4xl mb-8 lg:mb-16 text-secondary-400 font-semibold">Contact Us</h2>
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