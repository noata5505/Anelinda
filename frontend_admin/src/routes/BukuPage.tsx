import { Fragment, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { formatIDRAdmin, formatWeightGram } from '@/lib/format';
import { useAdminStore, type AdminBook } from '@/stores/useAdminStore';

export function BukuPage() {
  const books = useAdminStore((state) => state.books);
  const addBook = useAdminStore((state) => state.addBook);
  const updateBook = useAdminStore((state) => state.updateBook);
  const deleteBook = useAdminStore((state) => state.deleteBook);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBookId, setEditingBookId] = useState<string | null>(null);
  const [expandedBookIds, setExpandedBookIds] = useState<string[]>([]);

  // Form state matching "Buku — Form buku terbuka.png"
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [stockInput, setStockInput] = useState('');
  const [weightInput, setWeightInput] = useState('');
  const [coverUrl, setCoverUrl] = useState<string | undefined>(undefined);

  const formFileInputRef = useRef<HTMLInputElement | null>(null);
  const rowFileInputRef = useRef<HTMLInputElement | null>(null);
  const [photoTargetBookId, setPhotoTargetBookId] = useState<string | null>(null);

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
    setPriceInput('');
    setSynopsis('');
    setStockInput('');
    setWeightInput('');
    setCoverUrl(undefined);
    setEditingBookId(null);
  };

  const handleOpenAddForm = () => {
    resetForm();
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (book: AdminBook) => {
    setEditingBookId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setCategory(book.category);
    setPriceInput(String(book.price_idr));
    setSynopsis(book.synopsis);
    setStockInput(String(book.stock));
    setWeightInput(book.weight_gram ? String(book.weight_gram) : '');
    setCoverUrl(book.coverUrl);
    setIsFormOpen(true);
  };

  const handleCancelForm = () => {
    resetForm();
    setIsFormOpen(false);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !author.trim()) return;

    const parsedPrice = Number.parseInt(priceInput.replace(/[^0-9]/g, ''), 10);
    const parsedStock = Number.parseInt(stockInput.replace(/[^0-9]/g, ''), 10);
    const parsedWeight = Number.parseInt(weightInput.replace(/[^0-9]/g, ''), 10);

    const payload = {
      title: title.trim(),
      author: author.trim(),
      category: category.trim() || 'Novel',
      price_idr: Number.isNaN(parsedPrice) ? 98000 : parsedPrice,
      synopsis: synopsis.trim() || '—',
      stock: Number.isNaN(parsedStock) ? 0 : parsedStock,
      weight_gram: Number.isNaN(parsedWeight) || parsedWeight <= 0 ? null : parsedWeight,
      publisher: '—',
      publishedYear: '—',
      pages: '—',
      coverUrl,
    };

    if (editingBookId) {
      updateBook(editingBookId, payload);
    } else {
      addBook(payload);
    }

    resetForm();
    setIsFormOpen(false);
  };

  const toggleExpandBook = (bookId: string) => {
    setExpandedBookIds((prev) =>
      prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId],
    );
  };

  const handleFormFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setCoverUrl(objectUrl);
  };

  const handleRowPhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !photoTargetBookId) return;
    const objectUrl = URL.createObjectURL(file);
    updateBook(photoTargetBookId, { coverUrl: objectUrl });
    setPhotoTargetBookId(null);
  };

  // In "Buku — Form buku terbuka.png", 4 rows are visible below the open form
  const displayedBooks = isFormOpen ? books.slice(0, 4) : books;

  return (
    <div>
      {/* Hidden file input for "Ganti foto" in expanded row */}
      <input
        ref={rowFileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleRowPhotoChange}
      />

      {/* Top Header */}
      <div className="flex items-center justify-between mb-[16px]">
        <h1 className="text-[28px] font-bold leading-[34px] text-[#14213D]">Buku</h1>
        <button
          type="button"
          onClick={handleOpenAddForm}
          className="h-[44px] px-[18px] rounded-[10px] bg-[#2A3088] text-white text-[14px] font-semibold cursor-pointer hover:opacity-95 transition-opacity"
        >
          + Tambah buku
        </button>
      </div>

      {/* Collapsible Form buku Card (Buku — Form buku terbuka.png) */}
      {isFormOpen && (
        <section className="bg-white border border-[#E1E6F0] rounded-[14px] p-[20px] mb-[18px]">
          <h2 className="text-[18px] font-bold text-[#14213D] mb-[14px]">Form buku</h2>
          <form onSubmit={handleSubmitForm}>
            {/* Row 1: Judul, Penulis, Kategori, Harga */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[14px] mb-[14px]">
              <div>
                <label
                  htmlFor="book-title"
                  className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
                >
                  Judul
                </label>
                <input
                  id="book-title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Judul buku"
                  className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#14213D] placeholder:text-[#7E89A4] focus:outline-none focus:border-[#2A3088]"
                />
              </div>

              <div>
                <label
                  htmlFor="book-author"
                  className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
                >
                  Penulis
                </label>
                <input
                  id="book-author"
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Nama penulis"
                  className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#14213D] placeholder:text-[#7E89A4] focus:outline-none focus:border-[#2A3088]"
                />
              </div>

              <div>
                <label
                  htmlFor="book-category"
                  className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
                >
                  Kategori
                </label>
                <input
                  id="book-category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Novel, Sains, dll"
                  className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#14213D] placeholder:text-[#7E89A4] focus:outline-none focus:border-[#2A3088]"
                />
              </div>

              <div>
                <label
                  htmlFor="book-price"
                  className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
                >
                  Harga
                </label>
                <input
                  id="book-price"
                  type="text"
                  inputMode="numeric"
                  value={priceInput}
                  onChange={(e) => setPriceInput(e.target.value)}
                  placeholder="Rp"
                  className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#14213D] placeholder:text-[#7E89A4] focus:outline-none focus:border-[#2A3088]"
                />
              </div>
            </div>

            {/* Row 2: Gambar buku (1:1), Sinopsis, Stok, Berat buku */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr_1fr] gap-[14px] items-start mb-[14px]">
              <div>
                <span className="block text-[13px] font-medium text-[#4D5873] mb-[6px]">
                  Gambar buku
                </span>
                <input
                  ref={formFileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={handleFormFileChange}
                />
                <button
                  type="button"
                  onClick={() => formFileInputRef.current?.click()}
                  className="w-[180px] h-[180px] rounded-[10px] border border-[#C3CCDF] bg-white flex flex-col items-center justify-center text-[#94A0B8] cursor-pointer hover:bg-[#F8F9FD] overflow-hidden"
                >
                  {coverUrl ? (
                    <img
                      src={coverUrl}
                      alt="Pratinjau sampul buku"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#94A0B8"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span className="mt-[6px] text-[12px] text-[#94A0B8]">
                        Upload gambar 1:1
                      </span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <label
                  htmlFor="book-synopsis"
                  className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
                >
                  Sinopsis
                </label>
                <input
                  id="book-synopsis"
                  type="text"
                  value={synopsis}
                  onChange={(e) => setSynopsis(e.target.value)}
                  placeholder="sinopsis"
                  className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#14213D] placeholder:text-[#7E89A4] focus:outline-none focus:border-[#2A3088]"
                />
              </div>

              <div>
                <label
                  htmlFor="book-stock"
                  className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
                >
                  Stok
                </label>
                <input
                  id="book-stock"
                  type="text"
                  inputMode="numeric"
                  value={stockInput}
                  onChange={(e) => setStockInput(e.target.value)}
                  placeholder="0"
                  className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[14px] text-[14px] text-[#14213D] placeholder:text-[#7E89A4] focus:outline-none focus:border-[#2A3088]"
                />
              </div>

              <div>
                <label
                  htmlFor="book-weight"
                  className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
                >
                  Berat buku
                </label>
                <div className="relative">
                  <input
                    id="book-weight"
                    type="text"
                    inputMode="numeric"
                    value={weightInput}
                    onChange={(e) => setWeightInput(e.target.value)}
                    placeholder="0"
                    className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] pl-[14px] pr-[52px] text-[14px] text-[#14213D] placeholder:text-[#7E89A4] focus:outline-none focus:border-[#2A3088]"
                  />
                  <span className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 text-[14px] text-[#7E89A4]">
                    gram
                  </span>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center gap-[10px]">
              <button
                type="submit"
                className="h-[44px] px-[18px] rounded-[10px] bg-[#2A3088] text-white text-[14px] font-semibold cursor-pointer hover:opacity-95 transition-opacity"
              >
                Simpan
              </button>
              <button
                type="button"
                onClick={handleCancelForm}
                className="h-[44px] px-[18px] rounded-[10px] border border-[#C3CCDF] bg-white text-[#14213D] text-[14px] font-semibold cursor-pointer hover:bg-[#F3F5FA] transition-colors"
              >
                Batal
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Books Table Card (Buku.png & Buku-1.png) */}
      <section className="bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] pt-[14px] pb-[48px]">
        <div tabIndex={0} role="region" aria-label="Tabel Katalog Buku" className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#EEF1F6] text-[13px] font-semibold text-[#4D5873]">
                <th className="py-[10px] pr-[12px] w-[212px]">Judul</th>
                <th className="py-[10px] px-[12px] w-[206px]">Penulis</th>
                <th className="py-[10px] px-[12px] w-[168px]">Kategori</th>
                <th className="py-[10px] px-[12px] w-[118px]">Harga</th>
                <th className="py-[10px] px-[12px] w-[68px]">Stok</th>
                <th className="py-[10px] px-[12px] w-[104px]">Berat</th>
                <th className="py-[10px] pl-[12px] w-[148px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {displayedBooks.map((book) => {
                const isExpanded = expandedBookIds.includes(book.id);

                return (
                  <Fragment key={book.id}>
                    <tr className="border-b border-[#EEF1F6] h-[64px]">
                      <td className="py-[10px] pr-[12px]">
                        <button
                          type="button"
                          onClick={() => toggleExpandBook(book.id)}
                          aria-expanded={isExpanded}
                          className="text-left text-[15px] font-bold text-[#14213D] cursor-pointer hover:underline min-h-[24px] w-full"
                        >
                          {isExpanded ? '' : book.title}
                        </button>
                      </td>
                      <td
                        onClick={() => toggleExpandBook(book.id)}
                        className="py-[10px] px-[12px] text-[15px] text-[#14213D] cursor-pointer"
                      >
                        {book.author}
                      </td>
                      <td
                        onClick={() => toggleExpandBook(book.id)}
                        className="py-[10px] px-[12px] text-[15px] text-[#14213D] cursor-pointer"
                      >
                        {book.category}
                      </td>
                      <td
                        onClick={() => toggleExpandBook(book.id)}
                        className="py-[10px] px-[12px] text-[15px] text-[#14213D] cursor-pointer"
                      >
                        {formatIDRAdmin(book.price_idr)}
                      </td>
                      <td
                        onClick={() => toggleExpandBook(book.id)}
                        className="py-[10px] px-[12px] text-[15px] text-[#14213D] cursor-pointer"
                      >
                        {book.stock}
                      </td>
                      <td
                        onClick={() => toggleExpandBook(book.id)}
                        className="py-[10px] px-[12px] text-[15px] text-[#14213D] cursor-pointer"
                      >
                        {formatWeightGram(book.weight_gram)}
                      </td>
                      <td className="py-[10px] pl-[12px]">
                        <div className="flex items-center gap-[8px]">
                          <button
                            type="button"
                            onClick={() => handleOpenEditForm(book)}
                            className="h-[44px] px-[14px] rounded-[10px] border border-[#C3CCDF] bg-white text-[#14213D] text-[14px] font-semibold cursor-pointer hover:bg-[#F3F5FA] transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteBook(book.id)}
                            className="h-[44px] px-[14px] rounded-[10px] border border-[#C3CCDF] bg-white text-[#14213D] text-[14px] font-semibold cursor-pointer hover:bg-[#F3F5FA] transition-colors"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Expanded Book Detail Panel (Buku-1.png) */}
                    {isExpanded && (
                      <tr className="border-b border-[#EEF1F6]">
                        <td colSpan={7} className="p-0">
                          <div className="bg-[#F8F9FD] px-[16px] py-[20px] flex flex-col md:flex-row gap-[22px] items-start">
                            {/* Left: Blue Book Cover Card + Ganti foto */}
                            <div className="flex flex-col items-center shrink-0">
                              <div className="w-[160px] h-[196px] rounded-[10px] bg-[#293C91] text-white p-[18px] flex flex-col items-center justify-center text-center overflow-hidden">
                                {book.coverUrl ? (
                                  <img
                                    src={book.coverUrl}
                                    alt={book.title}
                                    className="w-full h-full object-cover rounded-[6px]"
                                  />
                                ) : (
                                  <>
                                    <span className="text-[18px] font-bold leading-[24px]">
                                      {book.title}
                                    </span>
                                    <span className="mt-[6px] text-[12px] text-white/80">
                                      {book.author}
                                    </span>
                                  </>
                                )}
                              </div>

                              <button
                                type="button"
                                onClick={() => {
                                  setPhotoTargetBookId(book.id);
                                  rowFileInputRef.current?.click();
                                }}
                                className="mt-[10px] h-[30px] px-[16px] rounded-[8px] border border-[#C3CCDF] bg-white text-[#14213D] text-[12px] font-semibold cursor-pointer hover:bg-[#F3F5FA]"
                              >
                                Ganti foto
                              </button>
                            </div>

                            {/* Right: Book Title, Author, Synopsis & Metadata Mini-Cards */}
                            <div className="flex-1 min-w-0">
                              <h3
                                onClick={() => toggleExpandBook(book.id)}
                                className="text-[22px] font-bold leading-[28px] text-[#14213D] cursor-pointer"
                              >
                                {book.title}
                              </h3>
                              <p className="mt-[2px] text-[14px] text-[#4D5873]">{book.author}</p>
                              <p className="mt-[14px] text-[14px] leading-[20px] text-[#14213D]">
                                {book.synopsis}
                              </p>

                              {/* Metadata Row 1: 5 Cards */}
                              <div className="mt-[16px] grid grid-cols-2 sm:grid-cols-5 gap-[10px] max-w-[780px]">
                                <div className="bg-white border border-[#E1E6F0] rounded-[10px] px-[12px] py-[10px]">
                                  <div className="text-[11px] font-medium text-[#4D5873]">
                                    Kategori
                                  </div>
                                  <div className="mt-[4px] text-[14px] font-bold text-[#14213D]">
                                    {book.category}
                                  </div>
                                </div>

                                <div className="bg-white border border-[#E1E6F0] rounded-[10px] px-[12px] py-[10px]">
                                  <div className="text-[11px] font-medium text-[#4D5873]">
                                    Penerbit
                                  </div>
                                  <div className="mt-[4px] text-[14px] font-bold text-[#14213D]">
                                    {book.publisher}
                                  </div>
                                </div>

                                <div className="bg-white border border-[#E1E6F0] rounded-[10px] px-[12px] py-[10px]">
                                  <div className="text-[11px] font-medium text-[#4D5873]">
                                    Tahun terbit
                                  </div>
                                  <div className="mt-[4px] text-[14px] font-bold text-[#14213D]">
                                    {book.publishedYear}
                                  </div>
                                </div>

                                <div className="bg-white border border-[#E1E6F0] rounded-[10px] px-[12px] py-[10px]">
                                  <div className="text-[11px] font-medium text-[#4D5873]">
                                    Halaman
                                  </div>
                                  <div className="mt-[4px] text-[14px] font-bold text-[#14213D]">
                                    {book.pages}
                                  </div>
                                </div>

                                <div className="bg-white border border-[#E1E6F0] rounded-[10px] px-[12px] py-[10px]">
                                  <div className="text-[11px] font-medium text-[#4D5873]">Stok</div>
                                  <div className="mt-[4px] text-[14px] font-bold text-[#14213D]">
                                    {book.stock} buku
                                  </div>
                                </div>
                              </div>

                              {/* Metadata Row 2: 2 Cards (Harga & Berat) */}
                              <div className="mt-[10px] grid grid-cols-2 sm:grid-cols-5 gap-[10px] max-w-[780px]">
                                <div className="bg-white border border-[#E1E6F0] rounded-[10px] px-[12px] py-[10px]">
                                  <div className="text-[11px] font-medium text-[#4D5873]">
                                    Harga
                                  </div>
                                  <div className="mt-[4px] text-[14px] font-bold text-[#14213D]">
                                    {formatIDRAdmin(book.price_idr)}
                                  </div>
                                </div>

                                <div className="bg-white border border-[#E1E6F0] rounded-[10px] px-[12px] py-[10px]">
                                  <div className="text-[11px] font-medium text-[#4D5873]">
                                    Berat
                                  </div>
                                  <div className="mt-[4px] text-[14px] font-bold text-[#14213D]">
                                    {formatWeightGram(book.weight_gram)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
