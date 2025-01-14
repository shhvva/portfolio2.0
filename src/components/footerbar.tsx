import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";
import { Cover } from "./ui/cover";

export default function Footerbar() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/5 text-center md:text-left mb-8 md:mb-0">
            <Cover>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Contact me
              </h2>
            </Cover>
            <p className="text-lg text-gray-300">
              Let's connect and create something amazing together!
            </p>
          </div>
          <div className="w-full md:w-3/5">
            <ul className="space-y-6 ">
              <ContactItem
                icon={<Mail className="w-6 h-6" />}
                title="Mail"
                link="mailto:mendeshivashankar@gmail.com"
              />
              <ContactItem
                icon={<Linkedin className="w-6 h-6" />}
                title="LinkedIn"
                link="https://www.linkedin.com/in/shiva-shankar-mende-5bb1a1291/"
              />
              <ContactItem
                icon={<Github className="w-6 h-6" />}
                title="Github"
                link="https://github.com/shhvva"
              />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  link: string;
}

function ContactItem({ icon, title, link }: ContactItemProps) {
  return (
    <li>
      <Link
        href={link}
        target="_blank"
        className="flex items-center space-x-4 pl-96 text-gray-300 hover:text-white transition-colors duration-300"
      >
        {icon}
        <span className="text-xl">{title}</span>
      </Link>
    </li>
  );
}
