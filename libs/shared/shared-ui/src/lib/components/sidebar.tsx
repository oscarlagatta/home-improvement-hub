import { Button } from '@home-improvement-hub/shadcn';
import {
  BarChart,
  Bell,
  BookOpen,
  Briefcase,
  DollarSign,
  Home,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Shield,
  Star,
  Users,
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home', to: '/' },
  { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
  { icon: Users, label: 'Users', to: '/users' },
  { icon: Briefcase, label: 'Projects', to: '/projects' },
  { icon: MessageSquare, label: 'Leads', to: '/leads' },
  { icon: DollarSign, label: 'Subscriptions', to: '/subscriptions' },
  { icon: Star, label: 'Reviews', to: '/reviews' },
  { icon: BookOpen, label: 'Resources', to: '/resources' },
  { icon: BarChart, label: 'Analytics', to: '/analytics' },
  { icon: Bell, label: 'Notifications', to: '/notifications' },
  { icon: Shield, label: 'Audit', to: '/audit' },
  { icon: Settings, label: 'Settings', to: '/settings' },
];

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
        <span className="text-2xl font-semibold text-gray-800 dark:text-white">
          LandscaperHub
        </span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.to}>
              <Button>{item.label}</Button>
              {/*<NavLink*/}
              {/*  to={item.to}*/}
              {/*  className={({ isActive }: { isActive: boolean }) =>*/}
              {/*    cn(*/}
              {/*      'flex items-center p-2 text-gray-600 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',*/}
              {/*      isActive &&*/}
              {/*        'bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400'*/}
              {/*    )*/}
              {/*  }*/}
              {/*>*/}
              {/*  <item.icon className="w-5 h-5 mr-3" />*/}
              {/*  <span>{item.label}</span>*/}
              {/*</NavLink>*/}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
