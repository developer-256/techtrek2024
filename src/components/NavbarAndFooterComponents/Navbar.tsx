import React from "react";
import MaxContainer from "../MaxContainer";
import { ScrollerLink } from "../MotionComponents";

const Navbar = () => {
    return (
        <MaxContainer className="flex items-center justify-end gap-10 py-5 fixed top-0 bg-blue-300">
            {NavbarChildren.map((item, index) => {
                return (
                    // ScrollerLink is defined in motion components so that we don't have to make whole page client
                    <ScrollerLink
                        key={index}
                        className="font-bold text-lg cursor-pointer"
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
        </MaxContainer>
    );
};

export default Navbar;

const NavbarChildren = [
    { name: "About", link: "about" },
    { name: "Ticket", link: "ticket" },
    { name: "Speaker", link: "speaker" },
];
