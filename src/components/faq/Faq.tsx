import { ChevronDown } from 'lucide-react'
import { useState } from 'react';

type AccData ={
    question:string;
    answer:string;
}
function Faq() {

const [openIndex, setOpenIndex] = useState(0);

const accordionData:AccData[] = [
  {
    question: "What is the purpose of a laser cutter for sheet metal?",
    answer:"It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.",
  },
  {
    question: "What are the benefits of using aluminum tubing in manufacturing?",
    answer:"It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes"
  },
    {
    question: "How is aluminum tubing produced?",
    answer:"It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes"
    },
    {
    question: "What are the common applications of aluminum tubing?",
    answer:"It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes"
    },
  {
    question: "Can aluminum tubing be customized?",
    answer:"It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes"
    },
];

  const toggleAccordion = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <section className='border-y border-[#E1E3E8]'>
    <section className='py-12 px-4 md:py-20 md:px-12 lg:py-20 lg:px-[30px] max-w-[1240px] mx-auto'>
        <h2 className='font-urbanist font-bold text-4xl md:text-[44px] leading-[1.2] tracking-[0px] text-black'><span className='text-primary-blue'>Frequently</span> Asked Questions</h2>

        <div className="flex flex-col gap-4 my-14">
      {accordionData.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={index}
            className={`border border-primary-border bg-white p-5 w-full rounded-xl transition-all duration-300 ${isOpen ? "h-auto" : "h-auto sm:h-[64px] overflow-hidden"}`}>
            <div className="flex justify-between items-center">
              <p className='font-inter font-medium text-base tracking-[0.6] text-black'>{item.question}</p>
              <div
                className={`rounded-full size-6 cursor-pointer flex items-center justify-center ${isOpen?'bg-primary-blue':'bg-[#F1F2F3] '}`}
                onClick={() => toggleAccordion(index)}
              >
                <ChevronDown className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-white " : "rotate-0 text-[#a6a7aa]"
                  }`}
                />
              </div>
            </div>
            {isOpen && (
            <p className="mt-4 font-inter font-regular text-base tracking-[0.6] text-[#535A61]">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>

    <div className='border border-primary-border bg-[#F7F8F9] rounded-[10px] p-5 flex flex-col md:flex-row justify-between md:items-center gap-5'>
      <div className='flex flex-col gap-3'>
        <h3 className='font-inter font-semibold text-xl md:text-[26px] tracking-0 text-black'>Want us to email the entire catalogue?</h3>
        <h4 className='font-inter font-regular text-base tracking-[0.6]'>Enter your email and an expert will share the catalogue with you.</h4>
      </div>
      <div className='xl:w-[360px] lg:w-[350px] md:w-[269px] w-full flex flex-col sm:flex-row md:flex-col gap-3'>
        <input className='border border-[#E1E3E8] p-[10px] rounded-lg sm:flex-1 md:flex-none w-full' placeholder='Enter Address'/>
        <button className="px-4 py-[10px] bg-primary-blue text-white rounded-lg hover:bg-[#202d7a] transition">
            Request Catalogue
          </button>
      </div>
    </div>

        
    </section>
    </section>
  )
}

export default Faq