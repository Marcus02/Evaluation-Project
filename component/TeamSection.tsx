import Image from 'next/image'

export default function TeamSection() {
  return (
    <section className="w-full min-h-screen flex items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-2 lg:order-1">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-[18px] leading-[130%] text-[#4D4D4D]">
              Committed to enhancing your spaces
              <span className="block text-[#742B8F]">with precision, care, and consistency.</span>
            </h3>
            
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.02em] font-medium text-[#242424]">
                Dedicated to delivering
                <span className="block text-[#791E79]">exceptional service</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#666666] max-w-[530px]">
              With 30+ years of experience, RARE Group is a trusted provider 
              of hospitality and facility management services for hospitals, 
              banks, corporates, refineries, hotels, and guest houses.
            </p>

            <div className="mt-6 sm:mt-8">
              <button className="group flex items-center gap-2 rounded-full bg-[#F6E8FF] px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 hover:bg-[#791E79]">
                <span className="text-sm sm:text-base font-medium text-[#791E79] transition-colors duration-300 group-hover:text-white">
                  Why Choose RARE
                </span>
                <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#791E79] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#791E79]">
                  →
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[720px] order-1 lg:order-2">
          <Image
            src="/images/teamSection.jpg"
            alt="RARE Group Team"
            fill
            className="object-cover rounded-xl sm:rounded-2xl"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
