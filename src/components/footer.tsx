interface FooterProps {
  title: string;
  link: string;
}

const Footer: React.FC<FooterProps> = ({ title, link }) => {
  return (
    <div>
      <a href={link} target='_blank'>
        <span className="font-semibold text-xl tracking-tight">
          {title}
        </span>
      </a>
    </div>
  );
};

export default Footer;
