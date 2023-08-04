"use client";
import { Text } from "src/components/common/Text";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import useDisplaySize from "src/hooks/useDisplaySize";
import styled from "styled-components";
import { colors, repeatColor, typo } from "styles/theme";

interface Props {
    idx: number;
    data: any;
    onClick: () => void;
}

const QfeedFrame = ({ idx, data, onClick }: Props) => {
    const { width } = useDisplaySize();

    return (
        <QfeedFrameWrapper onClick={onClick} repeatColor={repeatColor[idx]}>
            <div style={{ padding: 3, overflow: "hidden" }}>
                {/* <ImageWrapper>
                    <Image
                        type="home"
                        src="https://i.ibb.co/0Z6FNN7/60pt.png"
                    />
                </ImageWrapper> */}
                <QfeedFrameInner>
                    <Text typo="Headline2b" color="light_qwhite">
                        {data.title}
                    </Text>
                    <Spacing size={4} />
                    <Text typo="Caption1r" color="light_qwhite">
                        {data.title}
                    </Text>
                    <Spacing size={27} />
                    <CountWrapper>
                        <div style={{ margin: "auto 0" }}>
                            <Text typo="Subtitle1b" color="light_qwhite">
                                {data.answer}명 응답
                            </Text>
                        </div>
                    </CountWrapper>
                </QfeedFrameInner>
            </div>
        </QfeedFrameWrapper>
    );
};

const QfeedFrameWrapper = styled.div<{ repeatColor: any }>`
    height: calc(100% + 20px);
    // position: relative;
    border-radius: 10px;
    background-color: ${({ repeatColor }) => repeatColor};
`;

const QfeedFrameInner = styled.div`
    padding: 28px 20px;
    overflow: hidden;
    border-radius: 10px;
    background-color: black;
`;

const ImageWrapper = styled.div`
    position: absolute;
`;

const CountWrapper = styled.div`
    height: 36px;
    display: flex;
`;

export default QfeedFrame;
