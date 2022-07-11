import { StyledSoon } from './ComingSoon.styled';
import Link from 'next/link';

const ComingSoon = () => {
  return (
    <>
      <StyledSoon>
        <h1>This feature is coming soon!</h1>
        <h2>Stay tuned!</h2>
      </StyledSoon>
      <StyledSoon>
        <p>
          Meanwhile, here&apos; a way to get back <span>home</span>
        </p>
        <Link href="/">Home</Link>
      </StyledSoon>
    </>
  );
};

export default ComingSoon;
