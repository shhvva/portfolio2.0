import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <div className="backdrop-invert-0 bg-white/30 size-92 hover:scale-90 transition duration-300 ease-in-out">
            <a href={link} target='_blank'>
                <div className="">
                    {imageUrl && <Image
                        src={imageUrl}
                        alt={title}
                        height={400}
                        width={500}
                    />
                    }
                    <h2 className='text-lg font-bold'>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>


    );
};

export default Card;
