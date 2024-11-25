export default function HeroSection() {
    return (
        <div className="py-8 md:py-10 lg:pb-20">
          <div className="md:container md:mx-auto px-4 md:flex items-center gap-6">
            <div className="my-10 md:w-[45%]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Get More Done with whitepace</h1>
              <p className="text-base md:text-lg font-normal my-8 md:mt-10 md:mb-14">Project management software that enables your  teams to collaborate, plan, analyze and manage everyday tasks</p>
              <button className="bg-primary rounded-lg px-4 py-3 lg:px-6 lg:py-4 text-base md:text-lg inline-flex items-center my-2">
                Try Whitepace free 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className="w-4 h-4 ml-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 my-10">
              <div className="bg-secondary p-4 min-h-[400px] md:h-[500px] lg:h-[540px]"></div>
            </div>
          </div>
        </div>
    );
}