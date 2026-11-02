import { useEffect } from 'react';
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
} from '@tanstack/react-router';
import { AdminSidebar } from '@/components/layout/AdminSidebar';
import { AkunPage } from '@/routes/AkunPage';
import { BukuPage } from '@/routes/BukuPage';
import { HalamanUtamaPage } from '@/routes/HalamanUtamaPage';
import { LoginPage } from '@/routes/LoginPage';
import { PesananPage } from '@/routes/PesananPage';
import { RequestBukuPage } from '@/routes/RequestBukuPage';
import { UbahIsiWebsitePage } from '@/routes/UbahIsiWebsitePage';

function RootLayout() {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  if (isLoginRoute) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen w-full flex bg-[#F3F5FA] text-[#14213D]">
      <AdminSidebar />
      <main className="flex-1 min-w-0 px-[28px] pt-[24px] pb-[48px]">
        <div className="max-w-[1064px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HalamanUtamaPage,
});

const bukuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/buku',
  component: BukuPage,
});

const requestBukuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/request-buku',
  component: RequestBukuPage,
});

const pesananRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pesanan',
  component: PesananPage,
});

const akunRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/akun',
  component: AkunPage,
});

const ubahIsiWebsiteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ubah-isi-website',
  component: UbahIsiWebsitePage,
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  indexRoute,
  bukuRoute,
  requestBukuRoute,
  pesananRoute,
  akunRoute,
  ubahIsiWebsiteRoute,
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
