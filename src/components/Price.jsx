import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constans'

const Price = () => {
  return (
    <div className="mt-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">Pricing</h1>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className='text-4xl mb-8 flex'>
                            {option.title}
                            {option.title === "Pro" && (
                                <p className='m-1 items-center text-2xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>(Most Popular)</p>
                            )}
                        </p>
                        <p className="mb-6">
                            <span className="mt-6 text-5xl mr-2"> {option.price}</span>
                            <span className="text-neutral-400 tracking-wide"> /Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature , index) => (
                                <li key={index} className='mt-8 flex items-center gap-3'>
                                    <CheckCircle2/>
                                    <span>{feature}</span>
                                </li>
                            ) )}
                        </ul>
                        <a href="" className="inline-flex justify-center items-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">Subscribe</a>
                    </div>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Price