import React from 'react';

interface LayoutState {
  showSidebar?: boolean;
  showCart?: boolean;
  showSearchbar?: boolean;
}

type LayoutAction =
  | { type: 'openSidebar' }
  | { type: 'closeSidebar' }
  | { type: 'openCart' }
  | { type: 'closeCart' }
  | { type: 'openSearchbar' }
  | { type: 'closeSearchbar' };

interface LayoutContextType {
  state: LayoutState;
  dispatch: React.Dispatch<LayoutAction>;
}

export const LayoutContext = React.createContext({} as LayoutContextType);

export const layoutReducer = (
  state: LayoutState,
  action: LayoutAction
): LayoutState => {
  switch (action.type) {
    case 'openSidebar': {
      return { ...state, showSidebar: true };
    }

    case 'closeSidebar': {
      return { ...state, showSidebar: false };
    }

    case 'openCart': {
      return { ...state, showCart: true };
    }

    case 'closeCart': {
      return { ...state, showCart: false };
    }

    case 'openSearchbar': {
      return { ...state, showSearchbar: true };
    }

    case 'closeSearchbar': {
      return { ...state, showSearchbar: false };
    }

    default: {
      return state;
    }
  }
};
