import Image from 'next/image';

const cards = [
  {
    img: '/images/impactCard/Link (5).jpg',
    percent: '30%',
    title: 'Reduction In HAIs (Healthcare Institutions)',
  },
  {
    img: '/images/impactCard/Link (6).jpg',
    percent: '100%',
    title: 'Skilled and Trained Workforce',
  },
  {
    img: '/images/impactCard/Link (7).jpg',
    percent: '50%',
    title: 'Reduction In Cross-Contamination (Healthcare Institutions)',
  },
  {
    img: '/images/impactCard/Link (8).jpg',
    percent: '8%',
    title: 'Guaranteed Energy Savings',
  },
];

export default function ImpactCardSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 font-geist">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] transition-all duration-500 hover:shadow-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src={card.img}
                alt={card.title}
                fill
                quality={100}
                priority={idx < 2}
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/30 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/40 transition-all duration-500"></div>
            
            <div className="absolute inset-0 text-white p-4 sm:p-6">
              {/* Top content */}
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 
                    className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-none mb-2 sm:mb-3"
                  >
                    {card.percent}
                  </h3>
                  <p 
                    className="text-sm sm:text-base md:text-[18px] font-extralight leading-[130%] tracking-normal"
                    style={{
                      fontFamily: 'var(--font-geist-sans)',
                    }}
                  >
                    {card.title}
                  </p>
                </div>
                
                {/* Bottom arrow button */}
                <div className="flex justify-end">
                  <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] rounded-full border-[1.5px] border-white/90 flex items-center justify-center text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-white hover:text-black group-hover:border-white">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
