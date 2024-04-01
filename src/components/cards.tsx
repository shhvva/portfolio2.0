import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <a href={link} target='_blank'>
            <div className="card">
                {imageUrl && <Image src={imageUrl} alt={title} height={400} width={500} />}
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </a>
    );
};

export default Card;
