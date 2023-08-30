import AboutUs from "@/components/contentBlock/AboutUs";
import AdsBlock from "@/components/contentBlock/AdsBlock";
import Advantages from "@/components/contentBlock/Advantages";
import FirstBlock from "@/components/contentBlock/FirstBlock";
import HelpYouWith from "@/components/contentBlock/HelpYouWith";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <FirstBlock />
            <HelpYouWith />
            <AboutUs />
            <AdsBlock />
            <Advantages />
        </main>
    );
}
