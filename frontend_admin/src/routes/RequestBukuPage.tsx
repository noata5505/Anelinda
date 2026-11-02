import { useAdminStore } from '@/stores/useAdminStore';

export function RequestBukuPage() {
  const bookRequests = useAdminStore((state) => state.bookRequests);
  const approveRequest = useAdminStore((state) => state.approveRequest);
  const rejectRequest = useAdminStore((state) => state.rejectRequest);

  return (
    <div>
      <h1 className="text-[28px] font-bold leading-[34px] text-[#14213D]">Request buku</h1>
      <p className="mt-[12px] mb-[18px] text-[15px] text-[#4D5873]">
        Buku yang diminta pelanggan tapi belum ada di katalog.
      </p>

      <section className="bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] pt-[14px] pb-[20px]">
        <div tabIndex={0} role="region" aria-label="Tabel Request Buku" className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#EEF1F6] text-[13px] font-semibold text-[#4D5873]">
                <th className="py-[10px] pr-[12px] w-[356px]">Judul diminta</th>
                <th className="py-[10px] px-[12px] w-[244px]">Pemohon</th>
                <th className="py-[10px] px-[12px] w-[96px]">Tanggal</th>
                <th className="py-[10px] px-[12px] w-[124px]">Status</th>
                <th className="py-[10px] pl-[12px] w-[200px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bookRequests.map((req) => {
                const isApproved = req.status === 'Disetujui';
                return (
                  <tr key={req.id} className="border-b border-[#EEF1F6] last:border-b-0 h-[66px]">
                    <td className="py-[10px] pr-[12px] text-[15px] font-bold text-[#14213D]">
                      {req.requestedTitle}
                    </td>
                    <td className="py-[10px] px-[12px] text-[15px] text-[#14213D]">
                      {req.requesterName}
                    </td>
                    <td className="py-[10px] px-[12px] text-[15px] text-[#14213D]">
                      {req.dateLabel}
                    </td>
                    <td className="py-[10px] px-[12px]">
                      <span
                        className={
                          isApproved
                            ? 'inline-flex items-center justify-center px-[14px] h-[30px] rounded-full bg-[#D8F2E3] text-[#17603A] text-[13px] font-semibold'
                            : 'inline-flex items-center justify-center px-[14px] h-[30px] rounded-full bg-[#FDECC8] text-[#5C3A00] text-[13px] font-semibold'
                        }
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="py-[10px] pl-[12px]">
                      <div className="flex items-center gap-[8px]">
                        <button
                          type="button"
                          onClick={() => approveRequest(req.id)}
                          className="h-[44px] px-[16px] rounded-[10px] bg-[#2A3088] text-white text-[14px] font-semibold cursor-pointer hover:opacity-95 transition-opacity"
                        >
                          Setujui
                        </button>
                        <button
                          type="button"
                          onClick={() => rejectRequest(req.id)}
                          className="h-[44px] px-[16px] rounded-[10px] border border-[#C3CCDF] bg-white text-[#2A3088] text-[14px] font-semibold cursor-pointer hover:bg-[#F3F5FA] transition-colors"
                        >
                          Tolak
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
