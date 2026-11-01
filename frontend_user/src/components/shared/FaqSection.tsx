import { useState } from 'react';
import { FAQ_ITEMS, FIGMA_ASSETS } from '@/data/figmaAssets';

/**
 * FAQ Section — 100% identical to Figma Frame 29 / Frame 31 (node 102:2205 / 118:3413 / 133:3568)
 * Responsive container up to 1440px, bg-white
 */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section
      className="bg-white w-full"
      data-node-id="118:3413"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] py-[72px] lg:py-[96px]">
        <div className="w-full mb-[30px]" data-node-id="118:3414">
          <img
            alt=""
            className="block w-full h-[1px]"
            src={FIGMA_ASSETS.lineFull1280}
          />
        </div>

        <div className="flex items-center gap-[10px] mb-3">
          <div
            className="bg-black size-[12px] shrink-0"
            data-node-id="118:3416"
          />
          <p
            className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
            data-node-id="118:3415"
          >
            Punya Pertanyaan?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[60px] items-start">
          {/* Left Heading */}
          <div className="lg:col-span-6">
            <p
              className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[36px] sm:text-[42px] xl:text-[48px] text-black tracking-[-2.4px]"
              data-node-id="118:3417"
            >
              Pertanyaan yang Sering Ditanyakan
            </p>
          </div>

          {/* Right Column Accordion Items */}
          <div className="lg:col-span-6 flex flex-col gap-[24px] w-full">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.id}
                  className="bg-[#ffed78] rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] w-full overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
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
    </section>
  );
}
