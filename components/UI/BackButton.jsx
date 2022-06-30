import { useRouter } from 'next/router';

import { StyledBackButton } from './Buttons.styled';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const BackButton = ({ ...props }) => {
  const router = useRouter();

  const backHandler = () => router.back();

  return (
    <StyledBackButton {...props} onClick={backHandler} title="Previous page" aria-label="Previous page">
      <MdOutlineArrowBackIosNew />
    </StyledBackButton>
  );
};

export default BackButton;
