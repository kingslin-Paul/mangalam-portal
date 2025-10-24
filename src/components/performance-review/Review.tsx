
type TestimonalData ={
name:string;
role:string;
}
function Review() {
    const testimonials:TestimonalData[] = [
    { name: "Johann Mueller", role: "Production Director" },
    { name: "Johann Mueller", role: "Production Director" },
    { name: "Johann Mueller", role: "Production Director" },
    { name: "Johann Mueller", role: "Production Director" },
    ];

  return (
    <div className="border-y-[0.5px] border-[#E1E3E8]">
     <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] max-w-[1240px] mx-auto'>
        <div className="flex justify-center items-center flex-col">
        <h2 className='font-urbanist font-bold text-[48px] text-center leading-[1.2] tracking-[0px] mb-5 text-black max-w-[900px]'>Trusted Performance. Proven Results</h2>
        <h3 className='font-inter font-normal text-lg text-center leading-[1.6] tracking-[-0.006em] text-[#6A7077] max-w-[900px]'>From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.</h3>
        </div>
        <div className="mt-[56px] flex gap-[16px] overflow-x-auto scrollbar-none px-[16px] md:px-[48px] lg:px-[60px] xl:px-[80px]">
             {testimonials.map((testimonial, index) => (
        <div key={index} className="flex-shrink-0 w-[280px] md:w-[420px] p-[20px] md:p-[32px] rounded-[24px] bg-[#F7F8F9] border-[1.5px] border-[#E1E3E8]">
          <img src='/assets/double-check.svg' alt='double-check'/>
          <div className='flex flex-col mt-8 gap-4'>
            <h4 className='font-urbanist font-semibold text-2xl leading-[120%] tracking-[0px] text-[#0D0D0D]'>
              Revolutionized our FIBC production efficiency!
            </h4>
            <p className='font-inter font-normal text-sm leading-[20px] tracking-[-0.006em] text-[#535A61]'>
              Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-10 md:mt-16">
            <span className='bg-[#E1E3E8] rounded-full size-12'></span>
            <div className='flex flex-col gap-1'>
              <span className="font-inter font-semibold text-base leading-[24px] tracking-[0px] text-[#0D0D0D]">
                {testimonial.name}
              </span>
              <span className="font-inter font-normal text-xs leading-[16px] tracking-[0px] text-[#535A61]">
                {testimonial.role}
              </span>
            </div>
          </div>
        </div>
      ))}
        </div>

     </section>
     </div>
  )
}

export default Review