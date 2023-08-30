import React from "react";
import Button from "../UI/Button";

const FirstBlock = () => {
    return (
        <section className="w-full h-screen bg-firs-block bg-cover">
            <div className="absolute top-4 left-4 text-white font-extrabold text-2xl">
                DEFENSE TEAM
            </div>
            <div className=" bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center">
                {" "}
                <div className=" container">
                    {" "}
                    <h1 className="text-white text-3xl font-bold">
                        Заголовок з назвою статті і унікальною пропозицією
                    </h1>
                    <h2 className=" text-white text-xl mt-7">
                        Під заголовок який трохи детальніше описує...
                    </h2>
                    <Button />
                </div>
            </div>
        </section>
    );
};

export default FirstBlock;
