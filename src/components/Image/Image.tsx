"use client";
import styled from "styled-components";
import { colors } from "styles/theme";
import { match } from "ts-pattern";

interface Props {
    src: any;
    type: string;
    size?: number;
    height?: number;
    grayscale?: number;
}

const Image = ({ src, type = "default", size, height, grayscale }: Props) => {
    return src ? (
        <ImageWrapper
            src={src}
            width={match(type)
                .with("background", () => "100%")
                .with("default", () => size)
                .otherwise(() => "100%")}
            height={match(type)
                .with("background", () => (height ? height + "px" : "100%"))
                .with("default", () => size)
                .otherwise(() => "100%")}
            ratio={match(type)
                .with("background", () => "auto")
                .with("default", () => 1)
                .otherwise(() => "auto")}
            radius={match(type)
                .with("background", () => "0")
                .with("default", () => "999px")
                .otherwise(() => "0")}
            style={{ filter: `grayscale(${grayscale}%)` }}
        />
    ) : (
        <NonImage />
    );
};

const ImageWrapper = styled.img<{
    ratio: any;
    radius: any;
}>`
    margin: auto;
    border-radius: 50%;

    aspect-ratio: ${({ ratio }) => ratio};
    border-radius: ${({ radius }) => radius};
    object-fit: cover;
`;

const NonImage = styled.div`
    width: 35px;
    height: 35px;
    margin: auto;
    border-radius: 50%;
    background: ${colors.light_gray2};
`;

export default Image;
