import styled from 'styled-components';
export default function Home() {
  return (
    <>
      <StyledHeading>Hello World</StyledHeading>
    </>
  );
}

const StyledHeading = styled.h1`
  color: rgb(${({ theme }) => theme.colors.accent});
`;
