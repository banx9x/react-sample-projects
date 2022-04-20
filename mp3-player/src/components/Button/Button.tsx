import React from 'react';
import classNames from 'classnames';
import 'components/Button/Button.css';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  large?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ large, active, disabled, className, children, ...props }, ref) => {
    const classes = classNames([
      className,
      {
        'btn': true,
        'btn-large': large,
        'is-active': active,
      },
    ]);

    return (
      <button ref={ref} {...props} disabled={disabled} className={classes}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
