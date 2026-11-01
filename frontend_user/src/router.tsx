import { useEffect } from 'react';
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
} from '@tanstack/react-router';
import { AuthModals } from '@/components/layout/AuthModals';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { BeritaDetailPage } from '@/routes/BeritaDetailPage';
import { BeritaListPage } from '@/routes/BeritaListPage';
import { BookDetailPage } from '@/routes/BookDetailPage';
import { CheckoutPage } from '@/routes/CheckoutPage';
import { HomePage } from '@/routes/HomePage';
import { KoleksiPage } from '@/routes/KoleksiPage';
import { RequestBukuPage } from '@/routes/RequestBukuPage';

function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#faf7f0]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CartDrawer />
      <AuthModals />
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const koleksiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/koleksi',
  component: KoleksiPage,
});

const koleksiDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/koleksi/$slug',
  component: BookDetailPage,
});

const booksAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/books',
  component: KoleksiPage,
});

const bookDetailAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/books/$slug',
  component: BookDetailPage,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/checkout',
  component: CheckoutPage,
});

const beritaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/berita',
  component: BeritaListPage,
});

const beritaDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/berita/$slug',
  component: BeritaDetailPage,
});

const requestBukuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/request-buku',
  component: RequestBukuPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  koleksiRoute,
  koleksiDetailRoute,
  booksAliasRoute,
  bookDetailAliasRoute,
  checkoutRoute,
  beritaRoute,
  beritaDetailRoute,
  requestBukuRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
