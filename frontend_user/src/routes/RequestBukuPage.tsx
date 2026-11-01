import { useState } from 'react';
import { FaqSection } from '@/components/shared/FaqSection';

/**
 * Request Buku Page — 100% identical to Figma Desktop - 8 (node 133:3455)
 * Responsive across mobile, tablet, laptop (1280px–1366px), and 1440px desktop.
 */
export function RequestBukuPage() {
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('Nama Penulis');
  const [notes, setNotes] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      'Halo Admin *Toko Buku Anelinda Books*,',
      'Saya ingin melakukan *Request Buku*:',
      '',
      `Judul Buku: *${bookTitle || '-'}*`,
      `Nama Penulis: ${authorName || '-'}`,
      `Catatan Tambahan: ${notes || '-'}`,
      `Nama Pemohon: ${customerName || '-'}`,
    ].join('\n');

    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <div
      className="bg-[#faf7f0] relative w-full overflow-x-hidden"
      data-node-id="133:3455"
    >
      {/* Main Request Form Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-[80px] pt-12 sm:pt-[95px] pb-16 sm:pb-[95px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-[60px] items-start">
          {/* Left Column (580px on 1440px desktop) */}
          <div className="lg:col-span-5 xl:max-w-[580px]">
            {/* Top Left Line */}
            <div
              className="h-[1px] bg-black w-full mb-7 sm:mb-[30px]"
              data-node-id="133:3470"
            />

            {/* Eyebrow: Request Buku */}
            <div className="flex items-center gap-[10px] mb-3 sm:mb-[15px]">
              <div
                className="bg-black size-[12px] shrink-0"
                data-node-id="133:3472"
              />
              <p
                className="font-['Test_Tiempos_Headline:Light_Italic'] leading-[normal] not-italic text-[20px] sm:text-[22px] text-black whitespace-nowrap"
                data-node-id="133:3471"
              >
                Request Buku
              </p>
            </div>

            {/* Main Title */}
            <h1
              className="font-['Linear_Sans_Trial:Regular'] leading-[1.2] sm:leading-[58px] not-italic text-[32px] sm:text-[42px] xl:text-[48px] text-black tracking-[-1.6px] sm:tracking-[-2.4px]"
              data-node-id="133:3473"
            >
              Kami bantu temukan buku yang kamu cari, baru maupun antik
            </h1>
          </div>

          {/* Right Form Card (640 × 791 on 1440px desktop) */}
          <div className="lg:col-span-7 w-full xl:max-w-[640px] lg:ml-auto">
            <form
              onSubmit={handleRequestSubmit}
              className="bg-white border-2 border-[#ede9de] border-solid rounded-[25px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)] p-6 sm:p-8 xl:px-[45px] xl:py-[45px]"
              data-node-id="133:3474"
            >
              <p
                className="font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[24px] sm:text-[28px] text-black tracking-[-1.4px] mb-5 sm:mb-[20px]"
                data-node-id="133:3506"
              >
                Buku Apa yang Kamu Cari?
              </p>

              {/* Field 1: Judul Buku */}
              <div className="mb-5 sm:mb-[20px]">
                <label
                  htmlFor="req-book-title"
                  className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] sm:text-[20px] text-black tracking-[-1px] mb-3 sm:mb-[15px]"
                  data-node-id="133:3498"
                >
                  Judul Buku
                </label>
                <input
                  id="req-book-title"
                  type="text"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  className="w-full bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[50px] rounded-[15px] px-[25px] font-['Linear_Sans_Trial:Regular'] text-[18px] text-black tracking-[-0.9px] outline-none"
                  data-node-id="133:3491"
                />
              </div>

              {/* Field 2: Nama Penulis */}
              <div className="mb-5 sm:mb-[20px]">
                <label
                  htmlFor="req-author-name"
                  className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] sm:text-[20px] text-black tracking-[-1px] mb-3 sm:mb-[15px]"
                  data-node-id="133:3505"
                >
                  Nama Penulis
                </label>
                <input
                  id="req-author-name"
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-white border-2 border-[#ede9de] border-solid h-[50px] rounded-[15px] px-[25px] font-['Linear_Sans_Trial:Regular'] text-[18px] text-black tracking-[-0.9px] outline-none"
                  data-node-id="133:3497"
                />
              </div>

              {/* Field 3: Catatan Tambahan (Opsional) */}
              <div className="mb-5 sm:mb-[20px]">
                <label
                  htmlFor="req-notes"
                  className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] sm:text-[20px] text-black tracking-[-1px] mb-3 sm:mb-[18px]"
                  data-node-id="133:3500"
                >
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  id="req-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[173px] rounded-[15px] p-[20px] font-['Linear_Sans_Trial:Regular'] text-[18px] text-black tracking-[-0.9px] outline-none resize-none"
                  data-node-id="133:3493"
                />
              </div>

              {/* Field 4: Nama Lengkap */}
              <div className="mb-7 sm:mb-[30px]">
                <label
                  htmlFor="req-customer-name"
                  className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[18px] sm:text-[20px] text-black tracking-[-1px] mb-3 sm:mb-[15px]"
                  data-node-id="133:3566"
                >
                  Nama Lengkap
                </label>
                <input
                  id="req-customer-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[50px] rounded-[15px] px-[25px] font-['Linear_Sans_Trial:Regular'] text-[18px] text-black tracking-[-0.9px] outline-none"
                  data-node-id="133:3565"
                />
              </div>

              {/* Submit Button: Pesan */}
              <button
                type="submit"
                className="w-full bg-black flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px] cursor-pointer hover:opacity-90 transition-opacity"
                data-node-id="133:3489"
              >
                <span
                  className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[20px] sm:text-[22px] text-center text-white tracking-[-1.1px] whitespace-nowrap"
                  data-node-id="133:3490"
                >
                  Pesan
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
