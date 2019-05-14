/// <reference types="react-scripts" />
declare module "Shared" {
  export function AppLink<T>(props: { link: string; component: T }): void;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
