"use client";
import { colors } from "styles/theme";
import styled, { css } from "styled-components";
import { match } from "ts-pattern";

interface Props {
    type?: string;
    horizonal?: boolean;
    size?: number;
}

const Hr = ({ horizonal = false, type = "default", size = 1 }: Props) => {
    return (
        <HrWrapper
            $horizonal={horizonal}
            size={size}
            backgroundcolor={match(type)
                .with("primary", () => colors.light_qwhite)
                .with("default", () => colors.line_black_5)
                .otherwise(() => colors.light_qwhite)}
        />
    );
};

const HrWrapper = styled.hr<{
    $horizonal: boolean;
    size: number;
    backgroundcolor: any;
}>`
    ${({ $horizonal, size }) =>
        $horizonal
            ? css`
                  width: ${size}px;
                  height: 100%;
              `
            : css`
                  width: 100%;
                  height: ${size}px;
              `}
    margin: 0;
    padding: 0;
    border: 0;
    background-color: ${({ backgroundcolor }) => backgroundcolor};
`;

export default Hr;
