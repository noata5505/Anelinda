import { useState, type FormEvent } from 'react';
import { OrderStatusBadge } from '@/components/shared/OrderStatusBadge';
import { formatIDRAdmin } from '@/lib/format';
import { useAdminStore } from '@/stores/useAdminStore';

export function HalamanUtamaPage() {
  const orders = useAdminStore((state) => state.orders);
  const books = useAdminStore((state) => state.books);
  const bookRequests = useAdminStore((state) => state.bookRequests);
  const cycleOrderStatus = useAdminStore((state) => state.cycleOrderStatus);
  const deleteOrder = useAdminStore((state) => state.deleteOrder);
  const addOrder = useAdminStore((state) => state.addOrder);

  const [isAddingOrder, setIsAddingOrder] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [itemSummary, setItemSummary] = useState('');
  const [totalIdrInput, setTotalIdrInput] = useState('');

  const totalOrdersCount = orders.length;
  const processingCount = orders.filter((o) => o.status === 'Diproses').length;
  const waitingRequestsCount = bookRequests.filter((r) => r.status === 'Menunggu').length;
  const uniqueBookTitlesCount = new Set(books.map((b) => b.title.trim().toLowerCase())).size;

  const latestOrders = orders.slice(0, 5);

  const handleAddOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numericPrice = Number.parseInt(totalIdrInput.replace(/[^0-9]/g, ''), 10);
    if (!customerName.trim() || !itemSummary.trim()) return;
    addOrder({
      customerName: customerName.trim(),
      itemSummary: itemSummary.trim(),
      total_idr: Number.isNaN(numericPrice) ? 98000 : numericPrice,
      status: 'Baru',
    });
    setCustomerName('');
    setItemSummary('');
    setTotalIdrInput('');
    setIsAddingOrder(false);
  };

  return (
    <div>
      <h1 className="text-[28px] font-bold leading-[34px] text-[#14213D] mb-[20px]">
        Halaman utama
      </h1>

      {/* 4 KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-[20px]">
        <div className="h-[100px] bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] py-[16px] flex flex-col justify-between">
          <span className="text-[14px] font-medium text-[#4D5873]">Total pesanan</span>
          <span className="text-[32px] font-bold leading-none text-[#14213D]">
            {totalOrdersCount}
          </span>
        </div>

        <div className="h-[100px] bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] py-[16px] flex flex-col justify-between">
          <span className="text-[14px] font-medium text-[#4D5873]">Perlu diproses</span>
          <span className="text-[32px] font-bold leading-none text-[#14213D]">
            {processingCount}
          </span>
        </div>

        <div className="h-[100px] bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] py-[16px] flex flex-col justify-between">
          <span className="text-[14px] font-medium text-[#4D5873]">Request menunggu</span>
          <span className="text-[32px] font-bold leading-none text-[#14213D]">
            {waitingRequestsCount}
          </span>
        </div>

        <div className="h-[100px] bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] py-[16px] flex flex-col justify-between">
          <span className="text-[14px] font-medium text-[#4D5873]">Judul buku</span>
          <span className="text-[32px] font-bold leading-none text-[#14213D]">
            {uniqueBookTitlesCount}
          </span>
        </div>
      </div>

      {/* Pesanan terbaru card */}
      <section className="bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] pt-[18px] pb-[20px]">
        <div className="flex items-center justify-between mb-[12px]">
          <h2 className="text-[18px] font-bold text-[#14213D]">Pesanan terbaru</h2>
          <button
            type="button"
            onClick={() => setIsAddingOrder((prev) => !prev)}
            className="h-[44px] px-[18px] rounded-[10px] bg-[#2A3088] text-white text-[14px] font-semibold cursor-pointer hover:opacity-95 transition-opacity"
          >
            + Tambah pesanan
          </button>
        </div>

        {isAddingOrder && (
          <form
            onSubmit={handleAddOrder}
            className="mb-[16px] p-[16px] rounded-[12px] bg-[#F8F9FD] border border-[#E1E6F0] grid grid-cols-1 md:grid-cols-4 gap-[12px] items-end"
          >
            <div>
              <label
                htmlFor="new-order-customer"
                className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
              >
                Pelanggan
              </label>
              <input
                id="new-order-customer"
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Nama pelanggan"
                className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[12px] text-[14px] text-[#14213D]"
              />
            </div>
            <div>
              <label
                htmlFor="new-order-item"
                className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
              >
                Item
              </label>
              <input
                id="new-order-item"
                type="text"
                required
                value={itemSummary}
                onChange={(e) => setItemSummary(e.target.value)}
                placeholder="Judul Buku x1"
                className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[12px] text-[14px] text-[#14213D]"
              />
            </div>
            <div>
              <label
                htmlFor="new-order-total"
                className="block text-[13px] font-medium text-[#4D5873] mb-[6px]"
              >
                Total (Rp)
              </label>
              <input
                id="new-order-total"
                type="text"
                inputMode="numeric"
                required
                value={totalIdrInput}
                onChange={(e) => setTotalIdrInput(e.target.value)}
                placeholder="98000"
                className="w-full h-[42px] rounded-[10px] bg-white border border-[#C3CCDF] px-[12px] text-[14px] text-[#14213D]"
              />
            </div>
            <div className="flex items-center gap-[8px]">
              <button
                type="submit"
                className="h-[42px] px-[16px] rounded-[10px] bg-[#2A3088] text-white text-[14px] font-semibold cursor-pointer"
              >
                Simpan
              </button>
              <button
                type="button"
                onClick={() => setIsAddingOrder(false)}
                className="h-[42px] px-[16px] rounded-[10px] border border-[#C3CCDF] bg-white text-[#14213D] text-[14px] font-semibold cursor-pointer"
              >
                Batal
              </button>
            </div>
          </form>
        )}

        <div
          tabIndex={0}
          role="region"
          aria-label="Tabel Pesanan Terbaru"
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#EEF1F6] text-[13px] font-semibold text-[#4D5873]">
                <th className="py-[10px] pr-[12px] w-[76px]">ID</th>
                <th className="py-[10px] px-[12px] w-[235px]">Pelanggan</th>
                <th className="py-[10px] px-[12px] w-[320px]">Item</th>
                <th className="py-[10px] px-[12px] w-[124px]">Total</th>
                <th className="py-[10px] px-[12px] w-[124px]">Status</th>
                <th className="py-[10px] pl-[12px] w-[160px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {latestOrders.map((order) => (
                <tr key={order.id} className="border-b border-[#EEF1F6] h-[64px]">
                  <td className="py-[10px] pr-[12px] text-[15px] text-[#14213D]">{order.id}</td>
                  <td className="py-[10px] px-[12px] text-[15px] text-[#14213D]">
                    {order.customerName}
                  </td>
                  <td className="py-[10px] px-[12px] text-[15px] text-[#14213D]">
                    {order.itemSummary}
                  </td>
                  <td className="py-[10px] px-[12px] text-[15px] text-[#14213D]">
                    {formatIDRAdmin(order.total_idr)}
                  </td>
                  <td className="py-[10px] px-[12px]">
                    <OrderStatusBadge
                      status={order.status}
                      onClick={() => cycleOrderStatus(order.id)}
                    />
                  </td>
                  <td className="py-[10px] pl-[12px]">
                    <button
                      type="button"
                      onClick={() => deleteOrder(order.id)}
                      className="w-[150px] h-[44px] rounded-[10px] border border-[#C3CCDF] bg-white text-[#14213D] text-[14px] font-semibold cursor-pointer hover:bg-[#F3F5FA] transition-colors"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-[14px] text-[13px] text-[#4D5873]">
          Klik label status untuk mengubah tahap pesanan.
        </p>
      </section>
    </div>
  );
}
