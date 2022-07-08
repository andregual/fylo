import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const StyledText = ({ children }: Props) => {
  return (
    <h3 className='font-primary text-white text-sm md:text-desktopSm md:leading-8 leading-5'>
      {children}
    </h3>
  );
};

export default StyledText;
