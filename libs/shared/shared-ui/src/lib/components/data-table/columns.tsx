import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@home-improvement-hub/shadcn';
import { Checkbox } from '@home-improvement-hub/shadcn';

import { labels, priorities, statuses } from '../../data/data';
import { User } from '../../data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { format } from 'date-fns';

export const createColumns = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void,
  onCopy: (id: number) => void
): ColumnDef<User>[] => [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && 'indeterminate')
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // {
  //   accessorKey: 'userID',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="User Id" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue('userID')}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'fullName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div>{row.getValue('fullName')}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div>{row.getValue('email')}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => <div>{row.getValue('phoneNumber')}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => <div>{row.getValue('address')}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: 'city',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
    cell: ({ row }) => <div>{row.getValue('city')}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'stateOrProvince',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="State/ Province" />
    ),
    cell: ({ row }) => <div>{row.getValue('stateOrProvince')}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'postalCode',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Post Code" />
    ),
    cell: ({ row }) => <div>{row.getValue('postalCode')}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'jobTitle',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Job Title" />
    ),
    cell: ({ row }) => <div>{row.getValue('jobTitle')}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'createdDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created Date" />
    ),
    cell: ({ row }) => {
      // <div>{row.getValue('createdDate')}</div>;
      const dateStr = row.getValue('createdDate') as string;
      const date = format(new Date(dateStr), 'dd-MM-yyyy');
      return <div>{date}</div>;
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'lastUpdatedDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Updated Date" />
    ),
    cell: ({ row }) => {
      const dateStr = row.getValue('lastUpdatedDate') as string;
      const date = format(new Date(dateStr), 'dd-MM-yyyy');
      return <div>{date}</div>;
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        onEdit={onEdit}
        onDelete={onDelete}
        onCopy={onCopy}
      />
    ),
  },
];

//
// export const columns: ColumnDef<Task>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//         className="translate-y-[2px]"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//         className="translate-y-[2px]"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "id",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Task" />
//     ),
//     cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "title",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Title" />
//     ),
//     cell: ({ row }) => {
//       const label = labels.find((label) => label.value === row.original.label)
//
//       return (
//         <div className="flex space-x-2">
//           {label && <Badge variant="outline">{label.label}</Badge>}
//           <span className="max-w-[500px] truncate font-medium">
//             {row.getValue("title")}
//           </span>
//         </div>
//       )
//     },
//   },
//   {
//     accessorKey: "status",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Status" />
//     ),
//     cell: ({ row }) => {
//       const status = statuses.find(
//         (status) => status.value === row.getValue("status")
//       )
//
//       if (!status) {
//         return null
//       }
//
//       return (
//         <div className="flex w-[100px] items-center">
//           {status.icon && (
//             <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
//           )}
//           <span>{status.label}</span>
//         </div>
//       )
//     },
//     filterFn: (row, id, value) => {
//       return value.includes(row.getValue(id))
//     },
//   },
//   {
//     accessorKey: "priority",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Priority" />
//     ),
//     cell: ({ row }) => {
//       const priority = priorities.find(
//         (priority) => priority.value === row.getValue("priority")
//       )
//
//       if (!priority) {
//         return null
//       }
//
//       return (
//         <div className="flex items-center">
//           {priority.icon && (
//             <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
//           )}
//           <span>{priority.label}</span>
//         </div>
//       )
//     },
//     filterFn: (row, id, value) => {
//       return value.includes(row.getValue(id))
//     },
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => <DataTableRowActions row={row} />,
//   },
// ]
