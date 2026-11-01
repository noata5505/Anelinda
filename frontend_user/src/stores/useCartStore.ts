import { create } from 'zustand';
import { FIGMA_ASSETS } from '@/data/figmaAssets';

export interface CartItem {
  id: string;
  bookId: string;
  slug: string;
  title: string;
  subtitle: string;
  unit_price_idr: number;
  quantity: number;
  coverUrl: string;
}

interface CartState {
  items: CartItem[];
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  addItem: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
}

/**
 * Initialized with the exact 2 items shown in Figma Frame 32 (102:2288)
 * so opening "Keranjang" is 100% identical to the Figma design.
 */
export const useCartStore = create<CartState>((set) => ({
  items: [
    {
      id: 'cart-item-1',
      bookId: 'book-4',
      slug: 'bintang-kecil',
      title: 'Bintang Kecil',
      subtitle: 'Volume I',
      unit_price_idr: 150000,
      quantity: 1,
      coverUrl: FIGMA_ASSETS.bookBintangKecil,
    },
    {
      id: 'cart-item-2',
      bookId: 'book-4',
      slug: 'bintang-kecil',
      title: 'Bintang Kecil',
      subtitle: 'Volume I',
      unit_price_idr: 150000,
      quantity: 1,
      coverUrl: FIGMA_ASSETS.bookBintangKecil,
    },
  ],
  incrementItem: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
  decrementItem: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item,
        )
        .filter((item) => item.quantity > 0),
    })),
  addItem: (newItem) =>
    set((state) => {
      const existing = state.items.find((i) => i.bookId === newItem.bookId);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            ...newItem,
            id: `cart-item-${Date.now()}`,
            quantity: 1,
          },
        ],
      };
    }),
}));
