import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  text: string;
  name: string;
  job: string;
}

const Testimonial = ({ image, text, name, job }: Props) => {
  return (
    <div className='flex flex-col px-6 py-5 bg-testimonialsBg rounded gap-4'>
      <p className='font-primary text-white text-[10px]'>{text}</p>

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
          <h6 className='text-white font-primary font-bold text-[10px]'>
            {name}
          </h6>
          <p className='text-white font-primary text-[8px]'>{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
