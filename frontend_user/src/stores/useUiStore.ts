import { create } from 'zustand';

export type ActiveOverlay = 'none' | 'koleksi' | 'search' | 'cart' | 'login' | 'register';

interface UiState {
  isTopBarVisible: boolean;
  activeOverlay: ActiveOverlay;
  searchQuery: string;
  selectedCategory: string;
  hideTopBar: () => void;
  setActiveOverlay: (overlay: ActiveOverlay) => void;
  toggleOverlay: (overlay: Exclude<ActiveOverlay, 'none'>) => void;
  closeOverlays: () => void;
  setSearchQuery: (q: string) => void;
  setSelectedCategory: (category: string) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isTopBarVisible: true,
  activeOverlay: 'none',
  searchQuery: 'Buku Keluaran Baru',
  selectedCategory: 'Terkini',
  hideTopBar: () => set({ isTopBarVisible: false }),
  setActiveOverlay: (overlay) => set({ activeOverlay: overlay }),
  toggleOverlay: (overlay) =>
    set((state) => ({
      activeOverlay: state.activeOverlay === overlay ? 'none' : overlay,
    })),
  closeOverlays: () => set({ activeOverlay: 'none' }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
}));
