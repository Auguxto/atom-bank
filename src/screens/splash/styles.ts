import styled from 'styled-components';
import * as Native from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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

  margin: 60px auto 0 auto;
`;

export const Cards = styled(Native.View)`
  flex: 1;

  flex-direction: row;

  justify-content: center;

  margin-top: 30px;
`;

export const Card1 = styled(Card_1)`
  z-index: 3;

  margin-right: -100px;

  transform: rotateX(-30deg) rotateY(-20deg) rotateZ(10deg);
  transform-style: preserve-3d;
`;

export const Card2 = styled(Card_2)`
  z-index: 2;

  margin-top: 100px;

  transform: rotateX(-20deg) rotateY(30deg) rotateZ(-10deg);
  transform-style: preserve-3d;
`;

export const Card3 = styled(Card_3)`
  z-index: 1;

  margin-top: 200px;
  margin-left: -130px;

  transform: rotateX(-20deg) rotateY(-20deg) rotateZ(10deg);
  transform-style: preserve-3d;
`;

export const Texts = styled(Native.View)`
  width: 90%;

  margin: 0 auto;
`;

export const Title = styled(Native.Text)`
  font-family: 'Poppins-Bold';
  font-size: 36px;

  color: #eff1f3;
`;

export const Description = styled(Native.Text)`
  font-family: 'Montserrat';
  font-size: 12px;

  color: #989898;
`;

export const Button = styled(Native.TouchableOpacity)`
  width: 90%;
  height: 72px;

  justify-content: center;

  margin: 20px auto 20px auto;
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  start: {x: 0.0, y: 0.25},
  end: {x: 0.5, y: 1.0},
  locations: [0.1, 1],
  colors: ['#ADE446', '#13C93E'],
})`
  height: 72px;

  align-items: center;
  justify-content: center;

  border-radius: 32px;
`;

export const ButtonText = styled(Native.Text)`
  font-family: 'Poppins-Bold';
  font-size: 16px;

  color: #ffffff;
`;
