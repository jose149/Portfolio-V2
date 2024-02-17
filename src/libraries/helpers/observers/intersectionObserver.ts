export function elementIntersectionObserver(
  element: HTMLElement,
  callback: (entries: IntersectionObserverEntry[]) => void,
  margin = -50
): void {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      callback(entries);
    },
    { threshold: [0, 0.5, 1], rootMargin: `${margin}px` }
  );
  intersectionObserver.observe(element);
}
