/**
 * Простая защита форм от спам-ботов:
 * - honeypot: скрытое поле, заполняется только ботами
 * - timing: форма отправлена слишком быстро (< 2 сек) — вероятно бот
 */

export const HONEYPOT_FIELD = "website_url";

export const useFormGuard = () => {
  const startedAt = Date.now();
  return {
    startedAt,
    /** Возвращает true, если запрос похож на спам */
    isSpam: (honeypotValue: string) => {
      if (honeypotValue && honeypotValue.trim().length > 0) return true;
      if (Date.now() - startedAt < 2000) return true;
      return false;
    },
  };
};

/** Props для скрытого honeypot input */
export const honeypotProps = (value: string, onChange: (v: string) => void) => ({
  type: "text" as const,
  name: HONEYPOT_FIELD,
  tabIndex: -1,
  autoComplete: "off",
  value,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
  "aria-hidden": true,
  style: {
    position: "absolute" as const,
    left: "-9999px",
    width: "1px",
    height: "1px",
    opacity: 0,
    pointerEvents: "none" as const,
  },
});
