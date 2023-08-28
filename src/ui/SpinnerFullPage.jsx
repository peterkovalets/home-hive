import { styled } from 'styled-components';
import Spinner from './Spinner';

const StyledSpinnerFullPage = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function SpinnerFullPage() {
  return (
    <StyledSpinnerFullPage>
      <Spinner />
    </StyledSpinnerFullPage>
  );
}

export default SpinnerFullPage;
