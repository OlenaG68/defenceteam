import React from "react";
import Button from "../UI/Button";

const FirstBlock = () => {
    return (
        <section className="w-full h-screen bg-firs-block bg-cover bg-center">
            <div className="absolute top-4 left-4 text-white font-extrabold text-2xl">
                DEFENSE TEAM
            </div>
            <div className=" bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center">
                {" "}
                <div className=" container px-3 md:px-0">
                    {" "}
                    <h1 className="text-white text-xl md:text-4xl font-bold leading-snug md:leading-snug">
                        Юридичний супровід у справах про адміністративні
                        правопорушення, відповідальність за які передбачена ст.
                        130 КУпАП.
                    </h1>
                    {/* <h2 className=" text-white text-xl mt-7 w-1/2 m-auto">
                        Захист та представництво здійснює адвокат
                        <br />
                        <strong>Надія Василівна Бойчук</strong>
                    </h2> */}
                    <Button />
                </div>
            </div>
        </section>
    );
};

export default FirstBlock;
