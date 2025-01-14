import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";

const words = [
  "Web Developer",
  "AI ML Engineer",
  "Software Developer",
  "Cyber Security Enthusiast",
];

export default function Intro() {
  return (
    <div className="flex grow flex-col md:flex-row justify-evenly ">
      <div className="flex flex-col justify-center rounded-lg md:w-2/5 md:px-20 ">
        <h1 className="text-xl md:text-3xl md:leading-normal z-20">
          Heyyy,
          <br />
          I am Shiva Shankar,
          <br />
          a <FlipWords words={words} />
          <br />
          with a fervour for continuous learning in the ever-evolving realm of
          Computer Science
        </h1>
      </div>
      <div className="flex items-center justify-center p-6 md:w-2/5 md:px-28 md:py-12">
        <div className="z-20">
          <Image
            src="/profileface.png"
            width={600}
            height={360}
            className="transition duration-300 ease-in-out hover:scale-105 hover:transform-gpu hidden md:block rounded-lg"
            alt="Screenshots of the dashboard project showing desktop version"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
