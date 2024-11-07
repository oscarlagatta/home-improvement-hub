import { cn } from '@home-improvement-hub/shadcn';
import { Button } from '@home-improvement-hub/shadcn';
// import {
//   ChartBarSquareIcon,
//   ArrowTrendingUpIcon,
//   ClipboardDocumentIcon,
// } from '@heroicons/react/24/solid';
import { useState } from 'react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'bg-gray-900 text-white h-full p-4 flex-shrink-0',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? 'Expand' : 'Collapse'}
      </Button>

      {/* Navigation Items */}
      {/*<nav className="space-y-4">*/}
      {/*  <NavItem*/}
      {/*    label="Scorecard Dashboard"*/}
      {/*    icon={<ChartBarSquareIcon className="w-6 h-6" />}*/}
      {/*    isCollapsed={isCollapsed}*/}
      {/*  />*/}
      {/*  <NavItem*/}
      {/*    label="Performance Metrics"*/}
      {/*    icon={<ArrowTrendingUpIcon className="w-6 h-6" />}*/}
      {/*    isCollapsed={isCollapsed}*/}
      {/*  />*/}
      {/*  <NavItem*/}
      {/*    label="Reports"*/}
      {/*    icon={<ClipboardDocumentIcon className="w-6 h-6" />}*/}
      {/*    isCollapsed={isCollapsed}*/}
      {/*  />*/}
      {/*</nav>*/}
    </aside>
  );
}

// NavItem Component
function NavItem({
  label,
  icon,
  isCollapsed,
}: {
  label: string;
  icon: JSX.Element;
  isCollapsed: boolean;
}) {
  return (
    <div className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 transition">
      {icon}
      {!isCollapsed && <span>{label}</span>}
    </div>
  );
}
