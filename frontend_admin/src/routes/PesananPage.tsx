import { OrderStatusBadge } from '@/components/shared/OrderStatusBadge';
import { formatIDRAdmin } from '@/lib/format';
import { useAdminStore } from '@/stores/useAdminStore';

export function PesananPage() {
  const orders = useAdminStore((state) => state.orders);
  const cycleOrderStatus = useAdminStore((state) => state.cycleOrderStatus);
  const deleteOrder = useAdminStore((state) => state.deleteOrder);

  return (
    <div>
      <h1 className="text-[28px] font-bold leading-[34px] text-[#14213D] mb-[18px]">Pesanan</h1>

      <section className="bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] pt-[14px] pb-[20px]">
        <div tabIndex={0} role="region" aria-label="Tabel Pesanan" className="overflow-x-auto">
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
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-[#EEF1F6] last:border-b-0 h-[66px]">
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
      </section>
    </div>
  );
}
