import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@home-improvement-hub/shadcn';
import { userSchema } from '../../data/schema';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onCopy: (id: number) => void;
}

export function DataTableRowActions<TData>({
  row,
  onEdit,
  onDelete,
  onCopy,
}: DataTableRowActionsProps<TData>) {
  const user = userSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onEdit(user.userID)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onCopy(user.userID)}>
          Copy
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem onSelect={() => onDelete(user.userID)}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
