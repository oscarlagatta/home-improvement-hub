import { cn } from '@home-improvement-hub/shadcn';
import { Button } from '@home-improvement-hub/shadcn';
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
    </aside>
  );
}
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
