import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section
      className="bg-white rounded-[12px] sm:rounded-[15px] md:rounded-[17px] mx-auto flex flex-col justify-center shadow-md w-full max-w-[1100px] px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12 my-4 sm:my-6 md:my-8"
    >
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ lineHeight: 1.1, color: '#742B8F' }}>
        Customised Solutions for Your Premium Needs
      </h2>
  <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 md:mb-10 max-w-3xl">
        We don't just service your facilities—we align with your goals. Whether you're pursuing patient satisfaction, workplace productivity, operational efficiency, or guest experience excellence, our solutions adapt to become an extension of your vision.
      </p>
      {/* Service Rows */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Industrial FM */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-6 sm:pb-8">
          <div className="flex-1 mb-4 sm:mb-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2" style={{color: '#742B8F'}}>Industrial FM</h3>
            <h4 className="text-sm sm:text-base font-semibold mb-2" style={{color: '#742B8F'}}>Operational Resilience, Innovation Enablemen</h4>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl">
              We partner with you to deliver customised industrial machinery and production support services, ensuring efficiency, solving challenges, and creating long-term operational value.
            </p>
          </div>
          <div className="flex justify-end sm:ml-8 sm:justify-start">
            <Image src="/images/services/1.svg" alt="Industrial FM" width={48} height={48} className="sm:w-14 sm:h-14" />
          </div>
        </div>
        {/* Premium Hospitality & Corporate */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-6 sm:pb-8">
          <div className="flex-1 mb-4 sm:mb-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2" style={{color: '#742B8F'}}>Premium Hospitality & Corporate</h3>
            <h4 className="text-sm sm:text-base font-semibold mb-2" style={{color: '#742B8F'}}>Brand Amplification, Unforgettable Experiences</h4>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl">
              We curate environments reflecting your brand's prestige. For guests or teams, expect a flawless backdrop for exceptional moments and peak performance.
            </p>
          </div>
          <div className="flex justify-end sm:ml-8 sm:justify-start">
            <Image src="/images/services/2.svg" alt="Premium Hospitality & Corporate" width={48} height={48} className="sm:w-14 sm:h-14" />
          </div>
        </div>
        {/* Healthcare */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 sm:pb-8">
          <div className="flex-1 mb-4 sm:mb-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2" style={{color: '#742B8F'}}>Healthcare</h3>
            <h4 className="text-sm sm:text-base font-semibold mb-2" style={{color: '#742B8F'}}>Patient-Centric Care, Clinical Excellence Support</h4>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl">
              As your partner, we ensure sterile, safe environments through mechanized housekeeping, green agents, and strict infection control protocols.
            </p>
          </div>
          <div className="flex justify-end sm:ml-8 sm:justify-start">
            <Image src="/images/services/3.svg" alt="Healthcare" width={48} height={48} className="sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
