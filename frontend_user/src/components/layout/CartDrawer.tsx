import { useNavigate } from '@tanstack/react-router';
import { FIGMA_ASSETS } from '@/data/figmaAssets';
import { formatIDRFigma } from '@/lib/format';
import { useCartStore } from '@/stores/useCartStore';
import { useUiStore } from '@/stores/useUiStore';

/**
 * Shopping Cart Slide-Over Drawer — 100% identical to Figma Frame 32 (node 102:2288)
 * Responsive width up to 568px anchored to right side.
 */
export function CartDrawer() {
  const navigate = useNavigate();
  const { activeOverlay, closeOverlays } = useUiStore();
  const { items, incrementItem, decrementItem } = useCartStore();

  if (activeOverlay !== 'cart') {
    return null;
  }

  const handleCheckout = () => {
    closeOverlays();
    void navigate({ to: '/checkout' });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop click area */}
      <div
        className="fixed inset-0 bg-black/15"
        onClick={closeOverlays}
        aria-hidden="true"
      />

      {/* Drawer Panel (max-w-[568px], min-h-[737px]) */}
      <aside
        aria-label="Keranjang Belanja"
        className="relative z-10 bg-[#faf7f0] w-full max-w-[568px] min-h-[620px] max-h-screen overflow-y-auto mt-[118px] px-6 sm:px-[55px] py-[45px] flex flex-col justify-between shadow-xl border-l-2 border-[#ede9de]"
        data-node-id="102:2324"
      >
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-8">
            <p
              className="font-['Linear_Sans_Trial:Regular'] leading-[58px] not-italic text-[32px] sm:text-[36px] text-black tracking-[-1.8px]"
              data-node-id="102:2326"
            >
              Keranjang
            </p>

            <button
              type="button"
              onClick={closeOverlays}
              aria-label="Tutup keranjang"
              className="size-[30px] cursor-pointer shrink-0"
              data-node-id="102:2386"
              data-name="fi:x"
            >
              <img
                alt=""
                className="block size-full"
                src={FIGMA_ASSETS.fiXDrawer}
              />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col">
            {items.map((item, idx) => (
              <div key={item.id}>
                <div className="flex items-start gap-5 sm:gap-[36px] py-4">
                  {/* Cover Thumbnail (130 × 107) */}
                  <div className="bg-white border-2 border-[#ede9de] border-solid h-[107px] w-[130px] rounded-[15px] overflow-hidden shrink-0">
                    <img
                      alt={item.title}
                      className="object-cover pointer-events-none rounded-[15px] size-full"
                      src={item.coverUrl}
                    />
                  </div>

                  {/* Details & Controls */}
                  <div className="flex-1 min-w-0">
                    <p className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-black">
                      {item.title}
                    </p>
                    <p className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-black mt-1">
                      {item.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                      {/* Quantity Control */}
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => decrementItem(item.id)}
                          aria-label="Kurangi jumlah"
                          className="relative size-[30px] cursor-pointer shrink-0"
                        >
                          <img
                            alt=""
                            className="block size-full"
                            src={FIGMA_ASSETS.ellipseCartControl}
                          />
                          <span className="absolute left-[6px] top-[6px] size-[18px]">
                            <img
                              alt=""
                              className="block size-full"
                              src={FIGMA_ASSETS.fiMinusSmall}
                            />
                          </span>
                        </button>

                        <span className="font-['Linear_Sans_Trial:Regular'] text-[22px] text-black min-w-[16px] text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => incrementItem(item.id)}
                          aria-label="Tambah jumlah"
                          className="relative size-[30px] cursor-pointer shrink-0"
                        >
                          <img
                            alt=""
                            className="block size-full"
                            src={FIGMA_ASSETS.ellipseCartControl}
                          />
                          <span className="absolute left-[6px] top-[6px] size-[18px]">
                            <img
                              alt=""
                              className="block size-full"
                              src={FIGMA_ASSETS.fiPlusSmall}
                            />
                          </span>
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-['Linear_Sans_Trial:Semi_Bold'] leading-[normal] not-italic text-[20px] sm:text-[22px] text-black text-right whitespace-nowrap">
                        {formatIDRFigma(item.unit_price_idr * item.quantity, true)}
                      </p>
                    </div>
                  </div>
                </div>

                {idx < items.length - 1 && (
                  <div className="my-2 w-full">
                    <img
                      alt=""
                      className="block w-full h-[1px]"
                      src={FIGMA_ASSETS.lineCart453}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Buat Pesanan CTA Button */}
        <button
          type="button"
          onClick={handleCheckout}
          className="mt-10 bg-black flex gap-[10px] h-[55px] w-full items-center justify-center px-[30px] py-[10px] rounded-[27px] cursor-pointer"
          data-node-id="102:2379"
        >
          <span
            className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-center text-white tracking-[-1.1px] whitespace-nowrap"
            data-node-id="102:2380"
          >
            Buat Pesanan
          </span>
        </button>
      </aside>
    </div>
  );
}
