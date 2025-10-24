
function Footer() {
  return (
        <footer className="border-y-[0.5px] border-[#E1E3E8]">
     <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] max-w-[1240px] mx-auto'>
        <div className="flex justify-center items-center gap-5 flex-col p-6 bg-white border border-primary-border rounded-[16px] md:p-8 md:flex-row md:justify-between">
            <img src="/assets/logo.png" alt="Mangalam Logo" className="w-[109px] h-[45px] object-contain"/>
            <p className='font-urbanist font-semibold text-base leading-[120%] tracking-[0px] text-center text-[#0D0D0D] md:text-[24px] md:max-w-[344px]'>Premium <span className='text-primary-blue'>HDPE Pipes & Fittings Manufacturer</span> in South India</p>
        </div>
     <div className="mt-[60px] flex flex-col gap-6 md:flex-row lg:justify-between">
        <div className="flex flex-col gap-[16px] md:w-[158px]">
            <span className="font-inter font-semibold text-xs leading-[16px] tracking-[-0.006em] text-[#0D0D0D]">About Us</span>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">About Us</a>
        </div>

        <div className="flex flex-col gap-[16px] md:w-[158px]">
            <span className="font-inter font-semibold text-xs leading-[16px] tracking-[-0.006em] text-[#0D0D0D]">Categories</span>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">Packaging Industry Solutions</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">Fishnet Manufacturing</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">PPMF/Tapes and Twiness</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">FIBC and Woven Sack</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">Carpet and Rugs Industry</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">Technical Textiles</a>
        </div>

        <div className="flex flex-col gap-[16px] md:w-[158px]">
            <span className="font-inter font-semibold text-xs leading-[16px] tracking-[-0.006em] text-[#0D0D0D]">Products</span>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">Two For One Twister</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">TPRS Twister Machine</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">Ring Twisting Machines</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">Covering Machines</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">Heat Setting Equipment</a>
            <a className="font-inter font-medium text-sm leading-[20px] tracking-[-0.006em] text-[#535A61] cursor-pointer">Heat Setting Equipment</a>
        </div>

        <div>
            <div className="flex flex-col gap-[10px] md:w-[158px]">
            <span className="font-inter font-semibold text-xs leading-[16px] tracking-[-0.006em] text-[#0D0D0D]">Contact</span>
            <div className="flex gap-[6px] items-start font-inter font-normal text-xs leading-[16px] tracking-[-0.006em] text-[#535A61]">
                <img src="/assets/location.svg" alt="map" />
                <p>2126, Road No. 2, GIDC Sachin, Surat - 394 230 Gujarat, India</p>
            </div>
            <div className="flex gap-[6px] items-start font-inter font-normal text-xs leading-[16px] tracking-[-0.006em] text-[#535A61]">
                <img src="/assets/phone.svg" alt="phone" />
                <p>+91-XXX-XXX-XXXX</p>
            </div>
            <div className="flex gap-[6px] items-start font-inter font-normal text-xs leading-[16px] tracking-[-0.006em] text-[#535A61]">
                <img src="/assets/msg.svg" alt="email" />
                <p>info@meeraind.com</p>
            </div>
            <div className="flex gap-[6px] items-start font-inter font-normal text-xs leading-[16px] tracking-[-0.006em] text-[#535A61]">
                <img src="/assets/support.svg" alt="support" />
                <p>support@meeraind.com</p>
            </div>
            </div>
            <hr className="my-6 h-[1px] bg-[#E1E3E8]"></hr>
            <img src="/assets/social-media.svg" alt="social media"/>
        </div>
     </div>
     </section>

     <section className=" w-full mt-[49px] flex flex-col gap-6 border-t border-[#E1E3E8] p-[16px_12px] md:flex-row md:justify-center lg:gap-[242px]">
        <p className="font-inter font-normal text-xs leading-[16px] tracking-[0px] text-[#535A61] cursor-pointer">Copyright © 2025 Meera Industries Limited | All Rights Reserved</p>
        <div className="flex justify-between gap-[6px] md:gap-[12px] lg:gap-[56px]">
            <a className="font-inter font-normal text-xs leading-[16px] tracking-[0px] text-[#535A61] cursor-pointer">Privacy Policy</a>
            <a className="font-inter font-normal text-xs leading-[16px] tracking-[0px] text-[#535A61] cursor-pointer">Terms of Service</a>
            <a className="font-inter font-normal text-xs leading-[16px] tracking-[0px] text-[#535A61] cursor-pointer">Sitemap</a>
        </div>
     </section>

     </footer>
  )
}

export default Footer