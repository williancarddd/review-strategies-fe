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

export default function ImpactSection({
  title,
  subtitle,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  imageWidth = 700,
  imageHeight = 700,
  buttonLink,
}: SectionProps) {
  return (
    <section className="py-16 px-6 lg:px-8 bg-Deluge">
      {/* Texto à esquerda */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold p-4 font-Roboto text-white">
          {title}
        </h1>
        <h2 className=" font-semirobot text-white">{subtitle}</h2>
      </div>

      {/* Imagem à direita */}
      <div className="bg-wh w-full flex justify-center items-center rounded-lg ">
        <Image className='shadow-2xl rounded-md' src={imageUrl} alt={imageAlt} width={imageWidth} height={imageHeight} />
      </div>
    </section>
  );
}
