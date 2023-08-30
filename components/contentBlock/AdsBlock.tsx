import React from "react";
import Button from "../UI/Button";

const AdsBlock = () => {
    return (
        <section className="bg-ads-block bg-cover bg-center  w-full h-[450px]">
            <div className="bg-black bg-opacity-70 w-full h-full flex items-center justify-center">
                {" "}
                <div className="container text-center">
                    <h1 className="text-3xl font-semibold  text-white">
                        {" "}
                        Отримай захист вищого рівня з гарантіями на результат
                    </h1>
                    <p className="text-white text-lg mt-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <Button />
                </div>
            </div>
        </section>
    );
};

export default AdsBlock;
