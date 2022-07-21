import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

import { UnstyledButton } from '../Buttons.styled';

const Arrow = ({ onClick, isLeft, ...props }) => {
  const Icon = isLeft ? IoMdArrowDropleft : IoMdArrowDropright;

  return (
    <UnstyledButton
      onClick={onClick}
      className={`arrow ${isLeft ? 'arr-left' : 'arr-right'}`}
      tabIndex={0}
      {...props}
    >
      <Icon aria-label={isLeft ? 'Previous' : 'Next'} />
    </UnstyledButton>
  );
};

export default Arrow;
