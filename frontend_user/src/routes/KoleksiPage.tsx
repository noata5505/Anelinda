import { useState } from 'react';
import { BookCard } from '@/components/book/BookCard';
import { RequestBookBanner } from '@/components/shared/RequestBookBanner';
import { CATALOG_BOOKS, FIGMA_ASSETS } from '@/data/figmaAssets';
import { useUiStore } from '@/stores/useUiStore';

const PRODUCT_TYPES = ['Terkini', 'Antik', 'Majalah', 'Komik', 'Kamus'] as const;

/**
 * Koleksi Buku Page — 100% identical to Figma Desktop - 6 (node 118:3019)
 * Fully responsive across laptop (1280px–1366px), desktop (1440px+), tablet, and mobile.
 */
export function KoleksiPage() {
  const { selectedCategory, setSelectedCategory } = useUiStore();
  const [selectedAuthor, setSelectedAuthor] = useState('Semua');
  const [selectedSort, setSelectedSort] = useState('Semua');

  const row1Books = CATALOG_BOOKS;
  const row2Books = CATALOG_BOOKS;

  return (
    <div
      className="bg-[#faf7f0] w-full"
      data-node-id="118:3019"
    >
      {/* Catalog Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] pt-[65px] lg:pt-[95px] pb-[95px]">
        {/* Centered Header: Eyebrow + Main Title */}
        <div className="flex flex-col items-center text-center mb-[58px]">
          <div className="flex items-center gap-[10px] mb-3">
            <div
              className="bg-black size-[12px] shrink-0"
              data-node-id="118:3058"
            />
            <p
              className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
              data-node-id="118:3057"
            >
              Sahabat Kolektor
            </p>
          </div>

          <h1
            className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[36px] sm:text-[42px] xl:text-[48px] text-black tracking-[-2.4px]"
            data-node-id="118:3059"
          >
            Koleksi Buku Anelinda
          </h1>
        </div>

        {/* Filter Bar: 3 Columns (Jenis Produk, Penulis, Urutkan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-[45px]">
          {/* Filter Column 1: Jenis Produk (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              className="h-[1px] bg-black w-full max-w-[533px] mb-[28px]"
              data-node-id="118:3105"
            />
            <div className="flex items-center gap-[10px] mb-[20px]">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="118:3107"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                data-node-id="118:3106"
              >
                Jenis Produk
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-[10px]">
              {PRODUCT_TYPES.map((label) => {
                const isActive = selectedCategory === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSelectedCategory(label)}
                    className={`h-[40px] rounded-[20px] px-[22px] xl:px-[25px] py-[10.5px] flex items-center justify-center cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-[#ffed78] text-black'
                        : 'bg-white border-2 border-[#ede9de] text-black hover:bg-[#ffed78]/60'
                    }`}
                  >
                    <span className="font-['Linear_Sans_Trial:Regular'] text-[16px] leading-[normal] tracking-[-0.8px] whitespace-nowrap">
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Column 2: Penulis (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col">
            <div
              className="h-[1px] bg-black w-full mb-[28px]"
              data-node-id="118:3121"
            />
            <div className="flex items-center gap-[10px] mb-[20px]">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="118:3123"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                data-node-id="118:3122"
              >
                Penulis
              </p>
            </div>
            <div
              className="relative w-full h-[40px] bg-white border-2 border-[#ede9de] rounded-[20px] flex items-center"
              data-node-id="118:3124"
            >
              <select
                aria-label="Filter Penulis"
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className="w-full h-full appearance-none bg-transparent pl-[25px] pr-[45px] font-['Linear_Sans_Trial:Regular'] text-[16px] text-black tracking-[-0.8px] outline-none cursor-pointer"
              >
                <option value="Semua">Semua</option>
                <option value="Antoine de Saint-Exupéry">Antoine de Saint-Exupéry</option>
                <option value="Enid Blyton">Enid Blyton</option>
              </select>
              <span className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2 size-[20px] flex items-center justify-center">
                <img
                  alt=""
                  className="block size-full rotate-180"
                  src={FIGMA_ASSETS.fiChevronUp}
                />
              </span>
            </div>
          </div>

          {/* Filter Column 3: Urutkan (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col">
            <div
              className="h-[1px] bg-black w-full mb-[28px]"
              data-node-id="118:3128"
            />
            <div className="flex items-center gap-[10px] mb-[20px]">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="118:3130"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                data-node-id="118:3129"
              >
                Urutkan
              </p>
            </div>
            <div
              className="relative w-full h-[40px] bg-white border-2 border-[#ede9de] rounded-[20px] flex items-center"
              data-node-id="118:3131"
            >
              <select
                aria-label="Urutkan Koleksi"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="w-full h-full appearance-none bg-transparent pl-[25px] pr-[45px] font-['Linear_Sans_Trial:Regular'] text-[16px] text-black tracking-[-0.8px] outline-none cursor-pointer"
              >
                <option value="Semua">Semua</option>
                <option value="Terbaru">Terbaru</option>
                <option value="Harga Terendah">Harga Terendah</option>
                <option value="Harga Tertinggi">Harga Tertinggi</option>
              </select>
              <span className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2 size-[20px] flex items-center justify-center">
                <img
                  alt=""
                  className="block size-full rotate-180"
                  src={FIGMA_ASSETS.fiChevronUp}
                />
              </span>
            </div>
          </div>
        </div>

        {/* 4-Column Responsive Book Grid (Row 1 + Row 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[20px] gap-y-[45px]">
          {row1Books.map((book) => (
            <BookCard key={`row1-${book.id}`} book={book} />
          ))}
          {row2Books.map((book) => (
            <BookCard key={`row2-${book.id}`} book={book} />
          ))}
        </div>
      </section>

      {/* Yellow CTA Banner */}
      <RequestBookBanner />
    </div>
  );
}
