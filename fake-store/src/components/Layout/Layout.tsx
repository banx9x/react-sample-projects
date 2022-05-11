import { useReducer } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Header,
  Footer,
  Sidebar,
  NavLink,
  ErrorBoundary,
  Terminal,
} from 'components';
import { LayoutContext, layoutReducer } from './LayoutContext';

const Layout = () => {
  const [state, dispatch] = useReducer(layoutReducer, {});

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      <Header />
      <ErrorBoundary fallback={Terminal}>
        <Outlet />
      </ErrorBoundary>

      <Sidebar
        show={state.showSidebar}
        position='left'
        screen={['xs', 'sm']}
        onClose={() => {
          dispatch({ type: 'closeSidebar' });
        }}>
        <div className='flex flex-col space-y-2'>
          <NavLink to='/category/men'>Men</NavLink>

          <NavLink to='/category/women'>Women</NavLink>

          <NavLink to='/category/kid'>Kid</NavLink>
        </div>
      </Sidebar>

      <Sidebar
        show={state.showCart}
        position='right'
        onClose={() => {
          dispatch({ type: 'closeCart' });
        }}>
        <div>Giỏ hàng</div>
      </Sidebar>

      <Footer />
    </LayoutContext.Provider>
  );
};

export default Layout;
