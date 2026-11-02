import type { OrderStage } from '@/stores/useAdminStore';

interface OrderStatusBadgeProps {
  status: OrderStage;
  onClick?: () => void;
}

const BADGE_STYLES: Record<OrderStage, string> = {
  Baru: 'bg-[#FDECC8] text-[#5C3A00]',
  Diproses: 'bg-[#DCE8FF] text-[#1B3F8F]',
  Dikirim: 'bg-[#E6E0FF] text-[#43349A]',
  Selesai: 'bg-[#D8F2E3] text-[#17603A]',
};

export function OrderStatusBadge({ status, onClick }: OrderStatusBadgeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Klik label status untuk mengubah tahap pesanan"
      className={`inline-flex items-center justify-center w-[110px] h-[42px] rounded-full text-[13px] font-semibold cursor-pointer transition-opacity hover:opacity-90 ${BADGE_STYLES[status]}`}
    >
      {status}
    </button>
  );
}
