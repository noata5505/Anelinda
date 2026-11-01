import { Link } from '@tanstack/react-router';
import { RequestBookBanner } from '@/components/shared/RequestBookBanner';
import { FIGMA_ASSETS, NEWS_ARTICLES } from '@/data/figmaAssets';

/**
 * Berita List Page — 100% identical to Figma Desktop - 4 (node 110:2529)
 * Responsive across mobile, tablet, laptop (1280px–1366px), and 1440px desktop.
 */
export function BeritaListPage() {
  const featuredArticle = NEWS_ARTICLES[0]!;
  const gridArticles = [
    NEWS_ARTICLES[1]!,
    NEWS_ARTICLES[2]!,
    NEWS_ARTICLES[3]!,
  ] as const;

  return (
    <div
      className="bg-[#faf7f0] relative w-full overflow-x-hidden"
      data-node-id="110:2529"
    >
      {/* News Content Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] pt-12 sm:pt-[95px] pb-16 sm:pb-[100px]">
        {/* Top Divider Line */}
        <div
          className="w-full h-[1px] bg-black mb-7 sm:mb-[30px]"
          data-node-id="110:2513"
        />

        {/* Eyebrow: Berita */}
        <div className="flex items-center gap-[10px] mb-3 sm:mb-[15px]">
          <div
            className="bg-black size-[12px] shrink-0"
            data-node-id="110:2515"
          />
          <p
            className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[20px] sm:text-[22px] text-black whitespace-nowrap"
            data-node-id="110:2514"
          >
            Berita
          </p>
        </div>

        {/* Main Title: Kabar Terbaru dari Anelinda Books */}
        <h1
          className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] sm:leading-[58px] not-italic text-[32px] sm:text-[42px] lg:text-[48px] text-black tracking-[-1.6px] sm:tracking-[-2.4px] max-w-[738px] mb-10 sm:mb-[47px]"
          data-node-id="110:2516"
        >
          Kabar Terbaru dari Anelinda Books
        </h1>

        {/* Featured Large News Card (1280 × 386 on 1440px desktop) */}
        <Link
          to="/berita/$slug"
          params={{ slug: featuredArticle.slug }}
          className="group block bg-white rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] p-6 sm:p-8 xl:px-[45px] xl:py-[35px] mb-8 sm:mb-[35px]"
          data-node-id="110:2517"
        >
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-10">
            {/* Left Text Column */}
            <div className="flex-1 max-w-[638px] flex flex-col justify-between">
              <div>
                <p
                  className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[24px] sm:text-[28px] text-black tracking-[-1.4px] max-w-[429px] group-hover:underline mb-4 sm:mb-[17px]"
                  data-node-id="110:2520"
                >
                  {featuredArticle.title}
                </p>

                <p
                  className="font-['Inter:Regular'] font-normal leading-[28px] sm:leading-[30px] not-italic text-[17px] sm:text-[20px] text-black tracking-[-1px]"
                  data-node-id="110:2639"
                >
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="mt-8 lg:mt-[98px]">
                <div
                  className="w-full h-[1px] bg-black mb-4 sm:mb-[20px]"
                  data-node-id="110:2519"
                />

                <div className="flex items-center justify-between gap-4">
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] sm:text-[20px] text-black tracking-[-1px] whitespace-nowrap"
                    data-node-id="110:2521"
                  >
                    {featuredArticle.category}
                  </p>
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] sm:text-[20px] text-black tracking-[-1px] whitespace-nowrap"
                    data-node-id="110:2522"
                  >
                    {featuredArticle.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div
              className="w-full lg:w-[44%] xl:w-[516px] h-[220px] sm:h-[280px] lg:h-[316px] rounded-[10px] overflow-hidden shrink-0"
              data-node-id="110:2518"
            >
              <img
                alt={featuredArticle.title}
                fetchPriority="high"
                className="w-full h-full object-cover pointer-events-none rounded-[10px]"
                src={featuredArticle.imageUrl}
              />
            </div>
          </div>
        </Link>

        {/* 3-Column Secondary News Cards (410 × 312 on 1440px desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[25px]">
          {gridArticles.map((article) => (
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
