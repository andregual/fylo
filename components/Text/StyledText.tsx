import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const StyledText = ({ children }: Props) => {
  return <h3 className='font-primary text-white text-sm'>{children}</h3>;
};

export default StyledText;
