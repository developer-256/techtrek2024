import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const notFound = () => {
    return (
        <section className="w-screen h-screen flex justify-center items-center">
            <p>404 Page Not Found</p>
            <p className="ml-4">|</p>
            <Button variant={"link"}>
                <Link href={"/"} className="">
                    Back to Home
                </Link>
            </Button>
        </section>
    );
};

export default notFound;