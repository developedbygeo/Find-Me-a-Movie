import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

const resizePlugin = (slider) => {
  const observer = new ResizeObserver(function () {
    slider.update();
  });

  slider.on('created', () => {
    observer.observe(slider.container);
  });
  slider.on('destroyed', () => {
    observer.unobserve(slider.container);
  });
};

const useSlider = (settings) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [load, setLoad] = useState(false);
  const [ref, slider] = useKeenSlider(
    {
      ...settings,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoad(true);
      },
    }[resizePlugin]
  );

  return { ref, slider, currentSlide, load };
};

export default useSlider;
