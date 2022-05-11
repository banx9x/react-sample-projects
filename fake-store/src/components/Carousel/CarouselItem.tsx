import React, { ReactNode } from 'react';

interface CarouselItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default CarouselItem;
