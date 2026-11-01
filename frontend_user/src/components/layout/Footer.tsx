import { Link } from '@tanstack/react-router';
import { FIGMA_ASSETS } from '@/data/figmaAssets';

/**
 * Footer — 100% identical to Figma Frame 30 (node 66:1532)
 * Responsive container up to 1440px, bg-black
 */
export function Footer() {
  return (
    <footer
      className="bg-black w-full text-white"
      data-node-id="66:1532"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] pt-[75px] lg:pt-[95px] pb-[32px]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-[45px]">
          {/* Left Column: Brand + Tagline + Request Buku */}
          <div>
            <div className="flex items-center gap-[20px]">
              <div
                className="h-[32px] w-[40px] relative shrink-0"
                data-node-id="87:2010"
              >
                <img
                  alt=""
                  loading="lazy"
                  className="block size-full object-contain"
                  src={FIGMA_ASSETS.logoFooterWhite}
                />
              </div>
              <p
                className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[32px] sm:text-[40px] text-white whitespace-nowrap"
                data-node-id="66:1538"
              >
                anelinda.com
              </p>
            </div>

            <p
              className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[24px] sm:text-[28px] text-white mt-2"
              data-node-id="66:1539"
            >
              Sahabat Kolektor
            </p>

            <p
              className="font-['Linear_Sans_Trial:Regular'] not-italic text-[20px] text-white mt-10 lg:mt-[50px]"
              data-node-id="66:1553"
            >
              <span>{`Buku yang Kamu Cari `}</span>
              <span className="text-[#ffed78]">Belum ada</span>
              <span>?</span>
            </p>

            <Link
              to="/request-buku"
              className="mt-4 inline-flex bg-[#ffed78] gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px]"
              data-node-id="66:1550"
            >
              <span
                className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-black text-center tracking-[-0.9px] whitespace-nowrap"
                data-node-id="66:1551"
              >
                Request Buku
              </span>
              <span
                className="relative shrink-0 size-[20px]"
                data-node-id="66:1552"
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

          {/* Right Column: Links + Social Circles */}
          <div className="flex flex-col items-start md:items-end justify-between gap-8">
            <div
              className="flex flex-col items-start md:items-end gap-[15px] font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[20px] sm:text-[22px] text-white"
              data-node-id="66:1548"
            >
              <Link
                to="/"
                className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"
                data-node-id="66:1540"
              >
                Beranda
              </Link>
              <Link
                to="/koleksi"
                className="hover:underline"
                data-node-id="66:1545"
              >
                Koleksi
              </Link>
              <Link
                to="/berita"
                className="hover:underline"
                data-node-id="66:1546"
              >
                Berita
              </Link>
              <Link
                to="/request-buku"
                className="hover:underline"
                data-node-id="66:1547"
              >
                Request Buku
              </Link>
            </div>

            {/* Social Media Buttons */}
            <div className="flex items-center gap-[20px]">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Anelinda Books"
                className="relative size-[55px] flex items-center justify-center"
              >
                <img
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 size-full"
                  src={FIGMA_ASSETS.ellipseFooterSocial}
                />
                <img
                  alt=""
                  loading="lazy"
                  className="relative size-[25px]"
                  src={FIGMA_ASSETS.iconInstagram}
                />
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok Anelinda Books"
                className="relative size-[55px] flex items-center justify-center"
              >
                <img
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 size-full"
                  src={FIGMA_ASSETS.ellipseFooterSocial}
                />
                <img
                  alt=""
                  loading="lazy"
                  className="relative size-[25px]"
                  src={FIGMA_ASSETS.iconTiktok}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="w-full" data-node-id="87:2002">
          <img
            alt=""
            className="block w-full h-[1px]"
            src={FIGMA_ASSETS.lineFooter1280}
          />
        </div>

        <p
          className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[16px] sm:text-[18px] text-white text-center mt-5"
          data-node-id="87:2003"
        >
          © 2026 Anelinda Books
        </p>
      </div>
    </footer>
  );
}
