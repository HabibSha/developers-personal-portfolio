declare module "body-scroll-lock" {
  export function disableBodyScroll(
    targetElement: Element | null,
    options?
  ): void;
  export function enableBodyScroll(targetElement: Element | null): void;
  export function clearAllBodyScrollLocks(): void;
}
