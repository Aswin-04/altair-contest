export default function Submit() {
  return (
    <div className="padding-b max-w-[1440px] mx-auto padding-x">
    <div className='bg-gray-900 py-12  rounded-xl border border-secondary-400 shadow-lg shadow-secondary-500 px-4'>
        <div className="flex flex-col items-center ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-sans mb-10 gradient-2 text-center">Submit your work here</h2>
          <div>
            <button
              type='button'
              className='cursor-pointer group me-2 mb-2 flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center  font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 focus:outline-none dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800'
            >
              Submit now <span className="flex items-center ml-1 group-hover:translate-x-1 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </button>
          </div>
        </div>

    </div>
  </div>
  )
}