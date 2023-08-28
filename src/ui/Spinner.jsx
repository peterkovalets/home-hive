import { keyframes, styled } from 'styled-components';

const rotate = keyframes`
  20% {background-position: 0% 50% ,50% 100%,100% 100%}
  40% {background-position: 0% 0%  ,50% 50% ,100% 100%}
  60% {background-position: 0% 100%,50% 0%  ,100% 50% }
  80% {background-position: 0% 100%,50% 100%,100% 0%  }
`;

const Spinner = styled.div`
  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(var(--color-gray-700) 0 0);
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 20% 65%;
  animation: ${rotate} 1s infinite linear;
`;

export default Spinner;
