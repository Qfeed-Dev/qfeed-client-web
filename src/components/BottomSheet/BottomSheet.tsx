"use client";
import { forwardRef } from "react";
import useBottomSheet from "src/hooks/useBottomSheet";
import { useAppDispatch, useAppSelector } from "src/hooks/useReduxHooks";
import {
    changeAction,
    changeVisible
} from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import styled, { css, keyframes } from "styled-components";
import { colors, KeyOfColor, repeatBackgroundColor } from "styles/theme";
import ChattingCoin from "./children/ChattingCoin";
import Coin from "./children/Coin";
import Friend from "./children/Friend";
import Report from "./children/Report";
import ReportFriend from "./children/ReportFriend";
import Hint from "./children/Hint";

interface Props {
    children?: any;
}

const COMPONENT_HEIGHT: any = {
    report: 540 + 30,
    reportFriend: 331,
    coin: 324 + 30,
    friend: 325 + 60,
    chattingCoin: 376,
    hint: 376
};
const COMPONENT: any = {
    report: <Report />,
    reportFriend: <ReportFriend />,
    coin: <Coin />,
    friend: <Friend />,
    chattingCoin: <ChattingCoin />,
    hint: <Hint />
};

const BottomSheet = forwardRef(function Div(
    { children, ...props }: Props,
    ref
) {
    const dispatch = useAppDispatch();
    const { type, visible, actionDelay, selectedIdx } = useAppSelector(
        (state) => state.bottomSheet
    );
    const BOTTOMSHEET_HEIGHT = COMPONENT_HEIGHT[type];

    const handleMove = (move: number) => {
        if (move)
            dispatch(
                changeVisible({
                    type: "bottomSheet",
                    value: move
                })
            );
        else
            dispatch(
                changeVisible({
                    type: "bottomSheet",
                    value: move
                })
            );
    };

    const handleClickBackground = () => {
        dispatch(
            changeAction({
                type: "bottomSheet",
                value: false
            })
        );
        sheet.current!.style.setProperty("transform", `translateY(-${0}px)`);
        setTimeout(() => {
            dispatch(
                changeVisible({
                    type: "bottomSheet",
                    value: 0
                })
            );
        }, 300);
    };

    const { sheet, content } = useBottomSheet({
        visible,
        handleClickBackground,
        handleMove,
        BOTTOMSHEET_HEIGHT
    });

    return (
        <>
            <Background
                actionDelay={actionDelay}
                visible={visible}
                onClick={handleClickBackground}
            />
            <BottomSheetWrapper
                ref={sheet}
                actionDelay={actionDelay}
                visible={visible}
                height={BOTTOMSHEET_HEIGHT}
                selectedIdx={selectedIdx}
                backgroundColor={
                    type === "coin" ||
                    type === "chattingCoin" ||
                    type === "hint"
                        ? "light_gray3"
                        : "light_gray0"
                }
            >
                <HandleWrapper>
                    <Handle
                        selectedIdx={selectedIdx}
                        backgroundColor={
                            type === "coin" ||
                            type === "chattingCoin" ||
                            type === "hint"
                                ? "light_gray1"
                                : "light_gray1"
                        }
                    />
                </HandleWrapper>
                <ContentWrapper ref={content}>{COMPONENT[type]}</ContentWrapper>
            </BottomSheetWrapper>
        </>
    );
});

const fade = (actionDelay: number) => keyframes`
  from {
    opacity: ${actionDelay ? 0 : 1};
  }
  to {
    opacity: ${actionDelay ? 1 : 0};
  }
`;

const slide = (actionDelay: number, height: number) => keyframes`
  from {
    transform: translateY(${actionDelay ? 0 : -height + "px"});
  }
  to {
    transform: translateY(${actionDelay ? -height + "px" : 0});
  }
`;

const Background = styled.div<{
    actionDelay: number;
    visible: number;
}>`
    width: 100%;
    height: 100%;

    display: flex;
    position: absolute;
    top: 0;

    ${({ actionDelay, visible }) =>
        visible === 0 || visible === 1
            ? css`
                  animation: ${fade(actionDelay)} 300ms forwards;
              `
            : css`
                  opacity: ${visible};
              `}
    background-color: ${colors.line_black_50};
    z-index: 998;
`;

const HandleWrapper = styled.div`
    width: 100%;
    height: 20px;
    display: flex;

    background-color: transparent;
`;

const Handle = styled.div<{ selectedIdx: number; backgroundColor: KeyOfColor }>`
    width: 73px;
    height: 4px;
    margin: auto;
    display: flex;

    background-color: ${({ selectedIdx, backgroundColor }) =>
        selectedIdx !== -1
            ? colors["light_qwhite"]
            : // colors[repeatBackgroundColor[selectedIdx % 12]]
              colors[backgroundColor]};
`;

const BottomSheetWrapper = styled.div<{
    height: number;
    actionDelay: number;
    visible: number;
    selectedIdx: number;
    backgroundColor: KeyOfColor;
}>`
    width: 100%;
    height: ${({ height }) => height + "px"};

    display: flex;
    flex-direction: column;

    position: fixed;
    bottom: ${({ height }) => -height + "px"}; // -height

    color: ${({ color }) => color};
    border-radius: 10px 10px 0 0;
    background-color: ${({ selectedIdx, backgroundColor }) =>
        selectedIdx !== -1
            ? colors["light_qwhite"]
            : // colors[repeatBackgroundColor[selectedIdx % 12]]
              colors[backgroundColor]};
    z-index: 999;

    transition: transform 300ms ease-out;

    ${({ height, actionDelay, visible }) =>
        visible === 1
            ? css`
                  animation: ${slide(actionDelay, height)} 300ms forwards;
              `
            : css``}
`;

const ContentWrapper = styled.div`
    width: 100%;
    padding: 0 16px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
`;

export default BottomSheet;
