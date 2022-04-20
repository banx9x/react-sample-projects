import React, { useCallback, useMemo, useRef, useState } from 'react';
import 'components/Progress/Progress.css';
import classNames from 'classnames';

export interface ProgressProps {
  progress: number;
  width?: number;
  onProgressChange?: (percent: number) => void;
  onStartSlide?: () => void;
  onEndSlide?: () => void;
}

const Progress: React.FC<ProgressProps> = ({
  progress,
  width = 250,
  onProgressChange,
  onStartSlide,
  onEndSlide,
}) => {
  const [sliding, setSliding] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const calcPercent = (e: React.MouseEvent | MouseEvent): number => {
    if (!progressRef.current) return 0;

    const progressElement = progressRef.current;
    const progressRect = progressElement.getBoundingClientRect();

    const value = e.clientX - progressRect.x;
    const percent = value / progressElement.clientWidth;

    return percent <= 0 ? 0 : percent >= 1 ? 1 : percent;
  };

  const handleProgressChange = useCallback(
    (e: React.MouseEvent) => {
      if (!progressRef.current) return;
      const percent = calcPercent(e);
      onProgressChange && onProgressChange(percent);
    },
    [progressRef, onProgressChange]
  );

  const move = useMemo(
    () => (e: React.MouseEvent | MouseEvent) => {
      e.stopPropagation();
      if (!progressRef.current) return;

      const percent = calcPercent(e);
      onProgressChange && onProgressChange(percent);
    },
    [progressRef, onProgressChange]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();

      if (!sliding) {
        window.addEventListener('mousemove', move, false);
        window.addEventListener(
          'mouseup',
          () => {
            onEndSlide && onEndSlide();
            setSliding(false);
            window.removeEventListener('mousemove', move, false);
          },
          { once: true }
        );
      }

      setSliding(true);
      onStartSlide && onStartSlide();
    },
    [onEndSlide, onProgressChange, move]
  );

  const progressClasses = classNames({
    progress: true,
    sliding: sliding,
  });

  return (
    <div
      className={progressClasses}
      onClick={handleProgressChange}
      style={{
        backgroundImage: `linear-gradient(to right, #ffffff 0% ${progress}%, hsla(0, 0%, 100%, 0.3) ${progress}% 100%)`,
        width,
      }}
      ref={progressRef}
    >
      <div
        className='stick'
        style={{ left: `calc(${progress}% - 8px)` }}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

export default Progress;
