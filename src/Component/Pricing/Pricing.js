import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {

    const pricingOption = [
        {
            id: 1, name: 'Free', price: 8.9, benefits: [
                'lifetime free',
                'unlimited deals',
                'localaized deals',
                'fantastic deals',
                'crezy deals'
            ]
        },
        {
            id: 1, name: 'Ragular', price: 10.5, benefits: [
                'lifetime free',
                'unlimited deals',
                'localaized deals',
                'fantastic deals',
                'crezy deals'
            ]
        },
        {
            id: 1, name: 'Premium', price: 12.7, benefits: [
                'lifetime free',
                'unlimited deals',
                'localaized deals',
                'fantastic deals',
                'crezy deals'
            ]
        },
    ]
    return (
        <div className='bg-indigo-300 p-6 m-6 rounded text-white'>
            <h2 className='text-6xl  '>the best deal of the town with tailwind</h2>
            <p className='mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui vitae laborum sed obcaecati, architecto molestias cumque accusantium provident ab et.</p>

            <div className='grid md:grid-cols-3'>
                {
                    pricingOption.map(option => <PricingOption key={option.id} option={option} ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;