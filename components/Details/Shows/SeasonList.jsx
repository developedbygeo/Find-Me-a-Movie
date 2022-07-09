import SeasonItem from './SeasonItem';
import useSlider from '@/hooks/useSlider';
import useWindow from '@/hooks/useWindow';

import 'keen-slider/keen-slider.min.css';

import Controls from '@/components/UI/SliderControls/Controls';
import { GalleryWrapper } from '@/styles/landing.styled';
import { ListWrapper } from './SeasonList.styled';

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
    perView: 3,
    spacing: 15,
  },
};

const SeasonList = ({ title, showId, seasons, shouldHaveButtons, ...props }) => {
  const window = useWindow();
  const settings = window > 1150 ? desktopSlider : mobileSlider;
  const { ref, slider, currentSlide, load } = useSlider(settings);
  const isSliderReady = load && slider.current;

  return (
    <ListWrapper {...props}>
      <h3>Available Seasons</h3>
      <GalleryWrapper as="div" className="slider-wrapper">
        <ul
          className="keen-slider"
          ref={ref}
          role="region"
          alt={`${title} seasons`}
          aria-label={`${title} seasons`}
        >
          {seasons.map((season, idx) => {
            const isPriority = idx > 2;
            return (
              <SeasonItem
                className="keen-slider__slide"
                key={season.id}
                showId={showId}
                details={season}
                priority={isPriority}
                aria-label={`slide ${idx + 1} of ${seasons.length}`}
                aria-current={idx === currentSlide}
                tabIndex={0}
                role="group"
              />
            );
          })}
        </ul>
      </GalleryWrapper>
      {shouldHaveButtons && isSliderReady && (
        <Controls slidesLength={seasons.length} slider={slider} currentSlide={currentSlide} />
      )}
    </ListWrapper>
  );
};

export default SeasonList;
