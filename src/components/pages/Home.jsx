import React, {useState} from 'react'
import { CiCirclePlus } from "react-icons/ci";
import faqData from '../data/FaqData';

export default function Home() {
    let [openAns, setOpenAns] = useState(0);             
  return (
    <section className='py-10 bg-lime-100'>
        <h2 className='font-bold text-center text-3xl'>FAQs About</h2>
        <div className='max-w-[1000px] mx-auto mt-5'>
        <div className='border-1'>
            {faqData.map((faq) => (
                <div key={faq.id}>
                    <h3 onClick={() => setOpenAns(openAns === faq.id ? 0 : faq.id)} className='bg-[#2553A2] text-white relative p-3 text-[18px] cursor-pointer'>
                        {faq.question}
                        <span className='absolute right-3'>
                            <CiCirclePlus />
                        </span>
                    </h3>
                    <p className={`p-3 ${openAns === faq.id ? 'block' : 'hidden'}`}>
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
        </div>
    </section>
  )
}
