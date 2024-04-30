// TeamSection.js
import React from 'react';
import Image from 'next/image'
import { Speakers } from '@/data/speaker_team_data';

interface mobileCard {
    icon: any,
    heading: string,
    bodyText: string,
    iphone: any,
    className?: any,
}

const Card = ({ image, name, company, position, description, linkedin }: Speakers) => {
    return (

        <div className='flex flex-col items-center'>
            <div className="bg-pink-600  w-[250px] rounded-full overflow-hidden shadow-md justify-center hover:scale-105">
                {/* Image */}
                <Image src={image} alt="Team Member" className="w-full h-[250px] object-cover object-center cursor-pointer " />
                {/* Name */}

            </div>
            <div className='text-center'>
                <h3 className="text-[22px] font-bold font-serif text-white mt-4">{name}</h3>
                {/* Position */}
                <p className="text-white text-[16px] font-mono">{position}</p>
                <p className="text-myPink font-bold text-[16px]">{company}</p>
            </div>
            {/* <div className="bg-pink-600 flex flex-col items-center rounded-lg overflow-hidden shadow-md justify-center hover:scale-105">
                <Image src={image} alt="Team Member" className="w-full h-[430px] object-cover object-center cursor-pointer " />
                <div className=''>
                    <h3 className="text-xl font-semibold text-white mt-4">{name}</h3>
                    <p className="text-white">{position}</p>
                    <p className="text-white">{company}</p>
                </div>
            </div> */}
        </div>)
};

export default Card;

