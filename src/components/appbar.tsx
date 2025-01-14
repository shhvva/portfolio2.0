import Navbar from "./navbar";
import Footerbar from "./footerbar";
import Content from "./content";
import '@/app/globals.css';

export default function Appbar() {
  return (
        <main className="flex flex-col min-w-full">
          <Navbar />
          <Content />
          <Footerbar />
        </main>
  );
}
