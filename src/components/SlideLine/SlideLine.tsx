"use client";
import styled, { keyframes } from "styled-components";
import { colors } from "styles/theme";

export default function SlideLine({ percentage }: any) {
    return (
        <SlideLineWrapper>
            <SlideLineBack />
            <SlideLineBar percentage={percentage} />
        </SlideLineWrapper>
    );
}

const SlideLineWrapper = styled.div`
    width: 100%;
    height: 4px;

    position: absolute;
    top: 50px;
    left: 0;
    // background-color: ${colors.light_qwhite};
    z-index: 800;
`;

const move = (prePercentage: any, percentage: any) => keyframes`
  from {
    width: ${prePercentage}%;
  }
  to {
    width: ${percentage}%;
  }
`;

const SlideLineBack = styled.div`
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 1px;
    background: ${colors.light_gray3};
`;

const SlideLineBar = styled.div<{ percentage: any }>`
    height: 4px;
    position: absolute;
    bottom: 1px;
    background: ${colors.light_qwhite};
    z-index: 999;
    animation: ${(props) => move(props.percentage[0], props.percentage[1])} 0.3s
        forwards;
`;
