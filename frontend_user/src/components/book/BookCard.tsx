import { Link } from '@tanstack/react-router';
import type { CatalogBook } from '@/data/figmaAssets';

interface BookCardProps {
  book: CatalogBook;
}

/**
 * BookCard — 100% identical to Figma Group 25/26/27/28
 * Fluid width inside 4-column grid (305 × 349 cover aspect ratio at 1440px desktop)
 */
export function BookCard({ book }: BookCardProps) {
  return (
    <Link
      to="/koleksi/$slug"
      params={{ slug: book.slug }}
      className="flex flex-col w-full group"
    >
      {/* Cover Image Container (aspect 305/349, border-2 border-[#ede9de], rounded-[20px]) */}
      <div className="relative w-full aspect-[305/349] border-2 border-[#ede9de] border-solid rounded-[20px] shadow-[0px_4px_4px_0px_rgba(237,233,222,0.65)] overflow-hidden bg-white">
        <img
          alt={book.title}
          loading="lazy"
          className="inset-0 object-cover pointer-events-none rounded-[20px] size-full"
          src={book.coverUrl}
        />

        {/* Optional Badge (left: 20px, top: 20px, rounded-[20px]) */}
        {book.badge && (
          <div
            style={{ backgroundColor: book.badge.bgColor }}
            className="absolute left-[16px] xl:left-[20px] top-[16px] xl:top-[20px] inline-flex items-center justify-center px-[15px] py-[6px] rounded-[20px]"
          >
            <p className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[15px] xl:text-[16px] text-black text-center whitespace-nowrap">
              {book.badge.label}
            </p>
          </div>
        )}
      </div>

      {/* Book Title */}
      <p className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] xl:text-[24px] text-black mt-[24px] group-hover:underline">
        {book.title}
      </p>

      {/* Author */}
      <p className="font-['Inter:Regular'] font-normal leading-[normal] not-italic text-[16px] text-black mt-[6px]">
        {book.author}
      </p>

      {/* Price & Optional Strikethrough Price */}
      <div className="flex items-baseline gap-[10px] mt-[8px]">
        <p className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[20px] text-black whitespace-nowrap">
          {book.priceDisplay}
        </p>

        {book.originalPriceDisplay && (
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Linear_Sans_Trial:Regular'] leading-[normal] line-through not-italic text-[18px] text-black whitespace-nowrap">
            {book.originalPriceDisplay}
          </p>
        )}
      </div>
    </Link>
  );
}
