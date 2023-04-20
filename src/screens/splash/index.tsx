import React from 'react';

import * as S from './styles';

export default function Splash() {
  return (
    <S.Container>
      <S.Background>
        <S.Logo />
        <S.Cards>
          <S.Card1 />
          <S.Card2 />
          <S.Card3 />
        </S.Cards>
        <S.Texts>
          <S.Title>Easy Way to {'\n'}Save Your Money</S.Title>
          <S.Description>
            The best place to transact and save {'\n'}money
          </S.Description>
        </S.Texts>
        <S.Button>
          <S.ButtonGradient>
            <S.ButtonText>Get Started</S.ButtonText>
          </S.ButtonGradient>
        </S.Button>
      </S.Background>
    </S.Container>
  );
}
