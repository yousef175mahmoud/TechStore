import { createContext, useContext } from 'react';

// Shared state (cart, wishlist, helper functions) available to every component.
export const Store = createContext(null);
export const useStore = () => useContext(Store);
