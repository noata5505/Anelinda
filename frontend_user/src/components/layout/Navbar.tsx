import { Link, useNavigate } from '@tanstack/react-router';
import { FIGMA_ASSETS } from '@/data/figmaAssets';
import { useUiStore } from '@/stores/useUiStore';

const MEGA_MENU_CATEGORIES = [
  { label: 'Buku Keluaran Baru', filter: 'Terkini' },
  { label: 'Buku Antik', filter: 'Antik' },
  { label: 'Komik', filter: 'Komik' },
  { label: 'Majalah', filter: 'Majalah' },
  { label: 'Kamus', filter: 'Kamus' },
] as const;

export function Navbar() {
  const navigate = useNavigate();
  const {
    isTopBarVisible,
    hideTopBar,
    activeOverlay,
    toggleOverlay,
    closeOverlays,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
  } = useUiStore();

  const handleCategorySelect = (filter: string) => {
    setSelectedCategory(filter);
    closeOverlays();
    void navigate({ to: '/koleksi' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeOverlays();
    void navigate({ to: '/koleksi' });
  };

  return (
    <header className="relative z-40 w-full">
      {/* Top Announcement Bar (42px, data-node-id="14:43") */}
      {isTopBarVisible && (
        <div
          className="bg-black min-h-[42px] w-full flex items-center justify-center relative px-10 py-2"
          data-node-id="14:43"
        >
          <p
            className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic text-[13px] sm:text-[15px] text-center text-white"
            data-node-id="14:45"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button
            type="button"
            onClick={hideTopBar}
            aria-label="Tutup pengumuman"
            className="absolute right-4 sm:right-8 xl:right-[40px] top-1/2 -translate-y-1/2 size-[15px] cursor-pointer"
            data-node-id="14:49"
          >
            <img
              alt=""
              className="block size-full"
              src={FIGMA_ASSETS.fiXWhite}
            />
          </button>
        </div>
      )}

      {/* Main Navigation Bar (76px, data-node-id="11:25") */}
      <nav
        aria-label="Navigasi Utama"
        className="bg-[#faf7f0] border-y-2 border-[#ede9de] border-solid min-h-[76px] w-full"
        data-node-id="11:25"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] min-h-[72px] flex flex-wrap items-center justify-between gap-4 py-3">
          {/* Logo Icon + Brand Name */}
          <Link
            to="/"
            onClick={closeOverlays}
            className="flex items-center gap-[15px] shrink-0"
          >
            <div
              className="w-[28px] h-[22px] relative shrink-0"
              data-node-id="14:37"
              data-name="Vector"
            >
              <img
                alt="Anelinda Books"
                className="block size-full object-contain"
                src={FIGMA_ASSETS.logoNavbarBlack}
              />
            </div>
            <p
              className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] sm:text-[24px] text-black whitespace-nowrap"
              data-node-id="14:36"
            >
              anelinda.com
            </p>
          </Link>

          {/* Center Navigation Links */}
          <div
            className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 lg:gap-[25px] font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[16px] sm:text-[18px] text-black tracking-[0.18px]"
            data-node-id="14:35"
          >
            <button
              type="button"
              onClick={() => toggleOverlay('koleksi')}
              onDoubleClick={() => {
                closeOverlays();
                void navigate({ to: '/koleksi' });
              }}
              className={`cursor-pointer font-['Linear_Sans_Trial:Regular'] text-[16px] sm:text-[18px] text-black tracking-[0.18px] whitespace-nowrap ${
                activeOverlay === 'koleksi'
                  ? 'underline [text-underline-position:from-font] decoration-solid'
                  : 'hover:underline'
              }`}
              data-node-id="14:27"
            >
              Koleksi
            </button>

            <Link
              to="/koleksi"
              onClick={closeOverlays}
              className="hover:underline whitespace-nowrap"
            >
              Katalog
            </Link>

            <a
              href="/#tentang-kami"
              onClick={closeOverlays}
              className="hover:underline whitespace-nowrap"
              data-node-id="14:28"
            >
              Tentang Kami
            </a>

            <Link
              to="/berita"
              onClick={closeOverlays}
              className="hover:underline whitespace-nowrap"
              data-node-id="14:31"
            >
              Berita
            </Link>

            <Link
              to="/request-buku"
              onClick={closeOverlays}
              className="hover:underline whitespace-nowrap"
              data-node-id="14:34"
            >
              Request Buku
            </Link>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-5 sm:gap-[30px] shrink-0">
            <button
              type="button"
              onClick={() => toggleOverlay('search')}
              aria-label="Cari buku"
              className="size-[24px] cursor-pointer relative shrink-0"
              data-node-id="14:40"
              data-name="fi:search"
            >
              <img
                alt=""
                className="block size-full"
                src={FIGMA_ASSETS.fiSearch}
              />
            </button>

            <button
              type="button"
              onClick={() => toggleOverlay('login')}
              aria-label="Akun pengguna"
              className="size-[24px] cursor-pointer relative shrink-0"
              data-node-id="11:32"
              data-name="fi:user"
            >
              <img
                alt=""
                className="block size-full"
                src={FIGMA_ASSETS.fiUser}
              />
            </button>

            <button
              type="button"
              onClick={() => toggleOverlay('cart')}
              aria-label="Keranjang belanja"
              className="size-[24px] cursor-pointer relative shrink-0"
              data-node-id="11:27"
              data-name="fi:shopping-cart"
            >
              <img
                alt=""
                className="block size-full"
                src={FIGMA_ASSETS.fiShoppingCart}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Frame 30 (87:2012) — "Koleksi" Mega-Menu Dropdown */}
      {activeOverlay === 'koleksi' && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full w-[calc(100%-2rem)] max-w-[1120px] bg-[#faf7f0] border-x-2 border-b-2 border-[#ede9de] shadow-md z-50 px-6 sm:px-12 lg:px-[80px] py-8 lg:py-[45px]"
          data-node-id="87:2012"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-2 font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] leading-[30px]">
              {MEGA_MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => handleCategorySelect(cat.filter)}
                  className="text-left cursor-pointer hover:underline whitespace-nowrap"
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full lg:w-auto">
              {/* Left Promo Image Card */}
              <Link
                to="/koleksi/$slug"
                params={{ slug: 'break-age' }}
                onClick={closeOverlays}
                className="relative w-full sm:w-[280px] xl:w-[305px] h-[185px] rounded-[15px] overflow-hidden block"
                data-node-id="87:2038"
              >
                <img
                  alt="Break Age"
                  fetchPriority="low"
                  className="inset-0 object-cover rounded-[15px] size-full"
                  src={FIGMA_ASSETS.bookBreakAge}
                />
              </Link>

              {/* Right Promo Image Card with Grey 75 Overlay */}
              <Link
                to="/koleksi/$slug"
                params={{ slug: 'break-age' }}
                onClick={closeOverlays}
                className="relative w-full sm:w-[280px] xl:w-[305px] h-[185px] rounded-[15px] overflow-hidden flex items-center justify-center"
                data-node-id="87:2039"
              >
                <div aria-hidden="true" className="absolute inset-0 rounded-[15px]">
                  <img
                    alt=""
                    fetchPriority="low"
                    className="object-cover rounded-[15px] size-full"
                    src={FIGMA_ASSETS.bookBreakAge}
                  />
                  <div className="absolute bg-[rgba(237,233,222,0.75)] inset-0 rounded-[15px]" />
                </div>
                <div className="relative z-10 font-['Linear_Sans_Trial:Regular'] leading-[26px] not-italic text-[22px] text-black text-center tracking-[-1.1px] whitespace-nowrap">
                  <p className="mb-0">Break Age</p>
                  <p>(Koleksi Lengkap)</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Frame 31 (87:2048) — Search Bar Overlay */}
      {activeOverlay === 'search' && (
        <form
          onSubmit={handleSearchSubmit}
          className="absolute left-1/2 -translate-x-1/2 top-full w-[calc(100%-2rem)] max-w-[1124px] bg-[#faf7f0] border-x-2 border-b-2 border-[#ede9de] shadow-md z-50 px-6 sm:px-12 lg:px-[80px] py-8 lg:py-[42px]"
          data-node-id="87:2048"
        >
          <div className="flex items-center justify-between gap-4 pb-2 border-b border-black">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buku Keluaran Baru"
              aria-label="Cari judul buku atau penulis"
              autoFocus
              className="w-full bg-transparent font-['Linear_Sans_Trial:Regular'] text-[20px] leading-[30px] tracking-[-1px] text-black outline-none"
            />
            <button
              type="button"
              onClick={closeOverlays}
              aria-label="Tutup pencarian"
              className="size-[24px] shrink-0 cursor-pointer"
            >
              <img
                alt=""
                className="block size-full"
                src={FIGMA_ASSETS.fiXBlack}
              />
            </button>
          </div>
        </form>
      )}
    </header>
  );
}
