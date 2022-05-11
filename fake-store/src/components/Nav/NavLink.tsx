import classNames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface CustomNavLinkProps extends NavLinkProps {}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  children,
  ...props
}) => {
  const navlinkClasses = ({ isActive }: { isActive: boolean }) =>
    classNames('font-semibold text-rose-500 py-2', {
      'text-opacity-50 hover:text-rose-500': !isActive,
    });

  return (
    <NavLink className={navlinkClasses} {...props}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
