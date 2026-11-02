import { Link, useLocation } from '@tanstack/react-router';

interface NavItem {
  label: string;
  to: '/' | '/buku' | '/request-buku' | '/pesanan' | '/akun' | '/ubah-isi-website';
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Halaman utama', to: '/' },
  { label: 'Buku', to: '/buku' },
  { label: 'Request buku', to: '/request-buku' },
  { label: 'Pesanan', to: '/pesanan' },
  { label: 'Akun', to: '/akun' },
  { label: 'Ubah isi website', to: '/ubah-isi-website' },
];

export function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="w-[240px] shrink-0 bg-[#2A3088] text-white min-h-screen px-[16px] pt-[26px] pb-[32px] flex flex-col select-none">
      <div className="px-[14px] mb-[26px]">
        <div className="text-[20px] font-bold leading-[25px] tracking-[-0.01em] text-white">
          Anelinda Books
        </div>
        <div className="text-[13px] font-normal leading-[18px] text-white/75 mt-[2px]">
          Panel Admin
        </div>
      </div>

      <nav aria-label="Menu Panel Admin" className="flex flex-col gap-[6px]">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.to === '/'
              ? location.pathname === '/'
              : location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);

          return (
            <Link
              key={item.to}
              to={item.to}
              className={
                isActive
                  ? 'h-[44px] px-[14px] rounded-[10px] bg-white text-[#14213D] font-semibold text-[14px] flex items-center transition-colors'
                  : 'h-[44px] px-[14px] rounded-[10px] text-white/95 hover:bg-white/10 font-medium text-[14px] flex items-center transition-colors'
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
