import quotes from '../public/images/bg-quotes.png';
import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  text: string;
  name: string;
  job: string;
  index: number;
}

const Testimonial = ({ index, image, text, name, job }: Props) => {
  return (
    <div className='flex flex-col px-6 py-5 bg-testimonialsBg rounded gap-4 max-w-[360px] relative'>
      {index === 0 && (
        <div className='absolute top-[-20px] left-0'>
          <Image
            src={quotes}
            alt={'Stay productive'}
            height={20}
            width={20}
            layout='fixed'
            objectFit='contain'
            quality={100}
          ></Image>
        </div>
      )}
      <p className='font-primary text-white text-[10px] md:text-sm'>{text}</p>
      <div className='flex flex-row gap-2'>
        <Image
          src={image}
          alt={name}
          layout='fixed'
          objectFit='contain'
          height={24}
          width={24}
          className='rounded-full'
        />

        <div className='flex flex-col gap-1'>
          <h6 className='text-white font-primary font-bold text-[10px] leading-1'>
            {name}
          </h6>
          <p className='text-white font-primary text-[8px]'>{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
