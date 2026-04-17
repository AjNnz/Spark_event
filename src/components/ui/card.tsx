import Image from 'next/image';

interface CardProps {
  image: any;
  altText: string;
}

export const Card = ({ image, altText }: CardProps) => (
  <div className="flex justify-center">
    {/* Clean White Polaroid Container */}
    <div className="bg-white p-3 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <Image 
          src={image} 
          alt={altText} 
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  </div>
);