import Image from 'next/image';

import logo from '../public/images/logo.svg';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const FyloFooter = () => {
  const firstLinks = ['About Us', 'Jobs', 'Press', 'Blog'];
  const secondLinks = ['Contact Us', 'Terms', 'Privacy'];

  const details = [
    {
      id: 'location',
      image: <FaMapMarkerAlt size={14} color='white' />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 'phone',
      image: <FaPhoneAlt size={14} color='white' />,
      text: '+1-543-123-4567',
    },
    {
      id: 'email',
      image: <FaEnvelope size={14} color='white' />,
      text: 'example@fylo.com',
    },
  ];

  return (
    <footer className='bg-footerBg p-7 md:p-24 flex flex-col gap-[35px]'>
      <div className='relative w-[80px] h-[24px]'>
        <Image src={logo} alt='logo' layout='responsive' objectFit='contain' />
      </div>

      <div className='flex flex-col md:flex-row gap-14 lg:gap-10 lg:justify-between'>
        <div className='flex flex-col lg:grid lg:grid-cols-[60%_auto] md:grid-rows-2 gap-10 max-w-[55%]'>
          {details.map((detail, index) => (
            <div
              key={detail.id}
              className={`flex flex-row gap-7 ${
                index === 0 && 'lg:row-span-2'
              } lg:gap-2`}
            >
              <div className='pt-2'>{detail.image}</div>
              <div>
                <h4 className='text-white text-[16px] font-primary'>
                  {detail.text}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col md:flex-row gap-12'>
          <ul className='flex flex-col gap-4'>
            {firstLinks.map((link) => (
              <li className='text-white font-primary text-base' key={link}>
                {link}
              </li>
            ))}
          </ul>

          <ul className='flex flex-col gap-4'>
            {secondLinks.map((link) => (
              <li key={link} className='text-white font-primary text-base'>
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-row gap-4 items-center justify-center'>
          <FaFacebook color='white' cursor='pointer' size={27} />
          <FaTwitter color='white' cursor='pointer' size={27} />
          <FaInstagram color='white' cursor='pointer' size={27} />
        </div>
      </div>
    </footer>
  );
};

export default FyloFooter;
