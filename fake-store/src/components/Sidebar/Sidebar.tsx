import classNames from 'classnames';
import React, { useEffect, useState, useRef } from 'react';

type Screen = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface SidebarProps {
  show?: boolean;
  duration?: number;
  position?: 'left' | 'right';
  screen?: Screen[];
  onClose: () => void;
  children: React.ReactElement | readonly React.ReactElement[];
}

const Sidebar: React.FC<SidebarProps> = ({
  show = false,
  duration = 300,
  position = 'left',
  screen = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  onClose,
  children,
}) => {
  const [shouldShow, setShouldShow] = useState(show);
  const [isShowing, setIsShowing] = useState(show);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleAnimationEnd = () => {
    if (!show) setShouldShow(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!contentRef.current!.contains(e.target as Element)) onClose();
  };

  useEffect(() => {
    if (shouldShow) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  });

  useEffect(() => {
    if (shouldShow) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (show) {
      setShouldShow(true);
      setIsShowing(true);
    } else {
      setIsShowing(false);
      timeout = setTimeout(() => setShouldShow(false), duration);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  });

  const overlayClasses = classNames(
    'fixed top-16 bottom-0 left-0 right-0',
    isShowing ? 'animate-go-dark' : 'animate-go-light',
    {
      'xs:hidden': !screen.includes('xs'),
      'sm:hidden': !screen.includes('sm'),
      'md:hidden': !screen.includes('md'),
      'lg:hidden': !screen.includes('lg'),
      'xl:hidden': !screen.includes('xl'),
      '2xl:hidden': !screen.includes('2xl'),
    }
  );

  const contentClasses = classNames(
    'min-w-[240px] w-[90%] max-w-[320px] h-full p-4 overflow-y-auto bg-white fixed top-16 bottom-0 shadow-lg shadown-slate-500',
    {
      'left-0': position == 'left',
      'right-0': position == 'right',
      'animate-slide-in-left': position == 'left' && isShowing,
      'animate-slide-out-left': position == 'left' && !isShowing,
      'animate-slide-in-right': position == 'right' && isShowing,
      'animate-slide-out-right': position == 'right' && !isShowing,
    }
  );

  if (shouldShow) {
    return (
      <div
        className={overlayClasses}
        style={{ animationDuration: `${duration}ms` }}>
        <div
          className={contentClasses}
          style={{ animationDuration: `${duration}ms` }}
          ref={contentRef}
          onAnimationEnd={handleAnimationEnd}>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Sidebar;
