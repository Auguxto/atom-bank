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
      </S.Background>
    </S.Container>
  );
}
