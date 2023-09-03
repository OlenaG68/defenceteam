import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className=" bg-slate-900 py-[50px]">
            <div className="container px-3 md:px-0">
                <h3 className="text-white text-2xl">Контакти</h3>
                <div className="flex flex-col md:flex-row gap-6">
                    {" "}
                    <div className=" basis-2/5 mt-8">
                        <div className="text-white mt-4">
                            <Link href={`tel:+380999999933`}>
                                +380999999933
                            </Link>
                        </div>
                        <div className="text-white mt-4">
                            <Link href={`mail:mail.com`}>mail@gmail.com</Link>
                        </div>
                        <div className="text-white mt-4">
                            <Link href={`https://www.facebook.com/`}>
                                facebook
                            </Link>
                        </div>
                    </div>
                    <div className="basis-2/5 mt-8">
                        <div className="  text-white">Ми у месенджерах:</div>
                        <div className=" flex gap-4 mt-8 ">
                            <Link
                                className="text-white"
                                href={`tel:+380999999933`}
                            >
                                <Image
                                    src="/images/icons/viber.png"
                                    width={32}
                                    height={32}
                                    alt="viber"
                                />
                            </Link>
                            <Link className="text-white" href={`mail:mail.com`}>
                                <Image
                                    src="/images/icons/whatsapp.png"
                                    width={32}
                                    height={32}
                                    alt="whatsapp"
                                />
                            </Link>
                            <Link
                                className="text-white"
                                href={`https://www.facebook.com/`}
                            >
                                <Image
                                    src="/images/icons/telegram.png"
                                    width={32}
                                    height={32}
                                    alt="telegram"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-lg  text-white italic">
                            &quot;В юридичних питаннях слід звертатися не до
                            здорового глузду, а до юристів.&quot;
                        </h1>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
