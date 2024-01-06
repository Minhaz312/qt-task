import React from 'react'
export default function Hero() {
  return (
      <div className="bg-transparent pt-8 pb-10 px-0 rounded-xl mb-10 sm:bg-primary sm:grid sm:grid-cols-12 sm:px-20 sm:pt-10 lg:px-20 2xl:px-32 xl:px-24 sm:my-20">
          <div className="col-span-7 flex justify-center text-center mb-16 flex-col gap-y-3 sm:mb-0 sm:text-left">
              <h1 className="text-slate-900 sm:text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
                  Deliver Food To Your Door Step!
              </h1>
              <p className="text-slate-500 sm:text-slate-100/70 text-sm md:text-2xl">
                  Authentic Food, Quick Service and Fast Delivery
              </p>
          </div>
          <div className="col-span-5 flex justify-center items-center bg-secondary/60 sm:bg-transparent rounded-3xl">
              <img
                  src="/images/hero-image.png"
                  className="w-full scale-[1.07] origin-bottom"
              />
          </div>
      </div>
  );
}
