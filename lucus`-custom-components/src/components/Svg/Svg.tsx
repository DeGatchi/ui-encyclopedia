import styled, { keyframes } from 'styled-components';
import { SvgProps } from './types';

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  fill: black;
  flex-shrink: 0;
`;

Svg.defaultProps = {
  color: 'text',
  width: '20px',
  xmlns: 'http://www.w3.org/2000/svg',
};

export default Svg;
