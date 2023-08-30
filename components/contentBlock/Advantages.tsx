import React from "react";

const Advantages = () => {
    const advantages = [
        {
            title: "Перевага 1",
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Перевага 2",
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Перевага 3",
            id: 3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Перевага 4",
            id: 4,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Перевага 5",
            id: 5,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Перевага 6",
            id: 6,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
    ];
    return (
        <section className=" bg-blue py-[100px]">
            <div className="container text-center ">
                <h1 className="text-4xl font-semibold  text-white">
                    Чому обирають саме нас?
                </h1>
                <div className="flex gap-2 flex-wrap justify-between">
                    {advantages.map((advantage) => (
                        <div className=" basis-1/4 mt-20" key={advantage.id}>
                            <h2 className="font-semibold text-2xl mt-7 text-white">
                                {advantage.title}
                            </h2>
                            <p className="text-white  leading-7 mt-7">
                                {advantage.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
