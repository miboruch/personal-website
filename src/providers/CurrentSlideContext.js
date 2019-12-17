import React, { useState } from 'react';

export const CurrentSlideContext = React.createContext({
  currentSlide: 0,
  oldSlide: -1,
  setSlide: () => {},
  setOldSlide: () => {}
});

const CurrentSlideContextProvider = ({ children }) => {
  const [slide, setSlide] = useState(0);
  const [oldSlide, setOldSlide] = useState(-1);

  const setCurrentSlide = index => {
    setSlide(index);
  };

  const setOldSlideIndex = index => {
    setOldSlide(index);
  };

  return (
    <CurrentSlideContext.Provider
      value={{
        currentSlide: slide,
        oldSlide: oldSlide,
        setSlide: setCurrentSlide,
        setOldSlide: setOldSlideIndex
      }}
    >
      {children}
    </CurrentSlideContext.Provider>
  );
};

export default CurrentSlideContextProvider;
