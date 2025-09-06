import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-[#FBF8F6] pt-16 pb-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Top row: heading + CTA pill */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
          <div className="max-w-[820px]">
            <h3 className="text-[40px] md:text-[48px] leading-tight font-semibold text-[#111111]">
              Discover how our hospitality-inspired approach
            </h3>
            <div className="mt-2">
              <span className="text-[30px] md:text-[36px] italic text-[#800080]" style={{fontFamily: 'Newsreader', fontWeight: 400, fontStyle: 'italic'}}>can transform your facilities.</span>
            </div>
          </div>

          <div className="ml-auto">
            <button className="relative inline-flex items-center justify-center bg-[#F6E8FF] text-[#791E79] rounded-full px-6 md:px-10 py-2.5 md:py-3 overflow-visible shadow-sm hover:bg-[#791E79] hover:text-white transition-all duration-300 min-w-[220px] md:min-w-[320px] group">
              <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase whitespace-nowrap">SCHEDULE A CONSULTATION</span>
              <span className="absolute right-[-12px] md:right-[-14px] top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#791E79] text-white flex items-center justify-center shadow-md border-2 border-white group-hover:bg-white group-hover:text-[#791E79] transition-all duration-300">
                <Image src="/images/footerButton.svg" alt="Arrow" width={24} height={24} />
              </span>
            </button>
          </div>
        
        </div>

  <hr className="border-t border-[#F0EDEB] mb-12" />

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8 items-start">
          {/* Logo + tagline + socials (spans 2 columns on md+) */}
          <div className="md:col-span-2">
            <div className="w-[96px] mb-4">
              <Image src="/nav-logo.svg" alt="RARE" width={96} height={48} priority />
            </div>
            <p className="text-[15px] md:text-[15px] text-[#403f3f] max-w-[220px] mb-3">Unlock the power of hospitality-led facilities excellence.</p>

            <div className="flex items-center gap-2">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-md bg-[#800080] flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#800080] flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 24 28" fill="none"><path d="M22 0h-4a6 6 0 0 0-6 6v4H8v5h4v13h6V15h4l2-5h-6V6a1 1 0 0 1 1-1h3V0z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-md bg-[#800080] flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 24 18" fill="none"><path d="M23 4s-.2-1.6-.8-2.3C21 1 19.6 1 18.8 1 15 1 12 1 12 1s-3 0-6.8 0C3.6 1 3 1 1.8 1 .8 1 0 1 0 1v16s.2 0 .8.1C3 17 5 17 10 17c0 0 3 0 6.8 0 1.2 0 2.4 0 3.4-.1.6 0 .8-.1.8-.1V4z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#800080] flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2 8h4v12H2zM8 8h4v2.6c.9-1.4 3-2.4 5-2.4 3.6 0 6 2.4 6 7.1V20h-4v-6c0-1.8-.6-3-2.1-3-1.6 0-2.5 1.1-2.9 2.1V20H8V8z" stroke="white" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-md bg-[#800080] flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 8v8a4 4 0 1 0 4-4V6h3a6 6 0 1 0 0 12" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          {/* About Company */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-[#111111] mb-2">About Company</h4>
            <div className="w-10 h-[2px] bg-[#800080] mb-3"></div>
            <ul className="space-y-2 text-[14px] text-[#403f3f]">
              <li><a href="#" className="hover:underline">About RARE</a></li>
              <li><a href="#" className="hover:underline">About SIS Group</a></li>
              <li><a href="#" className="hover:underline">Compliance</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-[#111111] mb-2">Useful Links</h4>
            <div className="w-10 h-[2px] bg-[#800080] mb-3"></div>
            <ul className="space-y-2 text-[14px] text-[#403f3f]">
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">Case Studies</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
            </ul>
          </div>

          {/* Our Sectors */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-[#111111] mb-2">Our Sectors</h4>
            <div className="w-10 h-[2px] bg-[#800080] mb-3"></div>
            <ul className="space-y-2 text-[14px] text-[#403f3f]">
              <li>Healthcare</li>
              <li>Manufacturing</li>
              <li>Hospitality</li>
              <li>Commercial</li>
              <li>Real estate</li>
              <li>Education</li>
            </ul>
          </div>
        </div>

  <hr className="border-t border-[#F0EDEB] my-8" />

        {/* Bottom contact row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start md:items-center text-[14px] text-[#403f3f] pt-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#F0E8F6] text-[#800080]">
              <Image src="/images/footerSVG/1.svg" alt="Address" width={20} height={20} />
            </span>
            <div className="text-[14px] leading-tight">
              <div>A - 410, Kanakia Wall Street, Andheri Kurla Road,</div>
              <div>Chakala, Andheri (E) Mumbai - 4000093</div>
            </div>
          </div>

          {/* Phones */}
          <div className="flex items-center md:justify-center gap-4">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#F0E8F6] text-[#800080]">
              <Image src="/images/footerSVG/2.svg" alt="Phone" width={14} height={14} />
            </span>
            <div className="flex flex-col">
              <a href="tel:+919372153337" className="text-[#403f3f] hover:underline">+91 93721 53337</a>
              <a href="tel:+9112261416600" className="text-[#403f3f] hover:underline">+91 226 141 6600</a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center md:justify-end gap-4">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#F0E8F6] text-[#800080]">
              <Image src="/images/footerSVG/3.svg" alt="Email" width={16} height={16} />
            </span>
            <a href="mailto:support@raregpr.com" className="text-[#403f3f] hover:underline">support@raregpr.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
