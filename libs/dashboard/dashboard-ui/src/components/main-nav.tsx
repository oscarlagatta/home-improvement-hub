import React from 'react';
import { Link } from 'react-router-dom';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className="flex items-center gap-3">
      <Link
        to="/home"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
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
      <Link
        to="/subscription"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Subscription
      </Link>
      <Link
        to="/job"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Job
      </Link>

      <Link
        to="/report"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Report
      </Link>
      <Link
        to="/review"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Reviews
      </Link>
      <Link
        to="/notification"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Notification
      </Link>
      <Link
        to="/resource"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Resource
      </Link>
    </nav>
  );
}
