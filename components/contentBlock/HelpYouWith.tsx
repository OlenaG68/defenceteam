import React from "react";

const HelpYouWith = () => {
    const cards = [
        {
            title: "Заголовок 1",
            icon: "icon",
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Заголовок 2",
            icon: "icon",
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Заголовок 3",
            icon: "icon",
            id: 3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];
    return (
        <section className="container mt-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-semibold">Ми вам пoтрібні якщо:</h1>
            <div className="flex gap-6 mt-24">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className=" border border-border rounded-xl px-[37px] py-12"
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
