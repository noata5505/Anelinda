import { Link } from '@tanstack/react-router';
import { RequestBookBanner } from '@/components/shared/RequestBookBanner';
import { FIGMA_ASSETS, NEWS_ARTICLES } from '@/data/figmaAssets';

const ARTICLE_PARAGRAPH =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit. Suspendisse id porta risus. Nam fermentum erat diam, et hendrerit felis eleifend sed. Nunc semper nibh non lectus tempus facilisis. Quisque quis leo accumsan, varius odio sit amet, semper orci. In hac habitasse platea dictumst. Donec nibh neque, aliquam nec fringilla at, consequat sed mi. Vestibulum metus elit, porttitor ac orci non, aliquet viverra metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent quis dui est. Duis vulputate risus eu ex mollis, ut pulvinar mauris luctus.';

/**
 * Detail Berita Page — 100% identical to Figma Desktop - 5 (node 118:2853)
 * Responsive across mobile, tablet, laptop (1280px–1366px), and 1440px desktop.
 */
export function BeritaDetailPage() {
  const relatedArticles = [
    NEWS_ARTICLES[1]!,
    NEWS_ARTICLES[2]!,
    NEWS_ARTICLES[3]!,
  ] as const;

  return (
    <div
      className="bg-[#faf7f0] relative w-full overflow-x-hidden"
      data-node-id="118:2853"
    >
      {/* Article Header Frame (680px centered container) */}
      <section
        className="w-full max-w-[680px] mx-auto px-4 sm:px-6 md:px-0 pt-12 sm:pt-[95px] pb-12 sm:pb-[85px]"
        data-node-id="118:2950"
      >
        <div
          className="h-[1px] bg-black w-full mb-7 sm:mb-[30px]"
          data-node-id="118:2890"
        />

        <div className="flex items-center gap-[10px] mb-3 sm:mb-[15px]">
          <div
            className="bg-black size-[12px] shrink-0"
            data-node-id="118:2892"
          />
          <p
            className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[20px] sm:text-[22px] text-black whitespace-nowrap"
            data-node-id="118:2891"
          >
            Berita
          </p>
        </div>

        <h1
          className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] sm:leading-[58px] not-italic text-[32px] sm:text-[42px] lg:text-[48px] text-black tracking-[-1.6px] sm:tracking-[-2.4px] mb-4 sm:mb-[15px]"
          data-node-id="118:2893"
        >
          Kabar Terbaru dari Anelinda Books
        </h1>

        <p
          className="font-['Inter:Regular'] font-normal leading-[28px] sm:leading-[30px] not-italic text-[17px] sm:text-[20px] text-black tracking-[-1px] mb-6 sm:mb-[25px]"
          data-node-id="118:2940"
        >
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi augue, lacinia quis iaculis at, scelerisque congue urna. Pellentesque non diam hendrerit, malesuada elit eget, pulvinar elit.\u00a0`}
        </p>

        {/* Author Avatar & Meta */}
        <div className="flex flex-wrap items-center gap-[15px]">
          <div
            className="size-[45px] rounded-full overflow-hidden border border-[#ede9de] shrink-0"
            data-node-id="118:2942"
          >
            <img
              alt="Admin Maria"
              className="size-full object-cover"
              src={FIGMA_ASSETS.aboutEditorialPhoto}
            />
          </div>
          <p
            className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] text-black tracking-[-0.9px] whitespace-nowrap"
            data-node-id="118:2943"
          >
            Admin Maria
          </p>
          <p
            className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] text-black tracking-[-0.9px] whitespace-nowrap ml-2"
            data-node-id="118:2946"
          >
            20 Oktober 2023
          </p>
        </div>
      </section>

      {/* Full-Width Hero Image (1440 × 352, node 118:2948) */}
      <div
        className="relative h-[220px] sm:h-[300px] lg:h-[352px] w-full max-w-[1440px] mx-auto overflow-hidden"
        data-node-id="118:2948"
      >
        <img
          alt="Kabar Terbaru dari Anelinda Books"
          fetchPriority="high"
          className="w-full h-full object-cover pointer-events-none"
          src={FIGMA_ASSETS.heroBannerBg}
        />
      </div>

      {/* Article Body Content (680px centered container) */}
      <article className="w-full max-w-[680px] mx-auto px-4 sm:px-6 md:px-0 pt-12 sm:pt-[95px] pb-12 sm:pb-[95px]">
        <h2
          className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] sm:leading-[58px] not-italic text-[28px] sm:text-[36px] text-black tracking-[-1.8px] mb-5 sm:mb-[20px]"
          data-node-id="118:2952"
        >
          Subjudul
        </h2>

        <p
          className="font-['Inter:Regular'] font-normal leading-[28px] sm:leading-[30px] not-italic text-[17px] sm:text-[20px] text-black tracking-[-1px] mb-8 sm:mb-[25px]"
          data-node-id="118:2954"
        >
          {ARTICLE_PARAGRAPH}
        </p>

        <p
          className="font-['Inter:Regular'] font-normal leading-[28px] sm:leading-[30px] not-italic text-[17px] sm:text-[20px] text-black tracking-[-1px] mb-8 sm:mb-[25px]"
          data-node-id="118:2964"
        >
          {ARTICLE_PARAGRAPH}
        </p>

        <div
          className="h-[220px] sm:h-[295px] rounded-[25px] w-full overflow-hidden"
          data-node-id="118:2965"
        >
          <img
            alt=""
            loading="lazy"
            className="w-full h-full object-cover pointer-events-none rounded-[25px]"
            src={FIGMA_ASSETS.heroBannerBg}
          />
        </div>
      </article>

      {/* Related Articles Section: Lanjut Membaca (node 118:2966) */}
      <section
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] pt-8 sm:pt-[40px] pb-16 sm:pb-[95px]"
        data-node-id="118:2966"
      >
        <div className="flex items-center gap-[10px] mb-8 sm:mb-[35px]">
          <div
            className="bg-black size-[12px] shrink-0"
            data-node-id="118:2969"
          />
          <p
            className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[20px] sm:text-[22px] text-black whitespace-nowrap"
            data-node-id="118:2968"
          >
            Lanjut Membaca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[25px]">
          {relatedArticles.map((article) => (
            <Link
              key={article.id}
              to="/berita/$slug"
              params={{ slug: article.slug }}
              className="group bg-white min-h-[260px] lg:h-[312px] rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] p-6 sm:p-8 xl:px-[45px] xl:py-[45px] flex flex-col justify-between"
            >
              <p className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[20px] xl:text-[22px] text-black tracking-[-1.1px] group-hover:underline">
                {article.title}
              </p>

              <div className="mt-8">
                <div className="w-full h-[1px] bg-black mb-[14px]" />
                <div className="flex items-center justify-between gap-2">
                  <p className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[16px] xl:text-[18px] text-black tracking-[-0.9px] whitespace-nowrap">
                    {article.category}
                  </p>
                  <p className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[16px] xl:text-[18px] text-black tracking-[-0.9px] whitespace-nowrap">
                    {article.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Request Book Yellow Banner */}
      <RequestBookBanner />
    </div>
  );
}
