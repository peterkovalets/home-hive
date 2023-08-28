import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Logo from './Logo';

const StyledAuthLayout = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Wrapper = styled.div`
  padding: 2.4rem 4rem;
  max-width: 48rem;
  width: 100%;
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-sm);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

function AuthLayout() {
  return (
    <StyledAuthLayout>
      <Logo />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </StyledAuthLayout>
  );
}

export default AuthLayout;
