declare module 'react-router-hash-link' {
  import { ReactNode, HTMLAttributes } from 'react';
  import { LinkProps } from 'react-router-dom';

  export interface HashLinkProps extends Omit<LinkProps, 'to'>, Omit<HTMLAttributes<HTMLAnchorElement>, 'onClick'> {
    to: string;
    smooth?: boolean;
    scroll?: (element: HTMLElement) => void;
    children?: ReactNode;
  }

  export const HashLink: React.ForwardRefExoticComponent<HashLinkProps & React.RefAttributes<HTMLAnchorElement>>;
  export const NavHashLink: React.ForwardRefExoticComponent<HashLinkProps & React.RefAttributes<HTMLAnchorElement>>;
}

