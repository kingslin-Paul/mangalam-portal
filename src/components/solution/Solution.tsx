
function Solution() {
  return (
    <div className="border-y-[0.5px] border-[#E1E3E8]">
     <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] max-w-[1240px] mx-auto'>
        <div className="flex justify-center items-center flex-col">
        <h2 className='font-urbanist font-bold text-4xl md:text-[48px] text-center leading-[1.2] tracking-[0px] mb-5 text-black max-w-[900px]'>Complete Piping Solutions Portfolios</h2>
        <h3 className='font-inter font-normal text-base md:text-lg text-center leading-[1.6] tracking-[-0.006em] text-[#6A7077] max-w-[900px]'>From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.</h3>
        </div>

        <div className="mt-[56px] flex flex-col gap-6 md:flex-col lg:flex-row">
            <div className="p-6 bg-white border-[1.25px] border-primary-border rounded-[20px]">
                <div className="flex flex-col gap-4">
                    <h3 className="font-urbanist font-semibold text-[28px] leading-[120%] text-[#0D0D0D]">HDPE Fittings & Accessories</h3>
                    <p className="font-inter font-normal text-sm leading-[20px] tracking-[-0.006em] text-[#4D545C]">Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.</p>
                </div>
                <img src="/assets/engineer1.svg" alt="engineer" className="w-full rounded-2xl mt-6" />
                <button className="mt-5 w-full py-2 border border-[#2B39903D] bg-[#2B39900D] rounded-[12px] font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-primary-blue">Learn More</button>
            </div>
            <div className="p-6 bg-white border-[1.25px] border-primary-border rounded-[20px]">
                <div className="flex flex-col gap-4">
                    <h3 className="font-urbanist font-semibold text-[28px] leading-[120%] text-[#0D0D0D]">Professional Installation Servicess</h3>
                    <p className="font-inter font-normal text-sm leading-[20px] tracking-[-0.006em] text-[#4D545C]">Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.</p>
                </div>
                <img src="/assets/engineer2.svg" alt="engineer" className="w-full rounded-2xl mt-6" />
                <button className="mt-5 w-full py-2 border border-[#2B39903D] bg-[#2B39900D] rounded-[12px] font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-primary-blue">Learn More</button>
            </div>

            <div className="p-6 bg-white border-[1.25px] border-primary-border rounded-[20px]">
                <div className="flex flex-col gap-4">
                    <h3 className="font-urbanist font-semibold text-[28px] leading-[120%] text-[#0D0D0D]">PE-RT Heating Pipes & Accessories</h3>
                    <p className="font-inter font-normal text-sm leading-[20px] tracking-[-0.006em] text-[#4D545C]">Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications</p>
                </div>
                <img src="/assets/engineer1.svg" alt="engineer" className="w-full rounded-2xl mt-6" />
                <button className="mt-5 w-full py-2 border border-[#2B39903D] bg-[#2B39900D] rounded-[12px] font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-primary-blue">Learn More</button>
            </div>
        </div>

        <div className="mt-14 p-5 border border-primary-border bg-[#F7F8F9] rounded-[10px] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
                <h3 className="font-urbanist font-semibold text-[26px] leading-[120%] text-[#0D0D0D]">Didn't find what <span className="text-primary-blue">you're looking for?</span></h3>
                <p className="font-inter font-normal text-base leading-[24px] tracking-[-0.006em] text-[#262A2E] mt-3">Talk to our experts for custom solutions and tailored guidence.</p>
            </div>
            <button className="mt-3 md:mt-0 bg-primary-blue rounded-[10px] border-none font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-white py-[10px] px-4 flex justify-center items-center gap-2 text-nowrap">
            <img  src="/assets/cell-phone.svg"/> Talk to an Expert
            </button>

        </div>

    </section>
    </div>
  )
}

export default Solution