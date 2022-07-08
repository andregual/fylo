import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const StyledTitle = ({ children }: Props) => {
  return (
    <h2 className='font-titles text-white font-bold text-lg md:text-desktopLg md:leading-[50px]'>
      {children}
    </h2>
  );
};

export default StyledTitle;
