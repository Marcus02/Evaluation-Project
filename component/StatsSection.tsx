import React from "react";

export default function StatsSection() {
  return (
    <section className="w-full bg-[#faf9fa] rounded-t-[8px] sm:rounded-t-[12px] md:rounded-t-[16px] mt-6 sm:mt-8 md:mt-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        {/* Stats Grid - Centered with proper spacing */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* 30+ Years */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] font-medium text-[#791E79] leading-[1]">30+</span>
              <span className="bg-[#f3eafd] text-[#791E79] text-sm sm:text-base font-normal rounded-[16px] px-3 sm:px-4 py-1.5 sm:py-2 border border-[#791E79] whitespace-nowrap">Years</span>
            </div>
            <div className="text-[#222] text-sm sm:text-base font-medium">Setting Industry Standards</div>
          </div>

          {/* 12+ Cities */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] font-medium text-[#791E79] leading-[1]">12+</span>
              <span className="bg-[#f3eafd] text-[#791E79] text-sm sm:text-base font-normal rounded-[16px] px-3 sm:px-4 py-1.5 sm:py-2 border border-[#791E79] whitespace-nowrap">Cities</span>
            </div>
            <div className="text-[#222] text-sm sm:text-base font-medium">Nationwide Presence</div>
          </div>

          {/* 8K+ Professionals */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] font-medium text-[#791E79] leading-[1]">8K+</span>
              <span className="bg-[#f3eafd] text-[#791E79] text-sm sm:text-base font-normal rounded-[16px] px-3 sm:px-4 py-1.5 sm:py-2 border border-[#791E79] whitespace-nowrap">Professionals</span>
            </div>
            <div className="text-[#222] text-sm sm:text-base font-medium">Hospitality-Trained Experts</div>
          </div>
        </div>

        {/* Bottom Text - Centered */}
        <div className="text-center mt-8 sm:mt-12 mb-6 sm:mb-8">
          <span className="text-[#444] text-sm sm:text-base md:text-lg">Proven Impact, Across Industries and <span className="text-[#791E79] font-semibold">100+ Iconic Clients</span></span>
        </div>
      </div>
    </section>
  );
}
