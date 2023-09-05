import Image from "next/image";
import React from "react";

const AboutUs = () => {
    return (
        <section className="container md:flex gap-16 items-center  my-40">
            <div className=" basis-1/2">
                <Image
                    src="/images/team.jpg"
                    width={620}
                    height={237}
                    alt="team"
                />
            </div>
            <div className="mt-8 md:mt-0 basis-1/2">
                <h1 className="text-4xl text-center md:text-left font-semibold">
                    Про мене
                </h1>
                <p className="mt-8 px-3 md:px-0">
                    Давайте знайомитись. Надія Василівна Бойчук. Адвокат.
                    Здійснюю захист та представництво у кримінальних
                    провадженнях, справах про адміністративні правопорушення та
                    цивільних справах. Більше 10 років працювала в судах першої
                    та апеляційної інстанцій на посаді помічника судді.
                    Свідоцтво про право на заняття адвокатською діяльністю №
                    001039, видане Радою адвокатів Івано-Франківської області на
                    підставі рішення № 1/11 від 30 грудня 2015 року.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
