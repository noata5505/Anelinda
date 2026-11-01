import { useEffect, useRef, useState } from 'react';
import { useUiStore } from '@/stores/useUiStore';

/**
 * Login & Register Modals — 100% identical to Figma Frame 33 (110:2683) & Frame 34 (118:2791)
 * Uses native <dialog> element with showModal() and responsive sizing.
 */
export function AuthModals() {
  const { activeOverlay, setActiveOverlay, closeOverlays } = useUiStore();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [loginEmail, setLoginEmail] = useState('PKMAnelinda@gmail.com');
  const [loginPassword, setLoginPassword] = useState('');

  const [regName, setRegName] = useState('PKM Anelinda Keren');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(true);

  const isOpen = activeOverlay === 'login' || activeOverlay === 'register';

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="auth-modal-title"
      onClose={closeOverlays}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          closeOverlays();
        }
      }}
      className="m-auto bg-transparent p-4 border-0 outline-none max-w-full w-[600px]"
    >
      {activeOverlay === 'login' && (
        /* Frame 33 (110:2683) — Login Modal (max-w 600px) */
        <div
          className="bg-white border-2 border-[#ede9de] border-solid rounded-[25px] w-full p-6 sm:p-[45px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)]"
          data-node-id="110:2683"
        >
          <h2
            id="auth-modal-title"
            className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[24px] sm:text-[28px] text-black tracking-[-1.4px] mb-6"
          >
            Selamat Datang Kembali!
          </h2>

          <div className="mb-5">
            <label
              htmlFor="login-email"
              className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[20px] text-black tracking-[-1px] mb-2"
            >
              Email
            </label>
            <input
              id="login-email"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              autoFocus
              className="bg-white border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] outline-none"
            />
          </div>

          <div className="mb-7">
            <label
              htmlFor="login-password"
              className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[20px] text-black tracking-[-1px] mb-2"
            >
              Password
            </label>
            <input
              id="login-password"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] outline-none"
            />
          </div>

          <div className="flex flex-col gap-[15px]">
            <button
              type="button"
              onClick={closeOverlays}
              className="bg-black flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px] w-full cursor-pointer"
            >
              <span className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-center text-white tracking-[-1.1px] whitespace-nowrap">
                Masuk
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveOverlay('register')}
              className="bg-white border-2 border-black border-solid flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px] w-full cursor-pointer"
            >
              <span className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-center text-black tracking-[-1.1px] whitespace-nowrap">
                Belum Punya Akun?
              </span>
            </button>
          </div>
        </div>
      )}

      {activeOverlay === 'register' && (
        /* Frame 34 (118:2791) — Register Modal (max-w 600px) */
        <div
          className="bg-white border-2 border-[#ede9de] border-solid rounded-[25px] w-full p-6 sm:p-[45px] shadow-[0px_5px_10px_0px_rgba(237,233,222,0.65)]"
          data-node-id="118:2832"
        >
          <h2
            id="auth-modal-title"
            className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[24px] sm:text-[28px] text-black tracking-[-1.4px] mb-5"
            data-node-id="118:2833"
          >
            Bergabung Bersama Kami
          </h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="reg-name"
                className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[20px] text-black tracking-[-1px] mb-1.5"
                data-node-id="118:2843"
              >
                Nama Lengkap
              </label>
              <input
                id="reg-name"
                type="text"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                autoFocus
                className="bg-white border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] outline-none"
                data-node-id="118:2838"
              />
            </div>

            <div>
              <label
                htmlFor="reg-email"
                className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[20px] text-black tracking-[-1px] mb-1.5"
                data-node-id="118:2844"
              >
                Email
              </label>
              <input
                id="reg-email"
                type="email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                className="bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] outline-none"
                data-node-id="118:2839"
              />
            </div>

            <div>
              <label
                htmlFor="reg-password"
                className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[20px] text-black tracking-[-1px] mb-1.5"
                data-node-id="118:2845"
              >
                Password
              </label>
              <input
                id="reg-password"
                type="password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                className="bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] outline-none"
                data-node-id="118:2840"
              />
            </div>

            <div>
              <label
                htmlFor="reg-confirm-password"
                className="block font-['Linear_Sans_Trial:Regular'] leading-[30px] not-italic text-[20px] text-black tracking-[-1px] mb-1.5"
                data-node-id="118:2846"
              >
                Konfirmasi Password
              </label>
              <input
                id="reg-confirm-password"
                type="password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                className="bg-[#faf7f0] border-2 border-[#ede9de] border-solid h-[60px] rounded-[15px] w-full px-[25px] font-['Linear_Sans_Trial:Regular'] text-[20px] text-black tracking-[-1px] outline-none"
                data-node-id="118:2841"
              />
            </div>
          </div>

          {/* Terms Checkbox Row */}
          <div className="flex justify-center my-6">
            <button
              type="button"
              onClick={() => setAgreedTerms((prev) => !prev)}
              className="flex items-center gap-[10px] cursor-pointer"
              data-node-id="118:2847"
            >
              <span className="size-[20px] flex items-center justify-center border-[1.8px] border-black rounded-[3px] text-[14px] font-bold leading-none shrink-0">
                {agreedTerms ? '✓' : ''}
              </span>
              <span
                className="font-['Linear_Sans_Trial:Regular'] text-[16px] sm:text-[18px] text-black tracking-[-0.9px]"
                data-node-id="118:2848"
              >
                Saya setuju dengan <span className="underline">syarat dan ketentuan</span>
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-[15px]">
            <button
              type="button"
              onClick={closeOverlays}
              className="bg-black flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px] w-full cursor-pointer"
              data-node-id="118:2834"
            >
              <span
                className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-center text-white tracking-[-1.1px] whitespace-nowrap"
                data-node-id="118:2835"
              >
                Daftar
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveOverlay('login')}
              className="bg-white border-2 border-black border-solid flex gap-[10px] h-[55px] items-center justify-center px-[30px] py-[10px] rounded-[27px] w-full cursor-pointer"
              data-node-id="118:2836"
            >
              <span
                className="font-['Linear_Sans_Trial:Regular'] leading-[normal] not-italic text-[22px] text-center text-black tracking-[-1.1px] whitespace-nowrap"
                data-node-id="118:2837"
              >
                Sudah Punya Akun?
              </span>
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
