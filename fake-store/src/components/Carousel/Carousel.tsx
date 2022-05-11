import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface CarouselProps {
  children: ReactElement | readonly ReactElement[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  duration?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = true,
  autoplaySpeed = 3000,
  duration = 400,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = useCallback((newIndex: number) => {
    const count = React.Children.count(children);

    if (newIndex < 0) newIndex = count - 1;
    else if (newIndex >= count) newIndex = 0;

    setActiveIndex(newIndex);
  }, []);

  useEffect(() => {
    if (!autoplay || paused) return;

    const interval = setInterval(
      () => updateIndex(activeIndex + 1),
      autoplaySpeed
    );

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  return (
    <div
      className='overflow-hidden relative'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div
        className='whitespace-nowrap transition-transform flex flex-nowrap items-stretch'
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transitionDuration: `${duration}ms`,
        }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            className: 'w-full block flex-shrink-0',
          });
        })}
      </div>

      <div className='absolute top-2/4 left-0 right-0 flex justify-between -translate-y-2/4'>
        <button
          className='bg-rose-500 bg-opacity-50 py-3 px-2'
          onClick={() => updateIndex(activeIndex - 1)}>
          <IoChevronBackOutline />
        </button>

        <button
          className='bg-rose-500 bg-opacity-50 py-3 px-2'
          onClick={() => updateIndex(activeIndex + 1)}>
          <IoChevronForwardOutline />
        </button>
      </div>

      <div className='absolute bottom-3 left-0 right-0 flex justify-center space-x-1'>
        {React.Children.map(children, (child, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              onClick={() => updateIndex(index)}
              className={
                isActive
                  ? 'w-8 h-2.5 outline-none bg-rose-500 rounded-full bg-opacity-80 transition-[width]'
                  : 'w-2.5 h-2.5 outline-none bg-rose-500 rounded-full bg-opacity-50 transition-[width]'
              }></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
