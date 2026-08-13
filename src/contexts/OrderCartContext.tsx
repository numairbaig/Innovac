import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  reagentId: string;
  name: string;
  category: string;
  image: string;
  size: string;
  quantity: number;
}

interface OrderCartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (reagentId: string, size: string) => void;
  updateQuantity: (reagentId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const OrderCartContext = createContext<OrderCartContextType | undefined>(undefined);

export function OrderCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('innovac_order_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('innovac_order_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems(prev => {
      const existingItemIndex = prev.findIndex(
        item => item.reagentId === newItem.reagentId && item.size === newItem.size
      );

      if (existingItemIndex >= 0) {
        const updated = [...prev];
        updated[existingItemIndex].quantity += newItem.quantity;
        return updated;
      }

      return [...prev, newItem];
    });
  };

  const removeItem = (reagentId: string, size: string) => {
    setItems(prev => prev.filter(item => !(item.reagentId === reagentId && item.size === size)));
  };

  const updateQuantity = (reagentId: string, size: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev => prev.map(item => 
      (item.reagentId === reagentId && item.size === size) ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <OrderCartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems }}>
      {children}
    </OrderCartContext.Provider>
  );
}

export const useOrderCart = () => {
  const context = useContext(OrderCartContext);
  if (context === undefined) {
    throw new Error('useOrderCart must be used within an OrderCartProvider');
  }
  return context;
};
