import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

const Logo = ({}) => {
  return (
    <Link to='/'>
      <h1 className='flex items-center text-xl font-semibold text-rose-500'>
        <img src={logo} alt='FakèStoré' className='w-10 mr-2' />
        FakèStoré
      </h1>
    </Link>
  );
};

export default Logo;
