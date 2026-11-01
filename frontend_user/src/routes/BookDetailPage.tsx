import { useNavigate, useParams } from '@tanstack/react-router';
import { FaqSection } from '@/components/shared/FaqSection';
import { CATALOG_BOOKS, FIGMA_ASSETS } from '@/data/figmaAssets';
import { useCartStore } from '@/stores/useCartStore';
import { useUiStore } from '@/stores/useUiStore';

/**
 * Detail Buku Page — 100% identical to Figma Desktop - 7 (node 118:3223)
 * Fully responsive across laptop (1280px–1366px), desktop (1440px+), tablet, and mobile.
 */
export function BookDetailPage() {
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const { addItem } = useCartStore();
  const { setActiveOverlay } = useUiStore();

  const book =
    CATALOG_BOOKS.find((b) => b.slug === params.slug) ??
    CATALOG_BOOKS.find((b) => b.slug === 'bintang-kecil') ??
    CATALOG_BOOKS[3]!;

  const handleBuyNow = () => {
    void navigate({ to: '/checkout' });
  };

  const handleAddToCart = () => {
    addItem({
      bookId: book.id,
      slug: book.slug,
      title: book.title,
      subtitle: book.subtitle ?? 'Volume I',
      unit_price_idr: 150000,
      coverUrl: book.coverUrl,
    });
    setActiveOverlay('cart');
  };

  return (
    <div
      className="bg-[#faf7f0] w-full"
      data-node-id="118:3223"
    >
      {/* Main Product Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] py-[65px] lg:py-[95px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-[65px] items-start">
          {/* Left Column: Main Cover + 2 Side Thumbnails (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-[25px] items-start">
            {/* Main Book Cover (aspect 440/474) */}
            <div
              className="relative w-full sm:flex-1 aspect-[440/474] bg-white border-2 border-[#ede9de] border-solid rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] overflow-hidden"
              data-node-id="118:3242"
            >
              <img
                alt={book.title}
                fetchPriority="high"
                className="inset-0 object-cover pointer-events-none rounded-[25px] size-full"
                src={book.coverUrl}
              />

              {/* Badge on Main Cover: Diskon 10% */}
              <div
                className="absolute bg-[#f27b72] flex h-[31px] items-center justify-center left-[25px] px-[15px] py-[5px] rounded-[20px] top-[25px]"
                data-node-id="118:3368"
              >
                <p
                  className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[16px] text-black text-center tracking-[-0.8px] whitespace-nowrap"
                  data-node-id="118:3369"
                >
                  Diskon 10%
                </p>
              </div>

              {/* Pagination Dots inside Main Cover */}
              <div
                className="absolute bottom-[20px] left-1/2 -translate-x-1/2 h-[30px] w-[74px]"
                data-node-id="118:3361"
              >
                <img
                  alt=""
                  className="block size-full"
                  src={FIGMA_ASSETS.bookDetailDots}
                />
              </div>
            </div>

            {/* 2 Side Thumbnails */}
            <div className="flex sm:flex-col gap-[20px] shrink-0">
              <div
                className="bg-white border-2 border-[#ede9de] border-solid rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] size-[100px] xl:size-[130px] overflow-hidden"
                data-node-id="118:3357"
              >
                <img
                  alt=""
                  className="object-cover pointer-events-none rounded-[25px] size-full"
                  src={book.coverUrl}
                />
              </div>

              <div
                className="bg-white border-2 border-[#ede9de] border-solid rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] size-[100px] xl:size-[130px] overflow-hidden"
                data-node-id="118:3359"
              >
                <img
                  alt=""
                  className="object-cover pointer-events-none rounded-[25px] size-full"
                  src={book.coverUrl}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Book Info & Actions (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Top Line */}
            <div className="w-full mb-[30px]" data-node-id="118:3331">
              <img
                alt=""
                className="block w-full h-[1px]"
                src={FIGMA_ASSETS.lineHalf620}
              />
            </div>

            {/* Eyebrow: Penulis */}
            <div className="flex items-center gap-[10px] mb-2">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="118:3333"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[20px] text-black"
                data-node-id="118:3332"
              >
                {book.author}
              </p>
            </div>

            {/* Book Title */}
            <h1
              className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[32px] text-black tracking-[-1.6px]"
              data-node-id="118:3334"
            >
              {book.title}
            </h1>

            {/* Price & Strikethrough Price */}
            <div className="flex items-baseline gap-[20px] mt-3">
              <p
                className="font-['Linear_Sans_Trial:Semi_Bold'] leading-[58px] not-italic text-[40px] sm:text-[48px] text-black tracking-[-2.4px]"
                data-node-id="118:3367"
              >
                Rp.50.000
              </p>
              <p
                className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Linear_Sans_Trial:Regular'] leading-[normal] line-through not-italic text-[24px] text-black tracking-[-1.2px]"
                data-node-id="118:3372"
              >
                Rp.150.000
              </p>
            </div>

            {/* Rating & Sold Count */}
            <div className="flex items-center gap-3 mt-4 mb-6">
              <p
                className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-black tracking-[-0.9px]"
                data-node-id="118:3382"
              >
                {book.rating}
              </p>
              <div
                className="h-[19px] w-[20px]"
                data-node-id="118:3385"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="block size-full"
                  src={FIGMA_ASSETS.starVector}
                />
              </div>
              <p
                className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-black tracking-[-0.9px] ml-2"
                data-node-id="118:3387"
              >
                {book.soldCount}
              </p>
            </div>

            {/* Middle Divider Line */}
            <div className="w-full mb-[30px]" data-node-id="118:3388">
              <img
                alt=""
                className="block w-full h-[1px]"
                src={FIGMA_ASSETS.lineHalf620}
              />
            </div>

            {/* Sinopsis */}
            <div className="mb-8">
              <p
                className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[28px] text-black tracking-[-1.4px] mb-3"
                data-node-id="118:3389"
              >
                Sinopsis
              </p>
              <p
                className="font-['Inter:Regular'] font-normal leading-[30px] not-italic text-[18px] sm:text-[20px] text-black tracking-[-1px]"
                data-node-id="118:3390"
              >
                {book.synopsis}
              </p>
            </div>

            {/* Detail Buku Metadata Grid */}
            <div className="mb-9">
              <p
                className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[28px] text-black tracking-[-1.4px] mb-5"
                data-node-id="118:3391"
              >
                Detail Buku
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                <div>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[16px] text-black tracking-[-0.8px]">
                    Penerbit
                  </p>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] mt-1">
                    {book.publisher}
                  </p>
                </div>

                <div>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[16px] text-black tracking-[-0.8px]">
                    Tahun Terbit
                  </p>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] mt-1">
                    {book.publishedYear}
                  </p>
                </div>

                <div>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[16px] text-black tracking-[-0.8px]">
                    ISBN
                  </p>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] mt-1">
                    {book.isbn}
                  </p>
                </div>

                <div>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[16px] text-black tracking-[-0.8px]">
                    Halaman
                  </p>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] mt-1">
                    {book.pages}
                  </p>
                </div>

                <div>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[16px] text-black tracking-[-0.8px]">
                    Bahasa
                  </p>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] mt-1">
                    {book.language}
                  </p>
                </div>

                <div>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[16px] text-black tracking-[-0.8px]">
                    Berat
                  </p>
                  <p className="font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] mt-1">
                    {book.weight}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons: Pesan & Masukkan Keranjang */}
            <div className="flex flex-col gap-[15px]">
              <button
                type="button"
                onClick={handleBuyNow}
                className="bg-black flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px] w-full cursor-pointer"
                data-node-id="118:3257"
              >
                <span
                  className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-center text-white tracking-[-1.1px] whitespace-nowrap"
                  data-node-id="118:3258"
                >
                  Pesan
                </span>
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="bg-white border-2 border-black border-solid flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px] w-full cursor-pointer"
                data-node-id="118:3411"
              >
                <span
                  className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-black text-center tracking-[-1.1px] whitespace-nowrap"
                  data-node-id="118:3412"
                >
                  Masukkan Keranjang
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
