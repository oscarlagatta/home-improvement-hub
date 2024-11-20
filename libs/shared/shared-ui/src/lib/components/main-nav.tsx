import React from 'react';
import { Link } from 'react-router-dom';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className="flex items-center gap-3">
      <Link
        to="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        DashBoard
      </Link>
      <Link
        to="/user"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Users
      </Link>
    </nav>
  );
}
