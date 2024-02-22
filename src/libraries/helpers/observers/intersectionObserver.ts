export function elementIntersectionObserver(
  element: HTMLElement,
  callback: (entries: IntersectionObserverEntry[]) => void
): void {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      callback(entries);
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1] }
  );
  intersectionObserver.observe(element);
}
