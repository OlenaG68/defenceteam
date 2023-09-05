import React from "react";

const HelpYouWith = () => {
    const cards = [
        {
            title: "На Вас склали протокол за керування транспортним засобом в стані алкогольного чи наркотичного сп’яніння або за відмову від проходження огляду?",
            icon: "icon",
            id: 1,
        },
        {
            title: "В Вас є питання щодо законності дій поліцейських?",
            icon: "icon",
            id: 2,
        },
        {
            title: "Сумніваєтесь в тому, що огляд на стан сп’яніння проведений з дотриманням встановленого законом порядку?",
            icon: "icon",
            id: 3,
        },
        {
            title: "Вам потрібна надійна і кваліфікована юридична допомога від людини на яку ви можете покластися?",
            icon: "icon",
            id: 4,
        },
    ];
    return (
        <section className="container my-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-semibold">Я вам пoтрібна якщо:</h1>
            <div className="grid-cols-1 md:grid-cols-2 grid gap-2 lg:gap-6 mt-24 px-3 md:px-0">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className=" border border-border rounded-xl px-[37px] py-12 shadow-xl"
                    >
                        <div>{card.icon}</div>
                        <h3 className="font-semibold text-2xl mt-7">
                            {card.title}
                        </h3>
                        {/* <p className=" mt-7 leading-7 text-gray text-lg">
                            {card.desc}
                        </p> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HelpYouWith;
