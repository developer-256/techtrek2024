// TeamSection.js
import React from 'react';
import Image from 'next/image'
import { Speakers } from '@/data/speaker_team_data';
import { Field } from '@/data/rounds_data';



const RoundCard = ({ image, date, name, speaker, time, description }: Field) => {
    return (

        <div className='flex flex-col items-center'>

            <div className="bg-myPink bg-transparent border border-myPink border-1 w-[360px] flex flex-col items-center rounded-lg overflow-hidden shadow-md justify-center hover:scale-105">
                <Image src={image} alt="Team Member" className="w-full h-[330px] object-cover object-center cursor-pointer " />
                <div className='text-center'>
                    <h3 className="text-[22px] font-bold font-serif text-white mt-4">{name}</h3>
                    {/* Position */}
                    <p className="text-white text-[16px] font-mono">{speaker}</p>
                    <p className="text-myPink font-bold text-[16px]">{`${date}  |  ${time}`}</p>
                </div>
            </div>
        </div>)
};

export default RoundCard;

