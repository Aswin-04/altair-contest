import { prizePool } from "@/lib/constants";
import { medal1 } from "@/lib/icons";

export default function PrizePool() {
  return (
    <div>
      <div className="flex">
        <h3 className="font-sans font-semibold  text-4xl sm:text-5xl mb-8 lg:mb-16 gradient-2 mx-auto ">Prize Pool</h3>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="flex flex-col  lg:space-y-0 lg:grid lg:grid-cols-3 gap-10">
          {prizePool.map( prize => (
            <div key={prize.id} className={`w-[300px] h-80 border border-primary-500 shadow-lg shadow-primary-500 rounded-xl bg-gray-900 mx-auto flex flex-col items-center ${prize.id == 1 ? "order-first lg:order-none lg:scale-110 lg:transform lg:z-10" : "lg:transform lg:scale-90" }`}>
              <div className="w-36 text-primary mt-10">
                {prize.icon}
              </div>
              <div className="text-zinc-300 drop-shadow-[2px_2px_2px_#3fd2c7] mt-10 text-5xl font-semibold font-inter tracking-tight">
                &#8377;{prize.amount}
              </div>
            </div>
          ) )}
        </div>
      </div>
    </div>
  )
}