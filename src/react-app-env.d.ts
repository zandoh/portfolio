/// <reference types="react-scripts" />
declare module "Shared" {
  export function AppLink<T>(props: { link: string; component: T }): void;
}
