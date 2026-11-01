/**
 * Financial & WhatsApp formatting helpers compliant with AGENTS.md §3.2 & docs/api-contract.md §3.
 * Never uses floating-point arithmetic for monetary calculations.
 */

const idrFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export function formatIDRStandard(amountIdr: number): string {
  return idrFormatter.format(Math.trunc(amountIdr));
}

/**
 * Formats integer IDR in the exact Figma display convention ("Rp. 150.000" or "Rp.150.000")
 */
export function formatIDRFigma(amountIdr: number, withSpace = true): string {
  const truncated = Math.trunc(Math.abs(amountIdr));
  const formattedNumber = truncated.toLocaleString('id-ID');
  const prefix = amountIdr < 0 ? '-Rp.' : 'Rp.';
  return `${prefix}${withSpace ? ' ' : ''}${formattedNumber}`;
}

export interface WhatsAppCheckoutPayload {
  orderCode: string;
  recipientName: string;
  recipientPhone: string;
  shippingAddress: string;
  paymentMethod: string;
  items: ReadonlyArray<{
    title: string;
    subtitle?: string;
    quantity: number;
    subtotal_idr: number;
  }>;
  total_idr: number;
}

export function buildWhatsAppCheckoutUrl(payload: WhatsAppCheckoutPayload): string {
  const lines = payload.items.map(
    (item, idx) =>
      `${idx + 1}. ${item.title}${item.subtitle ? ` (${item.subtitle})` : ''} (x${item.quantity}) - ${formatIDRStandard(item.subtotal_idr)}`,
  );

  const message = [
    'Halo Admin *Toko Buku Anelinda Books*,',
    'Saya ingin melakukan konfirmasi pemesanan buku:',
    '',
    `Kode Pesanan: *${payload.orderCode}*`,
    `Nama Penerima: ${payload.recipientName}`,
    `No. WhatsApp: ${payload.recipientPhone}`,
    `Alamat Pengiriman: ${payload.shippingAddress}`,
    `Metode Bayar: ${payload.paymentMethod}`,
    '',
    '*Daftar Buku:*',
    ...lines,
    '',
    `*Total Pembayaran: ${formatIDRStandard(payload.total_idr)}*`,
    '',
    'Mohon informasi nomor rekening dan ongkos kirim. Terima kasih.',
  ].join('\n');

  const adminPhone = '6281234567890';
  return `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
}
