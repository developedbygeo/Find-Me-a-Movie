import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

const useSlider = (settings) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [load, setLoad] = useState(false);
  const [ref, slider] = useKeenSlider({
    ...settings,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoad(true);
    },
  });

  return { ref, slider, currentSlide, load };
};

export default useSlider;
