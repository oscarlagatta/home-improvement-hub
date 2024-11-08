import styled from 'tailwind';

const StyledUserProfileUi = styled.div`
  color: pink;
`;

export function UserProfileUi() {
  return (
    <StyledUserProfileUi>
      <h1>Welcome to UserProfileUi!</h1>
    </StyledUserProfileUi>
  );
}

export default UserProfileUi;
