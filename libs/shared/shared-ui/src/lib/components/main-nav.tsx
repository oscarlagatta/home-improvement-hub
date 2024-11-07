import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import { Button, cn } from '@home-improvement-hub/shadcn';

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {/*<StyledNavLink to="/services"*/}

      {/*  className="text-sm font-medium transition-colors hover:text-primary"*/}
      {/*>*/}
      {/*  Services*/}
      {/*</StyledNavLink>*/}
      {/*<StyledNavLink to="/agents"*/}

      {/*  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"*/}
      {/*>*/}
      {/*  Agents*/}
      {/*</StyledNavLink>*/}
      {/*<StyledNavLink to="/bookings"*/}

      {/*         className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"*/}
      {/*>*/}
      {/*  Bookings*/}
      {/*</StyledNavLink>*/}
      {/*<StyledNavLink to="/reviews"*/}

      {/*  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"*/}
      {/*>*/}
      {/*  Reviews*/}
      {/*</StyledNavLink>*/}

      <StyledNavLink
        to="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </StyledNavLink>
      <StyledNavLink
        to="/orders"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Orders
      </StyledNavLink>
    </nav>
  );
}
