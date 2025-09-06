import Image from "next/image";

const clientLogos = [
  "/images/clientLogo/download (1).png",
  "/images/clientLogo/download (2).png",
  "/images/clientLogo/download (3).png",
  "/images/clientLogo/download (4).png",
  "/images/clientLogo/download (5).png",
  "/images/clientLogo/download (6).png",
  "/images/clientLogo/download (7).png",
];

export default function ClientSection() {
  return (
    <section className="w-full bg-white rounded-b-[8px] sm:rounded-b-[12px] md:rounded-b-[16px]">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-2 sm:mt-4 py-4 sm:py-6 px-4">
        {clientLogos.map((src, idx) => (
          <div key={src} className="flex items-center justify-center h-[50px] sm:h-[60px] md:h-[70px] min-w-[70px] sm:min-w-[90px] md:min-w-[120px]">
            <Image
              src={src}
              alt={`Client Logo ${idx + 1}`}
              width={120}
              height={70}
              style={{ objectFit: "contain", maxHeight: 70, maxWidth: 140 }}
              sizes="(max-width: 640px) 70px, (max-width: 768px) 90px, 120px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
