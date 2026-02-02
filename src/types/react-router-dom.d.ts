// Type declarations for react-router-dom to resolve import errors

declare module 'react-router-dom' {
  import * as React from 'react';
  import { Location, NavigateFunction, Params, Path, PathMatch, RouteObject, To } from 'react-router';

  // Export the specific components and hooks used in the project
  export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    children?: React.ReactNode;
    reloadDocument?: boolean;
    replace?: boolean;
    state?: any;
    preventScrollReset?: boolean;
    relative?: 'route' | undefined;
    to: To;
  }

  export const Link: React.FC<LinkProps>;

  export function useLocation(): {
    pathname: string;
    search: string;
    hash: string;
    state: any;
    key: string;
  };

  export function useNavigate(): NavigateFunction;

  export const BrowserRouter: React.FC<{ children?: React.ReactNode; window?: Window }>;
  
  export const Routes: React.FC<{ children?: React.ReactNode }>;
  export const Route: React.FC<{ path?: string; element?: React.ReactNode }>;
  export const Navigate: React.FC<{ to: To; replace?: boolean }>;
}
