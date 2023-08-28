import { styled } from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 3.2rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Heading>HomeHive</Heading>
    </StyledLogo>
  );
}

export default Logo;
