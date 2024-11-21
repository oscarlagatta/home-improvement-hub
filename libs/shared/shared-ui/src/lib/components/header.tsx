import { MainNav } from '@home-improvement-hub/dashboard-ui';
import { Search } from '@home-improvement-hub/dashboard-ui';
import { UserNav } from '@home-improvement-hub/dashboard-ui';
import DarkModeToggle from './dark-mode-toggle';

export function Header() {
  return (
    <div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
