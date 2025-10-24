import { BriefcaseBusiness, Package, Pin } from 'lucide-react'
import React, { JSX } from 'react'

type FeatureCard= {
  icon: string;
  title: string;
  description: string;
}

function Performance() {

    const features: FeatureCard[] = [
  {
    icon: "/assets/bag.svg",
    title: "Superior Chemical Resistance",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
  {
    icon: "/assets/pin.svg",
    title: "Exceptional Flexibility & Durability",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
  {
    icon: "/assets/box.svg",
    title: "Leak-Proof Fusion Welding",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
    {
    icon: "/assets/gear.svg",
    title: "Cost-Effective Long-Term Solution",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
  {
    icon: "/assets/gear.svg",
    title: "Environmentally Sustainable",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
  {
    icon: "/assets/gear.svg",
    title: "Certified Quality Assurance",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments" 
    },
 
];

  return (
    <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] max-w-[1240px] mx-auto'>
          <h2 className='font-urbanist font-bold text-[48px] leading-[1.2] tracking-[0px] mb-5 text-black'>Built to Last. Engineered to Perform.</h2>
      <h3 className='font-inter font-normal text-lg leading-[1.6] tracking-[-0.006em] text-[#6A7077] md:max-w-[782px]'>From bulk bags to technical threads, Meera delivers precision solutions for every stage of your packaging process.</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-12 sm:my-14">
      {features.map((feature, index) => (
        <div key={index} className="border border-primary-border bg-white p-5 flex flex-col gap-4 rounded-xl hover:shadow-md transition-shadow">
          <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
          <span className="font-urbanist font-semibold text-[20px] leading-[120%] tracking-[0px] text-[#00004E]">
            {feature.title}
          </span>
          <p className="font-inter font-normal text-base leading-[24px] tracking-[-0.006em] text-[#333]">
            {feature.description}
          </p>
        </div>
      ))}
    </div>

        <button className="px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-[#202d7a] transition mx-auto flex">
        Request a Quote
        </button>

    </section>
  )
}

export default Performance