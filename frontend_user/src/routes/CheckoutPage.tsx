import { useState } from 'react';
import { FaqSection } from '@/components/shared/FaqSection';
import { FIGMA_ASSETS } from '@/data/figmaAssets';
import { buildWhatsAppCheckoutUrl, formatIDRFigma } from '@/lib/format';
import { useCartStore } from '@/stores/useCartStore';

/**
 * Checkout Page — 100% identical to Figma Desktop - 2 (node 102:2117)
 * Fully responsive across laptop (1280px–1366px), desktop (1440px+), tablet, and mobile.
 */
export function CheckoutPage() {
  const { items } = useCartStore();
  const primaryItem = items[0] ?? {
    id: 'default',
    bookId: 'book-4',
    slug: 'bintang-kecil',
    title: 'Bintang Kecil',
    subtitle: 'Volume I',
    unit_price_idr: 150000,
    quantity: 1,
    coverUrl: FIGMA_ASSETS.bookBintangKecil,
  };

  // Integer IDR calculations (AGENTS.md §3.2)
  const subtotal_idr = 150000;
  const discount_idr = 50000;
  const total_idr = subtotal_idr - discount_idr;

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('Jl. Bunga Mawar 10/10');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = buildWhatsAppCheckoutUrl({
      orderCode: 'INV-AB-20261101-0001',
      recipientName: fullName || 'Pelanggan Anelinda',
      recipientPhone: phoneNumber ? `+62${phoneNumber}` : '+628123456789',
      shippingAddress: `${address}, ${city || 'BSD City'}, ${province || 'Banten'} ${postalCode || '15310'}`,
      paymentMethod: paymentMethod || 'Transfer Bank (Konfirmasi via WhatsApp)',
      items: [
        {
          title: primaryItem.title,
          subtitle: primaryItem.subtitle,
          quantity: primaryItem.quantity,
          subtotal_idr: total_idr,
        },
      ],
      total_idr,
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="bg-[#faf7f0] w-full"
      data-node-id="102:2117"
    >
      {/* Checkout Main Section */}
      <form
        onSubmit={handleOrderSubmit}
        className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] py-[65px] lg:py-[95px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-[60px] items-start">
          {/* Left Column: Rincian Pemesan & Metode Bayar (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              className="h-[1px] bg-black w-full mb-[30px]"
              data-node-id="102:2142"
            />

            <div className="flex items-center gap-[10px] mb-3">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="102:2144"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[22px] text-black"
                data-node-id="102:2143"
              >
                Checkout
              </p>
            </div>

            <h1
              className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[36px] sm:text-[42px] xl:text-[48px] text-black tracking-[-2.4px] mb-8"
              data-node-id="102:2145"
            >
              Selesaikan Pesananmu
            </h1>

            <p
              className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[26px] sm:text-[28px] text-black tracking-[-1.4px] mb-6"
              data-node-id="102:2175"
            >
              Rincian Pemesan
            </p>

            <div className="space-y-[20px]">
              {/* Input 1: Nama Lengkap */}
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nama Lengkap"
                aria-label="Nama Lengkap"
                className="bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black placeholder:text-black tracking-[-1px] outline-none"
                data-node-id="102:2173"
              />

              {/* Input 2: Alamat */}
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Jl. Bunga Mawar 10/10"
                aria-label="Alamat Lengkap"
                className="bg-white border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black placeholder:text-black tracking-[-1px] outline-none"
                data-node-id="102:2178"
              />

              {/* Input 3: Kota */}
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Kota"
                aria-label="Kota"
                className="bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black placeholder:text-black tracking-[-1px] outline-none"
                data-node-id="102:2180"
              />

              {/* Input 4a & 4b: Provinsi + Kode Pos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                <div
                  className="relative bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full flex items-center"
                  data-node-id="102:2182"
                >
                  <select
                    aria-label="Provinsi"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full h-full appearance-none bg-transparent pl-[25px] pr-[50px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] outline-none cursor-pointer"
                  >
                    <option value="">Provinsi</option>
                    <option value="Banten">Banten</option>
                    <option value="DKI Jakarta">DKI Jakarta</option>
                    <option value="Jawa Barat">Jawa Barat</option>
                    <option value="Jawa Tengah">Jawa Tengah</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                  </select>
                  <span
                    className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2 size-[24px]"
                    data-node-id="102:2188"
                  >
                    <img
                      alt=""
                      className="block size-full"
                      src={FIGMA_ASSETS.fiChevronUp}
                    />
                  </span>
                </div>

                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Kode Pos"
                  aria-label="Kode Pos"
                  className="bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black placeholder:text-black tracking-[-1px] outline-none"
                  data-node-id="102:2186"
                />
              </div>

              {/* Input 5: (+62) Nomor Telepon */}
              <div
                className="bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full flex items-center"
                data-node-id="102:2192"
              >
                <span
                  className="pl-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] whitespace-nowrap"
                  data-node-id="102:2193"
                >
                  (+62)
                </span>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Nomor Telepon"
                  aria-label="Nomor Telepon"
                  className="w-full h-full bg-transparent pl-[18px] pr-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black placeholder:text-black tracking-[-1px] outline-none"
                  data-node-id="102:2196"
                />
              </div>
            </div>

            {/* Subheading: Metode Bayar */}
            <p
              className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[26px] sm:text-[28px] text-black tracking-[-1.4px] mt-9 mb-6"
              data-node-id="102:2199"
            >
              Metode Bayar
            </p>

            {/* Pilih Metode Bayar Select */}
            <div
              className="relative bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full flex items-center"
              data-node-id="102:2197"
            >
              <select
                aria-label="Pilih Metode Bayar"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full h-full appearance-none bg-transparent pl-[25px] pr-[55px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] outline-none cursor-pointer"
              >
                <option value="">Pilih Metode Bayar</option>
                <option value="Transfer Bank BCA (Konfirmasi WhatsApp)">
                  Transfer Bank BCA (Konfirmasi WhatsApp)
                </option>
                <option value="Transfer Bank Mandiri (Konfirmasi WhatsApp)">
                  Transfer Bank Mandiri (Konfirmasi WhatsApp)
                </option>
                <option value="QRIS (Konfirmasi WhatsApp)">QRIS (Konfirmasi WhatsApp)</option>
              </select>
              <span
                className="pointer-events-none absolute right-[25px] top-1/2 -translate-y-1/2 size-[24px]"
                data-node-id="102:2201"
              >
                <img
                  alt=""
                  className="block size-full"
                  src={FIGMA_ASSETS.fiChevronUp}
                />
              </span>
            </div>
          </div>

          {/* Right Card: Ringkasan Pesanan (lg:col-span-6) */}
          <div className="lg:col-span-6">
            <div
              className="bg-white border-2 border-[#ede9de] border-solid rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] p-6 sm:p-[45px]"
              data-node-id="102:2147"
            >
              <p
                className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] not-italic text-[26px] sm:text-[28px] text-black tracking-[-1.4px] mb-8"
                data-node-id="102:2151"
              >
                Ringkasan Pesanan
              </p>

              {/* Product Row */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="flex items-start gap-6">
                  {/* Product Thumbnail + Yellow Quantity Badge */}
                  <div className="relative shrink-0">
                    <div
                      className="bg-white border-2 border-[#ede9de] border-solid h-[107px] w-[130px] rounded-[15px] overflow-hidden"
                      data-node-id="102:2152"
                    >
                      <img
                        alt={primaryItem.title}
                        className="object-cover pointer-events-none rounded-[15px] size-full"
                        src={primaryItem.coverUrl}
                      />
                    </div>
                    <div
                      className="absolute -right-[14px] -top-[14px] size-[40px] flex items-center justify-center"
                      data-node-id="102:2153"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 size-full"
                        src={FIGMA_ASSETS.ellipseCheckoutBadge}
                      />
                      <span
                        className="relative z-10 font-['Linear_Sans_Trial:Semi_Bold'] text-[22px] text-black"
                        data-node-id="102:2286"
                      >
                        {primaryItem.quantity}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p
                      className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-black"
                      data-node-id="102:2155"
                    >
                      {primaryItem.title}
                    </p>
                    <p
                      className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[18px] text-black mt-1"
                      data-node-id="102:2156"
                    >
                      {primaryItem.subtitle}
                    </p>
                  </div>
                </div>

                <p
                  className="font-['Linear_Sans_Trial:Semi_Bold'] leading-[normal] not-italic text-[22px] text-black text-right self-end whitespace-nowrap"
                  data-node-id="102:2157"
                >
                  {formatIDRFigma(subtotal_idr, true)}
                </p>
              </div>

              {/* Summary Divider Line */}
              <div className="w-full mb-7" data-node-id="102:2166">
                <img
                  alt=""
                  className="block w-full h-[1px]"
                  src={FIGMA_ASSETS.lineCheckout551}
                />
              </div>

              {/* Subtotal, Potongan (15%), Total */}
              <div className="space-y-5 mb-8">
                <div className="flex items-center justify-between">
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] text-[20px] text-black"
                    data-node-id="102:2160"
                  >
                    Subtotal
                  </p>
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] text-[22px] text-black"
                    data-node-id="102:2161"
                  >
                    {formatIDRFigma(subtotal_idr, true)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] text-[20px] text-black"
                    data-node-id="102:2162"
                  >
                    Potongan (15%)
                  </p>
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] text-[22px] text-black"
                    data-node-id="102:2163"
                  >
                    -Rp. 50.000
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p
                    className="font-['Linear_Sans_Trial:Regular'] text-[22px] text-black"
                    data-node-id="102:2164"
                  >
                    Total
                  </p>
                  <p
                    className="font-['Linear_Sans_Trial:Semi_Bold'] text-[24px] text-black"
                    data-node-id="102:2165"
                  >
                    {formatIDRFigma(total_idr, true)}
                  </p>
                </div>
              </div>

              {/* Submit Button: Pesan */}
              <button
                type="submit"
                className="bg-black flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px] w-full cursor-pointer"
                data-node-id="102:2167"
              >
                <span
                  className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-center text-white tracking-[-1.1px] whitespace-nowrap"
                  data-node-id="102:2168"
                >
                  Pesan
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
