import styled from 'tailwind';

const StyledState = styled.div`
  color: pink;
`;

export function State() {
  return (
    <StyledState>
      <h1>Welcome to State!</h1>
    </StyledState>
  );
}

export default State;
