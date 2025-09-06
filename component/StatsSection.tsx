import React from "react";

export default function StatsSection() {
  return (
    <section className="w-full bg-[#faf9fa] rounded-t-[8px] sm:rounded-t-[12px] md:rounded-t-[16px] mt-6 sm:mt-8 md:mt-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-0 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-4">
              <span className="text-4xl sm:text-[56px] md:text-[90px] font-medium text-[#791E79] leading-[1]">30+</span>
              <span className="bg-[#f3eafd] text-[#791E79] text-xs sm:text-sm font-normal rounded-[12px] sm:rounded-[16px] px-2 sm:px-3 py-1 border border-[#791E79]">Years</span>
            </div>
            <div className="text-[#222] text-sm sm:text-base mt-2 sm:mt-4">Setting Industry Standards</div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-4">
              <span className="text-4xl sm:text-[56px] md:text-[90px] font-medium text-[#791E79] leading-[1]">12+</span>
              <span className="bg-[#f3eafd] text-[#791E79] text-xs sm:text-sm font-normal rounded-[12px] sm:rounded-[16px] px-2 sm:px-3 py-1 border border-[#791E79]">Cities</span>
            </div>
            <div className="text-[#222] text-sm sm:text-base mt-2 sm:mt-4">Nationwide Presence</div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-4">
              <span className="text-4xl sm:text-[56px] md:text-[90px] font-medium text-[#791E79] leading-[1]">8K+</span>
              <span className="bg-[#f3eafd] text-[#791E79] text-xs sm:text-sm font-normal rounded-[12px] sm:rounded-[16px] px-2 sm:px-3 py-1 border border-[#791E79]">Professionals</span>
            </div>
            <div className="text-[#222] text-sm sm:text-base mt-2 sm:mt-4">Hospitality-Trained Experts</div>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 mb-6 sm:mb-8">
          <span className="text-[#444] text-sm sm:text-base md:text-lg">Proven Impact, Across Industries and <span className="text-[#791E79] font-semibold">100+ Iconic Clients</span></span>
        </div>
      </div>
    </section>
  );
}
