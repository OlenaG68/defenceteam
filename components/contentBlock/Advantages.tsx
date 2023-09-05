"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
const Advantages = () => {
    const advantages = [
        {
            title: "Унікальний досвід роботи саме з такою категорією справ",
            id: 1,
            icon: "icon",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Індивідуальний підхід до вирішення Вашого питання",
            id: 2,
            icon: "icon",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Максимальна самовіддача в роботі над досягненням бажаного результату",
            id: 3,
            icon: "icon",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
    ];
    return (
        <section className=" bg-blue py-[100px]">
            <div className="container text-center px-3 md:px-0 ">
                <h1 className="text-4xl font-semibold text-white ">
                    Чому обирають саме мене?
                </h1>
                <div className="flex flex-col md:flex-row gap-2 flex-wrap justify-between">
                    {advantages.map((advantage) => (
                        <div className=" basis-1/4 mt-20" key={advantage.id}>
                            <div className="flex items-center justify-center">
                                <div className="text-white">
                                    {advantage.icon}
                                </div>
                            </div>
                            <h2 className="font-semibold text-2xl mt-7 text-white">
                                {advantage.title}
                            </h2>
                            {/* <p className="text-white  leading-7 mt-7">
                                {advantage.desc}
                            </p> */}
                        </div>
                    ))}
                </div>
                {/* <div className=" mt-40 flex flex-col md:flex-row gap-20 items-center justify-around">
                    <div className="">
                        <CountUp
                            start={80}
                            end={99}
                            duration={5}
                            suffix="%"
                            delay={4}
                            className="text-white text-7xl font-bold"
                        />
                        <div className="text-white mt-8 text-2xl font-semibold">
                            Задоволених клієнтів
                        </div>
                    </div>
                    <div>
                        <CountUp
                            start={20}
                            end={30}
                            duration={5}
                            suffix="+"
                            delay={4}
                            className="text-white text-7xl font-bold"
                        />
                        <div className="text-white mt-8 text-2xl font-semibold">
                            Успішно виграних справ
                        </div>
                    </div>
                    <div>
                        <CountUp
                            start={1200}
                            end={1500}
                            duration={3}
                            prefix="+"
                            delay={4}
                            className="text-white text-7xl font-bold"
                        />
                        <div className="text-white mt-8 text-2xl font-semibold">
                            Наданих консультацій
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Advantages;
