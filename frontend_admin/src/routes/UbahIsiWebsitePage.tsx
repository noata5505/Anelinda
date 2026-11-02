import { useRef, useState, type ChangeEvent } from 'react';
import { useAdminStore } from '@/stores/useAdminStore';

export function UbahIsiWebsitePage() {
  const storeIdentity = useAdminStore((state) => state.storeIdentity);
  const carouselSlides = useAdminStore((state) => state.carouselSlides);
  const updateStoreIdentity = useAdminStore((state) => state.updateStoreIdentity);
  const addCarouselSlide = useAdminStore((state) => state.addCarouselSlide);
  const updateCarouselSlide = useAdminStore((state) => state.updateCarouselSlide);
  const deleteCarouselSlide = useAdminStore((state) => state.deleteCarouselSlide);

  const [savedNotice, setSavedNotice] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [activeSlideId, setActiveSlideId] = useState<string | null>(null);

  const firstSlide = carouselSlides[0];

  const handleSlideImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !activeSlideId) return;
    const objectUrl = URL.createObjectURL(file);
    updateCarouselSlide(activeSlideId, { imageUrl: objectUrl });
    setActiveSlideId(null);
  };

  const handleSaveChanges = () => {
    setSavedNotice(true);
    window.setTimeout(() => setSavedNotice(false), 2000);
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleSlideImageChange}
      />

      <h1 className="text-[28px] font-bold leading-[34px] text-[#14213D] mb-[18px]">
        Ubah isi website
      </h1>

      {/* Card 1: Identitas toko */}
      <section className="bg-white border border-[#E1E6F0] rounded-[14px] p-[20px] mb-[18px]">
        <h2 className="text-[18px] font-bold text-[#14213D] mb-[14px]">Identitas toko</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
          <div>
            <label
              htmlFor="identity-store-name"
              className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
            >
              Nama toko
            </label>
            <input
              id="identity-store-name"
              type="text"
              value={storeIdentity.storeName}
              onChange={(e) => updateStoreIdentity({ storeName: e.target.value })}
              className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#2A3088] focus:outline-none focus:border-[#2A3088]"
            />
          </div>

          <div>
            <label
              htmlFor="identity-tagline"
              className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
            >
              Tagline
            </label>
            <input
              id="identity-tagline"
              type="text"
              value={storeIdentity.tagline}
              onChange={(e) => updateStoreIdentity({ tagline: e.target.value })}
              className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#2A3088] focus:outline-none focus:border-[#2A3088]"
            />
          </div>

          <div>
            <label
              htmlFor="identity-whatsapp"
              className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
            >
              WhatsApp
            </label>
            <input
              id="identity-whatsapp"
              type="tel"
              value={storeIdentity.whatsapp}
              onChange={(e) => updateStoreIdentity({ whatsapp: e.target.value })}
              placeholder="08xxxxxxxxxx"
              className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#4D5873] focus:outline-none focus:border-[#2A3088]"
            />
          </div>

          <div>
            <label
              htmlFor="identity-address"
              className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
            >
              Alamat
            </label>
            <input
              id="identity-address"
              type="text"
              value={storeIdentity.address}
              onChange={(e) => updateStoreIdentity({ address: e.target.value })}
              placeholder="Alamat toko"
              className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#4D5873] focus:outline-none focus:border-[#2A3088]"
            />
          </div>
        </div>
      </section>

      {/* Card 2: Carousel homepage */}
      <section className="bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] pt-[16px] pb-[14px] mb-[18px]">
        <div className="flex items-center justify-between pb-[14px] border-b border-[#EEF1F6]">
          <h2 className="text-[18px] font-bold text-[#14213D]">Carousel homepage</h2>
          <button
            type="button"
            onClick={addCarouselSlide}
            className="h-[44px] px-[18px] rounded-[10px] bg-[#2A3088] text-white text-[14px] font-semibold cursor-pointer hover:opacity-95 transition-opacity"
          >
            + Tambah slide
          </button>
        </div>

        <div>
          {carouselSlides.map((slide) => (
            <div
              key={slide.id}
              className="py-[14px] border-b border-[#EEF1F6] last:border-b-0 flex flex-col md:flex-row items-stretch md:items-center gap-[14px]"
            >
              <button
                type="button"
                onClick={() => {
                  setActiveSlideId(slide.id);
                  fileInputRef.current?.click();
                }}
                className="w-[120px] h-[66px] rounded-[10px] bg-[#DCE3F2] text-[#4D5873] text-[12px] font-medium flex items-center justify-center shrink-0 overflow-hidden cursor-pointer hover:opacity-90"
              >
                {slide.imageUrl ? (
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  'Gambar'
                )}
              </button>

              <div className="flex-1 min-w-0">
                <label
                  htmlFor={`slide-title-${slide.id}`}
                  className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
                >
                  Judul
                </label>
                <input
                  id={`slide-title-${slide.id}`}
                  type="text"
                  value={slide.title}
                  onChange={(e) => updateCarouselSlide(slide.id, { title: e.target.value })}
                  className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#2A3088] focus:outline-none focus:border-[#2A3088]"
                />
              </div>

              <div className="flex-1 min-w-0">
                <label
                  htmlFor={`slide-btn-${slide.id}`}
                  className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
                >
                  Teks tombol
                </label>
                <input
                  id={`slide-btn-${slide.id}`}
                  type="text"
                  value={slide.buttonText}
                  onChange={(e) => updateCarouselSlide(slide.id, { buttonText: e.target.value })}
                  className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#2A3088] focus:outline-none focus:border-[#2A3088]"
                />
              </div>

              <button
                type="button"
                onClick={() => deleteCarouselSlide(slide.id)}
                className="h-[44px] px-[16px] rounded-[10px] border border-[#C3CCDF] bg-white text-[#14213D] text-[14px] font-semibold cursor-pointer hover:bg-[#F3F5FA] transition-colors shrink-0 self-end md:self-center"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Card 3: Pratinjau slide pertama */}
      <section className="bg-white border border-[#E1E6F0] rounded-[14px] p-[20px] mb-[18px]">
        <h2 className="text-[18px] font-bold text-[#14213D] mb-[12px]">
          Pratinjau slide pertama
        </h2>
        <div
          className="rounded-[12px] bg-[#2A3088] px-[28px] py-[28px] text-white min-h-[138px] flex flex-col justify-center items-start bg-cover bg-center"
          style={
            firstSlide?.imageUrl
              ? {
                  backgroundImage: `linear-gradient(rgba(42, 48, 136, 0.82), rgba(42, 48, 136, 0.82)), url(${firstSlide.imageUrl})`,
                }
              : undefined
          }
        >
          <div className="text-[26px] font-bold leading-[32px]">
            {firstSlide?.title || 'Diskon Buku Akhir Tahun'}
          </div>
          <span className="mt-[12px] h-[38px] px-[18px] rounded-[10px] bg-white text-[#14213D] text-[14px] font-semibold inline-flex items-center justify-center">
            {firstSlide?.buttonText || 'Belanja sekarang'}
          </span>
        </div>
      </section>

      {/* Bottom Save Button */}
      <div className="flex items-center gap-[12px]">
        <button
          type="button"
          onClick={handleSaveChanges}
          className="h-[44px] px-[18px] rounded-[10px] bg-[#2A3088] text-white text-[14px] font-semibold cursor-pointer hover:opacity-95 transition-opacity"
        >
          Simpan perubahan
        </button>
        {savedNotice && (
          <span className="text-[13px] font-medium text-[#17603A]">Perubahan disimpan.</span>
        )}
      </div>
    </div>
  );
}
