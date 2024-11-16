'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from '@home-improvement-hub/shadcn';
import { Input } from '@home-improvement-hub/shadcn';

import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  // const [isCreateNewUserEnabled, setIsCreateNewUserEnabled] = useState(false);
  const isFiltered =
    table.getState().columnFilters.length > 0 ||
    table.getState().globalFilter !== '';
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter all columns..."
          value={table.getState().globalFilter ?? ''}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="h-8 w-[150px] lg:w-[350px]"
        />
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

      {/*{isCreateNewUserEnabled && <FeatureCreateUser />}*/}

      {/*<div className="flex flex-2 items-center space-x-2">*/}
      {/*  <Button*/}
      {/*    // className="h-8 px-2 lg:px-3 bg-white text-black"*/}
      {/*    variant="outline"*/}
      {/*    size="sm"*/}
      {/*    className="ml-auto hidden h-8 lg:flex"*/}
      {/*    onClick={() => {*/}
      {/*      setIsCreateNewUserEnabled(*/}
      {/*        (isCreateNewUserEnabled) => !isCreateNewUserEnabled*/}
      {/*      );*/}
      {/*      //0console.log(isCreateNewUserEnabled);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Create New User*/}
      {/*  </Button>*/}
      {/*</div>*/}

      {/*<div>*/}
      {/*  <Popover>*/}
      {/*    <PopoverTrigger>Create New User</PopoverTrigger>*/}
      {/*    <PopoverContent>*/}
      {/*      <FeatureCreateUser />*/}
      {/*    </PopoverContent>*/}
      {/*  </Popover>*/}
      {/*</div>*/}

      <DataTableViewOptions table={table} />
    </div>
  );
}
