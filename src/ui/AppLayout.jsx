import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';

const StyledAppLayout = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  padding: 4rem;
  background-color: var(--color-gray-50);
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
