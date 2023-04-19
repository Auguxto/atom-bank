import styled from 'styled-components';
import * as Native from 'react-native';

const pixelRatio = Native.PixelRatio.get();

import backgroundImage from '../../assets/images/background.png';
import AtomBank from '../../assets/images/AtomBank.svg';

import Card_1 from '../../assets/images/cards/1.svg';
import Card_2 from '../../assets/images/cards/2.svg';
import Card_3 from '../../assets/images/cards/3.svg';

export const Container = styled(Native.View)`
  flex: 1;

  background-color: #ffffff;
`;

export const Background = styled(Native.ImageBackground).attrs({
  source: backgroundImage,
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const Logo = styled(AtomBank)`
  width: ${pixelRatio * 157}px;
  height: ${pixelRatio * 59}px;

  margin: 66px auto 0 auto;
`;

export const Cards = styled(Native.View)`
  flex-direction: row;

  width: 100%;

  justify-content: center;

  position: relative;

  top: 50px;
`;

export const Card1 = styled(Card_1)`
  position: absolute;

  left: -80px;

  z-index: 3;

  transform: rotateX(-20deg) rotateY(-40deg) rotateZ(20deg);
  transform-style: preserve-3d;
`;

export const Card2 = styled(Card_2)`
  position: absolute;

  z-index: 2;

  top: 100px;

  transform: rotateX(-10deg) rotateY(-40deg) rotateZ(-00deg);
  transform-style: preserve-3d;
`;

export const Card3 = styled(Card_3)`
  position: absolute;

  right: -100px;
  top: 200px;

  z-index: 1;

  transform: rotateX(-10deg) rotateY(-40deg) rotateZ(20deg);
  transform-style: preserve-3d;
`;
