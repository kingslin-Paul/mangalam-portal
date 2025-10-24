import { Download } from 'lucide-react'

function Resource() {
  return (
    <div className="border-y-[0.5px] border-[#E1E3E8]">
     <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] max-w-[1240px] mx-auto'>
        <div className="flex justify-center items-center flex-col">
        <h2 className='font-urbanist font-bold text-[48px] text-center leading-[1.2] tracking-[0px] mb-5 text-black max-w-[900px]'>Resources & Downloads</h2>
        <h3 className='font-inter font-normal text-lg text-center leading-[1.6] tracking-[-0.006em] text-[#6A7077] max-w-[900px]'>Get all the technical documentation and resources you need to make informed decisions about our HDPE piping solutions.</h3>
        </div>
        <div className='rounded-[10px] border border-primary-border p-5 mt-14 bg-white'>
            <div className='flex gap-4 flex-col md:flex-row justify-between'>
                <p className='font-inter font-medium text-base leading-[24px] tracking-[-0.006em] text-[#0D0D0D]'>HDPE Pipe Installation Manual &nbsp;(PDF)</p>
                <div>
                    <button className='font-inter font-semibold text-base leading-[24px] tracking-[-0.006em] text-primary-blue flex gap-2 items-center'>Download PDF <Download className='size-6' /></button>
                </div>
            </div>
            <div className='w-full h-[1px] bg-[#E1E3E8] my-4'></div>
                <div className='flex gap-4 flex-col md:flex-row justify-between'>
                <p className='font-inter font-medium text-base leading-[24px] tracking-[-0.006em] text-[#0D0D0D]'>Maintenance & Inspection Handbook  &nbsp;(PDF)</p>
                <div>
                    <button className='font-inter font-semibold text-base leading-[24px] tracking-[-0.006em] text-primary-blue flex gap-2 items-center'>Download PDF <Download className='size-6' /></button>
                </div>
            </div>
            <div className='w-full h-[1px] bg-[#E1E3E8] my-4'></div>
            <div className='flex gap-4 flex-col md:flex-row justify-between'>
                <p className='font-inter font-medium text-base leading-[24px] tracking-[-0.006em] text-[#0D0D0D]'>Engineering Specifications Sheet &nbsp;(PDF)</p>
                <div>
                    <button className='font-inter font-semibold text-base leading-[24px] tracking-[-0.006em] text-primary-blue flex gap-2 items-center'>Download PDF <Download className='size-6' /></button>
                </div>
            </div>
            
        </div>
    </section>
    </div>
  )
}

export default Resource