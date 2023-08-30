import Image from "next/image";
import React from "react";

const AboutUs = () => {
    return (
        <section className="container md:flex gap-16 items-center  my-40">
            <div className=" basis-1/2">
                <Image
                    src="/images/team.jpg"
                    width={620}
                    height={237}
                    alt="team"
                />
            </div>
            <div className="mt-8 md:mt-0 basis-1/2">
                <h1 className="text-4xl text-center md:text-left font-semibold">
                    Про нас
                </h1>
                <p className="mt-8 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
