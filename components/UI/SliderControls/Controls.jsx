import { StyledControls, StyledDots } from './Controls.styled';

import Arrow from '@/UI/SliderControls/Arrow';
import { UnstyledButton } from '@/UI/Buttons.styled';

import { GiCircle, GiPlainCircle } from 'react-icons/gi';

const Controls = ({ slidesLength, slider, currentSlide }) => {
  return (
    <StyledControls>
      <Arrow
        isLeft
        onClick={(e) => e.stopPropagation() || slider.current.prev()}
        title="Previous"
        aria-label="Previous"
      />
      <StyledDots>
        {new Array(slidesLength).fill(1).map((_, i) => {
          const Icon = currentSlide === i ? GiPlainCircle : GiCircle;
          return (
            <UnstyledButton
              key={i}
              onClick={() => slider.current.moveToIdx(i)}
              className={`dot ${currentSlide === i ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={currentSlide === i}
              tabIndex={0}
            >
              <Icon />
            </UnstyledButton>
          );
        })}
      </StyledDots>
      <Arrow
        isRight
        onClick={(e) => e.stopPropagation() || slider.current.next()}
        title="Next"
        aria-label="Next"
      />
    </StyledControls>
  );
};

export default Controls;
