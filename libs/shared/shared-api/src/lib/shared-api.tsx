import styled from 'tailwind';

const StyledSharedApi = styled.div`
  color: pink;
`;

export function SharedApi() {
  return (
    <StyledSharedApi>
      <h1>Welcome to SharedApi!</h1>
    </StyledSharedApi>
  );
}

export default SharedApi;
