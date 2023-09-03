"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./contentBlock.scss";
import Image from "next/image";
import Button from "../UI/Button";

const Feedback = () => {
    const feedbacks = [
        {
            image: "/images/feedback/feedback2.png",
            id: 1,
        },
        {
            image: "/images/feedback/feedback1.png",
            id: 2,
        },

        {
            image: "/images/feedback/feedback3.png",
            id: 3,
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    arrows: false, // Встановіть стрілки в false, щоб вони зникали
                },
            },
        ],
    };
    return (
        <section className="container  py-[130px]">
            <h1 className="text-4xl font-semibold text-center ">
                Відгуки від клієнтів
            </h1>
            <div className="mt-20 h-fit">
                <Slider {...settings}>
                    {feedbacks.map((feedback) => (
                        <Image
                            key={feedback.id}
                            src={feedback.image}
                            width={1200}
                            height={100}
                            alt="feedback"
                            className=" h-auto w-full   overflow-hidden rounded-md object-containe object-center "
                        />
                    ))}
                </Slider>
            </div>
            <div className="flex items-center justify-center">
                {" "}
                <Button />
            </div>
        </section>
    );
};

export default Feedback;
