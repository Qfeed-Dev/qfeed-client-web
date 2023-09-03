"use client";
import { useRouter } from "next/navigation";
import { Text } from "src/components/common/Text";
import Icon from "src/components/Icon";
import Spacing from "src/components/Spacing";
import { Route } from "src/constants/Route";
import { QuestionItem } from "src/models/questions";
import { getAppStateColor } from "src/utils/colorGenerate";
import styled from "styled-components";
import { colors } from "styles/theme";

interface Props {
    idx: number;
    data: QuestionItem;
}

const QfeedFrame = ({ idx, data }: Props) => {
    const router = useRouter();
    const imageurl = data.backgroundImage;

    const writeDay = new Date(data.createdAt);
    const today = new Date();

    const pastTime = Math.round(
        (today.getTime() - writeDay.getTime()) / (1000 * 60 * 60)
    );

    const handleClickFrame = () => {
        // router.push(Route.QUESTION());
        router.push(`${Route.QUESTION()}/${idx}`);
    };

    return (
        <QfeedFrameWrapper
            onClick={handleClickFrame}
            repeatbackgroundcolor={
                data.isViewed
                    ? colors.light_gray3
                    : colors[getAppStateColor(idx)]
            }
        >
            <div style={{ padding: 3, overflow: "hidden" }}>
                <QfeedFrameInner
                    imageurl={imageurl}
                    backgroundcolor={
                        data.isViewed
                            ? colors.light_gray3
                            : colors[getAppStateColor(idx)]
                    }
                >
                    <Text
                        typo="Headline2b"
                        color={imageurl ? "light_qwhite" : "light_qblack"}
                    >
                        {data.title}
                    </Text>
                    <Spacing size={4} />
                    <Text
                        typo="Caption1r"
                        color={imageurl ? "light_qwhite" : "light_qblack"}
                    >
                        {pastTime}시간 전
                    </Text>
                    <Spacing size={27} />
                    <CountWrapper>
                        <div style={{ margin: "auto 0" }}>
                            <Text
                                typo="Subtitle1b"
                                color={
                                    imageurl ? "line_white_50" : "light_qblack"
                                }
                            >
                                {data.choiceCount}명 응답
                            </Text>
                        </div>
                    </CountWrapper>
                </QfeedFrameInner>
            </div>
            {data.isViewed ? undefined : (
                <QFeedWrapper>
                    {imageurl ? (
                        <Icon icon="QFeedImage" fill={getAppStateColor(idx)} />
                    ) : (
                        <Icon icon="QFeedImage2" />
                    )}
                </QFeedWrapper>
            )}
        </QfeedFrameWrapper>
    );
};

const QfeedFrameWrapper = styled.div<{ repeatbackgroundcolor: any }>`
    width: 100%;
    height: fit-content;
    position: relative;
    border-radius: 10px;
    background-color: ${({ repeatbackgroundcolor }) => repeatbackgroundcolor};
`;

const QfeedFrameInner = styled.div<{ imageurl: any; backgroundcolor: any }>`
    padding: 28px 20px;
    overflow: hidden;
    text-align: left;

    border-radius: 10px;
    color: ${({ imageurl }) =>
        imageurl ? colors.light_qwhite : colors.light_qblack};
    background-color: ${({ imageurl }) =>
        imageurl ? colors.light_qblack : null};

    &::before {
        content: "";
        border-radius: 10px;
        background-color: ${({ imageurl, backgroundcolor }) =>
            imageurl ? null : backgroundcolor};
        background-image: url(${({ imageurl }) => imageurl});
        background-size: cover;
        background-position: center;
        opacity: 0.5;
        position: absolute;
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
        filter: ${({ backgroundcolor }) =>
            backgroundcolor === colors.light_gray3
                ? "grayscale(100%)"
                : "grayscale(0%)"};
    }

    div {
        position: relative;
    }
`;

const CountWrapper = styled.div`
    height: 36px;
    display: flex;
`;

const QFeedWrapper = styled.div`
    position: absolute;
    right: 12px;
    bottom: 28px;
`;

export default QfeedFrame;
