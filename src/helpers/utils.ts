/* eslint-disable @typescript-eslint/no-explicit-any */
// Extende a função T para receber argumentos variáveis, porem vou usar a o debounce do lodash
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
}
