import { useState, type FormEvent } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useAdminStore } from '@/stores/useAdminStore';

export function LoginPage() {
  const navigate = useNavigate();
  const login = useAdminStore((state) => state.login);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(username || 'Admin@anelindagmailcom');
    void navigate({ to: '/' });
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left branding panel (#2A3088) */}
      <section className="bg-[#2A3088] text-white px-[44px] pt-[152px] pb-[64px] flex flex-col justify-start">
        <h1 className="text-[48px] font-bold leading-[58px] tracking-[-0.02em] max-w-[460px]">
          Kelola toko buku dari satu tempat.
        </h1>
        <p className="mt-[28px] text-[22px] font-medium leading-[31px] text-white/95 max-w-[565px]">
          Pantau pesanan, atur katalog buku, dan tanggapi request pelanggan.
        </p>
      </section>

      {/* Right login form panel (#EEF1F6) */}
      <section className="bg-[#EEF1F6] px-[48px] pt-[88px] pb-[64px] flex flex-col items-start">
        <div className="w-full max-w-[562px]">
          <h2 className="text-[38px] font-semibold leading-[46px] tracking-[-0.02em] text-black">
            Masuk Sebagai Admin
          </h2>
          <p className="mt-[6px] text-[18px] font-normal leading-[24px] text-[#14213D]">
            Gunakan akun admin yang terdaftar.
          </p>

          <form onSubmit={handleSubmit} className="mt-[76px]">
            <div>
              <label
                htmlFor="admin-username"
                className="block text-[18px] font-medium leading-[24px] text-black mb-[8px]"
              >
                Username
              </label>
              <input
                id="admin-username"
                name="username"
                type="text"
                autoComplete="username"
                spellCheck={false}
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Admin@anelindagmailcom"
                className="w-full h-[68px] rounded-[10px] bg-white border border-[#B8BDC7] px-[16px] text-[18px] text-[#14213D] placeholder:text-[#7E7E7E] placeholder:underline focus:outline-none focus:border-[#2A3088]"
              />
            </div>

            <div className="mt-[30px]">
              <label
                htmlFor="admin-password"
                className="block text-[18px] font-medium leading-[24px] text-black mb-[8px]"
              >
                Kata Sandi
              </label>
              <input
                id="admin-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukan kata sandi"
                className="w-full h-[68px] rounded-[10px] bg-white border border-[#B8BDC7] px-[16px] text-[18px] text-[#14213D] placeholder:text-[#7E7E7E] focus:outline-none focus:border-[#2A3088]"
              />
            </div>

            <button
              type="submit"
              className="mt-[82px] w-full h-[68px] rounded-[10px] bg-[#2A3088] text-white text-[26px] font-semibold flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity"
            >
              Masuk
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
