import { styled } from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 4rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Heading>HomeHive</Heading>
    </StyledLogo>
  );
}

export default Logo;
