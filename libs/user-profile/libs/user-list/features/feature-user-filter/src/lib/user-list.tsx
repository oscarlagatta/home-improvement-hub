import styled from 'tailwind';

const StyledUserList = styled.div`
  color: pink;
`;

export function UserList() {
  return (
    <StyledUserList>
      <h1>Welcome to UserList!</h1>
    </StyledUserList>
  );
}

export default UserList;
