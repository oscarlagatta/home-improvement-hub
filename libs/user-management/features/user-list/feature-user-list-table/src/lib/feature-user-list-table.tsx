import { UsersDataTable } from '@home-improvement-hub/shared-ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@home-improvement-hub/shared-ui';
import { UsersCreateColumns } from '@home-improvement-hub/shared-ui';
import { useUsers } from '@home-improvement-hub/data';

import { FeatureCreateUser } from './pages/feature-create-user';
export function FeatureUserListTable() {
  const { userList, isLoading } = useUsers(); //data from api

  const [users, setUsers] = useState<User[]>();

  const navigate = useNavigate();
  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  if (isLoading) return <div>Loading.....</div>;

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
    return null;
  };

  const columns = UsersCreateColumns(handleEdit, handleDelete, handleCopy);

  return (

      <UsersDataTable
        data={users ?? []}
        columns={columns}
        handleDelete={handleDelete}
      >
        <FeatureCreateUser />
      </UsersDataTable>

  );
}

export default FeatureUserListTable;
