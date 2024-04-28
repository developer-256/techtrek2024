"use client"

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const ScrollerLink = ScrollLink;

export const scrollToTop = () => {
    scroll.scrollToTop();
};
