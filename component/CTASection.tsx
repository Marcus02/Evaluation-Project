import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="w-full relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] my-12 sm:my-16 md:my-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-12">
        <Image
          src="/images/Image (3).png"
          alt="Facility Management Background"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(75.61deg, #2D0050 -27.36%, rgba(147, 0, 147, 0.76) 157.75%)',
            mixBlendMode: 'multiply',
          }}
        />
        
        {/* Diagonal Lines Pattern */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center text-center">
        <div className="max-w-[800px] space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[56px] leading-[110%] font-medium text-white tracking-[-0.02em]">
            Ready to Turn Your Facility Into a
            <span className="block">Five-Star Asset?</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-[150%] text-white/90 font-light mb-6 sm:mb-8">
            Let's transform your operations—and your
            <span className="block">guest experience.</span>
          </p>

          <button className="group inline-flex items-center gap-2 bg-white rounded-full px-5 sm:px-6 md:px-7 py-3 sm:py-4 text-[#791E79] hover:bg-[#791E79] hover:text-white transition-all duration-300">
            <span className="font-medium text-sm sm:text-base md:text-[16px]">Schedule a Consultation</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
