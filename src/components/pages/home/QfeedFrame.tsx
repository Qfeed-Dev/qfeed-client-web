"use client";
import { Text } from "src/components/common/Text";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import useDisplaySize from "src/hooks/useDisplaySize";
import styled from "styled-components";
import { colors, repeatBackgroundColor, typo } from "styles/theme";

interface Props {
    idx: number;
    data: any;
    onClick: () => void;
}

const QfeedFrame = ({ idx, data, onClick }: Props) => {
    const { width } = useDisplaySize();
    const imageUrl = "https://i.ibb.co/0Z6FNN7/60pt.png";
    // const imageUrl = null;

    return (
        <QfeedFrameWrapper
            onClick={onClick}
            repeatBackgroundColor={repeatBackgroundColor[idx]}
        >
            <div style={{ padding: 3, overflow: "hidden" }}>
                {/* <ImageWrapper>
                    <Image
                        type="home"
                        src="https://i.ibb.co/0Z6FNN7/60pt.png"
                        // height={"100%"}
                    />
                </ImageWrapper> */}
                <QfeedFrameInner
                    imageUrl={imageUrl}
                    backgroundColor={repeatBackgroundColor[idx]}
                >
                    <Text
                        typo="Headline2b"
                        color={imageUrl ? "light_qwhite" : "light_qblack"}
                    >
                        {data.title}
                    </Text>
                    <Spacing size={4} />
                    <Text
                        typo="Caption1r"
                        color={imageUrl ? "light_qwhite" : "light_qblack"}
                    >
                        {data.title}
                    </Text>
                    <Spacing size={27} />
                    <CountWrapper>
                        <div style={{ margin: "auto 0" }}>
                            <Text
                                typo="Subtitle1b"
                                color={
                                    imageUrl ? "light_qwhite" : "light_qblack"
                                }
                            >
                                {data.answer}명 응답
                            </Text>
                        </div>
                    </CountWrapper>
                </QfeedFrameInner>
            </div>
        </QfeedFrameWrapper>
    );
};

const QfeedFrameWrapper = styled.div<{ repeatBackgroundColor: any }>`
    height: calc(100% + 20px);
    // position: relative;
    border-radius: 10px;
    background-color: ${({ repeatBackgroundColor }) => repeatBackgroundColor};
`;

const QfeedFrameInner = styled.div<{ imageUrl: any; backgroundColor: any }>`
    padding: 28px 20px;
    overflow: hidden;

    border-radius: 10px;
    color: ${({ imageUrl }) =>
        imageUrl ? colors.light_qwhite : colors.light_qblack};
    background-color: ${({ imageUrl }) =>
        imageUrl ? colors.light_qblack : null};

    &::before {
        content: "";
        border-radius: 10px;
        background-color: ${({ imageUrl, backgroundColor }) =>
            imageUrl ? null : backgroundColor};
        background-image: url(${({ imageUrl }) => imageUrl});
        background-size: cover;
        background-position: center;
        opacity: 0.5;
        position: absolute;
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
    }

    div {
        position: relative;
    }
`;

const CountWrapper = styled.div`
    height: 36px;
    display: flex;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 6px;

    opacity: 0.5;
    position: absolute;
    background-color: ${colors.light_qwhite};
`;

export default QfeedFrame;
