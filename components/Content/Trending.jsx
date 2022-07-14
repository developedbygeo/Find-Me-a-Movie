import useWindow from '@/hooks/useWindow';
import useSlider from '@/hooks/useSlider';

import { StyledTrending, GalleryWrapper } from '@/styles/landing.styled';
import TrendingItem from './TrendingItem';
import 'keen-slider/keen-slider.min.css';

const mobileSlider = {
  loop: true,
  mode: 'free-snap',
  slides: {
    perView: 2,
    spacing: 10,
  },
};

const desktopSlider = {
  ...mobileSlider,
  slides: {
    perView: 6,
    spacing: 30,
  },
};

const Trending = ({ trendingData }) => {
  const window = useWindow();
  const settings = window > 1150 ? desktopSlider : mobileSlider;
  const { ref, slider, currentSlide, load } = useSlider(settings);

  return (
    <StyledTrending>
      <h1>Trending</h1>
      <GalleryWrapper>
        <ul
          className="keen-slider"
          ref={ref}
          role="region"
          alt="Trending movie gallery"
          aria-label="Trending movie gallery"
        >
          {trendingData.map((movie, idx) => {
            const priority = idx < 2;
            return (
              <TrendingItem
                className="keen-slider__slide"
                key={movie.id}
                movie={movie}
                priority={priority}
                aria-label={`slide ${idx + 1} of ${trendingData.length}`}
                aria-current={idx === currentSlide}
                tabIndex={0}
                role="group"
              />
            );
          })}
        </ul>
      </GalleryWrapper>
    </StyledTrending>
  );
};

export default Trending;
