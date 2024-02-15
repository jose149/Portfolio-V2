export function elementIntersectionObserver(
  element: HTMLElement,
  callback: (isIntersected: boolean) => void,
  margin = -300
): void {
  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      console.log(entry.target);
      callback(entry.isIntersecting);
    },
    { rootMargin: `${margin}px` }
  );
  intersectionObserver.observe(element);
}
