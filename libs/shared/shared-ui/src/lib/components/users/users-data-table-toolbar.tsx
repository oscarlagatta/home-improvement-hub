import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import {
  Button,
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Separator,
} from '@home-improvement-hub/shadcn';
import { Input } from '@home-improvement-hub/shadcn';

import { UsersDataTableViewOptions } from './users-data-table-view-options';
import { DialogContent } from '@radix-ui/react-dialog';

import { ReactNode, useState } from 'react';
import { Search } from 'lucide-react';

interface UsersDataTableToolbarProps<TData> {
  table: Table<TData>;
  children: ReactNode;
}

export function UsersDataTableToolbar<TData>({
  table,
  children
}: UsersDataTableToolbarProps<TData>) {
  const isFiltered =
    table.getState().columnFilters.length > 0 ||
    table.getState().globalFilter !== '';

  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative">
          <Search className="text-muted-foreground absolute left-2 top-2 h-4 w-4" />
          <Input
            placeholder="Filter all columns..."
            value={table.getState().globalFilter ?? ''}
            onChange={(event) => table.setGlobalFilter(event.target.value)}
            className="h-8 w-[150px] lg:w-[350px]"
          />
        </div>

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => {
              table.resetColumnFilters();
              table.setGlobalFilter('');
            }}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center justify-end space-x-2">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm">Create User</Button>
          </DialogTrigger>
          <DialogContent className="flex flex-col sm:max-w-[1200px]">
            <DialogHeader>
              <DialogTitle className="text-xl uppercase">
                User Details
              </DialogTitle>
              <DialogDescription>
                Please enter below the details for the new User
              </DialogDescription>
              <Separator />

              {children}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <UsersDataTableViewOptions table={table} />
    </div>
  );
}
