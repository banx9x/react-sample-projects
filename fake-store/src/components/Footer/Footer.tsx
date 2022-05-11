import { Logo } from 'components';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import avatar from 'assets/images/avatar.jpeg';

const Footer = () => {
  return (
    <footer className='bg-slate-50 py-4'>
      <div className='md:container px-4'>
        <div className='grid grid-cols-2 lg:grid-cols-4 items-baseline gap-4'>
          <div className='col-span-2'>
            <div className='mb-2 flex'>
              <Logo />
            </div>

            <div className='text-md'>
              A sample project used in the ReactJS course by{' '}
              <strong className='inline-block'>Ba Nguyen</strong>
            </div>
          </div>

          <div>
            <div className='font-semibold mb-3'>Contact</div>

            <ul className='space-y-1'>
              <li className='text-md flex items-center'>
                <div className='rounded-full p-2 bg-rose-500 mr-2 text-white'>
                  <AiOutlineMail />
                </div>
                <a href='mailto:banx9x@gmail.com' className='text-indigo-500'>
                  banx9x@gmail.com
                </a>
              </li>
              <li className='text-md flex items-center'>
                <div className='rounded-full p-2 bg-rose-500 mr-2 text-white'>
                  <BsPhone />
                </div>
                <a href='tel:+84965338283' className='text-indigo-500'>
                  096 533 8283
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className='font-semibold mb-3'>Social</div>

            <ul className='space-y-1'>
              <li className='text-md flex items-center'>
                <div className='rounded-full w-8 h-8 mr-2 text-white overflow-hidden'>
                  <img src={avatar} alt='Ba Nguyen' />
                </div>
                <a
                  href='https://facebook.com/banx9x'
                  className='text-indigo-500'>
                  facebook/banx9x
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
