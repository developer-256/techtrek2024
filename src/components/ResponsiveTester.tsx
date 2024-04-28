"use client";
import React, { useEffect, useState } from "react";

const ResponsiveTester = () => {
    const [screenWidth, setScreenWidth] = useState<number>(0);

    useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        updateScreenWidth();
        window.addEventListener("resize", updateScreenWidth);

        return () => {
            window.removeEventListener("resize", updateScreenWidth);
        };
    }, []);

    return <div className="fixed top-0 left-0 z-50">{screenWidth}</div>;
};

export default ResponsiveTester;

// TODO: delete this component before production