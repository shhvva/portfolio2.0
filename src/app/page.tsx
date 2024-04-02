import Image from "next/image";
import Card from "../components/cards";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex items-center justify-between p-6 border-b-4 border-indigo-500">
        <div className="mr-6">
          <span className="font-semibold text-xl tracking-tight">SHVA</span>
        </div>
      </nav>
      <div className="mt-4 flex grow flex-col gap-4 border-b-4 border-indigo-500 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-2 py-5 md:w-2/5 md:px-20">
          <p
            className={`text-xl text-white md:text-3xl md:leading-normal`}
          >
            Heyyy,<br></br>I am <strong>Shiva Shankar</strong>, a developer with a fervor for continuous learning in the ever-evolving realm of Computer Science.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/profileface.png"
            width={600}
            height={360}
            className="transition duration-300 ease-in-out hover:scale-105 hover:transform-gpu hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            priority={true}
          />
        </div>
      </div>
      <div className="flex grow p-5 justify-center place-content-center">
        <div>
          <p className="text-3xl font-semibold">Projects</p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-6 justify-around items-center p-5 border-b-4 border-indigo-500">
        <Card
          title="Localnfo"
          description="Get the information about your locality with a single search"
          imageUrl="/Localnfo.png"
          link="https://github.com/shhvva/Localnfo"
        />
        <Card
          title="YTWatchParty"
          description="Watch YT videos with your friends all the controls are synchronized"
          imageUrl="/YTWatchparty.png"
          link="https://github.com/shhvva/YTWatchparty"
        />
        <Card
          title="Foodesc"
          description="Get different variety of food recipies with a single search"
          imageUrl="/Foodesc.png"
          link="https://github.com/shhvva/FoodDesc"
        />
        <Card
          title="BMI Calculator"
          description="BMI calculator can calculate your BMI between any units"
          imageUrl="/BMI.png"
          link="https://github.com/shhvva/BMI"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-6 justify-between items-center p-6">
        <Footer
          title="Github"
          link="https://github.com/shhvva"
        />
        <Footer
          title="Mail"
          link="mailto:mendeshivashankar@gmail.com"
        />
        <Footer
          title="Linkedin"
          link="https://www.linkedin.com/in/shiva-shankar-mende-5bb1a1291/"
        />
      </div>
    </main >

  );
}
