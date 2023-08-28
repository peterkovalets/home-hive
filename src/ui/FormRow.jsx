import { styled } from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Error = styled.p`
  color: var(--color-red-500);
  text-align: center;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
