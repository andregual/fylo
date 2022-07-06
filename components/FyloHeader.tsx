import Image from 'next/image';
import React from 'react';

import logo from '../public/images/logo.svg';

const FyloHeader = () => {
  const headerLinks = ['Features', 'Team', 'Sign In'];

  return (
    <header className='flex flex-row justify-between items-center p-6'>
      <div className='relative w-[80px] h-[24px]'>
        <Image src={logo} alt='logo' layout='responsive' objectFit='contain' />
      </div>

      <ul className='flex flex-row gap-6'>
        {headerLinks.map((link) => (
          <li className='font-titles text-white' key={link}>
            {link}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default FyloHeader;
