/**
 * All image and vector assets exported from the Figma project:
 * Public-Dekstop (fileKey: bYqgxeNP8gPJDgX3MHWPdG, nodeId: 0:1)
 *
 * Organized into semantic folders under:
 * - /assets/ (workspace root)
 * - /frontend_user/public/assets/
 * - /frontend_user/src/assets/
 */

export const FIGMA_ASSETS = {
  // Hero & Store Photos (PNG)
  heroBannerBg: '/assets/images/hero-banner.png',
  aboutEditorialPhoto: '/assets/images/about-editorial.png',
  storeFrontPhoto: '/assets/images/store-front-bsd.png',

  // Book Covers (PNG)
  bookSmilingInvestor: '/assets/books/smiling-investor.png',
  bookLimaSekawan: '/assets/books/lima-sekawan.png',
  bookBreakAge: '/assets/books/break-age.png',
  bookBintangKecil: '/assets/books/bintang-kecil.png',

  // Brand Logos & Vectors (SVG)
  logoNavbarBlack: '/assets/logos/logo-navbar-black.svg',
  logoFooterWhite: '/assets/logos/logo-footer-white.svg',

  // Feather Icons & UI Icons (SVG)
  fiShoppingCart: '/assets/icons/fi-shopping-cart.svg',
  fiUser: '/assets/icons/fi-user.svg',
  fiSearch: '/assets/icons/fi-search.svg',
  fiXWhite: '/assets/icons/fi-x-white.svg',
  fiXBlack: '/assets/icons/fi-x-black.svg',
  fiXDrawer: '/assets/icons/fi-x-drawer.svg',
  fiPlusBlack: '/assets/icons/fi-plus-black.svg',
  fiPlusSmall: '/assets/icons/fi-plus-small.svg',
  fiMinusSmall: '/assets/icons/fi-minus-small.svg',
  fiArrowRightBlack: '/assets/icons/fi-arrow-right-black.svg',
  fiArrowRightWhite: '/assets/icons/fi-arrow-right-white.svg',
  fiChevronUp: '/assets/icons/fi-chevron-up.svg',
  starVector: '/assets/icons/star.svg',

  // Carousel & Pagination Circles (SVG)
  heroDots: '/assets/ui/hero-dots.svg',
  bookDetailDots: '/assets/ui/book-detail-dots.svg',
  carouselNextGroup: '/assets/ui/carousel-next.svg',
  carouselPrevGroup: '/assets/ui/carousel-prev.svg',
  testimonialPrevGroup: '/assets/ui/testimonial-prev.svg',
  testimonialNextGroup: '/assets/ui/testimonial-next.svg',
  ellipseCartControl: '/assets/ui/ellipse-cart-control.svg',
  ellipseCheckoutBadge: '/assets/ui/ellipse-checkout-badge.svg',

  // Social Media & Online Store Icons (SVG)
  ellipseFooterSocial: '/assets/social/ellipse-footer-social.svg',
  ellipseStoreSocial: '/assets/social/ellipse-store-social.svg',
  iconInstagram: '/assets/social/instagram.svg',
  iconTiktok: '/assets/social/tiktok.svg',
  iconShopee: '/assets/social/shopee.svg',
  iconTokopedia: '/assets/social/tokopedia.svg',
  iconToco: '/assets/social/toco.svg',

  // Decorative Lines (SVG)
  lineFull1280: '/assets/ui/line-full-1280.svg',
  lineHalf580: '/assets/ui/line-half-580.svg',
  lineHalf620: '/assets/ui/line-half-620.svg',
  lineFaq545: '/assets/ui/line-faq-545.svg',
  lineFooter1280: '/assets/ui/line-footer-1280.svg',
  lineTestimonial298: '/assets/ui/line-testimonial-298.svg',
  lineNews545: '/assets/ui/line-news-545.svg',
  lineCart453: '/assets/ui/line-cart-453.svg',
  lineCheckout551: '/assets/ui/line-checkout-551.svg',
} as const;

export interface CatalogBook {
  id: string;
  slug: string;
  title: string;
  author: string;
  subtitle?: string;
  price_idr: number;
  priceDisplay: string;
  original_price_idr?: number;
  originalPriceDisplay?: string;
  coverUrl: string;
  badge?: {
    label: 'Terlaris' | 'Diskon 10%' | 'Koleksi Lengkap';
    bgColor: '#7acca8' | '#f27b72' | '#99b7e9';
  };
  category: 'Terkini' | 'Antik' | 'Majalah' | 'Komik' | 'Kamus';
  rating: string;
  soldCount: string;
  synopsis: string;
  publisher: string;
  publishedYear: string;
  isbn: string;
  pages: string;
  language: string;
  weight: string;
}

export const CATALOG_BOOKS: readonly CatalogBook[] = [
  {
    id: 'book-1',
    slug: 'smiling-investor',
    title: 'Smiling Investor',
    author: 'Penulis',
    price_idr: 179000,
    priceDisplay: 'Rp.179.000',
    coverUrl: FIGMA_ASSETS.bookSmilingInvestor,
    badge: {
      label: 'Terlaris',
      bgColor: '#7acca8',
    },
    category: 'Terkini',
    rating: '4.9',
    soldCount: '5 Terjual',
    synopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit. Suspendisse id porta risus. Nam fermentum erat diam, et hendrerit felis eleifend sed. Nunc semper nibh non lectus tempus facilisis.',
    publisher: 'Gramedia Widiasarana Indonesia',
    publishedYear: '2025',
    isbn: '123456789',
    pages: '205',
    language: 'Indonesia',
    weight: '0.48 kg',
  },
  {
    id: 'book-2',
    slug: 'lima-sekawan',
    title: 'Lima Sekawan',
    author: 'Penulis',
    price_idr: 5000,
    priceDisplay: 'Rp.5.000',
    original_price_idr: 15000,
    originalPriceDisplay: 'Rp.15.000',
    coverUrl: FIGMA_ASSETS.bookLimaSekawan,
    badge: {
      label: 'Diskon 10%',
      bgColor: '#f27b72',
    },
    category: 'Antik',
    rating: '4.9',
    soldCount: '5 Terjual',
    synopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit. Suspendisse id porta risus. Nam fermentum erat diam, et hendrerit felis eleifend sed. Nunc semper nibh non lectus tempus facilisis.',
    publisher: 'Gramedia Pustaka Utama',
    publishedYear: '1998',
    isbn: '123456789',
    pages: '205',
    language: 'Indonesia',
    weight: '0.48 kg',
  },
  {
    id: 'book-3',
    slug: 'break-age',
    title: 'Break Age',
    author: 'Penulis',
    price_idr: 35000,
    priceDisplay: 'Rp.35.000',
    coverUrl: FIGMA_ASSETS.bookBreakAge,
    badge: {
      label: 'Koleksi Lengkap',
      bgColor: '#99b7e9',
    },
    category: 'Komik',
    rating: '4.9',
    soldCount: '5 Terjual',
    synopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit. Suspendisse id porta risus. Nam fermentum erat diam, et hendrerit felis eleifend sed. Nunc semper nibh non lectus tempus facilisis.',
    publisher: 'Elex Media Komputindo',
    publishedYear: '2001',
    isbn: '123456789',
    pages: '205',
    language: 'Indonesia',
    weight: '0.48 kg',
  },
  {
    id: 'book-4',
    slug: 'bintang-kecil',
    title: 'Bintang Kecil',
    subtitle: 'Volume I',
    author: 'Penulis',
    price_idr: 250000,
    priceDisplay: 'Rp.250.000',
    original_price_idr: 150000,
    originalPriceDisplay: 'Rp.150.000',
    coverUrl: FIGMA_ASSETS.bookBintangKecil,
    category: 'Antik',
    rating: '4.9',
    soldCount: '5 Terjual',
    synopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit. Suspendisse id porta risus. Nam fermentum erat diam, et hendrerit felis eleifend sed. Nunc semper nibh non lectus tempus facilisis.',
    publisher: 'Gramedia Widiasarana Indonesia',
    publishedYear: '2025',
    isbn: '123456789',
    pages: '205',
    language: 'Indonesia',
    weight: '0.48 kg',
  },
] as const;

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  authorDate: string;
  imageUrl: string;
}

export const NEWS_ARTICLES: readonly NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'kabar-terbaru-anelinda-books',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit.\u00a0',
    category: 'Berita',
    date: '20 Oktober 2026',
    author: 'Admin Maria',
    authorDate: '20 Oktober 2023',
    imageUrl: FIGMA_ASSETS.heroBannerBg,
  },
  {
    id: 'news-2',
    slug: 'koleksi-buku-antik-pilihan-1',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit.\u00a0',
    category: 'Berita',
    date: '20 Oktober 2026',
    author: 'Admin Maria',
    authorDate: '20 Oktober 2023',
    imageUrl: FIGMA_ASSETS.heroBannerBg,
  },
  {
    id: 'news-3',
    slug: 'koleksi-buku-antik-pilihan-2',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit.\u00a0',
    category: 'Berita',
    date: '20 Oktober 2026',
    author: 'Admin Maria',
    authorDate: '20 Oktober 2023',
    imageUrl: FIGMA_ASSETS.heroBannerBg,
  },
  {
    id: 'news-4',
    slug: 'koleksi-buku-antik-pilihan-3',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit.\u00a0',
    category: 'Berita',
    date: '20 Oktober 2026',
    author: 'Admin Maria',
    authorDate: '20 Oktober 2023',
    imageUrl: FIGMA_ASSETS.heroBannerBg,
  },
] as const;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'faq-1',
    question: '\u00a0Apakah semua buku yang dijual asli/original ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna.',
  },
  {
    id: 'faq-2',
    question: '\u00a0Apakah semua buku yang dijual asli/original ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna.',
  },
] as const;
