export function elementIntersectionObserver(
  element: HTMLElement,
  callback: (isIntersected: boolean) => void,
  margin = -100,
): void {
  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      callback(entry.isIntersecting);
    },
    { rootMargin: `${margin}px` },
  );
  intersectionObserver.observe(element);
}
