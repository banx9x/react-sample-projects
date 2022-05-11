import React from 'react';

interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='md:container px-4'>{children}</div>;
};

export default Container;
