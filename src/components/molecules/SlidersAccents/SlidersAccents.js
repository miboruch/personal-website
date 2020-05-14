// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { animated } from 'react-spring';
// import Paragraph from '../../atoms/Paragraph/Paragraph';
// import { lineSlide } from './slidersAccentsAnimations';
// import { animationIn } from '../../../utils/animations';
// import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
// import PageTransitionProvider from '../../../providers/PageTransitionProvider';
//
// const StyledLine = styled(animated.div)`
//   position: absolute;
//   top: 45%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 100%;
//   height: 2px;
//   background: ${({ isDarkTheme }) =>
//     isDarkTheme ? 'rgba(214, 212, 208, 0.6)' : 'rgba(214, 212, 208, 0.2)'};
//   z-index: 5;
//   transition: all 1s ease;
//
//   ${({ theme }) => theme.mq.standard} {
//     top: 50%;
//   }
// `;
//
// const OverflowBox = styled.div`
//   overflow: hidden;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transform: translateY(-100%);
//   height: 16px;
// `;
//
// const AllProjectCase = styled(Paragraph)`
//   position: relative;
//   padding: 0 2rem;
//   font-weight: bold;
//   letter-spacing: 4px;
//   text-transform: uppercase;
//   display: none;
//   cursor: pointer;
//   color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#fff')} !important;
//
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -2px;
//     left: 0;
//     width: 0;
//     height: 2px;
//     background: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#fff')};
//     transition: all 1s cubic-bezier(0.66, 0.24, 0, 0.82);
//   }
//
//   &:hover::after {
//     width: 100%;
//   }
//
//   ${({ theme }) => theme.mq.standard} {
//     display: block;
//   }
// `;
//
// // const SlidersAccents = ({ index, isDarkTheme }) => {
// //   const { currentSlide } = useContext(CurrentSlideContext);
// //   const isCurrentSlide = currentSlide === index;
// //
// //   const bottomSlide = animationIn(isCurrentSlide, 900, 3000, 0);
// //   const line = lineSlide(isCurrentSlide);
// //
// //   return (
// //     <StyledLine style={line} isDarkTheme={isDarkTheme}>
// //       <OverflowBox>
// //         <PageTransitionProvider to='/projects' dark={true}>
// //           <AllProjectCase
// //             small='true'
// //             style={bottomSlide}
// //             isDarkTheme={isDarkTheme}
// //           >
// //             all projects
// //           </AllProjectCase>
// //         </PageTransitionProvider>
// //       </OverflowBox>
// //     </StyledLine>
// //   );
// // };
//
// const SliderAccents = React.forwardRef(({ index, isDarkTheme }, ref) => {
//   const { currentSlide } = useContext(CurrentSlideContext);
//   const isCurrentSlide = currentSlide === index;
//
//   const bottomSlide = animationIn(isCurrentSlide, 900, 3000, 0);
//   const line = lineSlide(isCurrentSlide);
//
//   return (
//     <StyledLine style={line} isDarkTheme={isDarkTheme}>
//       <OverflowBox>
//         <PageTransitionProvider to='/projects' dark={true}>
//           <AllProjectCase
//             small='true'
//             ref={ref}
//             style={bottomSlide}
//             isDarkTheme={isDarkTheme}
//           >
//             all projects
//           </AllProjectCase>
//         </PageTransitionProvider>
//       </OverflowBox>
//     </StyledLine>
//   );
// });
//
// SlidersAccents.propTypes = {
//   index: PropTypes.number.isRequired
// };
//
// SliderAccents.displayName = 'SliderAccents';
//
// export default SlidersAccents;
