import Image from "next/image";

export default function HeroSection() {
  return (
    <>
  <section className="relative w-full overflow-hidden rounded-[8px] sm:rounded-[12px] md:rounded-[16px] mt-4 sm:mt-6 md:mt-8">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] relative">
          <Image
            src="/images/heroSection.jpg"
            alt="Hero Background"
            fill
            className="object-cover rounded-[8px] sm:rounded-[12px] md:rounded-[16px] transition-transform duration-700 hover:scale-105"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </div>
        <div className="absolute inset-x-3 sm:inset-x-4 md:inset-x-[118px] top-16 sm:top-20 md:top-24 lg:top-32 z-10 max-w-[1100px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[69px] leading-[1.05] font-extrabold text-white m-0 animate-fade-in-up">
            RARE Solutions for RARE<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Facility Needs
          </h1>
        </div>
        <div className="absolute inset-x-3 sm:inset-x-4 md:inset-x-[118px] top-32 sm:top-40 md:top-44 lg:top-[290px] z-10 max-w-[900px]">
          <p className="text-xs sm:text-sm md:text-base lg:text-[20px] leading-5 sm:leading-6 md:leading-7 text-white m-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="font-semibold">For over 30 years+ </span>
            we've redefined facility management with our hospitality DNA—<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>delivering operational excellence with the warmth and precision of luxury guest service.
          </p>
        </div>
      </section>
      <section className="relative w-full bg-white rounded-[8px] sm:rounded-[12px] md:rounded-[16px] mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 md:px-14 lg:px-20 pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8"
          style={{
            fontFamily: 'var(--font-geist-sans), Geist, Arial, sans-serif',
            fontWeight: 700,
            margin: 0,
            marginBottom: '1.5rem',
          }}
        >
          <span style={{ color: '#791E79' }}>Engineered for India's</span>{' '}
          <span style={{ color: '#222' }}>Most Demanding<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Environments</span>
        </h2>
        <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 mb-6 sm:mb-8"
            style={{
            color: '#757575',
            fontFamily: 'var(--font-geist-sans), Geist, Arial, sans-serif',
            margin: 0,
          }}
        >
          At RARE, we don't just manage facilities—we create exceptional environments where people thrive. Our hospitality DNA infuses everything we do, delivering operational excellence with the warmth and precision that defines luxury service.
        </p>
        <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8"
            style={{
            color: '#757575',
            fontFamily: 'var(--font-geist-sans), Geist, Arial, sans-serif',
            margin: 0,
          }}
        >
          We harness intelligent tech and data analytics for healthier, sustainable, productive environments. Our focus is superior ROI – optimizing asset lifecycles, enhancing well-being, and boosting your bottom line & ESG goals.
        </p>
      </section>
    </>
  );
}
