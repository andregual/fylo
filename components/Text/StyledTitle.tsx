import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const StyledTitle = ({ children }: Props) => {
  return (
    <div className='font-titles text-white font-bold text-lg'>{children}</div>
  );
};

export default StyledTitle;
