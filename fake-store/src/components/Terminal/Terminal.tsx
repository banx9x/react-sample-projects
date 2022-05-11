import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { Container, Main } from 'components';

export interface TerminalProps {
  code: number;
  text: string;
  redirect?: {
    to: string;
    label: string;
  };
}

const Terminal: React.FC<TerminalProps> = ({
  code,
  text,
  redirect = { to: '/', label: 'Quay về trang chủ' },
}) => {
  return (
    <Main>
      <Container>
        <div className='max-w-lg mx-auto'>
          <div className='flex rounded-tl-xl rounded-tr-xl space-x-1 p-3 bg-neutral-700'>
            <div className='w-3 h-3 rounded-full bg-red-500'></div>
            <div className='w-3 h-3 rounded-full bg-orange-500'></div>
            <div className='w-3 h-3 rounded-full bg-amber-500'></div>
          </div>
          <div className='bg-neutral-800 min-h-[300px] relative flex items-center justify-center flex-col rounded-bl-xl rounded-br-xl'>
            <div className='font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-pink-500 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-0 opacity-50'>
              {code}
            </div>
            <div className='relative font-bold text-white text-4xl mb-4 mt-16'>
              {text}
            </div>
            <Link
              className='bg-amber-500 hover:bg-amber-400 py-2 px-4 rounded-md text-white flex items-center relative'
              to={redirect.to}>
              <BiArrowBack className='mr-2' />
              {redirect.label}
            </Link>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Terminal;
