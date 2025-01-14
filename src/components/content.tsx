import Intro from "./intro";
import Projects from "./projects";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Content() {
  return (
    <>
      <BackgroundLines>
        <Intro />
      </BackgroundLines>
      <Projects />
    </>
  );
}
