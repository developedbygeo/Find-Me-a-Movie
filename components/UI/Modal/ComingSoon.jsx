import { StyledSoon } from './Dialogues.styled';
import { UnstyledButton } from '../Buttons.styled';
import { IoClose } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

const ComingSoon = ({ onDisable }) => {
  return (
    <StyledSoon>
      <UnstyledButton
        onClick={onDisable}
        title="Close this dialogue"
        aria-label="Close this dialogue"
        tabIndex={0}
      >
        <MdClose />
      </UnstyledButton>
      <div>
        <h1>This feature is not yet available...</h1>
        <p>but it will soon be!</p>
      </div>
    </StyledSoon>
  );
};

export default ComingSoon;
