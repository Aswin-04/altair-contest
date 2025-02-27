import { prizePool } from "@/lib/constants";
import { medal1 } from "@/lib/icons";

export default function PrizePool() {
  return (
    <div>
      <h3 className="font-sans font-semibold text-center text-4xl sm:text-5xl mb-8 lg:mb-16 text-secondary-400 '">Prize Pool</h3>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="flex flex-col  lg:space-y-0 lg:grid lg:grid-cols-3 gap-10">
          {prizePool.map( prize => (
            <div key={prize.id} className={`w-[300px] h-80 border border-accent-500 shadow-sm backdrop-blur-3xl shadow-accent-500 rounded-xl bg-gray-900 mx-auto flex flex-col items-center ${prize.id == 1 ? "order-first lg:order-none lg:scale-110 lg:transform lg:z-10" : "lg:transform lg:scale-90" }`}>
              <div className="w-36 text-accent mt-10">
                {prize.icon}
              </div>
              <div className="mt-10 text-5xl font-semibold font-inter tracking-tight">
                &#8377;{prize.amount}
              </div>
            </div>
          ) )}
        </div>
      </div>
    </div>
  )
}