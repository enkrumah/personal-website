export {};

declare global {
  interface Window {
    __portfolioAnalytics?: {
      track: (
        event: string,
        properties?: Record<string, string | number | boolean>,
      ) => void;
    };
  }
}
