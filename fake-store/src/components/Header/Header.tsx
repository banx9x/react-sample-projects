import { useAppSelector } from 'store';
import { NavLink, Logo } from 'components';
import { LayoutContext } from 'components/Layout/LayoutContext';
import { useCallback, useContext } from 'react';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import { RiBarChartHorizontalLine, RiCloseLine } from 'react-icons/ri';
import { selectTotalItems } from 'store/slices/cart.slice';

const Header = () => {
  const totalItems = useAppSelector(selectTotalItems);
  const { state, dispatch } = useContext(LayoutContext);

  const toggleSidebar = useCallback(() => {
    dispatch({ type: state.showSidebar ? 'closeSidebar' : 'openSidebar' });
  }, [state.showSidebar]);

  const toggleCart = useCallback(() => {
    dispatch({ type: state.showCart ? 'closeCart' : 'openCart' });
  }, [state.showCart]);

  return (
    <header className='py-3 fixed top-0 left-0 w-full bg-white shadow-md z-50'>
      <div className='md:container px-4'>
        <nav className='grid grid-cols-3 items-center'>
          <div className='space-x-4 hidden md:flex'>
            <NavLink to='/category/men'>Men</NavLink>
            <NavLink to='/category/women'>Women</NavLink>
            <NavLink to='/category/kid'>Kid</NavLink>
          </div>

          <div className='flex items-center md:hidden'>
            <button
              className='text-xl p-2 border-[1px] border-slate-100'
              onClick={toggleSidebar}>
              {state.showSidebar ? (
                <RiCloseLine />
              ) : (
                <RiBarChartHorizontalLine />
              )}
            </button>
          </div>

          <div className='flex justify-center'>
            <Logo />
          </div>

          <div className='flex space-x-4 justify-end'>
            <button
              className='text-xl relative bg-rose-500 rounded-full text-white p-1'
              onClick={toggleCart}>
              <AiOutlineShopping />

              <div className='text-xs rounded-full w-4 h-4 bg-amber-500 text-white absolute -right-1 -top-1 box-content'>
                {totalItems}
              </div>
            </button>

            <button className='text-xl relative bg-slate-300 rounded-full text-white p-1'>
              <AiOutlineUser />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
