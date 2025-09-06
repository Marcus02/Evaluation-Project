import Image from 'next/image';

const caseStudies = [
  {
    image: '/images/caseStudy/1.jpg',
    title: 'Reliance Industries',
    location: 'Mumbai and Gujarat',
  },
  {
    image: '/images/caseStudy/2.jpg',
    title: 'Pallazio Hotels and Leisure LTD',
    location: 'Mumbai',
  },
  {
    image: '/images/caseStudy/3.jpg',
    title: 'Bombay Hospital Trust',
    location: 'Pune',
  },
];

export default function StudyCaseSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12">
          <span className="text-xs sm:text-sm font-medium text-[#791E79] uppercase tracking-wider">RARE</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[120%] text-[#950095] font-medium mt-3 sm:mt-4 mb-3 sm:mb-4">
            Proven Impact, Across Industries
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-[140%] text-[#2B003B] font-normal tracking-[-1.05px] align-middle"
            style={{
              fontFamily: 'var(--font-geist-sans)',
            }}
          >
            We provide a range of Integrated Facility Management solutions, ensuring
            seamless operation, maintenance, and optimization of assets across
            industries and sectors.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-[250px] sm:h-[280px] md:h-[300px] w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6 relative">
                <h3 className="text-lg sm:text-[20px] font-medium text-[#242424] mb-2 transition-colors duration-300 group-hover:text-[#791E79]">
                  {study.title}
                </h3>
                <p className="text-sm sm:text-[16px] text-[#666666]">{study.location}</p>
                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#791E79] text-white flex items-center justify-center text-sm sm:text-base">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#F6E8FF] text-[#791E79] hover:bg-[#791E79] hover:text-white transition-all duration-300">
            <span className="font-medium text-sm sm:text-base">View More</span>
          </button>
        </div>
      </div>
    </section>
  );
}
