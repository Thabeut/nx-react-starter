import { ComponentType, ReactNode } from 'react';

type TGuardType = ComponentType<{ children: ReactNode }>;
type TLayoutType = ComponentType<{ children: ReactNode }>;

export interface IRouteItem {
  path: string;
  component: ComponentType<any>;
  guard?: TGuardType;
  layout?: TLayoutType;
}
