import { DataTable } from '@home-improvement-hub/shared-ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@home-improvement-hub/shared-ui';
import { createColumns } from '@home-improvement-hub/shared-ui';
import { useUsers } from '@home-improvement-hub/data';
import { UserNav } from '@home-improvement-hub/shared-ui';
import { Popover, PopoverContent, PopoverTrigger } from '@home-improvement-hub/shadcn';
import { FeatureCreateUser } from '@home-improvement-hub/feature-create-user';

export function FeatureUserListTable() {

  const { userList, isLoading} = useUsers(); //data from api
  // return <h1>Welcome to FeatureUserListTable!</h1>;

  if (isLoading) return <div>Loading.....</div>;

  const [users, setUsers] = useState<User[]>();

  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    console.log('handleEdit', id);
    navigate(`edit/${id}`);
  };
  const handleCopy = (id: number) => {
    console.log(id);
    return null;
  };
  const handleDelete = (id: number) => {
    setUsers((users ?? []).filter((user: User) => user.userID !== id));
    //console.log(id);
    return null;
  };

  const columns = createColumns(handleEdit, handleDelete, handleCopy);

  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of users!
          </p>
        </div>

        <div>
          <Popover>
            <PopoverTrigger>Create New User</PopoverTrigger>
            <PopoverContent>
              <FeatureCreateUser />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex items-center space-x-2"><UserNav /></div>
      </div>
      <DataTable data={users ?? []} columns={columns} handleDelete={handleDelete} />
    </div>
  );


}

export default FeatureUserListTable;
