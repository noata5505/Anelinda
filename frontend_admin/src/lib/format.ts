/**
 * Financial formatting helper for frontend_admin compliant with AGENTS.md §3.2.
 * Uses integer IDR (int64 equivalent) without floating-point arithmetic.
 * Matches exact Figma Admin display convention: "Rp 98.000", "Rp 190.000", etc.
 */

const idrFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export function formatIDRAdmin(amountIdr: number): string {
  const truncated = Math.trunc(amountIdr);
  // Intl.NumberFormat('id-ID') uses non-breaking space after Rp; normalize to standard space "Rp 98.000"
  return idrFormatter.format(truncated).replace(/\u00a0/g, ' ');
}

export function formatWeightGram(weightGram: number | null | undefined): string {
  if (weightGram === null || weightGram === undefined || weightGram <= 0) {
    return '— gram';
  }
  return `${Math.trunc(weightGram).toLocaleString('id-ID')} gram`;
}
