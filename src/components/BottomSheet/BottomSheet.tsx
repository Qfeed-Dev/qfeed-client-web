"use client";
import { forwardRef } from "react";
import { colors } from "src/constants/colors";
import useBottomSheet from "src/hooks/useBottomSheet";
import { useAppDispatch, useAppSelector } from "src/hooks/useReduxHooks";
import {
  changeAction,
  changeVisible,
} from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import { css, keyframes, styled } from "styled-components";
import Coin from "./children/Coin";
import Frined from "./children/Friend";
import Report from "./children/Report";

interface Props {
  children?: any;
}

const COMPONENT_HEIGHT = { report: 540 + 30, coin: 324 + 30, friend: 325 + 60 };
const COMPONENT = { report: <Report />, coin: <Coin />, friend: <Frined /> };

const BottomSheet = forwardRef(function Div(
  { children, ...props }: Props,
  ref
) {
  const dispatch = useAppDispatch();
  const { type, visible, actionDelay } = useAppSelector(
    (state) => state.bottomSheet
  );
  const BOTTOMSHEET_HEIGHT = COMPONENT_HEIGHT[type];

  const handleMove = (move: number) => {
    if (move)
      dispatch(
        changeVisible({
          type: "bottomSheet",
          value: move,
        })
      );
    else
      dispatch(
        changeVisible({
          type: "bottomSheet",
          value: move,
        })
      );
  };

  const handleClickBackground = () => {
    sheet.current!.style.setProperty(
      "transform",
      `translateY(${BOTTOMSHEET_HEIGHT}px)`
    );
    dispatch(
      changeAction({
        type: "bottomSheet",
        value: false,
      })
    );
    setTimeout(() => {
      dispatch(
        changeVisible({
          type: "bottomSheet",
          value: 0,
        })
      );
    }, 300);
  };

  const { sheet, content } = useBottomSheet({
    visible,
    handleClickBackground,
    handleMove,
    BOTTOMSHEET_HEIGHT,
  });

  return (
    <>
      <Background
        visible={actionDelay}
        currentOpacity={visible}
        onClick={handleClickBackground}
      />
      <BottomSheetWrapper ref={sheet} height={BOTTOMSHEET_HEIGHT}>
        <HandleWrapper>
          <Handle />
        </HandleWrapper>
        <ContentWrapper ref={content}>{COMPONENT[type]}</ContentWrapper>
      </BottomSheetWrapper>
    </>
  );
});

const fade = (visible: number) => keyframes`
  from {
    opacity: ${visible ? 0 : 1};
  }
  to {
    opacity: ${visible ? 1 : 0};
  }
`;

const Background = styled.div<{ visible: number; currentOpacity: number }>`
  width: 100%;
  height: 100%;

  display: flex;
  position: absolute;
  top: 0;

  ${({ visible, currentOpacity }) =>
    currentOpacity === 0 || currentOpacity === 1
      ? css`
          animation: ${fade(visible)} 300ms forwards;
        `
      : css`
          opacity: ${currentOpacity};
        `}
  background-color: ${colors.Qwhite};
  z-index: 998;
`;

const HandleWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;

  background-color: transparent;
`;

const Handle = styled.div`
  width: 56px;
  height: 4px;
  margin: auto;
  display: flex;

  background-color: ${colors.Qblack};
`;

const BottomSheetWrapper = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height + "px"};

  display: flex;
  flex-direction: column;

  position: fixed;
  bottom: ${({ height }) => -height + "px"}; // -height

  color: ${({ color }) => color};
  background-color: ${colors.Gray3};
  z-index: 999;

  transition: transform 300ms ease-out;
`;

const ContentWrapper = styled.div`
  width: calc(100% - 32px);
  padding: 0 16px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export default BottomSheet;
