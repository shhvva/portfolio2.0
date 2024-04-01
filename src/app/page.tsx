import Image from "next/image";
import Card from "../components/cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <nav className="flex items-center justify-between p-6 ">
        <div className="mr-6">
          <span className="font-semibold text-xl tracking-tight">SHVA</span>
        </div>
      </nav>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`text-xl text-white md:text-3xl md:leading-normal`}
          >
            Heyyy,<br></br>I am <strong>Shiva Shankar</strong>, a developer with a fervor for continuous learning in the ever-evolving realm of Computer Science.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/profileface.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            priority={true}
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap shrink gap-1 justify-around justify-items-center content-center">
        {/* projects carousel */}
        <Card
          title="Localnfo"
          description="Get the information about your locality with a single search"
          imageUrl="/Localnfo.png"
          link="https://github.com/shhvva/Localnfo"
        />
        <Card
          title="YTWatchParty"
          description="Watch Youtube Videos with your friends all the controls are synchronized"
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
          title="BMI"
          description="BMI calculator can calculate your BMI between any units"
          imageUrl="/BMI.png"
          link="https://github.com/shhvva/BMI"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-6 justify-between items-center">
        <div>
          <a href="https://github.com/shhvva" target='_blank'>
            <span className="font-semibold text-xl tracking-tight">
              Github
            </span>
          </a>
        </div>
        <div>
          <a href="mailto:mendeshivashankar@gmail.com" target='_blank'>
            <span className="font-semibold text-xl tracking-tight">
              Mail
            </span>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/shiva-shankar-mende-5bb1a1291/" target='_blank'>
            <span className="font-semibold text-xl tracking-tight">
              Linkedin
            </span>
          </a>
        </div>
      </div>
    </main >

  );
}
