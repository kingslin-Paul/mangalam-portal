import { MoveLeft, MoveRight } from "lucide-react"
import { useState } from "react"
type SlideData ={
    title :string;
    description:string;
}
function Versatile() {

     const slides:SlideData[] = [
    {
      title: "Fishnet Manufacturing",
      description:
        "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    },
    {
      title: "Fishnet Manufacturing",
      description:
        "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    },
    {
      title: "Fishnet Manufacturing",
      description:
        "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    },
    {
      title: "Fishnet Manufacturing",
      description:
        "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    },
  ]



    const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div>
     <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] max-w-[1240px] mx-auto overflow-hidden'>
        <div className="flex justify-between md:items-center flex-col md:flex-row gap-5">
        <section className="max-w-[640px]">
        <h2 className='font-urbanist font-bold text-4xl md:text-[48px] leading-[1.2] tracking-[0px] mb-5 text-black'>Built to Last. Engineered to Perform.</h2>
        <h3 className='font-inter font-normal text-base md:text-lg leading-[1.6] tracking-[-0.006em] text-[#6A7077] md:max-w-[782px]'>From bulk bags to technical threads, Meera delivers precision solutions for every stage of your packaging process.</h3>
        </section>

        <div className="flex gap-3">
            <button onClick={prevSlide} className="size-[48px] md:size-[68px] border border-primary-border rounded-full bg-white flex justify-center items-center"><MoveLeft className='text-[#4B5563] size-4 md:size-5'/></button>
            <button onClick={nextSlide} className="size-[48px] md:size-[68px] border border-primary-border rounded-full bg-white flex justify-center items-center"><MoveRight className='text-[#4B5563] size-4 md:size-5'/></button>
        </div>
        </div>

        <div className="relative mt-12 md:pt-14 md:mb-5">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: window.innerWidth >= 768 ? `translateX(-${currentIndex * 420}px)` : `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index}
              className="flex-shrink-0 w-full md:w-[420px] h-[320px] md:h-[420px] rounded-[24.38px] backdrop-blur-[6.1px] bg-no-repeat bg-cover mr-5 fisherman">
              <div className="absolute bottom-[24.38px] left-[18.29px] flex flex-col gap-[9.14px] w-[283px] md:bottom-[32px] md:left-[24px]">
                <span className="font-urbanist font-medium text-[19.81px] leading-[120%] tracking-[0px] text-white md:text-[26px]">
                  {slide.title}
                </span>
                <p className="font-inter font-normal text-[12.19px] leading-[18.29px] tracking-[-0.006em] text-white/80 md:text-base md:leading-[24px]">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>

     </section>

     </div>
  )
}

export default Versatile