import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section
      className="relative mx-auto rounded-[12px] sm:rounded-[15px] md:rounded-[17px] overflow-hidden bg-cover bg-center bg-no-repeat w-full max-w-[1200px] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[623px]"
      style={{
        backgroundImage: "url('/images/testimonial.jpg')",
        boxSizing: 'border-box',
      }}
    >
      <div
        className="absolute left-3 right-3 sm:left-4 sm:right-4 md:left-[60px] md:right-auto top-1/2 -translate-y-1/2 text-left text-white p-4 sm:p-6 md:p-10 flex flex-col justify-center md:max-w-[645px]"
        style={{
          opacity: 1,
          boxSizing: 'border-box',
        }}
      >
        <span className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 block" style={{ lineHeight: 1 }}>&ldquo;</span>
        <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4" style={{ lineHeight: '1.5' }}>
          I am very glad to inform you that myself and the management of saifee hospital are extremely happy about you and your team's work.<br className="hidden sm:block" />
          <span className="sm:hidden"> </span><br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          I would like to congratulate on behalf of my management at saifee to you and your entire team for honesty and integrity shown by your staff. We hope to receive the same dedication and sincerity from all your staff.
        </p>
       
      </div>
    </section>
  );
}
