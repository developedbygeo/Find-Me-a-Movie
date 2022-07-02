import styled, { css } from 'styled-components';

import devices from '@/shared/breakpoints';

const backdropStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.65);
`;

const modalStyle = css`
  position: fixed;
  z-index: 31;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  min-height: 25vh;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  background: rgb(${({ theme }) => theme.colors.background});
`;

const getDivStyle = ({ backdrop }) => {
  if (backdrop) return backdropStyle;
  return modalStyle;
};

const DynamicModalDiv = styled.div`
  ${getDivStyle};
`;

export default DynamicModalDiv;
