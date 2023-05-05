import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

interface Props {
  selectors: string;
  requestClose?: () => void;
}

const PortalDrawer = ({
  children,
  selectors,
  requestClose,
}: PropsWithChildren<Props>) => {
  const element = document.querySelector(selectors);
  if (element === null) {
    throw new Error(
      "There are no elements in the react-portal-drawer that match the selector."
    );
  }

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={requestClose} />
      <DrawerWrapper>{children}</DrawerWrapper>
    </>,
    element
  );
};

export default PortalDrawer;

const darkening = keyframes`
  from { background-color: rgba(0, 0, 0, 0.0); }
  to { background-color: rgba(0, 0, 0, 0.6); }
`;

const drawer = keyframes`
  from { bottom: -100px }
  to { bottom: 0; }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  animation: ${darkening} 0.3s;
`;

const DrawerWrapper = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: auto;
  border-radius: 6px 6px 0px 0px;
  padding: 34px 48px;

  background: white;

  animation: ${drawer} 0.3s;
`;
