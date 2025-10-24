import { MoveLeft, MoveRight } from "lucide-react"
type ChipData={
    value:string;
}
function Advancehtbp() {
      const chips:ChipData[]=[
        {
            value:'Raw Material'
        },
        {
            value:'Extrusion'
        },
            {
            value:'Cooling'
        },
        {
            value:'Sizing'
        },
            {
            value:'Quality Control'
        },
        {
            value:'Marking'
        },
            {
            value:'Cutting'
        },
        {
            value:'Packaging'
        },
      ]
  return (
    <div className="border-y-[0.5px] border-[#E1E3E8]">
         <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] max-w-[1240px] mx-auto'>
        <div className="flex justify-center items-center flex-col">
        <h2 className='font-urbanist font-bold text-4xl md:text-[48px] text-center leading-[1.2] tracking-[0px] mb-5 text-black max-w-[900px]'>Advanced HDPE Pipe Manufacturing Process</h2>
        <h3 className='font-inter font-normal text-base md:text-lg text-center leading-[1.6] tracking-[-0.006em] text-[#6A7077] max-w-[900px]'>Our state-of-the-art extrusion technology ensures consistent quality, optimal material properties, and dimensional accuracy in every pipe we manufacture.</h3>
        </div>

        <div className='border border-primary-border rounded-[20px] mt-14 bg-white p-8'>
          <div className="items-center mb-8 hidden lg:flex">
            {chips.map((chip, index) => (
                <>
                <div key={index} className={`flex justify-center items-center px-4 py-2 border border-primary-border rounded-[32px] font-inter font-medium text-[14px] leading-[20px] tracking-[-0.006em] ${index == 0 ? 'text-white bg-primary-blue':'bg-white text-black'} flex-shrink-0 text-center`}>
                {chip.value}
                </div>
                {index !== chips.length - 1 && (
                <div className="h-[1px] w-full bg-primary-border"></div>
                )}
                </>
            ))}
          </div>

          <div className="flex items-center mb-8 lg:hidden">
            <div className='flex justify-center items-center px-4 py-2 border border-primary-border rounded-[32px] font-inter font-medium text-[14px] leading-[20px] tracking-[-0.006em] text-white bg-primary-blue flex-shrink-0 text-center'>
                Step 1/8: Raw Material
            </div>
          </div>

          <div className="flex items-center lg:gap-14 gap-6 flex-col lg:flex-row">
            <div>
                <div className='flex flex-col gap-4'>
                    <span className='font-urbanist font-semibold text-[28px] leading-[160%] tracking-[-0.006em] text-[#0D0D0D]'>High-Grade Raw Material Selection</span>
                    <p className="font-inter font-normal text-base leading-[24px] tracking-[-0.006em]">Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.</p>
                </div>
                <ul className='flex gap-4 flex-col mt-4 font-inter font-normal text-base leading-[24px] tracking-[-0.006em] text-secondary-blue'>
                    <li className='flex gap-[6px] items-center'><img className='size-[18px]' src='/assets/check.png' alt='check-icon' />PE100 grade material</li>
                    <li className='flex gap-[6px] items-center'><img className='size-[18px]' src='/assets/check.png' alt='check-icon' />Optimal molecular weight distribution</li>
                </ul>
            </div>
            <img src="/assets/versatile-worker.svg" alt='fishman-pic' className="rounded-2xl w-full"/>
          </div>

          <div className="items-center mt-8 flex lg:hidden">
            <div className='flex justify-center items-center px-4 py-2 border border-primary-border rounded-[32px] font-inter font-medium text-[14px] leading-[20px] tracking-[-0.006em] bg-white text-black flex-shrink-0 text-center gap-2'><MoveLeft/> Previous </div> 
            <div className="h-[1px] w-full bg-primary-border"></div>
            <div className='flex justify-center items-center px-4 py-2 border border-primary-border rounded-[32px] font-inter font-medium text-[14px] leading-[20px] tracking-[-0.006em] bg-white text-black flex-shrink-0 text-center gap-2'> Next <MoveRight /></div>
            </div>
        </div>
     </section>
     </div>
  )
}

export default Advancehtbp