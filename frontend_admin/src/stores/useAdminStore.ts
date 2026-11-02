import { create } from 'zustand';

export type OrderStage = 'Baru' | 'Diproses' | 'Dikirim' | 'Selesai';

export interface AdminOrder {
  id: string;
  customerName: string;
  itemSummary: string;
  total_idr: number;
  status: OrderStage;
}

export interface AdminBook {
  id: string;
  title: string;
  author: string;
  category: string;
  publisher: string;
  publishedYear: string;
  pages: string;
  stock: number;
  price_idr: number;
  weight_gram: number | null;
  synopsis: string;
  coverUrl?: string;
}

export type BookRequestStatus = 'Menunggu' | 'Disetujui' | 'Ditolak';

export interface AdminBookRequest {
  id: string;
  requestedTitle: string;
  requesterName: string;
  dateLabel: string;
  status: BookRequestStatus;
}

export type AccountRoleLabel = 'Admin' | 'Staf' | 'Pelanggan';
export type AccountStatusLabel = 'Aktif' | 'Nonaktif';

export interface AdminAccount {
  id: string;
  name: string;
  email: string;
  role: AccountRoleLabel;
  status: AccountStatusLabel;
}

export interface CarouselSlide {
  id: string;
  title: string;
  buttonText: string;
  imageUrl?: string;
}

export interface StoreIdentity {
  storeName: string;
  tagline: string;
  whatsapp: string;
  address: string;
}

interface AdminState {
  isAuthenticated: boolean;
  username: string;
  orders: AdminOrder[];
  books: AdminBook[];
  bookRequests: AdminBookRequest[];
  accounts: AdminAccount[];
  storeIdentity: StoreIdentity;
  carouselSlides: CarouselSlide[];

  login: (username: string) => void;
  logout: () => void;

  cycleOrderStatus: (orderId: string) => void;
  deleteOrder: (orderId: string) => void;
  addOrder: (payload: Omit<AdminOrder, 'id'>) => void;

  addBook: (payload: Omit<AdminBook, 'id'>) => void;
  updateBook: (bookId: string, payload: Partial<Omit<AdminBook, 'id'>>) => void;
  deleteBook: (bookId: string) => void;

  approveRequest: (requestId: string) => void;
  rejectRequest: (requestId: string) => void;

  toggleAccountStatus: (accountId: string) => void;

  updateStoreIdentity: (identity: Partial<StoreIdentity>) => void;
  addCarouselSlide: () => void;
  updateCarouselSlide: (slideId: string, payload: Partial<Omit<CarouselSlide, 'id'>>) => void;
  deleteCarouselSlide: (slideId: string) => void;
}

const STAGE_ORDER: readonly OrderStage[] = ['Baru', 'Diproses', 'Dikirim', 'Selesai'];

const INITIAL_ORDERS: AdminOrder[] = [
  {
    id: '#1008',
    customerName: 'Rani Putri',
    itemSummary: 'Laskar Pelangi x1',
    total_idr: 98000,
    status: 'Baru',
  },
  {
    id: '#1007',
    customerName: 'Dimas A.',
    itemSummary: 'Atomic Habits x2',
    total_idr: 190000,
    status: 'Diproses',
  },
  {
    id: '#1006',
    customerName: 'Sinta M.',
    itemSummary: 'Bumi x1',
    total_idr: 95000,
    status: 'Dikirim',
  },
  {
    id: '#1005',
    customerName: 'Budi S.',
    itemSummary: 'Filosofi Teras x1',
    total_idr: 98000,
    status: 'Selesai',
  },
  {
    id: '#1004',
    customerName: 'Laila N.',
    itemSummary: 'Cantik Itu Luka x1',
    total_idr: 110000,
    status: 'Selesai',
  },
  {
    id: '#1003',
    customerName: 'Yoga P.',
    itemSummary: 'Sapiens x1',
    total_idr: 135000,
    status: 'Selesai',
  },
];

const INITIAL_BOOKS: AdminBook[] = [
  {
    id: 'book-1',
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    category: 'Novel',
    publisher: '—',
    publishedYear: '—',
    pages: '—',
    stock: 12,
    price_idr: 98000,
    weight_gram: null,
    synopsis:
      'Novel inspiratif tentang perjuangan anak-anak di Belitung yang mengejar mimpi dan pendidikan di tengah keterbatasan.',
  },
  {
    id: 'book-2',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Pengembangan diri',
    publisher: 'Gramedia Pustaka Utama',
    publishedYear: '2019',
    pages: '352',
    stock: 8,
    price_idr: 95000,
    weight_gram: null,
    synopsis: 'Panduan membangun kebiasaan kecil yang dampaknya besar dalam jangka panjang.',
  },
  {
    id: 'book-3',
    title: 'Filosofi Teras',
    author: 'Henry Manampiring',
    category: 'Filsafat',
    publisher: '—',
    publishedYear: '—',
    pages: '—',
    stock: 5,
    price_idr: 98000,
    weight_gram: null,
    synopsis:
      'Kumpulan pemikiran filosofis yang membahas kehidupan, kebenaran, dan makna dari hal-hal yang sering terabaikan.',
  },
  {
    id: 'book-4',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'Sejarah',
    publisher: '—',
    publishedYear: '—',
    pages: '—',
    stock: 3,
    price_idr: 135000,
    weight_gram: null,
    synopsis:
      'Riwayat singkat umat manusia dari zaman purba hingga revolusi kognitif, pertanian, dan sains modern.',
  },
  {
    id: 'book-5',
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    category: 'Novel',
    publisher: '—',
    publishedYear: '—',
    pages: '—',
    stock: 12,
    price_idr: 98000,
    weight_gram: null,
    synopsis:
      'Novel inspiratif tentang perjuangan anak-anak di Belitung yang mengejar mimpi dan pendidikan di tengah keterbatasan.',
  },
  {
    id: 'book-6',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Pengembangan diri',
    publisher: 'Gramedia Pustaka Utama',
    publishedYear: '2019',
    pages: '352',
    stock: 8,
    price_idr: 95000,
    weight_gram: null,
    synopsis: 'Panduan membangun kebiasaan kecil yang dampaknya besar dalam jangka panjang.',
  },
  {
    id: 'book-7',
    title: 'Filosofi Teras',
    author: 'Henry Manampiring',
    category: 'Filsafat',
    publisher: '—',
    publishedYear: '—',
    pages: '—',
    stock: 5,
    price_idr: 98000,
    weight_gram: null,
    synopsis:
      'Kumpulan pemikiran filosofis yang membahas kehidupan, kebenaran, dan makna dari hal-hal yang sering terabaikan.',
  },
  {
    id: 'book-8',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'Sejarah',
    publisher: '—',
    publishedYear: '—',
    pages: '—',
    stock: 3,
    price_idr: 135000,
    weight_gram: null,
    synopsis:
      'Riwayat singkat umat manusia dari zaman purba hingga revolusi kognitif, pertanian, dan sains modern.',
  },
];

const INITIAL_REQUESTS: AdminBookRequest[] = [
  {
    id: 'req-1',
    requestedTitle: 'Pulang',
    requesterName: 'Rani P.',
    dateLabel: '28 Okt',
    status: 'Menunggu',
  },
  {
    id: 'req-2',
    requestedTitle: 'Dunia Sophie',
    requesterName: 'Dimas A.',
    dateLabel: '27 Okt',
    status: 'Menunggu',
  },
  {
    id: 'req-3',
    requestedTitle: 'Hujan',
    requesterName: 'Sinta M.',
    dateLabel: '24 Okt',
    status: 'Disetujui',
  },
];

const INITIAL_ACCOUNTS: AdminAccount[] = [
  {
    id: 'acc-1',
    name: 'Admin Utama',
    email: 'admin@anelindabooks.id',
    role: 'Admin',
    status: 'Aktif',
  },
  {
    id: 'acc-2',
    name: 'Staf Toko',
    email: 'staf@anelindabooks.id',
    role: 'Staf',
    status: 'Aktif',
  },
  {
    id: 'acc-3',
    name: 'Rani Putri',
    email: 'rani@email.com',
    role: 'Pelanggan',
    status: 'Aktif',
  },
  {
    id: 'acc-4',
    name: 'Dimas A.',
    email: 'dimas@email.com',
    role: 'Pelanggan',
    status: 'Nonaktif',
  },
];

const INITIAL_IDENTITY: StoreIdentity = {
  storeName: 'Anelinda Books',
  tagline: 'Temukan buku favoritmu',
  whatsapp: '08xxxxxxxxxx',
  address: 'Alamat toko',
};

const INITIAL_SLIDES: CarouselSlide[] = [
  {
    id: 'slide-1',
    title: 'Diskon Buku Akhir Tahun',
    buttonText: 'Belanja sekarang',
  },
  {
    id: 'slide-2',
    title: 'Buku Baru Bulan Ini',
    buttonText: 'Lihat koleksi',
  },
];

export const useAdminStore = create<AdminState>((set) => ({
  isAuthenticated: true,
  username: 'Admin@anelindagmailcom',
  orders: INITIAL_ORDERS,
  books: INITIAL_BOOKS,
  bookRequests: INITIAL_REQUESTS,
  accounts: INITIAL_ACCOUNTS,
  storeIdentity: INITIAL_IDENTITY,
  carouselSlides: INITIAL_SLIDES,

  login: (username) =>
    set({
      isAuthenticated: true,
      username: username.trim() || 'Admin@anelindagmailcom',
    }),

  logout: () => set({ isAuthenticated: false }),

  cycleOrderStatus: (orderId) =>
    set((state) => ({
      orders: state.orders.map((order) => {
        if (order.id !== orderId) return order;
        const currentIndex = STAGE_ORDER.indexOf(order.status);
        const nextStage = STAGE_ORDER[(currentIndex + 1) % STAGE_ORDER.length] ?? 'Baru';
        return { ...order, status: nextStage };
      }),
    })),

  deleteOrder: (orderId) =>
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== orderId),
    })),

  addOrder: (payload) =>
    set((state) => {
      const highestNum = state.orders.reduce((max, o) => {
        const parsed = Number.parseInt(o.id.replace('#', ''), 10);
        return Number.isNaN(parsed) ? max : Math.max(max, parsed);
      }, 1000);
      const newOrder: AdminOrder = {
        ...payload,
        id: `#${highestNum + 1}`,
      };
      return {
        orders: [newOrder, ...state.orders],
      };
    }),

  addBook: (payload) =>
    set((state) => ({
      books: [
        {
          ...payload,
          id: `book-${Date.now()}`,
        },
        ...state.books,
      ],
    })),

  updateBook: (bookId, payload) =>
    set((state) => ({
      books: state.books.map((book) => (book.id === bookId ? { ...book, ...payload } : book)),
    })),

  deleteBook: (bookId) =>
    set((state) => ({
      books: state.books.filter((book) => book.id !== bookId),
    })),

  approveRequest: (requestId) =>
    set((state) => ({
      bookRequests: state.bookRequests.map((req) =>
        req.id === requestId ? { ...req, status: 'Disetujui' } : req,
      ),
    })),

  rejectRequest: (requestId) =>
    set((state) => ({
      bookRequests: state.bookRequests.filter((req) => req.id !== requestId),
    })),

  toggleAccountStatus: (accountId) =>
    set((state) => ({
      accounts: state.accounts.map((acc) =>
        acc.id === accountId
          ? { ...acc, status: acc.status === 'Aktif' ? 'Nonaktif' : 'Aktif' }
          : acc,
      ),
    })),

  updateStoreIdentity: (identity) =>
    set((state) => ({
      storeIdentity: { ...state.storeIdentity, ...identity },
    })),

  addCarouselSlide: () =>
    set((state) => ({
      carouselSlides: [
        ...state.carouselSlides,
        {
          id: `slide-${Date.now()}`,
          title: 'Promo Koleksi Pilihan',
          buttonText: 'Lihat sekarang',
        },
      ],
    })),

  updateCarouselSlide: (slideId, payload) =>
    set((state) => ({
      carouselSlides: state.carouselSlides.map((slide) =>
        slide.id === slideId ? { ...slide, ...payload } : slide,
      ),
    })),

  deleteCarouselSlide: (slideId) =>
    set((state) => ({
      carouselSlides: state.carouselSlides.filter((slide) => slide.id !== slideId),
    })),
}));
