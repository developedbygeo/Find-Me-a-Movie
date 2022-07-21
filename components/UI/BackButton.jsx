import { useRouter } from 'next/router';

import { StyledBackButton, StyledBackButtonCont } from './Buttons.styled';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const BackButton = ({ ...props }) => {
  const router = useRouter();

  const backHandler = () => router.back();

  return (
    <StyledBackButtonCont>
      <StyledBackButton {...props} onClick={backHandler} title="Previous page" aria-label="Previous page">
        <MdOutlineArrowBackIosNew />
      </StyledBackButton>
      <div className="back-text">
        <p>Return to the previous page</p>
      </div>
    </StyledBackButtonCont>
  );
};

export default BackButton;
