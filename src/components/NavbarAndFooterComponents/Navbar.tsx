import React from "react";
import MaxContainer from "../MaxContainer";
import { ScrollerLink } from "../MotionComponents";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex justify-between bg-myPink/50 z-50 backdrop-blur-[6px] fixed top-0 w-full">
            <Image src={require("../../assets/images/TechTrekLogo2.png")} alt="Logo" className="h-[80px] w-[160px] object-cover bg-lack pt-4 ml-6" />

            <div className="flex items-center justify-end gap-10 py-5 mr-10">
                {NavbarChildren.map((item, index) => {
                    return (
                        // ScrollerLink is defined in motion components so that we don't have to make whole page client
                        <ScrollerLink
                            key={index}
                            className="font-bold text-[20px] text-white font-mono cursor-pointer"
                            to={item.link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            activeClass="text-red-800"
                        >
                            {item.name}
                        </ScrollerLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;

const NavbarChildren = [
    { name: "About", link: "about" },
    { name: "Schedule", link: "schedule" },
    { name: "Speaker", link: "speaker" },
];
