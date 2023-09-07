import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { HiXMark } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../hooks/useOutsideClick';

const StyledModal = styled(motion.div)`
  position: relative;
  margin: 0 1.5rem;
  padding: 4rem;
  max-width: 60rem;
  width: 100%;
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
`;

const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Close = styled.button`
  position: absolute;
  right: 2.4rem;
  top: 2.4rem;
  background: none;
  color: var(--color-gray-600);
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState(null);

  const open = setOpenName;
  const close = () => setOpenName(null);

  return (
    <ModalContext.Provider
      value={{
        openName,
        open,
        close,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  return createPortal(
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {openName === name ? (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <StyledModal
            ref={ref}
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{
              y: '0',
              opacity: 1,
              transition: {
                duration: 0.1,
                type: 'spring',
                damping: 50,
                stiffness: 500,
              },
            }}
            exit={{ y: '100vh' }}
          >
            <Close onClick={close}>
              <HiXMark />
            </Close>

            <div>{cloneElement(children, { closeModal: close })}</div>
          </StyledModal>
        </Overlay>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
