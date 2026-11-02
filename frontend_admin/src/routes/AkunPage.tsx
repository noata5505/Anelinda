import { useAdminStore } from '@/stores/useAdminStore';

export function AkunPage() {
  const accounts = useAdminStore((state) => state.accounts);
  const toggleAccountStatus = useAdminStore((state) => state.toggleAccountStatus);

  return (
    <div>
      <h1 className="text-[28px] font-bold leading-[34px] text-[#14213D] mb-[18px]">Akun</h1>

      <section className="bg-white border border-[#E1E6F0] rounded-[14px] px-[20px] pt-[14px] pb-[20px]">
        <div tabIndex={0} role="region" aria-label="Tabel Akun" className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#EEF1F6] text-[13px] font-semibold text-[#4D5873]">
                <th className="py-[10px] pr-[12px] w-[250px]">Nama</th>
                <th className="py-[10px] px-[12px] w-[332px]">Email</th>
                <th className="py-[10px] px-[12px] w-[104px]">Peran</th>
                <th className="py-[10px] px-[12px] w-[112px]">Status</th>
                <th className="py-[10px] pl-[12px] w-[220px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((acc) => {
                const isActive = acc.status === 'Aktif';
                return (
                  <tr key={acc.id} className="border-b border-[#EEF1F6] last:border-b-0 h-[66px]">
                    <td className="py-[10px] pr-[12px] text-[15px] font-bold text-[#14213D]">
                      {acc.name}
                    </td>
                    <td className="py-[10px] px-[12px] text-[15px] text-[#14213D]">{acc.email}</td>
                    <td className="py-[10px] px-[12px] text-[15px] text-[#14213D]">{acc.role}</td>
                    <td className="py-[10px] px-[12px] text-[15px] text-[#14213D]">
                      {acc.status}
                    </td>
                    <td className="py-[10px] pl-[12px]">
                      <button
                        type="button"
                        onClick={() => toggleAccountStatus(acc.id)}
                        className="w-[130px] h-[44px] rounded-[10px] border border-[#C3CCDF] bg-white text-[#14213D] text-[14px] font-semibold cursor-pointer hover:bg-[#F3F5FA] transition-colors"
                      >
                        {isActive ? 'Nonaktifkan' : 'Aktifkan'}
                      </button>
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
