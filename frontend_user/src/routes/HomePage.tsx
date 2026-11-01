import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { BookCard } from '@/components/book/BookCard';
import { RequestBookBanner } from '@/components/shared/RequestBookBanner';
import { CATALOG_BOOKS, FAQ_ITEMS, FIGMA_ASSETS } from '@/data/figmaAssets';

/**
 * Landing Page (Beranda) — 100% identical to Figma Desktop - 1 (node 2:6)
 * Fully responsive across laptop (1280px–1366px), desktop (1440px+), tablet, and mobile.
 */
export function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1);

  return (
    <div className="bg-white w-full" data-node-id="2:6">
      {/* Hero Section (min-h-[540px] lg:h-[737px], node 25:1115) */}
      <section
        className="relative min-h-[520px] lg:h-[737px] w-full overflow-hidden flex items-start"
        data-node-id="25:1115"
      >
        <img
          alt="Toko Buku Anelinda Books"
          fetchPriority="high"
          className="absolute inset-0 object-cover pointer-events-none size-full"
          src={FIGMA_ASSETS.heroBannerBg}
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] pt-[75px] lg:pt-[95px] pb-20">
          <div className="flex flex-col gap-[30px] items-start max-w-[716px]">
            <h1
              className="font-['Linear_Sans_Trial:Regular'] leading-[1.05] not-italic text-[38px] sm:text-[48px] lg:text-[60px] text-white tracking-[-2px] lg:tracking-[-3px]"
              data-node-id="25:1165"
            >
              Selamat Datang di Website Anelinda Books!
            </h1>

            <Link
              to="/koleksi"
              className="bg-[#ffed78] inline-flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px]"
              data-node-id="25:1167"
            >
              <span
                className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-black text-center tracking-[-0.9px] whitespace-nowrap"
                data-node-id="25:1168"
              >
                Jelajahi Koleksi Kami
              </span>
              <span
                className="relative shrink-0 size-[20px]"
                data-node-id="76:1749"
                data-name="fi:arrow-right"
              >
                <img
                  alt=""
                  className="block size-full"
                  src={FIGMA_ASSETS.fiArrowRightBlack}
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Pagination Dots */}
        <div
          className="absolute bottom-[30px] left-1/2 -translate-x-1/2 h-[30px] w-[74px]"
          data-node-id="76:1763"
        >
          <img
            alt=""
            className="block size-full"
            src={FIGMA_ASSETS.heroDots}
          />
        </div>
      </section>

      {/* Section 1: Pilihan Pembaca / Terlaris + Section 2: Koleksi Buku Kami / Semua Buku Pilihan */}
      <section className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] pt-[72px] lg:pt-[96px] pb-[72px] lg:pb-[96px]">
          {/* Subsection 1: Terlaris */}
          <div className="mb-[72px] lg:mb-[96px]">
            <div className="w-full mb-[30px]" data-node-id="29:1230">
              <img
                alt=""
                className="block w-full h-[1px]"
                src={FIGMA_ASSETS.lineFull1280}
              />
            </div>

            <div className="flex items-center gap-[10px] mb-2">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="29:1232"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                data-node-id="29:1231"
              >
                Pilihan Pembaca
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 mb-[35px]">
              <h2
                className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[36px] sm:text-[42px] xl:text-[48px] text-black tracking-[-2.4px]"
                data-node-id="29:1233"
              >
                Terlaris
              </h2>

              <div className="flex items-center gap-[15px] shrink-0">
                <button
                  type="button"
                  aria-label="Sebelumnya"
                  className="size-[48px] sm:size-[58px] cursor-pointer"
                  data-node-id="76:1811"
                >
                  <img
                    alt=""
                    className="block size-full"
                    src={FIGMA_ASSETS.carouselPrevGroup}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Selanjutnya"
                  className="size-[48px] sm:size-[58px] cursor-pointer"
                  data-node-id="76:1810"
                >
                  <img
                    alt=""
                    className="block size-full"
                    src={FIGMA_ASSETS.carouselNextGroup}
                  />
                </button>
              </div>
            </div>

            {/* 4-Column Book Cards Row 1 (Terlaris) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {CATALOG_BOOKS.map((book) => (
                <BookCard key={`terlaris-${book.id}`} book={book} />
              ))}
            </div>

            {/* Centered CTA Button */}
            <div className="flex justify-center mt-[45px]">
              <Link
                to="/koleksi"
                className="bg-[#ffed78] inline-flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px]"
                data-node-id="76:1768"
              >
                <span
                  className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-black text-center tracking-[-0.9px] whitespace-nowrap"
                  data-node-id="76:1769"
                >
                  Jelajahi Koleksi Kami
                </span>
                <span
                  className="relative shrink-0 size-[20px]"
                  data-node-id="76:1770"
                  data-name="fi:arrow-right"
                >
                  <img
                    alt=""
                    className="block size-full"
                    src={FIGMA_ASSETS.fiArrowRightBlack}
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* Subsection 2: Semua Buku Pilihan */}
          <div>
            <div className="w-full mb-[30px]" data-node-id="29:1280">
              <img
                alt=""
                className="block w-full h-[1px]"
                src={FIGMA_ASSETS.lineFull1280}
              />
            </div>

            <div className="flex items-center gap-[10px] mb-2">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="29:1282"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                data-node-id="29:1281"
              >
                Koleksi Buku Kami
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 mb-[35px]">
              <h2
                className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[36px] sm:text-[42px] xl:text-[48px] text-black tracking-[-2.4px]"
                data-node-id="29:1283"
              >
                Semua Buku Pilihan
              </h2>

              <div className="flex items-center gap-[15px] shrink-0">
                <button
                  type="button"
                  aria-label="Sebelumnya"
                  className="size-[48px] sm:size-[58px] cursor-pointer"
                  data-node-id="76:1836"
                >
                  <img
                    alt=""
                    className="block size-full"
                    src={FIGMA_ASSETS.carouselPrevGroup}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Selanjutnya"
                  className="size-[48px] sm:size-[58px] cursor-pointer"
                  data-node-id="76:1833"
                >
                  <img
                    alt=""
                    className="block size-full"
                    src={FIGMA_ASSETS.carouselNextGroup}
                  />
                </button>
              </div>
            </div>

            {/* 4-Column Book Cards Row 2 (Semua Buku Pilihan) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {CATALOG_BOOKS.map((book) => (
                <BookCard key={`semua-${book.id}`} book={book} />
              ))}
            </div>

            {/* Centered CTA Button */}
            <div className="flex justify-center mt-[45px]">
              <Link
                to="/koleksi"
                className="bg-[#ffed78] inline-flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px]"
                data-node-id="76:1804"
              >
                <span
                  className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-black text-center tracking-[-0.9px] whitespace-nowrap"
                  data-node-id="76:1805"
                >
                  Jelajahi Koleksi Kami
                </span>
                <span
                  className="relative shrink-0 size-[20px]"
                  data-node-id="76:1806"
                  data-name="fi:arrow-right"
                >
                  <img
                    alt=""
                    className="block size-full"
                    src={FIGMA_ASSETS.fiArrowRightBlack}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Request Buku Yellow Banner */}
      <RequestBookBanner />

      {/* Section 4: Tentang Kami & Temukan Kami Dimana Saja (bg-[#faf7f0], node 31:1339) */}
      <section
        id="tentang-kami"
        className="bg-[#faf7f0] w-full"
        data-node-id="31:1339"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] py-[72px] lg:py-[95px]">
          {/* Subsection 4A: Tentang Kami */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[60px] items-start mb-[72px] lg:mb-[95px]">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <div className="w-full mb-[30px]" data-node-id="31:1343">
                <img
                  alt=""
                  className="block w-full h-[1px]"
                  src={FIGMA_ASSETS.lineHalf580}
                />
              </div>

              <div className="flex items-center gap-[10px] mb-3">
                <div
                  className="bg-black size-[12px] shrink-0"
                  data-node-id="31:1345"
                />
                <p
                  className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                  data-node-id="31:1344"
                >
                  Tentang Kami
                </p>
              </div>

              <h2
                className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[34px] sm:text-[42px] xl:text-[48px] text-black tracking-[-2.4px] mb-5"
                data-node-id="31:1346"
              >
                Sahabat kolektor sejak 1998, dari buku terbaru sampai buku antik
              </h2>

              <p
                className="font-['Inter:Regular'] font-normal leading-[30px] not-italic text-[18px] sm:text-[22px] text-black tracking-[-1.1px]"
                data-node-id="33:1392"
              >
                Kami menjual semua buku terbitan terbaru, dan membantu menemukan buku antik yang susah dicari untuk koleksimu.
              </p>
            </div>

            {/* Right Editorial Image */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full aspect-[640/356] rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] overflow-hidden"
                data-node-id="31:1336"
              >
                <img
                  alt="Tentang Anelinda Books"
                  loading="lazy"
                  className="inset-0 object-cover pointer-events-none rounded-[25px] size-full"
                  src={FIGMA_ASSETS.aboutEditorialPhoto}
                />
                <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 h-[30px] w-[74px]">
                  <img
                    alt=""
                    className="block size-full"
                    src={FIGMA_ASSETS.heroDots}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Subsection 4B: Sosial Media, Toko Offline, dan Online / Temukan Kami Dimana Saja */}
          <div>
            <div className="w-full mb-[30px]" data-node-id="36:1520">
              <img
                alt=""
                className="block w-full h-[1px]"
                src={FIGMA_ASSETS.lineFull1280}
              />
            </div>

            <div className="flex items-center gap-[10px] mb-3">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="36:1522"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                data-node-id="36:1521"
              >
                Sosial Media, Toko Offline, dan Online
              </p>
            </div>

            <h2
              className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[34px] sm:text-[42px] xl:text-[48px] text-black tracking-[-2.4px] mb-[35px]"
              data-node-id="36:1523"
            >
              Temukan Kami Dimana Saja
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Card: Offline Store (lg:col-span-7) */}
              <div
                className="lg:col-span-7 bg-white rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] p-6 sm:p-[40px] flex flex-col md:flex-row items-center justify-between gap-6"
                data-node-id="33:1411"
              >
                <div className="flex flex-col items-start">
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[24px] text-black mb-4"
                    data-node-id="36:1556"
                  >
                    Main ke Anelinda Books <span className="font-['Linear_Sans_Trial:Italic']">yuk!</span>
                  </p>

                  <div className="space-y-2.5 font-['Inter:Regular'] font-normal text-[18px] xl:text-[20px] text-black">
                    <p data-node-id="36:1557">📍 BSD City, Tangerang Selatan</p>
                    <p data-node-id="33:1413">📅 Senin-Sabtu</p>
                    <p data-node-id="36:1558">🕙 10.00-18.00</p>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Anelinda+Books+BSD+City+Tangerang+Selatan"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 bg-black inline-flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px]"
                    data-node-id="82:1855"
                  >
                    <span
                      className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-center text-white tracking-[-0.9px] whitespace-nowrap"
                      data-node-id="82:1856"
                    >
                      Google Maps
                    </span>
                    <span
                      className="relative shrink-0 size-[20px]"
                      data-node-id="82:1857"
                      data-name="fi:arrow-right"
                    >
                      <img
                        alt=""
                        className="block size-full"
                        src={FIGMA_ASSETS.fiArrowRightWhite}
                      />
                    </span>
                  </a>
                </div>

                {/* Storefront Photo */}
                <div
                  className="w-full md:w-[280px] xl:w-[356px] h-[260px] xl:h-[308px] rounded-[25px] overflow-hidden shrink-0"
                  data-node-id="33:1412"
                >
                  <img
                    alt="Toko Fisik Anelinda Books BSD City"
                    loading="lazy"
                    className="object-cover pointer-events-none rounded-[25px] size-full"
                    src={FIGMA_ASSETS.storeFrontPhoto}
                  />
                </div>
              </div>

              {/* Right Card: Social Media & Toko Online (lg:col-span-5) */}
              <div
                className="lg:col-span-5 bg-white rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] p-6 sm:p-[40px] flex flex-col items-center justify-center gap-7"
                data-node-id="33:1427"
              >
                {/* Social Media Row */}
                <div className="flex flex-col items-center gap-4">
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] xl:text-[24px] text-black"
                    data-node-id="36:1524"
                  >
                    Sosial Media
                  </p>
                  <div className="flex items-center gap-6">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="relative size-[75px] xl:size-[85px] flex items-center justify-center"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 size-full"
                        src={FIGMA_ASSETS.ellipseStoreSocial}
                      />
                      <img
                        alt=""
                        className="relative size-[28px]"
                        src={FIGMA_ASSETS.iconInstagram}
                      />
                    </a>
                    <a
                      href="https://www.tiktok.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TikTok"
                      className="relative size-[75px] xl:size-[85px] flex items-center justify-center"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 size-full"
                        src={FIGMA_ASSETS.ellipseStoreSocial}
                      />
                      <img
                        alt=""
                        className="relative size-[28px]"
                        src={FIGMA_ASSETS.iconTiktok}
                      />
                    </a>
                  </div>
                </div>

                {/* Toko Online Row */}
                <div className="flex flex-col items-center gap-4">
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] xl:text-[24px] text-black"
                    data-node-id="36:1555"
                  >
                    Toko Online
                  </p>
                  <div className="flex items-center gap-5">
                    <a
                      href="https://shopee.co.id"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Shopee"
                      className="relative size-[75px] xl:size-[85px] flex items-center justify-center"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 size-full"
                        src={FIGMA_ASSETS.ellipseStoreSocial}
                      />
                      <img
                        alt=""
                        className="relative h-[28px] w-[25px]"
                        src={FIGMA_ASSETS.iconShopee}
                      />
                    </a>
                    <a
                      href="https://www.tokopedia.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Tokopedia"
                      className="relative size-[75px] xl:size-[85px] flex items-center justify-center"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 size-full"
                        src={FIGMA_ASSETS.ellipseStoreSocial}
                      />
                      <img
                        alt=""
                        className="relative h-[28px] w-[25px]"
                        src={FIGMA_ASSETS.iconTokopedia}
                      />
                    </a>
                    <a
                      href="https://toco.id"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Toco"
                      className="relative size-[75px] xl:size-[85px] flex items-center justify-center"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 size-full"
                        src={FIGMA_ASSETS.ellipseStoreSocial}
                      />
                      <img
                        alt=""
                        className="relative h-[22px] w-[34px]"
                        src={FIGMA_ASSETS.iconToco}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Apa Kata Mereka? (Testimonials, bg-black, node 36:1619) */}
      <section
        className="bg-black w-full"
        data-node-id="36:1619"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] py-[72px] lg:py-[95px]">
          <div className="w-full mb-[30px]" data-node-id="36:1620">
            <img
              alt=""
              className="block w-full h-[1px]"
              src={FIGMA_ASSETS.lineFooter1280}
            />
          </div>

          <div className="flex items-center gap-[10px] mb-[40px]">
            <div
              className="bg-white size-[12px] shrink-0"
              data-node-id="36:1622"
            />
            <p
              className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-white"
              data-node-id="36:1621"
            >
              Apa Kata Mereka?
            </p>
          </div>

          <div className="flex items-center gap-4 lg:gap-[20px]">
            {/* Prev Arrow Button */}
            <button
              type="button"
              aria-label="Testimoni sebelumnya"
              className="hidden md:block size-[45px] shrink-0 cursor-pointer"
              data-node-id="87:1930"
            >
              <img
                alt=""
                className="block size-full"
                src={FIGMA_ASSETS.testimonialPrevGroup}
              />
            </button>

            {/* 3 Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
              {[0, 1, 2].map((cardIdx) => (
                <div
                  key={cardIdx}
                  className="bg-white rounded-[25px] p-7 xl:p-[35px] flex flex-col justify-between min-h-[340px] xl:min-h-[360px]"
                >
                  <div>
                    <div className="mb-3">
                      <img
                        alt=""
                        className="block w-full h-[1px]"
                        src={FIGMA_ASSETS.lineTestimonial298}
                      />
                    </div>
                    <p className="font-['Inter:Bold'] font-bold leading-none not-italic text-[#ffed78] text-[64px] tracking-[-3.2px] h-[42px]">
                      “
                    </p>
                    <p className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[30px] not-italic text-[21px] xl:text-[24px] text-black tracking-[-1.2px] mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna.
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="mb-3">
                      <img
                        alt=""
                        className="block w-full h-[1px]"
                        src={FIGMA_ASSETS.lineTestimonial298}
                      />
                    </div>
                    <p className="font-['Linear_Sans_Trial:Semi_Bold'] leading-[normal] not-italic text-[20px] text-black tracking-[-1px]">
                      Jane Doe
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[normal] not-italic text-[16px] text-black tracking-[-0.8px] mt-1">
                      Google Maps, 2026
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Arrow Button */}
            <button
              type="button"
              aria-label="Testimoni selanjutnya"
              className="hidden md:block size-[45px] shrink-0 cursor-pointer"
              data-node-id="87:1920"
            >
              <img
                alt=""
                className="block size-full"
                src={FIGMA_ASSETS.testimonialNextGroup}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ + Berita Terbaru (bg-white, node 37:1344) */}
      <section
        className="bg-white w-full"
        data-node-id="37:1344"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] py-[72px] lg:py-[96px]">
          {/* FAQ Part */}
          <div className="mb-[72px] lg:mb-[96px]">
            <div className="w-full mb-[30px]" data-node-id="37:1367">
              <img
                alt=""
                className="block w-full h-[1px]"
                src={FIGMA_ASSETS.lineFull1280}
              />
            </div>

            <div className="flex items-center gap-[10px] mb-3">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="37:1369"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                data-node-id="37:1368"
              >
                Punya Pertanyaan?
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[60px] items-start">
              <div className="lg:col-span-6">
                <p
                  className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[36px] sm:text-[42px] xl:text-[48px] text-black tracking-[-2.4px]"
                  data-node-id="37:1370"
                >
                  Pertanyaan yang Sering Ditanyakan
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-[24px] w-full">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={item.id}
                      className="bg-[#ffed78] rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] w-full overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="w-full min-h-[60px] px-[25px] py-[15px] flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <span className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] sm:text-[20px] text-black tracking-[-1px]">
                          {item.question}
                        </span>
                        <span className="size-[24px] shrink-0">
                          <img
                            alt=""
                            className="block size-full"
                            src={isOpen ? FIGMA_ASSETS.fiXBlack : FIGMA_ASSETS.fiPlusBlack}
                          />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-[25px] pb-[25px]">
                          <div className="mb-4">
                            <img
                              alt=""
                              className="block w-full h-[1px]"
                              src={FIGMA_ASSETS.lineFaq545}
                            />
                          </div>
                          <p className="font-['Inter:Regular'] font-normal leading-[30px] not-italic text-[18px] sm:text-[20px] text-black tracking-[-1px]">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Berita Part */}
          <div>
            <div className="w-full mb-[30px]" data-node-id="66:1395">
              <img
                alt=""
                className="block w-full h-[1px]"
                src={FIGMA_ASSETS.lineFull1280}
              />
            </div>

            <div className="flex items-center gap-[10px] mb-3">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="66:1397"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                data-node-id="66:1396"
              >
                Berita
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Heading + CTA */}
              <div className="lg:col-span-5">
                <p
                  className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[36px] sm:text-[42px] xl:text-[48px] text-black tracking-[-2.4px] mb-8"
                  data-node-id="66:1398"
                >
                  Kabar Terbaru dari Anelinda Books
                </p>

                <Link
                  to="/berita"
                  className="bg-black inline-flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px]"
                  data-node-id="66:1525"
                >
                  <span
                    className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-center text-white tracking-[-0.9px] whitespace-nowrap"
                    data-node-id="66:1526"
                  >
                    Baca Lebih Banyak
                  </span>
                  <span
                    className="relative shrink-0 size-[20px]"
                    data-node-id="66:1527"
                    data-name="fi:arrow-right"
                  >
                    <img
                      alt=""
                      className="block size-full"
                      src={FIGMA_ASSETS.fiArrowRightWhite}
                    />
                  </span>
                </Link>
              </div>

              {/* Right Featured News Card */}
              <Link
                to="/berita/$slug"
                params={{ slug: 'kabar-terbaru-anelinda-books' }}
                className="lg:col-span-7 bg-[#faf7f0] rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] p-6 sm:p-[35px] xl:p-[45px] flex flex-col justify-between group"
                data-node-id="66:1399"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[22px] text-black tracking-[-1.1px] group-hover:underline"
                    data-node-id="66:1519"
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                  </p>
                  <div
                    className="w-full sm:w-[220px] xl:w-[255px] h-[171px] rounded-[10px] overflow-hidden shrink-0"
                    data-node-id="66:1516"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      className="object-cover pointer-events-none rounded-[10px] size-full"
                      src={FIGMA_ASSETS.heroBannerBg}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-4" data-node-id="66:1518">
                    <img
                      alt=""
                      className="block w-full h-[1px]"
                      src={FIGMA_ASSETS.lineNews545}
                    />
                  </div>
                  <div className="flex items-center justify-between font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] text-black tracking-[-0.9px]">
                    <p data-node-id="66:1522">Berita</p>
                    <p data-node-id="66:1523">20 Oktober 2026</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
