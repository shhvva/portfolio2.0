import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <nav className="flex items-center justify-between p-6 sticky ">
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
            src="/profileface.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            priority={true}
          />
          <Image
            src="/profileface-mobile.jpg"
            width={560}
            height={620}
            className="block md:hidden  "
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
      <div>
        {/* projects carousel */}
      </div>
    </main >

  );
}
