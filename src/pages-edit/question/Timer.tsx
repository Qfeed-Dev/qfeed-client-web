"use client";
import { colors } from "styles/theme";
import styled from "styled-components";

export default function Timer() {
    return <TimerWrapper></TimerWrapper>;
}

const TimerWrapper = styled.div`
    width: 240px;
    height: 90px;
    margin: auto;

    background-color: ${colors.light_qwhite};
`;

const Menu = styled.div`
    //   width: 40px;
    margin: auto 0;
    text-align: center;
`;
