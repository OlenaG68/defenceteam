import AboutUs from "@/components/contentBlock/AboutUs";
import AdsBlock from "@/components/contentBlock/AdsBlock";
import Advantages from "@/components/contentBlock/Advantages";
import Feedback from "@/components/contentBlock/Feedback";
import FirstBlock from "@/components/contentBlock/FirstBlock";
import HelpYouWith from "@/components/contentBlock/HelpYouWith";
import HowWeWork from "@/components/contentBlock/HowWeWork";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <FirstBlock />
            <HelpYouWith />
            <AboutUs />
            <AdsBlock />
            <Advantages />
            <HowWeWork />
            <Feedback />
        </main>
    );
}
