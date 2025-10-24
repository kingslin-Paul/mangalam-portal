import { Download } from 'lucide-react';
import React from 'react'
type item={
    parameter:string;
    specification:string;
}
function Technicalsepcifiaction() {

    const data:item[] = [
        { parameter: "Pipe Diameter Range", specification: '20mm to 1600mm (3/4" to 63")' },
        { parameter: "Pressure Ratings", specification: "PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16" },
        { parameter: "Standard Dimension Ratio", specification: "SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11" },
        { parameter: "Operating Temperature", specification: "-40°C to +80°C (-40F to +176F)" },
        { parameter: "Service Life", specification: "50+ Years (at 20 degrees C, PN 10)" },
        { parameter: "Material Density", specification: "0.95 - 0.96 g/cm³" },
        { parameter: "Certification Standards", specification: "IS 5984, ISO 4427, ASTM D3035" },
        { parameter: "Joint Type", specification: "Butt Fusion, Electrofusion, Mechanical" },
        { parameter: "Coil Lengths", specification: "Up to 500mm (for smaller diameters)" },
        { parameter: "Country of Origin", specification: "🇮🇳 India" },
        ];

  return (
   <section className=' bg-secondary-blue'>
    <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] mx-auto max-w-[1240px]'>
    <h2 className='font-urbanist font-bold text-4xl md:text-[48px] leading-[1.2] tracking-[0px] text-white mb-5'>Technical Specifications at a Glance</h2>
    <h3 className='font-inter font-normal text-base md:text-lg leading-[1.6] tracking-[-0.006em] text-white md:max-w-[782px]'>Comprehensive performance data demonstrating our commitment to quality and engineering excellence.</h3>

<div className="overflow-hidden rounded-[12px] border border-gray-300 my-12 sm:my-14">
     <table className="min-w-full border-collapse">
        <colgroup>
          <col className="w-1/2" />
          <col className="w-1/2" />
        </colgroup>
      <thead className="bg-[#374151] text-white">
        <tr>
          <th className="py-3 px-6 text-left font-medium text-sm">PARAMETER</th>
          <th className="py-3 px-6 text-left font-medium text-sm">SPECIFICATION</th>
        </tr>
      </thead>
      <tbody className="bg-[#1F2937]">
        {data.map((item, index) => (
          <tr
            key={index}
            className={`border-b border-gray-300 ${
              index === 0 ? "text-white" : "text-gray-200"
            }`}
          >
            <td className="py-3 px-6 text-base font-medium font-inter">{item.parameter}</td>
            <td className="py-3 px-6 text-base font-medium font-inter">{item.specification}</td>
          </tr>
        ))}
      </tbody>
    </table>
</div>

<button className="px-6 w-full sm:w-fit sm:mx-auto py-4 border border-white rounded-lg transition text-white flex gap-2 items-center justify-center">
    <Download/>Download Full Technical Datasheet
</button>
    </section>

   </section>
  )
}

export default Technicalsepcifiaction