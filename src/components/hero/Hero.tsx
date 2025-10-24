import { ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react';

function Hero() {
 
const logos = [
  '/assets/euroflex.png',
  '/assets/euroflex.png',
  '/assets/euroflex.png',
  '/assets/euroflex.png',
'/assets/euroflex.png',
];
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const canShowZoom = window.innerWidth >= 1024;

  useEffect(() => {
    const handleResize = () => {
      if (imgRef.current) {
        setImgSize({
          width: imgRef.current.offsetWidth,
          height: imgRef.current.offsetHeight,
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current || !lensRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();

    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    setCoords({ x, y });

    lensRef.current.style.left = `${e.clientX - 50}px`;
    lensRef.current.style.top = `${e.clientY - 50}px`;
  };

  return (
    <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:pt-8 lg:px-[30px] max-w-[1240px] mx-auto'>
        <nav className='flex gap-2 items-center'>
            <span className='font-sans font-normal text-[14px] leading-[16px] tracking-[-0.006em] text-[#4D545C]'>Products</span>
            <ChevronRight className='size-3'/>
            <span className='font-sans font-normal text-[14px] leading-[16px] tracking-[-0.006em] text-black'>Two For One Twister</span>
        </nav>

        <section className='flex flex-col lg:flex-row gap-7 lg:gap-14 xl:gap-[87px] mt-7 sm:mt-12'>
            <div className='flex justify-center lg:justify-start flex-none hidden lg:block relative'>
            <img ref={imgRef} src="/assets/fish-man.jpg" alt="Hero"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouseMove}
             className="w-full cursor-zoom-in lg:max-w-[452px] xl:max-w-[570px] h-auto rounded-[24px] object-cover"/>
             <div className='flex gap-5 mt-5'>
                <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
                <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
                <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
                <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
                <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
             </div>

    {(hovered && canShowZoom &&
        <div ref={lensRef}
          className="pointer-events-none fixed size-[100px] backdrop-blur-sm border border-white"
        ></div>
      )}

      {(hovered && canShowZoom &&
        <div
          className=" absolute top-[120px] right-[-220px] w-[200px] h-[200px] border rounded-lg"
          style={{
            backgroundImage: `url("/assets/fish-man.jpg")`,
            backgroundSize:'500%',
            backgroundPosition: `${coords.x}% ${coords.y}%`,
          }}
        ></div>
      )}

            </div>

            <div id='section-chip' className='flex-1'>
                <div className='flex flex-wrap md:flex-nowrap gap-3 chips'>
                    <span className='flex gap-[10px] items-center py-2 px-3 rounded-md border border-[#E1E3E8] bg-[#F7F8F9] font-sans font-medium text-[14px] leading-[20px] tracking-[-0.006em]'>
                        <img src='/assets/iso.png' alt='iso-img' />
                        BIS Certified
                    </span>

                    <span className='flex gap-[10px] items-center py-2 px-3 rounded-md border border-[#E1E3E8] bg-[#F7F8F9] font-sans font-medium text-[14px] leading-[20px] tracking-[-0.006em]'>
                        <img src='/assets/isi-2.svg' alt='is1-2-img' />
                        ISO Certified
                    </span>
                    <span className='flex gap-[10px] items-center py-2 px-3 rounded-md border border-[#E1E3E8] bg-[#F7F8F9] font-sans font-medium text-[14px] leading-[20px] tracking-[-0.006em]'>
                        <img src='/assets/ce.svg' alt='ce-img' />
                        CE Certified
                    </span>
                </div>

                <div className='mt-4'>
                    <h1 className='font-urbanist font-bold text-[36px] leading-[1.1] sm:text-[56px] text-secondary-blue'>Premium HDPE Pipes & Coils for Modern Infrastructure</h1>
                    <ul className='flex gap-4 flex-col mt-4 font-inter font-normal text-base leading-[24px] tracking-[-0.006em] text-secondary-blue'>
                        <li className='flex gap-[6px] items-center'><img className='size-[18px]' src='/assets/check.png' alt='check-icon' />Leak-Proof Fusion Joints</li>
                        <li className='flex gap-[6px] items-center'><img className='size-[18px]' src='/assets/check.png' alt='check-icon' />Chemical Resistance</li>
                        <li className='flex gap-[6px] items-center'><img className='size-[18px]' src='/assets/check.png' alt='check-icon' />50+ Year Service Life</li>
                        <li className='flex gap-[6px] items-center'><img className='size-[18px]' src='/assets/check.png' alt='check-icon' />Flexible Installation</li>
                        <li className='flex gap-[6px] items-center'><img className='size-[18px]' src='/assets/check.png' alt='check-icon' />Flexible Installation</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center lg:justify-start flex-none order-2 lg:order-1 lg:hidden mt-6'>
                <img src="/assets/fish-man.jpg" alt="Hero"
                className="w-full  lg:max-w-[452px] xl:max-w-[570px] h-auto rounded-[24px] object-cover"/>
                <div className='flex gap-5 mt-5'>
                    <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
                    <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
                    <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
                    <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
                    <div className='size-16 md:size-20 bg-white rounded-lg border border-primary-border'></div>
                </div>
                </div>
                <div id='section-pricing' className='flex flex-col gap-5 mt-5'>
                <div className='flex flex-col border border-primary-border rounded-[10px] py-4 px-5'>
                    <span className='#6A7077 font-sans font-medium text-[14px] leading-[20px] tracking-[-0.006em]'>Price Range</span>
                    <span className='mt-2 font-sans font-semibold text-[20px] leading-[1.4] tracking-[-0.006em] text-black'>₹4,80,000 - 7,90,000</span>
                    <div className='flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-4'>
                        <span className='bg-[#FEF3C7] rounded-md py-[6px] px-3 text-[#92400E] font-sans font-medium text-[14px] leading-[20px] tracking-[-0.006em]'>Shipping: 6-12 days</span>
                        <span className='bg-[#FEF3C7] rounded-md py-[6px] px-3 text-[#92400E] font-sans font-medium text-[14px] leading-[20px] tracking-[-0.006em]'>Returns: If returned within 7 days</span>
                        <span className='bg-[#F3F4F6] rounded-md py-[6px] px-3 text-[#0D0D0D] font-sans font-medium text-[14px] leading-[20px] tracking-[-0.006em]'>Certifications: ISO Certified, BIS Certified</span>

                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-3'>
                    <button className="px-6 py-4 bg-primary-blue text-white rounded-lg hover:bg-[#202d7a] transition">
                        Get Custom Quote
                    </button>
                    <button className="px-6 py-4 border border-primary-blue rounded-lg transition flex gap-2 items-center justify-center">
                        View Technical Specs <ChevronRight className='border-primary-blue'/>
                    </button>
                </div>
                </div>
            </div>
        </section>

        <section className='mt-14 sm:mt-20 flex flex-col gap-5'>
            <p className='font-sans font-normal text-base leading-[24px] tracking-[-0.006em] text-[#878B94] text-center'>Trusted by Hundreds of Companies Globally</p>
            <div className='h-[48px] overflow-hidden flex items-center justify-center'>
            <div className="overflow-hidden">
                <div className="flex gap-10">
                {logos.map((logo, index) => (
                    <img
                    key={index}
                    src={logo}
                    alt="logo"
                    className="w-[91px] sm:w-[121px]"
                    />
                ))}
                </div>
            </div>
            </div>

        </section>
    </section>
  )
}

export default Hero