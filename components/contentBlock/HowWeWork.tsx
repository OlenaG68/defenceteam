import React from "react";
import Button from "../UI/Button";

const HowWeWork = () => {
    const steps = [
        {
            title: "Консультація",
            id: "1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Укладаємо договір",
            id: "2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Виїжджаємо в суд",
            id: "3",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Запис з нагрудної камери",
            id: "4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];
    return (
        <section className="container  py-[130px]">
            <h1 className="text-4xl font-semibold text-center">
                Як ми працюємо:
            </h1>
            {steps.map((step) => (
                <div
                    className="flex justify-center items-center py-16  border-b border-border"
                    key={step.id}
                >
                    <div className="text-[130px] text-right font-black text-blue ">
                        {step.id}
                    </div>
                    <div className="basis-3/6 ml-24">
                        <h3 className=" text-2xl font-bold">{step.title}</h3>
                        <p className=" mt-5">{step.desc}</p>
                    </div>
                </div>
            ))}
            <div className="flex items-center justify-center">
                {" "}
                <Button />
            </div>
        </section>
    );
};

export default HowWeWork;
