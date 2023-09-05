import { styled } from 'styled-components';

const FileInput = styled.input.attrs({ type: 'file' })`
  &::file-selector-button {
    margin-right: 1.2rem;
    padding: 0.6rem 1.2rem;
    background-color: var(--color-brand-400);
    color: var(--color-brand-50);
    border: none;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    transition: background-color 0.3s;
  }

  &:disabled {
    &::file-selector-button {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  &:not(:disabled) {
    &::file-selector-button {
      &:hover {
        background-color: var(--color-brand-500);
      }
    }
  }
`;

export default FileInput;
