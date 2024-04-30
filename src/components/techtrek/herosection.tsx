// hero.js
import React from 'react';
import CountdownTimer from './countdown';
import Image from 'next/image';
import { Button } from '../ui/button';

const HeroSection = () => {
    return (
        <section className="relative h-screen bg-cover bg-center flex justify-between">
            {/* Background Image */}
            <div className=" ml-40">
                {/* Event Details */}
                <div className="text-center absolute top-[120px]">
                    <h1 className="text-4xl font-bold text-white mb-4">Unforgettable Tech Trek</h1>
                    <p className="text-lg text-white mb-8">Date: May 03, 2024 | Location: Virtual</p>
                    {/* CTA Button */}
                    {/* <Button>Register Now</Button> */}
                </div>
                <div className="absolute top-[370px]">
                    <CountdownTimer eventDate={"05-3-2024"} />
                </div>
                <div className="absolute bottom-20">
                    <Button />
                </div>
            </div>
            <div className="h-[800px] w-[800px] bg-myPnk ">
                <Image src={require("../../assets/images/Fields_png.png")} alt="Logo" className="w-full h-full object-cover object-center" />

            </div>


        </section>
    );
};

export default HeroSection;
