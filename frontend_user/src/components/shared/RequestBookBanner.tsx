import { Link } from '@tanstack/react-router';
import { FIGMA_ASSETS } from '@/data/figmaAssets';

/**
 * Yellow CTA Banner ("Buku yang kamu cari tidak ada?")
 * 100% identical to Figma node 25:762 / 110:2664 / 118:3212 / 118:3008
 * Responsive container up to 1440px, min-h-[520px], bg-[#ffed78]
 */
export function RequestBookBanner() {
  return (
    <section
      className="bg-[#ffed78] min-h-[420px] lg:min-h-[520px] w-full flex items-center justify-center px-4 sm:px-8 py-16"
      data-node-id="25:762"
    >
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center">
        <p
          className="font-['Linear_Sans_Trial:Regular'] leading-[1.1] not-italic text-[36px] sm:text-[48px] lg:text-[60px] text-black tracking-[-2px] lg:tracking-[-3px]"
          data-node-id="25:767"
        >
          <span>{`Buku yang kamu cari `}</span>
          <span className="font-['Linear_Sans_Trial:Italic']">tidak ada</span>
          <span>?</span>
        </p>

        <div
          className="font-['Inter:Regular'] font-normal leading-[30px] not-italic text-[18px] sm:text-[22px] text-black tracking-[-1.1px] mt-[30px] max-w-[540px]"
          data-node-id="25:772"
        >
          <p className="mb-0">{`Yuk isi formulir tentang buku apa yang kamu sedang `}</p>
          <p>cari, siapa tahu kami punya!</p>
        </div>

        <Link
          to="/request-buku"
          className="mt-[45px] bg-black inline-flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px]"
          data-node-id="25:768"
        >
          <span
            className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-center text-white tracking-[-0.9px] whitespace-nowrap"
            data-node-id="25:769"
          >
            Request Buku
          </span>
          <span
            className="relative shrink-0 size-[20px]"
            data-node-id="25:770"
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
    </section>
  );
}
