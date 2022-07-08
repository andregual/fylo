import Image from 'next/image';
import React from 'react';

import mainImage from '../public/images/illustration-intro.png';
import productive from '../public/images/illustration-stay-productive.png';

// features images
import files from '../public/images/icon-access-anywhere.svg';
import security from '../public/images/icon-security.svg';
import colab from '../public/images/icon-collaboration.svg';
import store from '../public/images/icon-any-file.svg';
import StyledText from './Text/StyledText';
import StyledTitle from './Text/StyledTitle';

//icons
import arrowIcon from '../public/images/icon-arrow.svg';

//profile images
import profile1 from '../public/images/profile-1.jpg';
import profile2 from '../public/images/profile-2.jpg';
import profile3 from '../public/images/profile-3.jpg';
import Testimonial from './Testimonial';


const features = [
  {
    image: files,
    title: 'Access your files, anywhere',
    text: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    image: security,
    title: 'Security you can trust',
    text: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    image: colab,
    title: 'Real-time collaboration',
    text: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    image: store,
    title: 'Store any type of file',
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const testimonials = [
  {
    image: profile1,
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Satish Patel',
    job: 'Founder & CEO, Huddle',
  },
  {
    image: profile2,
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Bruce McKenzie',
    job: 'Founder & CEO, Huddle',
  },
  {
    image: profile3,
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Iva Boyd',
    job: 'Founder & CEO, Huddle',
  },
];

const FyloMain = () => {
  return (
    <main>
      <section className='p-6 flex flex-col items-center text-center gap-8 relative'>
        <Image
          priority
          quality={100}
          className='w-full h-full min-h-[300px] max-w-[720px] max-h-[520px]'
          src={mainImage}
          alt='logo'
        />
        <div className='flex flex-col gap-4 sm:w-[400px] md:w-[720px] md:gap-8'>
          <h1 className='font-titles text-white font-bold text-2xl md:text-desktopLg md:leading-[50px]'>
            All your files in one secure location, accessible anywhere.
          </h1>

          <div className='md:w-[590px] m-auto'>
            <StyledText>
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </StyledText>
          </div>
        </div>
        <button className='rounded-3xl bg-gradient-to-br from-[#63E1D9] to-[#34A0CD] h-12 font-titles font-bold text-white text-sm w-[280px]'>
          Get Started
        </button>
      </section>

      <section className='p-6 sm:p-12 md:p-24 grid grid-cols-1 sm:grid-cols-2 gap-20 items-center text-center justify-center my-20'>
        {features.map(({ image, title, text }) => (
          <div
            key={title}
            className='flex flex-col items-center md:max-w-[350px] m-auto gap-2'
          >
            <div className='w-[100px] h-[100px]'>
              <Image
                src={image}
                alt={title}
                layout='fixed'
                objectFit='contain'
              />
            </div>
            <h3 className='font-titles text-white text-xl font-bold'>
              {title}
            </h3>
            <p className='font-primary text-white text-sm leading-5'>{text}</p>
          </div>
        ))}
      </section>

      <section className='p-6 md:px-24 flex flex-col md:flex-row md:justify-center md:items-center gap-8 my-20'>
        <div className='md:w-[60%]'>
          <Image
            src={productive}
            alt={'Stay productive'}
            quality={100}
            className='w-full h-full min-h-[300px] max-w-[615px] max-h-[460px]'
          />
        </div>
        <div className='flex flex-col gap-4 md:max-w-[560px] md:w-[40%]'>
          <StyledTitle>Stay productive, wherever you are</StyledTitle>
          <StyledText>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </StyledText>
          <StyledText>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </StyledText>
          <div className='text-cyan  flex flex-row'>
            <div className='border-b-[1px] border-cyan flex py-1 items-center gap-1'>
              <p>See how Fylo works</p>

              <Image
                src={arrowIcon}
                alt={'Stay productive'}
                height={20}
                width={20}
                layout='fixed'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='p-12 flex flex-col md:flex-row justify-center items-center gap-6 my-20'>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={testimonial.name} {...testimonial} index={index} />
        ))}
      </section>

      <section className='p-5'>
        <div className='bg-introBg py-10 px-7 rounded-lg flex flex-col items-center justify-center gap-8 sm:gap-10 max-w-[860px] m-auto drop-shadow-lg'>
          <div className='flex flex-col items-center justify-center text-center gap-4'>
            <h3 className='font-titles text-white md:text-[32px] text-[18px] font-bold'>
              Get early access today
            </h3>
            <p className='font-primary text-white text-[14px] leading-5 sm:max-w-[75%]'>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6 w-full'>
            <input
              className='w-full sm:w-[65%] rounded-3xl h-12 px-7 text-[10px] font-primary text-[#C0C0C0]'
              type='email'
              placeholder='email@example.com'
            />
            <button className='w-full sm:w-[35%] rounded-3xl bg-gradient-to-br from-[#63E1D9] to-[#34A0CD] h-12 font-titles font-bold text-white text-sm'>
              Get Started For Free
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FyloMain;
