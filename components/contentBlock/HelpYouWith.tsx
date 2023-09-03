import React from "react";

const HelpYouWith = () => {
    const cards = [
        {
            title: "Щодо Вас складено протокол за ст. 130 КУпАП",
            icon: "icon",
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "Ви не згодні з результатами огляду на стан сп’яніння",
            icon: "icon",
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "Ви хочете оскаржити постанову",
            icon: "icon",
            id: 3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
    return (
        <section className="container my-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-semibold">Ми вам пoтрібні якщо:</h1>
            <div className="flex flex-col md:flex-row gap-2 lg:gap-6 mt-24 px-3 md:px-0">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className=" border border-border rounded-xl px-[37px] py-12 shadow-xl "
                    >
                        <div>{card.icon}</div>
                        <h3 className="font-semibold text-2xl mt-7">
                            {card.title}
                        </h3>
                        <p className=" mt-7 leading-7 text-gray text-lg">
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HelpYouWith;
