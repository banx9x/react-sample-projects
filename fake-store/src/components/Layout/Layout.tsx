import { useEffect, useReducer } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import {
  Header,
  Footer,
  Sidebar,
  NavLink,
  ErrorBoundary,
  Terminal,
} from 'components';
import { LayoutContext, layoutReducer } from './LayoutContext';
import productApi from 'services/product.services';

const Layout = () => {
  const location = useLocation();
  const [state, dispatch] = useReducer(layoutReducer, {});
  productApi.endpoints.getNewArivals.useQuery(1);

  useEffect(() => {
    // Scroll to top when location change
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [location]);

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
