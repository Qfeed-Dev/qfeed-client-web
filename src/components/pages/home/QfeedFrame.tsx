"use client";
import { colors } from "src/constants/colors";
import useDisplaySize from "src/hooks/useDisplaySize";
import { styled } from "styled-components";
import { match } from "ts-pattern";

interface Props {
  onClick: () => void;
}

const QfeedFrame = ({ onClick }: Props) => {
  const { width } = useDisplaySize();
  return (
    <QfeedFrameWrapper onClick={onClick} width={(width - 16 * 2 - 12) / 2}>
      Hi
    </QfeedFrameWrapper>
  );
};

const QfeedFrameWrapper = styled.div<{ width: number }>`
  width: ${({ width }) => width + "px"};
  height: 20px;

  display: flex;
  gap: 12px;
  border-radius: 10px;
  background-color: yellowgreen;
`;

const Menu = styled.div`
  color: ${colors.Qwhite};
`;

export default QfeedFrame;
