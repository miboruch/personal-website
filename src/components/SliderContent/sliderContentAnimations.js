import { useTrail } from 'react-spring';

export const textWave = (text, stateToggle) => {
  return useTrail(text.length, {
    opacity: stateToggle ? 1 : 0,
    x: stateToggle ? 0 : 20,
    height: stateToggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });
};
