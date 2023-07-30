import styled from 'styled-components';
import { KeyOfTypo, KeyOfColor, theme } from 'styles/theme';

export const Text = styled.div<{
  typo: KeyOfTypo;
  color: KeyOfColor;
}>`
  ${({ typo }) => theme.typo[typo]};
  color: ${({ color }) => theme.colors[color]};
`;
