import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat mx-auto rounded-[17px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/testimonial.jpg')",
        width: '1330.25px',
        height: '623px',
        margin: '0 auto',
        padding: '3rem',
        maxWidth: '95vw',
        position: 'relative',
        left: '54.88px',
      }}
    >
      <div className="absolute inset-0 bg-[#2d201c] bg-opacity-70"></div>
      <div className="relative z-10 max-w-2xl mx-auto text-center text-white flex flex-col justify-center h-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-col items-center mb-8">
          <Image 
            src="/images/testimonial.jpg" 
            alt="Saifee Hospital Logo" 
            width={120} 
            height={120} 
            className="mb-6 rounded-full"
          />
          <p className="text-lg md:text-xl mb-6 italic">
            "Exceptional healthcare services with state-of-the-art facilities. The medical team's expertise and dedication to patient care is truly remarkable."
          </p>
          <div className="text-center">
            <span className="font-semibold block text-xl">Dr. S.J. Bajpai</span>
            <span className="text-sm text-gray-300">Asst. Dir. -PR & GA - Saifee Hospital</span>
          </div>
        </div>
      </div>
    </section>
  );
}
