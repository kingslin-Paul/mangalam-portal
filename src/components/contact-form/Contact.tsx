import { ChevronDown } from "lucide-react"

function Contact() {
  return (
    <div className="border-y-[0.5px] border-[#E1E3E8]">
        <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] max-w-[1240px] mx-auto'>
            <div className='bg-primary-blue rounded-[20px] p-6 md:p-14 flex gap-10 flex-col lg:flex-row md:gap-16'>
                <div className='flex flex-col gap-4 lg:placeholder lg:w-[50%]'>
                    <h4 className='font-urbanist font-bold text-[36px] md:text-[48px] leading-[120%] tracking-[0px] text-white'>Ready to Transform Your Textile Manufacturing?</h4>
                    <p className='font-inter font-normal text-base md:text-lg leading-[160%] tracking-[-0.006em] text-white/80'>Get a personalized consultation and quote for machinery solutions tailored to your specific production requirements.</p>
                    <div className='bg-white/80 h-[1.5px] mt-6'></div>
                    <p className='font-inter font-normal text-base md:text-lg leading-[160%] tracking-[-0.006em] text-white/80'>For immediate assistance, feel free to give us a direct call at +91-XXX-XXX-XXXX. You can also send us a quick email at info@meeraind.com</p>
                </div>
                <form className='bg-[#F7F8F9] rounded-[16px] flex flex-col gap-4 p-5 md:mt-16 md:p-8 lg:mt-0 lg:w-[50%]'>
                    <h4 className="font-inter font-medium text-base leading-[24px] text-[#262A2E]">Contact Us Today</h4>
                    <div className="flex flex-col gap-3">
                        <input className="px-[10px] py-[10px] pl-[12px] border border-[#E1E3E8] rounded-[8px] outline-none font-inter font-normal text-[14px] leading-[20px]" placeholder="Full Name"/>
                        <input className="px-[10px] py-[10px] pl-[12px] border border-[#E1E3E8] rounded-[8px] outline-none font-inter font-normal text-[14px] leading-[20px]" placeholder="Company Name"/>
                        <input className="px-[10px] py-[10px] pl-[12px] border border-[#E1E3E8] rounded-[8px] outline-none font-inter font-normal text-[14px] leading-[20px]" placeholder="Email Address"/>

                        <div className=" border border-[#E1E3E8] rounded-[8px] flex overflow-hidden">
                            <span className="flex gap-1 items-center bg-white">+91 <ChevronDown /></span>
                        <input className="px-[10px] py-[10px] pl-[12px] border-l border-l-[#E1E3E8] outline-none font-inter font-normal text-[14px] leading-[20px] w-full" placeholder="9876543210"/>
                        </div>
                    </div>
                    <button className="bg-[#262A2E] text-white px-3 py-3 rounded-[10px] font-inter font-medium text-[14px] leading-[20px] tracking-[-0.006em] cursor-pointer">Request Custom Quote</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact