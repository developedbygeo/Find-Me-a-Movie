import { useKeenSlider } from 'keen-slider/react';
import useWindow from '@/hooks/useWindow';
import useSlider from '@/hooks/useSlider';

import { StyledTrending } from '@/styles/landing.styled';
import TrendingItem from './TrendingItem';
import 'keen-slider/keen-slider.min.css';

const mobileSlider = {
  loop: true,
  mode: 'free-snap',
  slides: {
    origin: 'center',
    perView: 3,
    spacing: 15,
  },
};

const desktopSlider = {
  ...mobileSlider,
  slides: {
    perView: 2.3,
  },
};

// TODO add scroll fn to slider

const Trending = ({ trendingData }) => {
  console.log(trendingData);
  const window = useWindow();
  const settings = window > 1150 ? desktopSlider : mobileSlider;
  const { ref, slider, currentSlide, load } = useSlider({ settings });
  return (
    <StyledTrending>
      <h1>Trending</h1>
      <ul className="keen-slider" ref={ref}>
        {trendingData.map((movie, idx) => {
          const priority = idx < 3;
          return (
            <TrendingItem key={movie.id} movie={movie} priority={priority} className="keen-slider__slide" />
          );
        })}
      </ul>
    </StyledTrending>
  );
};

export default Trending;
