'use client';
import Image from 'next/image';
import Link from 'next/link';

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  buttonLink: string;
}

export default function FirstSection({
  title,
  subtitle,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
  buttonLink,
}: SectionProps) {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-32 px-6 lg:px-16">
      {/* Texto à esquerda */}
      <div className="flex flex-col lg:w-1/2 space-y-6 lg:pr-10 gap-4">
        <h1 className="font-bold text-orange-950 text-4xl md:text-6xl lg:text-8xl">
          {title}
        </h1>
        <h2 className="text-2xl font-semibold">{subtitle}</h2>
        <p className="text-lg">{description}</p>
        <Link href={buttonLink} className="text-center bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 ease-in-out w-2/3">
          {buttonText}
        </Link>
      </div>

      {/* Imagem à direita */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <Image src={imageUrl} alt={imageAlt} width={imageWidth} height={imageHeight} />
      </div>
    </section>
  );
}
