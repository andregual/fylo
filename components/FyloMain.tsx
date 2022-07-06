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

import quotes from '../public/images/bg-quotes.png';

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
      <section className='p-6'>
        <div className='max-w-[720px] h-[225px]'>
          <Image
            src={mainImage}
            alt='logo'
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <h1 className='font-titles text-white font-bold text-2xl'>
          All your files in one secure location, accessible anywhere.
        </h1>
        <StyledText>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </StyledText>
        <button>Get Started</button>
      </section>

      <section className='p-6'>
        {features.map(({ image, title, text }) => (
          <div key={title}>
            <div className='w-[100px] h-[100px]'>
              <Image
                src={image}
                alt={title}
                layout='responsive'
                objectFit='contain'
              />
            </div>
            <StyledTitle>{title}</StyledTitle>
            <StyledText>{text}</StyledText>
          </div>
        ))}
      </section>

      <section className='p-6'>
        <div>
          <Image
            src={productive}
            alt={'Stay productive'}
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <StyledTitle>Stay productive, wherever you are</StyledTitle>
        <StyledText>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </StyledText>
        <StyledText>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </StyledText>
        <div className='text-cyan border-b-[1] border-cyan'>
          See how Fylo works
          <Image
            src={arrowIcon}
            alt={'Stay productive'}
            height={12}
            width={12}
            layout='fixed'
            objectFit='contain'
          />
        </div>
      </section>

      <section className='p-12 flex flex-col justify-center items-center gap-6 relative'>
        <div className='absolute top-[-20px] left-0 p-12'>
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
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </section>

      <section className='p-5'>
        <div className='bg-introBg py-10 px-7 rounded flex flex-col items-center justify-center gap-8'>
          <div className='flex flex-col items-center justify-center text-center gap-4'>
            <StyledTitle>Get early access today</StyledTitle>
            <StyledText>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </StyledText>
          </div>
          <div className='flex flex-col items-center justify-center gap-6 w-full'>
            <input
              className='w-full rounded-3xl h-12 px-7 text-[10px] font-primary text-[#C0C0C0]'
              type='email'
              placeholder='email@example.com'
            />
            <button className='w-full rounded-3xl bg-gradient-to-br from-[#63E1D9] to-[#34A0CD] h-12 font-titles font-bold text-white text-sm'>
              Get Started For Free
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FyloMain;
