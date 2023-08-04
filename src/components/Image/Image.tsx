"use client";
import { styled } from "styled-components";
import { match } from "ts-pattern";

interface Props {
    src: any;
    type: string;
    size?: number;
    height?: number;
    grayscale?: number;
}

const Image = ({ src, type = "default", size, height, grayscale }: Props) => {
    return (
        <ImageWrapper
            src={src}
            width={match(type)
                .with("home", () => "100%")
                .with("default", () => size)
                .exhaustive()}
            height={match(type)
                .with("home", () => (height ? height : "100%"))
                .with("default", () => size)
                .exhaustive()}
            ratio={match(type)
                .with("home", () => "auto")
                .with("default", () => 1)
                .exhaustive()}
            radius={match(type)
                .with("home", () => "10px")
                .with("default", () => "999px")
                .exhaustive()}
            style={{ filter: `grayscale(${grayscale}%)` }}
        />
    );
};

const ImageWrapper = styled.img<{
    ratio: number;
    radius: number;
}>`
    margin: auto;

    border-radius: 50%;

    aspect-ratio: ${({ ratio }) => ratio};
    border-radius: ${({ radius }) => radius};
    object-fit: cover;
`;

export default Image;
