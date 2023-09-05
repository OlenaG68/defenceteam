import React from "react";
import Button from "../UI/Button";

const AdsBlock = () => {
    return (
        <section className="bg-ads-block bg-cover bg-center  w-full ">
            <div className="bg-black bg-opacity-70 w-full h-full flex items-center justify-center py-[100px] md:py-[160px]">
                {" "}
                <div className="container text-center">
                    <h1 className="text-xl md:text-3xl font-semibold  text-white">
                        {" "}
                        Переконана, що стосунки з клієнтом повинні базуватися на
                        основі взаємної поваги та довіри.
                    </h1>
                    <p className="text-white text-base md:text-lg mt-7 px-3 md:px-0">
                        Тут Ви не побачите статистики про кількість «виграних»
                        справ, адже для мене надання правової допомоги клієнтам
                        не битва і не гра, а ефективна комунікація, до якої
                        підходжу розумно, помірковано, без пристрастей. Також не
                        можу гарантувати клієнтам досягнення певного результату,
                        проте я гарантую повну відданість своїй справі. З свого
                        боку, я зроблю все можливе в межах знань та професійних
                        навичок, щоб захистити, відстояти чи відновити порушені
                        права, свободи та інтереси.
                    </p>
                    <Button />
                </div>
            </div>
        </section>
    );
};

export default AdsBlock;
