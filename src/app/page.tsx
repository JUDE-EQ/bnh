'use client';

import { ArrowRightIcon, StarIcon, UsersIcon, ShieldCheckIcon } from "lucide-react";
import { FloatingCircles } from "./components/FloatingCircles";
import { NotificationCards } from "./components/NotificationCards";
import { TypingEffect } from "./components/TypingEffect";
import { DeviceMockup } from "./components/DeviceMockup";
// import { EmailAlert } from "./components/EmailAlert";

const bayAreaLocations = [
  'San Francisco',
  'Palo Alto',
  'San Jose',
  'Oakland',
  'Berkeley',
  'Mountain View',
  'Sunnyvale',
  'Redwood City'
];

export default function LandingPage() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen grid-pattern-background relative">
      <FloatingCircles />
      <NotificationCards />

      {/* <EmailAlert /> */}

      <div className="w-full pt-6 pb-36 md:py-0 md:max-w-3xl lg:max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-x-10">

          <div className="w-full md:max-w-[50%] lg:max-w-[712px] space-y-4 lg:space-y-8 mb-4 md:mb-0">
            <TypingEffect
              staticText="Discover New Construction Homes in"
              words={bayAreaLocations}
            />

            <p className="text-lg md:text-xl text-pale-sky">Weekly email alerts for new construction homes you're interested in</p>

            <button className="flex bg-bittersweet text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative cursor-pointer hover:translate-y-[-2px] hover:bg-roman">
              Get Started <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>

            <div className="space-y-3">
              <div className="text-[13px] tracking-wider text-pale-sky">TRUSTED BY THOUSANDS OF HOME BUYERS</div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
                <div className="flex flex-row items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm text-pale-sky ml-2 lg:ml-1">4.9/5 (2,000+ reviews)</span>
                </div>
                <div className="flex items-center gap-x-2 lg:gap-x-1">
                  <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-pale-sky">Secure & Private</span>
                </div>
                <div className="flex items-center gap-x-2 lg:gap-x-1">
                  <UsersIcon className="h-5 w-5 text-bittersweet stroke-bittersweet" />
                  <span className="text-sm text-pale-sky">50,000+ Active Users</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-[50%] lg:max-w-[360px]">
            <DeviceMockup />
          </div>

        </div>
      </div>
    </div>
  );
}