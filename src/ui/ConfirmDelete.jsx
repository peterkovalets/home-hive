import { styled } from 'styled-components';
import Button from './Button';
import Heading from './Heading';

const StyledConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    margin-bottom: 1.2rem;
    color: var(--color-gray-500);
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, closeModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <Buttons>
        <Button variant="outline" onClick={closeModal} disabled={disabled}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={disabled}>
          Delete
        </Button>
      </Buttons>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
