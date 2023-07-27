import { css } from 'styled-components';

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Headline1b: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: ${calcRem(20)};
    line-height: 150%;
  `,
  Headline2b: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: ${calcRem(18)};
    line-height: 150%;
  `,
  Subtitle1b: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: ${calcRem(14)};
    line-height: 150%;
  `,
  Subtitle1r: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(14)};
    line-height: 150%;
  `,
  Subtitle2b: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: ${calcRem(16)};
    line-height: 150%;
  `,
  Subtitle2r: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(16)};
    line-height: 150%;
  `,
  Caption1b: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: ${calcRem(12)};
    line-height: 150%;
  `,
  Caption1r: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: ${calcRem(12)};
    line-height: 150%;
  `,
  Caption2r: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(10)};
    line-height: 150%;
  `,
} as const;
