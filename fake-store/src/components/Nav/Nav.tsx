interface NavProps {
  children?: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ children }) => {
  return <div className='flex items-center'>{children}</div>;
};

export default Nav;
