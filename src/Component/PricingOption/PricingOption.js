
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const PricingOption = (props) => {

    const { name, price, benefits } = props.option
    return (
        <div className='bg-white m-5 py-7 px-5 rounded-lg'>

            <h2 className='text-black bg-indigo-300 mx-5 py-2 '>{name}</h2>
            <p className='pt-3'>
                <span className='text-black font-bold text-4xl' >{price} <span className='text-2xl'>/mo</span> </span>
            </p>

            <div className='text-black'>
                <h3 className='text-left ml-3 font-bold'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefits benefit={benefit}></Benefits>)
                }
            </div>
            <button className='text-white text-2xl p-3  items-center rounded hover:bg-green-900 ease-in flex justify-center duration-300 bg-green-600 w-full text-center mt-7'>   Buy Now  <ArrowRightIcon className='h-6 w-6 ml-3'></ArrowRightIcon>

            </button>
        </div>
    );
};

export default PricingOption;